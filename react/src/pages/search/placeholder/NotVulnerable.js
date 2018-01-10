import React from 'react'

import {connect} from 'react-redux';
import {mstp} from "../../../redux/utils";

@connect(mstp('settings'))
export default class NotVulnerable extends React.Component {

    DOMAIN_REGEX = /(?:[\w-]+\.)*([\w-]{1,63})(?:\.(?:\w{3}|\w{2}))(?:$|\/)/i;

    getBody = () => {
        let {url, data} = this.props;

        switch (url) {
            case !url.match(this.DOMAIN_REGEX):
                return {
                    icon: 'broken_image',
                    text: <p>Invalid host</p>
                };
            default:
                return {
                    icon: 'cloud_done',
                    text: <p>Seems current host is not Vulnerable</p>,
                    notVulnerableSoft: this.props.data[url]
                }
        }
    };

    render = () => {
        let body = this.getBody();

        return <div className="page-info center-align">

            <i className="large material-icons">{body.icon}</i>

            <h5 className="">
                {this.props.url}
                <br/>
            </h5>

            {body.text}
        </div>
    }

}
