/**
 * Pure throttle implementation
 **/

const throttled = (fn, timeout) => {
    let task, queue = [];
    let lastTaskTime;

    return function() {
        let args = arguments;
        queue.push(fn);

        function next() {
            if (lastTaskTime && ((new Date().getTime() - lastTaskTime) < timeout)) {
                setTimeout(() => next(), timeout)
            } else {
                lastTaskTime = new Date().getTime();
                task = queue[0];
                queue.shift();
                return task.apply(this, args);
            }
        }
        return next();
    }
}

const storage = chrome.storage.local
const LS_KEY_DATA = 'vulners-chrome-scanner';
const LS_KEY_STAT = 'vulners-chrome-scanner-stat';
const LS_KEY_EXTRA_DATA = 'vulners-chrome-scanner-extra-data';
const LS_KEY_SETTINGS = 'vulners-chrome-scanner-settings';

const rules = [];

let landingSeen = false;
let data, stat, extraData, settings;

storage.get(LS_KEY_DATA, (keys) => {
    try {
        data = JSON.parse(keys[LS_KEY_DATA])
    } catch (e) {
        data = {}
    }
})

storage.get(LS_KEY_STAT, keys => {
    try {
        stat = JSON.parse(keys[LS_KEY_STAT])
    } catch (e) {
        stat = {vulnerable: 0, scanned: 0}
    }
})

storage.get({[LS_KEY_EXTRA_DATA]: {}}, (keys) => {
    try {
        extraData = JSON.parse(keys[LS_KEY_EXTRA_DATA])
    } catch (e) {
        extraData = []
    }
})

storage.get({[LS_KEY_SETTINGS]: {}}, (keys) => {
    try {
        settings = JSON.parse(keys[LS_KEY_SETTINGS])
    } catch (e) {
        settings = {
            showOnlyVulnerable: true,
            showAllDomains: false,
            doExtraScan: true,
            apiKey: '',
            introStep: 0,
            error: ''
        }
    }
})

// Rewrite fetch to make it with minimal timeout between requests
const REQUEST_TIMEOUT = 300;
fetchThrottled = throttled(fetchThrottled, REQUEST_TIMEOUT);

const RULES_URL = 'https://vulners.com/api/v3/burp/rules/?utm_source=scanner&utm_medium=chromePlugin&utm_campaign=scan';
const SCAN_URL  = "https://vulners.com/api/v3/burp/software/?utm_source=scanner&utm_medium=chromePlugin&utm_campaign=scan";

const DOMAIN_REGEX = /http(?:s)?:\/\/(?:[\w-]+\.)*([\w-]{1,63})(?:\.(?:\w{2,18}))(?:$|\/)/i;
const PUNYCODE_DOMAIN_REGEX = /http(?:s)?:\/\/(([\w-]{1,63})\.([\w-]{8,15}))(?:$|\/)/i;

const COLORS = ['#00c400','#00e020','#00f000','#d1ff00','#ffe000','#ffcc00','#ffbc10','#ff9c20','#ff8000','#ff0000'];

const STATIC_RESPONSE_TYPES = ["script", "font", "stylesheet", "other"];

/**
 * Precompile search rules based on list received from server
 */
fetch(RULES_URL)
    .then(r => r.json())
    .then(r => {
        Object.keys(r.data.rules)
            .forEach(ruleName => {
                let rule = r.data.rules[ruleName];
                try {
                    rules.push(Object.assign({
                        name: ruleName,
                        jsRegex: new RegExp(rule.regex)
                    }, rule))
                } catch (e) {
                    console.log(e);
                }
            });
    });


/**
 * Catch page load responses
 */
chrome.webRequest.onCompleted.addListener(findFingerprintsInHeaders, { urls : ["http://*/*", "https://*/*"] }, ["responseHeaders"]);


/**
 * Update extension icon with status code badge
 */
chrome.tabs.onUpdated.addListener(function (tabId, info, tab) {
    if (info.status === "complete") {
        // Re-enable the button
        chrome.action.enable(tabId);
        decorateBadge(tab);
    } else if (info.status === "loading") {
        //disable the button
        chrome.action.disable(tabId);
    }
});

chrome.tabs.onActivated.addListener(e => {
    chrome.tabs.get(e.tabId, tab => decorateBadge(tab))
});

function decorateBadge(tab) {
    let url = new URL(tab.url);
    let host = data[url.host] || data[url.hostname];

    if (host) {
        let software  = Object.keys(host.software);
        let sLength   = software.length;
        let vSoftware = software.filter(s => !!host.software[s].vulnerabilities.length);
        let vLength   = vSoftware.length;

        //set badge for vulnerable status
        (sLength || vLength) && chrome.action.setBadgeText({
            text : String(vLength || sLength),
            tabId: tab.id
        });
        chrome.action.setBadgeBackgroundColor({
            color: host.vulnerable ? '#d35400' : '#00c400'
        });
        chrome.action.setTitle({
            title: host.vulnerable ?
                `Host has ${vLength} vulnerabilities` :
                sLength ? `Found ${sLength} software fingerprints` : `Host not vulnerable`})
    }
}

function getCurrentTab() {
    return chrome.tabs.query({ active: true, currentWindow: true })
}

/**
 * Message listeners
 */
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    switch (request.action) {
        case 'show_vulnerabilities':
            sender.id === chrome.runtime.id && getCurrentTab().then(tabs => {
                try {
                    sendResponse({ data: Object.values(data),  stat,  settings,  landingSeen,  url: extractDomain(tabs[0] ? tabs[0].url : '')})
                } catch (e) {
                    console.error('[ACTION] show vulnerabilities', e)
                }
            });
            break;
        case 'load_settings':
            sender.id === chrome.runtime.id && getCurrentTab().then(tabs => {
                try {
                    sendResponse({settings})
                } catch (e) {
                    console.error('[ACTION] show vulnerabilities', e)
                }
            });
            break;
        case 'get_regexp':
            return sendResponse(rules);
        case 'open_link':
            return  chrome.tabs.create({active: true, url: request.url});
        case 'change_settings':
            Object.assign(settings, request.settings);
            storage.set({[LS_KEY_SETTINGS]: JSON.stringify(settings)});
            return sendResponse({settings});
        case 'landing_seen':
            return sendResponse(landingSeen = true);
        case 'clear_data':
            data = {};
            extraData = [];
            landingSeen = false;
            stat = {vulnerable: 0, scanned: 0};
            settings.error = '';
            storage.set({
                [LS_KEY_DATA]: data,
                [LS_KEY_STAT]: stat,
                [LS_KEY_EXTRA_DATA]: extraData,
                [LS_KEY_SETTINGS]: settings,
            })
            return getCurrentTab().then(tabs => {
                sendResponse({tab: tabs[0], data, stat})
            });
        case 'match':
            return request.matches.forEach(m => addMatchedFingerprint(m.url, m.rule, m.version))
        case 'validate_key':
            validateKey(request.apiKey).then((r) => {
                sendResponse({...r.data})
            })
            break
    }
    return true // https://github.com/mozilla/webextension-polyfill/issues/130#issuecomment-484772327
});

/**
 * Message listeners
 */
chrome.runtime.onMessageExternal.addListener((request, sender, sendResponse) => {
    if ((sender.origin !== "https://vulners.com") && (sender.origin !== "http://127.0.0.1:9001")) {
        return console.error('[EXTERNAL MESSAGE] forbidden sender', sender)
    }
    switch (request.action) {
        case 'set_key':
            if (!request.apiKey) {
                return console.error('[SET API KEY] key can not be null', request)
            }
            storage.get({[LS_KEY_SETTINGS]: {}}, (keys) => {
                try {
                    let newSettings = JSON.parse(keys[LS_KEY_SETTINGS])
                    newSettings.apiKey = request.apiKey
                    storage.set({[LS_KEY_SETTINGS]: JSON.stringify(newSettings)});
                    sendResponse({success: true})
                    settings = newSettings
                } catch (e) {
                    console.error('[SET API KEY]', e)
                    sendResponse({success: false})
                }
            })
            break
        default:
            console.log('[EXTERNAL MESSAGE] empty action', request)
    }
    return true
})


/**
 * find software fingerprints by provided response Headers
 */
function findFingerprintsInHeaders (response) {
    let url = extractDomain(response.url);

    if (!url) return;

    if (settings.doExtraScan && !extraData.includes(response.url) && STATIC_RESPONSE_TYPES.includes(response.type)) {

        extraData.push(response.url);
        storage.set({[LS_KEY_EXTRA_DATA]: JSON.stringify(extraData)});

        findFingerprintsInStatic(url, response.url);
    }

    let hs = response.responseHeaders.map(r => r.name + ": " + r.value).join('\n');
    findFingerprints(url, hs);
}


/**
 * Make second request to extract fingerprints from content of static files
 */
function findFingerprintsInStatic(url, checkUrl) {
    fetch(checkUrl)
        .then(r => r.text())
        .then(r => findFingerprints(url, checkUrl + r))
}

/**
 * Find fingerprints in provided content
 * @param url
 * @param content
 */
function findFingerprints(url, content) {
    for (let rule of rules) {
        let matched = content.match(rule.jsRegex);
        let soft = data[url] && data[url]['software'];

        if (!matched) continue;
        if (soft && (soft[rule.name] || soft[rule.alias])) continue;

        addMatchedFingerprint(url, rule, matched[1])
    }
}

function addMatchedFingerprint(url, rule, version) {
    let {name, alias, type} = rule;

    if (!data[url]) {
        data[url] = {
            name: url,
            software:{},
            vulnerable: false
        }
    }

    data[url]['software'][name] = {
        software: name,
        version: version,
        vulnerabilities: []
    };

    fetchThrottled(url, rule, version)
}

function fetchThrottled(host, rule, version) {
    if (!version) {
        return addVulnerabilities(host, rule, version, [])
    }
    fetch(SCAN_URL, {
        method: 'POST',
        mode: 'cors',
        redirect: 'follow',
        headers: new Headers({
            'Content-Type': 'application/json',
            'User-Agent': 'Vulners-Web-Extension/3.0'
        }),
        body: JSON.stringify({
            software: rule.alias,
            version: version,
            type: rule.type,
            apiKey: settings.apiKey
        })
    })
        .then(r => r.json())
        .then(r => {
            settings.error = ''
            if (r.result === 'error') {
                console.error('[ERROR]', r)
                processError(host, r.data)
            } else {
                addVulnerabilities(host, rule, version, r.data.search || [])
            }
        });
}

function processError(host, error) {
    switch (error.errorCode){
        case 157:
            settings.error = 'ERROR: Check your Api Key. Follow vulners.com/license to update it'
            break
        default:
            console.error('[ERROR]', error)
    }
}

function addVulnerabilities(host, rule, version, vulnerabilities) {
    // Add vulnerabilities
    vulnerabilities = vulnerabilities.map(i => {
        let s = i._source;
        return {
            id: s.id,
            type: s.type,
            title: s.title === s.id ? s.description : s.title,
            score: getScore(s),
            scoreColor: getScoreColor(s.cvss.score),
            description: s.description
        }
    })
        .sort((a,b) => b.score - a.score);
    let vulnerable = !!vulnerabilities.length || data[host]['vulnerable'];
    let exploit    = !!vulnerabilities.find(v => ['exploitdb', 'githubexploit', 'packetstorm'].indexOf(v.type) >=0 );
    let score      = vulnerabilities.reduce((a,v) => a > v.score ? a : v.score, 0);
    let scoreColor = getScoreColor(score);

    let software = Object.assign({}, data[host]['software'], {
        [rule.name]: Object.assign(data[host]['software'][rule.name], {
            score,
            scoreColor,
            vulnerabilities,
            exploit
        })
    });

    // Add max score value of soft vulnerability
    data[host] = Object.assign({}, data[host], {
        vulnerable,
        software,
        exploit
    });

    let domainNames = Object.keys(data);
    stat = {
        scanned: domainNames.length,
        vulnerable: domainNames.filter( name => !!Object.keys(data[name]['software']).find(soft => data[name]['software'][soft].score)).length
    };

    storage.set({
        [LS_KEY_DATA]: JSON.stringify(data),
        [LS_KEY_STAT]: JSON.stringify(stat)
    })

    getCurrentTab().then(tabs => {
        if (host === extractDomain(tabs[0].url)) {
            decorateBadge(tabs[0])
        }
    })
}

function validateKey(apiKey, cb) {
    return fetch('https://vulners.com/api/v3/apiKey/valid/', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({keyID: apiKey})
    }).then(r => r.json())
}

const getScore = (item) => Math.max((item.cvss && item.cvss.score || 0 ) , (item.enchantments && item.enchantments.score ? (item.enchantments.score.value) : 0));

const getScoreColor = score => {
    return COLORS[Math.round(score) - 1 || 0];
};

const extractDomain = url => {
    let domain = url.match(DOMAIN_REGEX);
    if (domain) {
        return new URL(domain[0]).host
    } else {
        domain = url.match(PUNYCODE_DOMAIN_REGEX);
        return domain && punycode.toUnicode(domain[1]);
    }
};

chrome.action.setBadgeBackgroundColor({color: '#d35400'});