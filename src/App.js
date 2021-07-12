import React from 'react';
import {MemoryRouter} from 'react-router-dom';
import Route from "react-router-dom/es/Route";
import { ThemeProvider } from '@material-ui/core/styles';

import Layout from "./components/Layout";
import Main from "./pages/Main";
import Search from "./pages/Search";
import Credits from "./pages/Credits";
import Switch from "react-router-dom/es/Switch";

import Theme from "./Theme";
import {Provider} from "mobx-react";
import DataStore from "./DataStore";

let stores = {
    dataStore: new DataStore()
}

/*global v_browser*/

export default class App extends React.Component {

    openLink = url => url && v_browser.runtime.sendMessage({action: 'open_link', url});

    componentDidUpdate() {
        document.querySelectorAll('a')
            .forEach(a => a.addEventListener('click', e => this.openLink(e.target.href || e.target.parentElement.href)));
    }

    render = () =>
        <ThemeProvider theme={Theme}>
            <Provider {...stores}>
                <MemoryRouter>
                    <Switch>
                        <Route exact path="/main" component={Main}/>
                        <Layout>
                            <Route exact path="/" component={Search}/>
                            <Route exact path="/credits" component={Credits}/>
                        </Layout>
                    </Switch>
                </MemoryRouter>
            </Provider>
        </ThemeProvider>
}

