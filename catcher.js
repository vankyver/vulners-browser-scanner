/**
 * Global vars & defs
 * Data: {tab_id: {request_id: [(object)], view: (string), statusCode: (int)}}
 */
const LS_KEY = 'vulners-chrome-scanner';
const lsData = localStorage.getItem(LS_KEY);
const data        = lsData ? JSON.parse(lsData) : {},
    default_msg = '<h4>Refresh the page to catch the headers.</h4>',
    error_msg   = '<h4>This tab is not supported.</h4>';

const RULES_URL = 'https://vulners.com/api/v3/burp/rules';
const SCAN_URL = "https://vulners.com/api/v3/burp/software/";
const SCAN_MODEL = {
    software: '',
    version: '',
    type: ''
};
const RULE_MODEL = {
    type: '',
    alias: '',
    regex: '',
    jsRegex: ''
};

const rules = [];

fetch('https://vulners.com/api/v3/burp/rules')
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



chrome.browserAction.setBadgeBackgroundColor({color: '#d35400'});

chrome.webRequest.onCompleted.addListener(function (details) {

        if (typeof data[details.tabId] == 'undefined' || typeof data[details.tabId][details.requestId] == 'undefined') {
            // Init the entry for the tab && request id
            // (Bonus: this also delete previous & outdated request entries. Did it by accident lol)
            data[details.tabId] = {
                [details.requestId]: [],
                statusCode         : details.statusCode,
                view               : default_msg
            };

            // Fallback, fill with the only data available
            data[details.tabId][details.requestId].push(details);
        }

        // Render popup html with parsed info
        data[details.tabId].view = renderPopup(data[details.tabId][details.requestId], details.tabId);

    },
    {
        urls : ["http://*/*", "https://*/*"],
    },
    ["responseHeaders"]
);

/**
 * Update extension icon with status code badge
 */
chrome.tabs.onUpdated.addListener(function (tabId, info, tab) {
    if (info.status == "complete") {

        let vlns = data[tab.url];

        //set badge for status code if different than 200 OK
        Object.keys(vlns).length && chrome.browserAction.setBadgeText({
            text : String(Object.keys(vlns).length),
            tabId: tabId
        });
        // Re-enable the button
        chrome.browserAction.enable(tabId);

        // Mark unsuported tabs
        if (!data[tabId]) data[tabId] = {view: error_msg};

    } else if (info.status == "loading") {
        //disable the button
        chrome.browserAction.disable(tabId);
    }
});

/**
 * Listen for close event and clean tab data.
 */
chrome.tabs.onRemoved.addListener(function (id, info) {
    delete data[id];
});


/**
 * Sneaky bastard..
 * Chrome replaces tabs ids. Go figure...
 */
chrome.webNavigation.onTabReplaced.addListener(function (details) {
    delete data[details.replacedTabId];
});

/**
 * Listen for data request & responds with the view html
 */
chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    if (
        request.action == "show_vulnerabilities" &&
        sender.id == chrome.runtime.id
    ) sendResponse(data || {view: default_msg});
});


/**
 * Render the popup view element
 * @param obj
 * @returns {string}
 */
function renderPopup(responses, tabId, callback) {
    //set default message & vars
    let view = default_msg;

    for (let response of responses) {

        let domain = response.url.match(/http(?:s)?:\/\/(?:[\w-]+\.)*([\w-]{1,63})(?:\.(?:\w{3}|\w{2}))(?:$|\/)/i);
        domain = domain && domain[0];

        let hs = response.responseHeaders.map(r => r.name + ":" + r.value).join('\n');
        for (let rule of rules) {
            let m = hs.match(rule.jsRegex);
            if (m) {

                if (data[domain] && data[domain][rule.alias]) {
                    continue;
                }

                if (!data[domain]) {
                    data[domain] = {}
                }

                if (!data[domain][rule.name]) {
                    data[domain][rule.name] = {
                        software: rule.name,
                        match: m[1],
                        vulnerabilities: []
                    }
                }

                console.log('[Fetch] ', {software: rule.alias, version: m[1], type: rule.type});

                fetch(SCAN_URL, {
                    method: 'POST',
                    mode: 'cors',
                    redirect: 'follow',
                    headers: new Headers({
                        'Content-Type': 'application/json'
                    }),
                    body: JSON.stringify({
                        software: rule.alias,
                        version: m[1],
                        type: rule.type
                    })
                })
                    .then(r => r.json())
                    .then(r => {
                        let items = r.data.search || [];

                        data[domain][rule.name]['vulnerabilities'] = items.map(i => {
                            let s = i._source;
                            return {
                                id: s.id,
                                title: s.title,
                                description: s.description
                            }
                        });

                        localStorage.setItem(LS_KEY, JSON.stringify(data));
                    });
            }
        }
    }
}