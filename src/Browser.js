const isChrome = (/google/i).test(navigator.vendor);
const v_browser = isChrome ? window.chrome : window.browser;

const sendMessage = (message, callback) => {
    if (process.env.NODE_ENV !== 'production') {
        return callback && callback()
    }
    v_browser.tabs.query({ active: true, currentWindow: true }).then(tab => {
        v_browser.runtime.sendMessage(Object.assign(message, {tab_id: tab.id}), callback)
    });
};

export {v_browser, sendMessage};