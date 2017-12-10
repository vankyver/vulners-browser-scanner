import React, {Component} from 'react';

import Header from "./Header";
import Footer from "./Footer";
import Navbar from "./Navbar";

export default class Layout extends Component {

    /**
     * Animation components
     */
    componentDidMount () {
        $('.button-collapse').sideNav({
                menuWidth: 300, // Default is 300
                edge: 'right', // Choose the horizontal origin
                closeOnClick: true, // Closes side-nav on <a> clicks, useful for Angular/Meteor
                draggable: true, // Choose whether you can drag to open on touch screens,
            }
        );
    }

    render () {
        return <div className="body">
            <Header/>
            <Navbar/>
            {this.props.children}
            <Footer/>
        </div>
    }
}
