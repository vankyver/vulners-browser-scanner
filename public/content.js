

v_browser.runtime.sendMessage({ action: 'get_regexp'}, (rules) => {

    let html = document.documentElement.innerHTML;
    let matches = [];

    for (let rule of rules) {
        try {
            let match = html.match(new RegExp(rule.regex));

            if (match) {
                console.warn('[VULNERS] Match', rule.alias, match[0], match[1]);
                matches.push({url: document.location.host, rule, version: match[1]});
            }
        } catch(e) {
            console.warn('[VULNERS]', e)
        }
    }

    matches.length && v_browser.runtime.sendMessage({ action: 'match', matches: matches});
});

var origOpen = XMLHttpRequest.prototype.open;
XMLHttpRequest.prototype.open = function() {
    this.addEventListener('load', function() {
        console.log(this.readyState); //will always be 4 (ajax is completed successfully)
        console.log(this.responseText); //whatever the response was
    });
    origOpen.apply(this, arguments);
};
