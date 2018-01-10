import React, {Component, PropTypes as pt} from 'react';

import {connect} from 'react-redux';
import {mstp} from "../redux/utils";


@connect(mstp('stat'))
export default class Header extends Component {

    static defaultProps = {stat: {}};

    render = () => {
        let stat = this.props.stat;

        return <div id="header">
            <nav>
                <div className="nav-wrapper grey darken-3">
                    <ul className="left stat">
                        <li>
                            <div> vulnerable <span id="stat-vulnerable">{stat.vulnerable}</span></div>
                        </li>
                        <li>
                            <div> scanned <span id="stat-scanned">{stat.scanned}</span></div>
                        </li>
                    </ul>
                    <ul className="right ">
                        <a href="#" data-activates="slide-out" className="button-collapse">
                            <li><i className="material-icons">settings</i></li>
                        </a>
                    </ul>
                </div>
            </nav>
        </div>}
}

