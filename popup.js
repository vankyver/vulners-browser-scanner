/**
 * Ask for recorded headers on popup opening
 * TODO: check if this can update in the background
 * TODO: implement response.alert (injected element onto page with info defined in options)
 */

const render = function () {
    chrome.tabs.getSelected(null, function (tab) {
        chrome.runtime.sendMessage(
            {
                action: 'show_vulnerabilities',
                tab_id: tab.id
            },
            function (response) {
                window.setTimeout(() => renderTab(response, tab), 100);
            });
    });
};

const renderTab = function(data, tab) {
    const rootEl = document.getElementById('content');
    rootEl.innerHTML = '';

    if (!document.getElementById('show_all_content').checked) {
        let newData = {};
        newData[tab.url] = data[tab.url];
        data = newData;
    }

    Object.keys(data).forEach(domain => {
        if (!/http(?:s)?:\/\/(?:[\w-]+\.)*([\w-]{1,63})(?:\.(?:\w{3}|\w{2}))(?:$|\/)/i.test(domain)) {
            return
        }

        let domainEl = createDiv('domain', '');
        domainEl.appendChild(createDiv('domain-name', domain));
        rootEl.appendChild(domainEl);

        let software = data[domain];
        Object.keys(software).forEach(softName => {
            let softValue = software[softName];
            let softEl = createDiv('soft', '');
            softEl.appendChild(createDiv('soft-name', softName + ' - ' + softValue.match));
            domainEl.appendChild(softEl);

            let vulnerabilities = softValue.vulnerabilities || [];
            vulnerabilities.forEach(v => {
                let vulnEl = createDiv('vulnerability', '');
                vulnEl.appendChild(createDiv('vulnerability-id', v.id));
                vulnEl.appendChild(createDiv('vulnerability-ttle', v.title == v.id ? v.description : v.title));

                softEl.appendChild(vulnEl);
            })
        })


    })

};

const createDiv = function(className, text) {
    let el = document.createElement('div');
    el.setAttribute('class', className);
    el.innerText = text;
    return el;
};

window.setTimeout(() => {
    document.getElementById('show_all_content').addEventListener('click', render);
    render();
}, 300);
