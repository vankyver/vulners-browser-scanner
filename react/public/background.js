const isChrome = (/google/i).test(navigator.vendor);
const browser = isChrome ? chrome : browser;

const LS_KEY = 'vulners-chrome-scanner';
const lsData = localStorage.getItem(LS_KEY);

const LS_KEY_STAT = 'vulners-chrome-scanner-stat';
const lsStat = localStorage.getItem(LS_KEY_STAT);

const rules = [];
let data  = lsData ? JSON.parse(lsData) : {};
let stat  = lsStat ? JSON.parse(lsStat) : {vulnerable: 0, scanned: 0};

// Rewrite fetch to make it with minimal timeout between requests
const REQUEST_TIMEOUT = 300;
fetchThrottled = throttled(fetchThrottled, REQUEST_TIMEOUT);

const RULES_URL = 'https://vulners.com/api/v3/burp/rules/?utm_source=scanner&utm_medium=chromePlugin&utm_campaign=scan';
const SCAN_URL  = "https://vulners.com/api/v3/burp/software/?utm_source=scanner&utm_medium=chromePlugin&utm_campaign=scan";

const DOMAIN_REGEX = /http(?:s)?:\/\/(?:[\w-]+\.)*([\w-]{1,63})(?:\.(?:\w{3}|\w{2}))(?:$|\/)/i;

const COLORS = ['#00e676','#76ff03','#c6ff00','#c6ff00','#ffee58','#ffc107','#ff9800','#f57c00','#ef6c00','#e65100'];

const settings = {
    showOnlyVulnerable: true,
    showAllDomains: false
};

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
browser.webRequest.onCompleted.addListener(findFingerprints, { urls : ["http://*/*", "https://*/*"] }, ["responseHeaders"]);


/**
 * Update extension icon with status code badge
 */
browser.tabs.onUpdated.addListener(function (tabId, info, tab) {
    if (info.status === "complete") {

        let host = new URL(tab.url).host;
        let vlns = data[host];

        if (vlns) {
            //set badge for status code if different than 200 OK
            Object.keys(vlns).length && browser.browserAction.setBadgeText({
                text : String(Object.keys(vlns).length),
                tabId: tabId
            });
        }
        // Re-enable the button
        browser.browserAction.enable(tabId);

    } else if (info.status === "loading") {
        //disable the button
        browser.browserAction.disable(tabId);
    }
});


/**
 * Message listeners
 */
browser.runtime.onMessage.addListener((request, sender, sendResponse) => {
    console.log(request);
    switch (request.action) {
        case 'show_vulnerabilities':
            sender.id === browser.runtime.id && browser.tabs.get(request.tab_id, tab => {
                sendResponse({data, stat, settings})
            });
            break;
        case 'open_link':
            return  browser.tabs.create({active: true, url: request.url});
        case 'clear_data':
            data = {};
            stat = {vulnerable: 0, scanned: 0};
            localStorage.setItem(LS_KEY, data);
            localStorage.setItem(LS_KEY_STAT, stat);
            browser.tabs.get(request.tab_id, tab => {
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
    let host = url && new URL(url[0]).host;

    if (!url) return;

    let hs = response.responseHeaders.map(r => r.name + ":" + r.value).join('\n');
    for (let rule of rules) {
        let matched = hs.match(rule.jsRegex);

        if (!matched) continue;
        if (data[host] && (data[host][rule.name] || data[host][rule.alias])) continue;
        if (!data[host]) {
            data[host] = {}
        }

        let version = matched[1];

        if (!data[host][rule.name]) {
            data[host][rule.name] = {
                software: rule.name,
                version: version,
                vulnerabilities: []
            }
        }

        console.log('[Fetch] ', host, {software: rule.name || rule.alias, version: matched[1], type: rule.type});
        fetchThrottled(host, rule, version)
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
            data[host][rule.name]['vulnerabilities'] = items
                .map(i => {
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

            // Add max score value of soft vulnerability
            let softVulns = data[host][rule.name]['vulnerabilities'];
            data[host][rule.name]['score'] = softVulns.reduce((a,v) => a > v.score ? a : v.score, 0);
            data[host][rule.name]['scoreColor'] = getScoreColor(data[host][rule.name]['score']);

            let domainNames = Object.keys(data);
            stat['scanned'] = domainNames.length;
            stat['vulnerable'] = domainNames.filter( name => Object.keys(data[name]).find(soft => data[name][soft].score)).length;

            localStorage.setItem(LS_KEY, JSON.stringify(data));
            localStorage.setItem(LS_KEY_STAT, JSON.stringify(stat));
        });
}

const getScoreColor = score => COLORS[Math.round(score) - 1 || 0];

const extractDomain = url => url.url.match(DOMAIN_REGEX);

/**
 * Pure throttle implementation
 **/
function throttled(fn, timeout) {
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

browser.browserAction.setBadgeBackgroundColor({color: '#d35400'});