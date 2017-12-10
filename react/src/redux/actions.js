export const loadData = vulners => ({
    type: 'LOAD_DATA',
    vulners,
});

export const closeGeod = () => ({
    type: 'CLOSE_GEOD',
});