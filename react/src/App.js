import React, {Component} from 'react';
import {MemoryRouter} from 'react-router-dom';
import Route from "react-router-dom/es/Route";

import Layout from "./components/Layout";
import Main from "./pages/Main";
import Search from "./pages/Search";
import Credits from "./pages/Credits";
import Switch from "react-router-dom/es/Switch";

import { Provider } from 'react-redux';
import { store } from './redux/store';

export default class App extends React.Component {

    openLink = url => url && browser.runtime.sendMessage({action: 'open_link', url});

    componentDidUpdate() {
        document.querySelectorAll('a')
            .forEach(a => a.addEventListener('click', e => this.openLink(e.target.href || e.target.parentElement.href)));
    }

    render = () =>
        <Provider store={store}>
            <MemoryRouter>
                <Switch>
                    <Route path="/main" component={Main}/>
                    <Layout>
                        <Route exact path="/" component={Search}/>
                        <Route path="/credits" component={Credits}/>
                    </Layout>
                </Switch>
            </MemoryRouter>
        </Provider>
}

