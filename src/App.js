import React, {useEffect} from 'react';
import {MemoryRouter} from 'react-router-dom';
import {Switch, Route} from "react-router-dom";

import { ThemeProvider } from '@material-ui/core/styles';

import Layout from "./components/Layout";
import Main from "./pages/main/Main";
import Search from "./pages/Search";
import About from "./pages/About";

import {inject, observer} from "mobx-react";

import ThemeLight from "./themes/Light";
import ThemeDark from "./themes/Dark";
import {CircularProgress} from "@material-ui/core";

/*global v_browser*/

const App = ({settingsStore, dataStore}) => {

    const openLink = url => url && v_browser.runtime.sendMessage({action: 'open_link', url});

    useEffect(() => {
        document.querySelectorAll('a')
            .forEach(a => a.addEventListener('click', e => openLink(e.target.href || e.target.parentElement.href)));
    })

    useEffect(() => {
        dataStore.loadData()
    }, [])

    if (!dataStore.loaded) {
        return <ThemeProvider theme={settingsStore.theme === 'light' ? ThemeLight : ThemeDark}>
            <CircularProgress size={64}/>
        </ThemeProvider>
    }

    return <ThemeProvider theme={settingsStore.theme === 'light' ? ThemeLight : ThemeDark}>
        <MemoryRouter>
            <Switch>
                <Route exact path="/main" component={Main}/>
                <Layout>
                    <Route exact path="/" component={Search}/>
                    <Route exact path="/about" component={About}/>
                </Layout>
            </Switch>
        </MemoryRouter>
    </ThemeProvider>
}

export default inject('settingsStore', 'dataStore')(observer(App))