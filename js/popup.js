/**
 * Ask for recorded headers on popup opening
 * TODO: check if this can update in the background
 * TODO: implement response.alert (injected element onto page with info defined in options)
 */

const isChrome = (/google/i).test(navigator.vendor);
browser = isChrome ? chrome : browser;
const DOMAIN_REGEX = /(?:[\w-]+\.)*([\w-]{1,63})(?:\.(?:\w{3}|\w{2}))(?:$|\/)/i;

const render = function () {
    browser.tabs.getSelected(null, function (tab) {
        browser.runtime.sendMessage(
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

    if (doRenderIndex()) {
        return;
    }

    doRenderHeader(stat);

    if (isCheckedAll()) {
        return doRenderContent(templates.data,
            {domains: Object.keys(data)
                .filter(extractDomain)
                .sort()
                .map(d => {
                    return {
                        name: d,
                        soft: sortSorftByScore(data[d])
                    }
                })
            }
        )
    }

    if (!data[host]) {
        if (!Object.keys(data).length) {
            return doRenderContent(templates.help)
        }

        return extractDomain(url) ?
            doRenderContent(templates.none, {}):
            doRenderContent(templates.wrong, {url});
    }

    domains[host] = {
        name: host,
        soft: sortSorftByScore(data[host])
    };

    doRenderContent(templates.data, {domains});
};

/**
 * Set innerHTML of content element
 */
const doRenderContent = (template, data) => {
    document.getElementById('content').innerHTML = Ashe.parse(template, data);
    document.getElementById('show_all_content').addEventListener('click', render);
    document.querySelector('.material-icons.delete').addEventListener('click', onClearClick);

    $('.collapsible').collapsible();
    $('.tooltipped').tooltip({delay: 50});
    document.querySelectorAll('a').forEach(a => a.addEventListener('click', e => openLink(e.target.href || e.target.parentElement.href)))
};

const doRenderHeader = (stat) => {
    document.getElementById('stat-vulnerable').innerText = stat.vulnerable;
    document.getElementById('stat-scanned').innerText = stat.scanned;
};

const doRenderIndex = () => {
    let startBtn = document.getElementById('start');

    if (!startBtn) return;
    startBtn.addEventListener('click',
        () => browser.runtime.sendMessage({action: 'start'}, (resp) => window.location.href = resp.url));
    document.querySelectorAll('a').forEach(a => a.addEventListener('click', e => openLink(e.target.href || e.target.parentElement.href)))
    return true;
};

const onClearClick = () => {
    browser.tabs.getSelected(null, tab =>
        browser.runtime.sendMessage({action: 'clear_data', tab_id: tab.id}, doRender));
};

const sortSorftByScore = (soft) =>
    Object.keys(soft)
        .sort((a, b) => soft[b].score - soft[a].score)
        .map(s => soft[s]);

const openLink = (url) =>
    url && browser.runtime.sendMessage({action: 'open_link', url});

/**
 * Checkbox is on/off
 */
const isCheckedAll = () => document.getElementById('show_all_content').checked;

/**
 * Match URL pattern
 */
const extractDomain = url => url.match(DOMAIN_REGEX);

window.setTimeout(() => render(), 300);
