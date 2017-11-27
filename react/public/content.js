
const searchRegex = [];

document.addEventListener('DOMContentLoaded', () => {

    browser.runtime.sendMessage({ action: 'get_regexp'}, (searchRegex) => {
        console.log('[MATCH]', searchRegex);

        let html = document.body.innerHTML;
        let matches = [];

        for (let r of searchRegex) {
            let re = new (RegExp.bind.apply(RegExp, [this].concat(r.re)));
            let match = html.match(re) || [];

            console.log('[MATCH]', match);
            match.forEach(item => {
                matches.push({type: r.type, account: item, hosts: [document.location.host]})
            })
        }

        matches.length && browser.runtime.sendMessage({ action: 'match', matches: matches});
    });

});