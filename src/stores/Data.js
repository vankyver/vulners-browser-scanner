import {action, observable, makeObservable} from "mobx";
import {sendMessage} from "../Browser";
import TestData from "../TestData";

export default class DataStore {

    url = ''
    data = []
    stat = []
    settings = {}
    landingSeen = false

    settingsStore = null

    constructor(settingsStore) {
        this.settingsStore = settingsStore
        makeObservable(this, {
            url: observable,
            data: observable,
            stat: observable,
            landingSeen: observable,

            loadData: action,
            clearData: action,
            setLandingSeen: action,
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
        Object.assign(this.settingsStore, data.settings)
    });

    clearData = () => sendMessage({action: 'clear_data', settings: {}});

    setLandingSeen = () => {
        this.landingSeen = true
        sendMessage({action: 'landing_seen', landingSeen: true});
    }

}