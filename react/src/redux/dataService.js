import {browser} from '../Browser';

const sendMessage = (message, callback) => {
    browser.tabs.getSelected(tab => {
        browser.runtime.sendMessage(Object.assign(message, {tab_id: tab.id}), callback)
    });
};

export default store => next => action => {

    next(action);

    switch (action.type) {

        case 'LOAD_DATA':
            return sendMessage({action: 'show_vulnerabilities'}, (vulners) => {
                next({
                    type: 'LOAD_DATA_RECEIVED',
                    ...vulners
                })
            });

        case 'CHANGE_SETTINGS':
            return sendMessage({action: 'change_settings', settings: action.settings});

    }

};