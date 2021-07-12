const isChrome = (/google/i).test(navigator.vendor);
const v_browser = isChrome ? window.chrome : window.browser;

console.log('[BROWSER]', v_browser)
export {v_browser};