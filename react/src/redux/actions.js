export const loadData = vulners => ({
    type: 'LOAD_DATA',
    vulners,
});

export const clearData = vulners => ({
    type: 'CLEAR_DATA',
    vulners,
});

export const changeSettings = settings => ({
    type: 'CHANGE_SETTINGS',
    settings,
});

export const changeLandingSeen = landingSeen => ({
    type: 'LANDING_SEEN',
    landingSeen,
});