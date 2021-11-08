import {action, observable, makeObservable} from "mobx";
import {sendMessage} from "../Browser";
import TestData from "../TestData";

export default class DataStore {

    url = ''
    data = []
    stat = []
    settings = {}
    landingSeen = false
    loaded = false

    settingsStore = null

    constructor(settingsStore) {
        this.settingsStore = settingsStore
        makeObservable(this, {
            url: observable,
            data: observable,
            stat: observable,
            landingSeen: observable,
            loaded: observable,

            loadData: action,
            clearData: action,
            setLandingSeen: action,
        })
    }

    loadData = () => sendMessage({action: 'show_vulnerabilities'}, (data) => {
        // if (process.env.NODE_ENV !== 'production') {
        //     data = TestData
        // }

        console.log('[VULNERS]', {
            type: 'LOAD_DATA_RECEIVED',
            ...data
        });
        Object.assign(this, data)
        this.settingsStore.updateSettings(data.settings)
        this.loaded = true
    });

    setLoading = () => this.loaded = false

    clearData = () => {
        sendMessage({action: 'clear_data'});
        this.url = ''
        this.data = []
        this.stat = {vulnerable: 0, scanned: 0}
    }

    setLandingSeen = () => {
        this.landingSeen = true
        sendMessage({action: 'landing_seen'});
    }

}