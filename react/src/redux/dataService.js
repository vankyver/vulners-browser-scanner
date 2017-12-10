import {browser} from '../Browser';

export default store => next => action => {

    next(action);
    switch (action.type) {
        case 'LOAD_DATA':
            browser.tabs.getSelected(tab => {
                browser.runtime.sendMessage({action: 'show_vulnerabilities', tab_id: tab.id}, (vulners) => {
                    next({
                        type: 'LOAD_DATA_RECEIVED',
                        ...vulners
                    })
                })
            });
            break;
    }

};