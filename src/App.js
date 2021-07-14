import React, {useEffect} from 'react';
import {MemoryRouter} from 'react-router-dom';
import Route from "react-router-dom/es/Route";
import { ThemeProvider } from '@material-ui/core/styles';

import Layout from "./components/Layout";
import Main from "./pages/Main";
import Search from "./pages/Search";
import About from "./pages/About";
import Switch from "react-router-dom/es/Switch";

import {inject, observer} from "mobx-react";

import ThemeLight from "./themes/Light";
import ThemeDark from "./themes/Dark";

/*global v_browser*/

const App = ({settingsStore}) => {

    const openLink = url => url && v_browser.runtime.sendMessage({action: 'open_link', url});

    useEffect(() => {
        document.querySelectorAll('a')
            .forEach(a => a.addEventListener('click', e => openLink(e.target.href || e.target.parentElement.href)));
    })

    return <ThemeProvider theme={settingsStore.theme === 'light' ? ThemeLight : ThemeDark}>
        <MemoryRouter>
            <Switch>
                <Layout>
                    <Route exact path="/main" component={Main}/>
                    <Route exact path="/" component={Search}/>
                    <Route exact path="/about" component={About}/>
                </Layout>
            </Switch>
        </MemoryRouter>
    </ThemeProvider>
}

export default inject('settingsStore')(observer(App))