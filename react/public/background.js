const LS_KEY = 'vulners-chrome-scanner';
const lsData = localStorage.getItem(LS_KEY);

const LS_KEY_STAT = 'vulners-chrome-scanner-stat';
const lsStat = localStorage.getItem(LS_KEY_STAT);

const LS_KEY_EXTRA_DATA = 'vulners-chrome-scanner-extra-data';
const lsExtraData = localStorage.getItem(LS_KEY_EXTRA_DATA);

const LS_KEY_SETTINGS = 'vulners-chrome-scanner-settings';
const lsSettings = localStorage.getItem(LS_KEY_SETTINGS);

const rules = [];

let data  = lsData ? JSON.parse(lsData) : {};
let stat  = lsStat ? JSON.parse(lsStat) : {vulnerable: 0, scanned: 0};
let extraData = lsExtraData ? JSON.parse(lsExtraData) : [];
let settings = lsSettings ? JSON.parse(lsSettings) : {
    showOnlyVulnerable: true,
    showAllDomains: false,
    doExtraScan: false
};

// Rewrite fetch to make it with minimal timeout between requests
const REQUEST_TIMEOUT = 300;
fetchThrottled = throttled(fetchThrottled, REQUEST_TIMEOUT);

const RULES_URL = 'https://vulners.com/api/v3/burp/rules/?utm_source=scanner&utm_medium=chromePlugin&utm_campaign=scan';
const SCAN_URL  = "https://vulners.com/api/v3/burp/software/?utm_source=scanner&utm_medium=chromePlugin&utm_campaign=scan";

const DOMAIN_REGEX = /http(?:s)?:\/\/(?:[\w-]+\.)*([\w-]{1,63})(?:\.(?:\w{3}|\w{2}))(?:$|\/)/i;
const PUNYCODE_DOMAIN_REGEX = /http(?:s)?:\/\/(([\w-]{1,63})\.([\w-]{8}))(?:$|\/)/i;

const COLORS = ['#00e676','#76ff03','#c6ff00','#c6ff00','#ffee58','#ffc107','#ff9800','#f57c00','#ef6c00','#e65100'];

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
v_browser.webRequest.onCompleted.addListener(findFingerprintsInHeaders, { urls : ["http://*/*", "https://*/*"] }, ["responseHeaders"]);


/**
 * Update extension icon with status code badge
 */
v_browser.tabs.onUpdated.addListener(function (tabId, info, tab) {
    if (info.status === "complete") {
        // Re-enable the button
        v_browser.browserAction.enable(tabId);
        decorateBadge(tab);
    } else if (info.status === "loading") {
        //disable the button
        v_browser.browserAction.disable(tabId);
    }
});

v_browser.tabs.onActivated.addListener(e => {
    v_browser.tabs.get(e.tabId, tab => decorateBadge)
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
        (sLength || vLength) && v_browser.browserAction.setBadgeText({
            text : String(vLength || sLength),
            tabId: tab.id
        });
        v_browser.browserAction.setBadgeBackgroundColor({
            color: host.vulnerable ? '#d35400' : '#00c400'
        });
    }
}


/**
 * Message listeners
 */
v_browser.runtime.onMessage.addListener((request, sender, sendResponse) => {
    console.log(request);
    switch (request.action) {
        case 'show_vulnerabilities':
            sender.id === v_browser.runtime.id && v_browser.tabs.get(request.tab_id, tab => {
                sendResponse({
                    data: Object.values(data),
                    stat,
                    settings,
                    url: extractDomain(tab)})
            });
            break;
        case 'get_regexp':
            return sendResponse(rules);
        case 'open_link':
            return  v_browser.tabs.create({active: true, url: request.url});
        case 'change_settings':
            Object.assign(settings, request.settings);
            localStorage.setItem(LS_KEY_SETTINGS, JSON.stringify(settings));
            return sendResponse({settings});
        case 'clear_data':
            data = {};
            extraData = [];
            stat = {vulnerable: 0, scanned: 0};
            localStorage.setItem(LS_KEY, data);
            localStorage.setItem(LS_KEY_STAT, stat);
            localStorage.setItem(LS_KEY_EXTRA_DATA, extraData);
            return v_browser.tabs.get(request.tab_id, tab => {
                sendResponse({tab, data, stat})
            });
        case 'match':
            return request.matches.forEach(m => addMatchedFingerprint(m.url, m.rule, m.version))
    }
    return true;
});

/**
 * find software fingerprints by provided response Headers
 */
function findFingerprintsInHeaders (response, tabId, callback) {
    let url = extractDomain(response);

    if (!url) return;

    if (settings.doExtraScan && !extraData.includes(response.url) && STATIC_RESPONSE_TYPES.includes(response.type)) {
        console.log('[SCAN STATIC] -> ', response.type, response.url);

        extraData.push(response.url);
        localStorage.setItem(LS_KEY_EXTRA_DATA, JSON.stringify(extraData));

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

    console.log('[Add] ', url, {software: name || alias, version, type: type});

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
    console.log('[Fetch] ', host, {software: rule.name || rule.alias, version, type: rule.type});

    fetch(SCAN_URL, {
        method: 'POST',
        mode: 'cors',
        redirect: 'follow',
        headers: new Headers({
            'Content-Type': 'application/json'
        }),
        body: JSON.stringify({
            software: rule.alias,
            version: version,
            type: rule.type
        })
    })
        .then(r => r.json())
        .then(r => {
            let items = r.data.search || [];

            // Add vulnerabilities
            let vulnerabilities = items.map(i => {
                    let s = i._source;
                    console.log('[SOURCE]', "scoreColor", s.cvss.score, getScoreColor(s.cvss.score));
                    return {
                        id: s.id,
                        type: s.type,
                        title: s.title === s.id ? s.description : s.title,
                        score: s.cvss.score,
                        scoreColor: getScoreColor(s.cvss.score),
                        description: s.description
                    }
                })
                .sort((a,b) => b.score - a.score);
            let vulnerable = !!vulnerabilities.length || data[host]['vulnerable'];
            let exploit    = !!vulnerabilities.find(v => v.bulletinFamily === 'exploit');
            let score      = vulnerabilities.reduce((a,v) => a > v.score ? a : v.score, 0);
            let scoreColor = getScoreColor(score);

            let software = Object.assign({}, data[host]['software'], {
                [rule.name]: Object.assign(data[host]['software'][rule.name], {
                    score,
                    scoreColor,
                    vulnerabilities
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

            localStorage.setItem(LS_KEY, JSON.stringify(data));
            localStorage.setItem(LS_KEY_STAT, JSON.stringify(stat));
        });
}

const getScoreColor = score => {
    return COLORS[Math.round(score) - 1 || 0];
};

const extractDomain = url => {
    let domain = url.url.match(DOMAIN_REGEX);
    if (domain) {
        return new URL(domain[0]).host
    } else {
        domain = url.url.match(PUNYCODE_DOMAIN_REGEX);
        return domain && punycode.toUnicode(domain[1]);
    }
};

console.log('[INIT___]')
v_browser.browserAction.setBadgeBackgroundColor({color: '#d35400'});