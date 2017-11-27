const isChrome = (/google/i).test(navigator.vendor);
const browser = isChrome ? chrome : browser;

export {browser};