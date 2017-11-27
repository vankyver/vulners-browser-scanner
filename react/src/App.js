import React from 'react';
import {MemoryRouter} from 'react-router-dom';
import Route from "react-router-dom/es/Route";

import Layout from "./components/Layout";
import Main from "./pages/Main";
import Search from "./pages/Search";
import Settings from "./pages/Settings";
import Credits from "./pages/Credits";
import Switch from "react-router-dom/es/Switch";

export default () => (

    <MemoryRouter>
        <Switch>
            <Route path="/main" component={Main}/>

            <Layout>
                <Route exact path="/"   component={Search}/>
                <Route path="/settings" component={Settings}/>
                <Route path="/credits"  component={Credits}/>
            </Layout>
        </Switch>
    </MemoryRouter>

);
