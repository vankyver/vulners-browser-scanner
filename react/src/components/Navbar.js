import React, {Component} from 'react';

import {connect} from 'react-redux';
import {mstp} from "../redux/utils";
import shallowEqual from "react-redux/src/utils/shallowEqual";
import {changeSettings, clearData} from "../redux/actions";


@connect(mstp('settings'), {changeSettings, clearData})
export default class Navbar extends Component {

    static defaultProps = {settings: {}};

    state = {
        doExtraScan: false,
        showAllDomains: false,
        showOnlyVulnerable: false,
    };

    componentWillReceiveProps = (newProps) => this.setState({...newProps['settings']});

    componentDidMount = () => $(this.refs.helpExtraScan).tooltip({delay: 50});

    onSettingChange = (cmp) => this.setState(
        Object.assign(this.state, {[cmp]: !this.state[cmp]}),
        () => {this.props.changeSettings(this.state)}
    );

    render = () =>
        <ul id="slide-out" className="side-nav settings">
            <li>
                <div className="user-view">
                    <a href="#">
                        <div className="background">
                            <img src="/img/background_new.jpg"/>
                        </div>
                        <span className="white-text name">Settings</span>
                    </a>
                </div>
            </li>
            <li>
                <div className="switch">
                    <label>
                        <input type="checkbox" checked={this.state.showAllDomains} onChange={() => this.onSettingChange('showAllDomains')}/>
                        <span className="lever"/>
                        Show all domains
                    </label>
                </div>
            </li>
            <li>
                <div className="switch">
                    <label>
                        <input type="checkbox" checked={this.state.showOnlyVulnerable} onChange={() => this.onSettingChange('showOnlyVulnerable')}/>
                        <span className="lever"/>
                        Show only vulnerable
                    </label>
                </div>
            </li>
            <li><div className="divider"/></li>
            <li>
                <div className="switch">
                    <label className="settings-lever-label">
                        <input type="checkbox" checked={this.state.doExtraScan} onChange={() => this.onSettingChange('doExtraScan')}/>
                        <span className="lever"/>
                        Do extra scan of resources
                        <i ref="helpExtraScan"
                           className="material-icons"
                           data-tooltip="extension will do second request to receive and parse content of static files">help</i>
                    </label>
                </div>
            </li>
            <li className="settings-hero"/>
            <li><div className="divider"/></li>
            <li><a href="#" onClick={() => this.props.clearData()}><i className="material-icons delete">delete</i>Clear all Data</a></li>
        </ul>

}
