/**
 * Ask for recorded headers on popup opening
 * TODO: check if this can update in the background
 * TODO: implement response.alert (injected element onto page with info defined in options)
 */

import {br} from './Browser'
import {TEMPLATES} from "./Templates";
import {parse} from "./Ashe";

const DOMAIN_REGEX = /(?:[\w-]+\.)*([\w-]{1,63})(?:\.(?:\w{3}|\w{2}))(?:$|\/)/i;

const render = function () {
    br.tabs.getSelected(null, function (tab) {
        br.runtime.sendMessage( {action: 'show_vulnerabilities', tab_id: tab.id}, doRender);
    });
};

const doRender = (response) => {
    const {tab, data, stat} = response;

    console.log(TEMPLATES)

    let url = tab.url;
    let domains = {};
    let host = url && new URL(url).host;

    if (doRenderIndex()) {
        return;
    }

    doRenderHeader(stat);

    if (isCheckedAll()) {
        return doRenderContent(TEMPLATES.DATA,
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
            return doRenderContent(TEMPLATES.HELP)
        }

        return extractDomain(url) ?
            doRenderContent(TEMPLATES.NONE, {}):
            doRenderContent(TEMPLATES.WRONG, {url});
    }

    domains[host] = {
        name: host,
        soft: sortSorftByScore(data[host])
    };

    doRenderContent(TEMPLATES.DATA, {domains});
};

/**
 * Set innerHTML of content element
 */
const doRenderContent = (template, data) => {
    document.getElementById('content').innerHTML = parse(template, data);
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

const doRenderSettings = () => {


    doRenderContent(TEMPLATES.SETTINGS);
    document.querySelector('.material-icons.delete').addEventListener('click', onClearClick);
};

const doRenderIndex = () => {
    let startBtn = document.getElementById('start');

    if (!startBtn) return;
    startBtn.addEventListener('click',
        () => br.runtime.sendMessage({action: 'start'}, (resp) => window.location.href = resp.url));
    document.querySelectorAll('a')
        .forEach(a => a.addEventListener('click', e => openLink(e.target.href || e.target.parentElement.href)));

    return true;
};

const onClearClick = () => {
    br.tabs.getSelected(null, tab =>
        br.runtime.sendMessage({action: 'clear_data', tab_id: tab.id}, doRender));
};

const sortSorftByScore = (soft) =>
    Object.keys(soft)
        .sort((a, b) => soft[b].score - soft[a].score)
        .map(s => soft[s]);

const openLink = (url) =>
    url && br.runtime.sendMessage({action: 'open_link', url});

/**
 * Checkbox is on/off
 */
const isCheckedAll = () => document.getElementById('show_all_content').checked;

/**
 * Match URL pattern
 */
const extractDomain = url => url.match(DOMAIN_REGEX);


document.addEventListener('DOMContentLoaded', () => window.setTimeout(() => {
    render()
}, 300));
