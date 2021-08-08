import {action, observable, makeObservable} from "mobx";
import {sendMessage} from "../Browser";

const THEME_LIGHT = 'light'
const THEME_DARK = 'dark'
const THEMES = {
    LIGHT: THEME_LIGHT,
    DARK: THEME_DARK,
}

export default class SettingsStore {

    THEMES = THEMES

    open = false
    showOnlyVulnerable = false
    showAllDomains = false
    doExtraScan = false
    theme = THEMES.LIGHT

    constructor() {
        makeObservable(this, {
            open: observable,
            showOnlyVulnerable: observable,
            showAllDomains: observable,
            doExtraScan: observable,
            theme: observable,

            setShowNotVulnerable: action,
            setShowAllDomains: action,
            setDoExtraScan: action,
            openSettings: action,
            closeSettings: action
        })
    }

    closeSettings = () => this.open = false
    
    openSettings = () => this.open = true

    setShowNotVulnerable = () => {
        this.showOnlyVulnerable = !this.showOnlyVulnerable
        this.saveSettings()
    }

    setShowAllDomains = () => {
        this.showAllDomains = !this.showAllDomains
        this.saveSettings()
    }

    setDoExtraScan = () => {
        this.doExtraScan = !this.doExtraScan
        this.saveSettings()
    }

    changeTheme = () => {
        this.theme = this.theme === THEMES.LIGHT ? THEMES.DARK : THEMES.LIGHT
        this.saveSettings()
    }

    saveSettings = () => {
        sendMessage({action: 'change_settings', settings: {
            showOnlyVulnerable: this.showOnlyVulnerable,
            showAllDomains: this.showAllDomains,
            doExtraScan: this.doExtraScan,
            theme: this.theme
        }})
    }
}