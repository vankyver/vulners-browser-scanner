import React from 'react';
import PropTypes from 'prop-types';
import Software from "./Software";

export default class Domain extends React.Component {

    static propTypes = {
        name: PropTypes.string,
        software: PropTypes.object
    };

    static defaultProps = {
        name: '',
        software: {}
    };

    render() {
        let software = this.props.software;
        let name = this.props.name;
        console.log(this.props)

        return <div key={name} className="center-align">

            <span className="domain-name amber-text text-darken-4">{name}</span>
            <ul className="collapsible" data-collapsible="accordion">
                {Object.keys(software).map(softName =>
                        <Software key={softName} software={softName} {...software[softName]}/>
                )}
            </ul>

        </div>
    }

}