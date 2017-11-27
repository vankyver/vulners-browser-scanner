
const isChrome = (/google/i).test(navigator.vendor);
const br = isChrome ? chrome : browser;

export {br}