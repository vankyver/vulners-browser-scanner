import React from 'react';
import Footer from "../components/Footer";
import Link from "react-router-dom/es/Link";

export default class Main extends React.Component {

    state = {
        data: []
    };

    static contextTypes = {
        router: React.PropTypes.object,
    };

    render() {
        return <div className="body background-image">

            <div id="index-content" className="center-align">

                <div>
                    <img id="logo" src="/img/logo_small.png"/>
                </div>

                <h3>Welcome to Vulners web scanner!</h3>

                <p>Extension provides ability to passively scan web-sites while you surf internet</p>

                <br/>

                <Link to="/search" className="waves-effect waves-light btn-large amber darken-4">
                    <i className="material-icons right">arrow_forward</i>
                    Start scan
                </Link>

            </div>

            <Footer/>

        </div>
    }

}