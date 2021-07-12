import {action, observable, makeObservable} from "mobx";
import {v_browser} from "./Browser";
import TestData from "./TestData";

const sendMessage = (message, callback) => {
    if (process.env.NODE_ENV !== 'production') {
        return callback && callback()
    }
    v_browser.tabs.query({ active: true, currentWindow: true }).then(tab => {
        v_browser.runtime.sendMessage(Object.assign(message, {tab_id: tab.id}), callback)
    });
};

export default class DataStore {

    url = ''
    data = []
    stat = []
    settings = {}
    landingSeen = true

    settingsOpen = false

    constructor() {
        makeObservable(this, {
            url: observable,
            data: observable,
            stat: observable,
            settings: observable,
            landingSeen: observable,
            settingsOpen: observable,

            loadData: action,
            clearData: action,
            setLandingSeen: action,
            changeSettings: action,

            showNotVulnerable: action,
            openSettings: action,
            closeSettings: action
        })
    }

    loadData = () => sendMessage({action: 'show_vulnerabilities'}, (data) => {
        if (process.env.NODE_ENV !== 'production') {
            data = TestData
        }

        console.log('[VULNERS]', {
            type: 'LOAD_DATA_RECEIVED',
            ...data
        });
        Object.assign(this, data)
    });

    clearData = () => sendMessage({action: 'clear_data', settings: {}});

    setLandingSeen = () => {
        this.landingSeen = true
        sendMessage({action: 'landing_seen', landingSeen: true});
    }

    /**
     * Settings
     */
    closeSettings = () => this.settingsOpen = false
    openSettings = () => this.settingsOpen = true

    changeSettings = () => {
        sendMessage({action: 'change_settings', settings: action.settings});
    }

    showNotVulnerable = () => {
        this.settings = {...this.settings, showOnlyVulnerable: !this.settings.showOnlyVulnerable}
        sendMessage({action: 'change_settings', settings: {...this.settings, showOnlyVulnerable: !this.settings.showOnlyVulnerable}});
    }

    showAllDomains = () => {
        this.settings = {...this.settings, showAllDomains: !this.settings.showAllDomains}
        sendMessage({action: 'change_settings', settings: {...this.settings, showAllDomains: !this.settings.showAllDomains}});
    }

    doExtraScan = () => {
        this.settings = {...this.settings, doExtraScan: !this.settings.doExtraScan}
        sendMessage({action: 'change_settings', settings: {...this.settings, doExtraScan: !this.settings.doExtraScan}});
    }

}