const isChrome = (/google/i).test(navigator.vendor);
const v_browser = isChrome ? chrome : browser;

export {v_browser};