const LS_KEY = 'vulners-chrome-scanner';
const lsData = localStorage.getItem(LS_KEY);

const LS_KEY_STAT = 'vulners-chrome-scanner-stat';
const lsStat = localStorage.getItem(LS_KEY_STAT);

const LS_KEY_SETTINGS = 'vulners-chrome-scanner-settings';
const lsSettings = localStorage.getItem(LS_KEY_SETTINGS);

const rules = [];

let data  = lsData ? JSON.parse(lsData) : {};
let stat  = lsStat ? JSON.parse(lsStat) : {vulnerable: 0, scanned: 0};
let settings = lsSettings ? JSON.parse(lsSettings) : {
    showOnlyVulnerable: true,
    showAllDomains: false
};

// Rewrite fetch to make it with minimal timeout between requests
const REQUEST_TIMEOUT = 300;
fetchThrottled = throttled(fetchThrottled, REQUEST_TIMEOUT);

const RULES_URL = 'https://vulners.com/api/v3/burp/rules/?utm_source=scanner&utm_medium=chromePlugin&utm_campaign=scan';
const SCAN_URL  = "https://vulners.com/api/v3/burp/software/?utm_source=scanner&utm_medium=chromePlugin&utm_campaign=scan";

const DOMAIN_REGEX = /http(?:s)?:\/\/(?:[\w-]+\.)*([\w-]{1,63})(?:\.(?:\w{3}|\w{2}))(?:$|\/)/i;

const COLORS = ['#00e676','#76ff03','#c6ff00','#c6ff00','#ffee58','#ffc107','#ff9800','#f57c00','#ef6c00','#e65100'];


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
v_browser.webRequest.onCompleted.addListener(findFingerprints, { urls : ["http://*/*", "https://*/*"] }, ["responseHeaders"]);


/**
 * Update extension icon with status code badge
 */
v_browser.tabs.onUpdated.addListener(function (tabId, info, tab) {
    if (info.status === "complete") {

        let host = new URL(tab.url).host;
        let vlns = data[host];

        if (vlns) {
            //set badge for status code if different than 200 OK
            Object.keys(vlns).length && v_browser.browserAction.setBadgeText({
                text : String(Object.keys(vlns).length),
                tabId: tabId
            });
        }
        // Re-enable the button
        v_browser.browserAction.enable(tabId);

    } else if (info.status === "loading") {
        //disable the button
        v_browser.browserAction.disable(tabId);
    }
});


/**
 * Message listeners
 */
v_browser.runtime.onMessage.addListener((request, sender, sendResponse) => {
    console.log(request);
    switch (request.action) {
        case 'show_vulnerabilities':
            console.log('[SHOW VULNS]', data);
            sender.id === v_browser.runtime.id && v_browser.tabs.get(request.tab_id, tab => {
                sendResponse({data, stat, settings, url: extractDomain(tab)})
            });
            break;
        case 'open_link':
            return  v_browser.tabs.create({active: true, url: request.url});
        case 'change_setting':
            Object.assign(settings, request.settings);
            localStorage.setItem(LS_KEY_SETTINGS, JSON.stringify(settings));
            return sendResponse({settings});
        case 'clear_data':
            data = {};
            stat = {vulnerable: 0, scanned: 0};
            localStorage.setItem(LS_KEY, data);
            localStorage.setItem(LS_KEY_STAT, stat);
            v_browser.tabs.get(request.tab_id, tab => {
                sendResponse({tab, data, stat, templates: TEMPLATES})
            });
    }
    return true;
});


/**
 * find software fingerprints by provided response
 */
function findFingerprints (response, tabId, callback) {
    let url = extractDomain(response);

    if (!url) return;

    let hs = response.responseHeaders.map(r => r.name + ":" + r.value).join('\n');
    for (let rule of rules) {
        let matched = hs.match(rule.jsRegex);
        let host = data[url];
        let soft = data[url] && data[url]['software'];

        if (!matched) continue;
        if (soft && (soft[rule.name] || soft[rule.alias]))continue;

        if (!data[url]) {
            data[url] = {
                software:{},
                vulnerable: false
            }
        }

        let version = matched[1];

        data[url]['software'][rule.name] = {
            software: rule.name,
            version: version,
            vulnerabilities: []
        };

        console.log('[Fetch] ', url, {software: rule.name || rule.alias, version: matched[1], type: rule.type});
        fetchThrottled(url, rule, version)
    }
}

function fetchThrottled(host, rule, version) {
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
            let score      = vulnerabilities.reduce((a,v) => a > v.score ? a : v.score, 0);
            let scoreColor = getScoreColor(data[host]['software'][rule.name]['score']);

            // Add max score value of soft vulnerability
            data[host] = Object.assign({}, data[host], {
                vulnerable,
                software: Object.assign(data[host]['software'], {
                    [rule.name]: {
                        score,
                        scoreColor,
                        vulnerabilities
                    }
                })
            });

            let domainNames = Object.keys(data);
            stat = {
                scanned: domainNames.length,
                vulnerable: domainNames.filter( name => Object.keys(data[name]).find(soft => data[name][soft].score)).length
            };

            localStorage.setItem(LS_KEY, JSON.stringify(data));
            localStorage.setItem(LS_KEY_STAT, JSON.stringify(stat));
        });
}

const getScoreColor = score => COLORS[Math.round(score) - 1 || 0];

const extractDomain = url => {
    url = url.url.match(DOMAIN_REGEX);
    return url ? new URL(url[0]).host : null;
};

v_browser.browserAction.setBadgeBackgroundColor({color: '#d35400'});