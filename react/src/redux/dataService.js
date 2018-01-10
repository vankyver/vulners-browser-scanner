import {v_browser} from '../Browser';

const sendMessage = (message, callback) => {
    v_browser.tabs.getSelected(tab => {
        v_browser.runtime.sendMessage(Object.assign(message, {tab_id: tab.id}), callback)
    });
};

export default store => next => action => {

    next(action);

    switch (action.type) {

        case 'LOAD_DATA':
            return sendMessage({action: 'show_vulnerabilities'}, (vulners) => {
                console.log('[VULNERS]', {
                    type: 'LOAD_DATA_RECEIVED',
                    ...vulners
                });
                next({
                    type: 'LOAD_DATA_RECEIVED',
                    ...vulners
                })
            });

        case 'CHANGE_SETTINGS':
            return sendMessage({action: 'change_settings', settings: action.settings});


        case 'CLEAR_DATA':
            return sendMessage({action: 'clear_data', settings: action.settings});

    }

};