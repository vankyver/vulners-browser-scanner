import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import Software from "./Software";
import {mstp} from "../../redux/utils";
import HiddenSoft from "./placeholder/HiddenSoft";

@connect(mstp('settings'))
export default class Domain extends React.Component {

    static propTypes = {
        name: PropTypes.string,
        software: PropTypes.object,
        settings: PropTypes.object,
        vulnerable: PropTypes.bool,
        hiddenSoft: PropTypes.object
    };

    static defaultProps = {
        name: '',
        software: {},
        settings: {},
        hiddenSoft: {},
        vulnerable: false,
    };

    componentDidMount() {
        this.props.vulnerable && $(this.refs.collapsibleElement).collapsible();
    }

    render() {
        let {software, name, settings, hiddenSoft} = this.props;

        return <div key={name} className="center-align">

            <span className="domain-name amber-text text-darken-4">{name}</span>
            <ul className="collapsible" data-collapsible="accordion" ref="collapsibleElement">
                {Object.keys(software)
                    .filter(softName => !(settings.showOnlyVulnerable && !software[softName].vulnerabilities.length))
                    .map(softName => <Software key={softName} software={softName} {...software[softName]}/>
                )}
            </ul>
            {console.log('[HIDDEN FS]', hiddenSoft)}
            <HiddenSoft hiddenSoft={hiddenSoft}/>

        </div>
    }

}