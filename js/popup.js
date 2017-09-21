/**
 * Ask for recorded headers on popup opening
 * TODO: check if this can update in the background
 * TODO: implement response.alert (injected element onto page with info defined in options)
 */

const isChrome = (/google/i).test(navigator.vendor);
browser = isChrome ? chrome : browser;
const DOMAIN_REGEX = /(?:[\w-]+\.)*([\w-]{1,63})(?:\.(?:\w{3}|\w{2}))(?:$|\/)/i;

const render = function () {
    chrome.tabs.getSelected(null, function (tab) {
        chrome.runtime.sendMessage(
            {
                action: 'show_vulnerabilities',
                tab_id: tab.id
            },
            doRender
        );
    });
};

const doRender = (response) => {
    const {tab, data, stat, templates} = response;

    let url = tab.url;
    let domains = {};
    let host = url && new URL(url).host;

    doRenderHeader(stat);

    if (isCheckedAll()) {
        return doRenderContent(templates.data,
            {domains: Object.keys(data)
                .filter(extractDomain)
                .sort()
                .map(d => {
                    return {
                        name: d,
                        soft: data[d]
                    }
                })
            }
        )
    }

    if (!data[host]) {
        return doRenderContent(templates.none, {domains});
    }

    domains[host] = {
        name: host,
        soft: data[host]
    };

    doRenderContent(templates.data, {domains});
};

/**
 * Set innerHTML of content element
 */
const doRenderContent = (template, data) => {
    document.getElementById('content').innerHTML = Ashe.parse(template, data);
    document.getElementById('show_all_content').addEventListener('click', render);

    $('.collapsible').collapsible();
};

const doRenderHeader = (stat) => {
    document.getElementById('stat-vulnerable').innerText = stat.vulnerable;
    document.getElementById('stat-scanned').innerText = stat.scanned;
};

/**
 * Checkbox is on/off
 */
const isCheckedAll = () => document.getElementById('show_all_content').checked;

/**
 * Match URL pattern
 */
const extractDomain = url => url.match(DOMAIN_REGEX);

window.setTimeout(() => render(), 300);
