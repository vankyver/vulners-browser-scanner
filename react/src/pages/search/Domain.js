import React from 'react';
import Software from "./Software";

export default class Domain extends React.Component {

    static propTypes = {
        name: React.PropTypes.string,
        software: React.PropTypes.object
    };

    static defaultProps = {
        name: '',
        software: {}
    };

    render() {
        let software = this.props.software;
        let name = this.props.name;

        return <div key={name} className="center-align">

            <span className="domain-name amber-text text-darken-4">{name}</span>
            <ul className="collapsible" data-collapsible="expandable">
                {Object.keys(software).map(softName =>
                        <Software key={softName} {...software[softName]}/>
                )}
            </ul>

        </div>
    }

}