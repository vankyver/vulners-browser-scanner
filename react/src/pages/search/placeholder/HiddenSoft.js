import React from 'react'
import PropTypes from 'prop-types';

import {connect} from 'react-redux';
import {mstp} from "../../../redux/utils";
import {changeSettings} from "../../../redux/actions";

@connect(mstp('settings'), {changeSettings})
export default class HiddenSoft extends React.Component {

    static propTypes = {
        hiddenSoft: PropTypes.any
    };

    state = {
        showOnlyVulnerable: false,
    };

    componentWillReceiveProps = (newProps) => this.setState({...newProps['settings']});

    onSettingChange = () => this.setState(
        Object.assign(this.state, {showOnlyVulnerable: !this.state.showOnlyVulnerable}),
        () => {this.props.changeSettings(this.state)}
    );

    render = () => {
        let {hiddenSoft, settings} = this.props;

        if (!settings.showOnlyVulnerable || !hiddenSoft) {
            return <span/>
        }

        let softLength = Object.values(hiddenSoft.software).filter(s => !s.vulnerabilities.length).length;

        if (!softLength) {
            return <span/>
        }

        return <span className="color-black">
            <br/>
            {softLength} fingerprint{softLength > 1 && 's'} <a href="#" onClick={() => this.onSettingChange()}>hidden</a>
        </span>
    }

}
