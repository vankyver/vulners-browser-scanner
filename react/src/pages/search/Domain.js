import React from 'react';

export default class Domain extends React.Component {

    static propTypes = {
        name: React.PropTypes.string,
        software: React.PropTypes.object
    };

    static defaultProps = {
        name: '',
        software: {}
    };

    getScore(soft) {
        return soft.score
            ? <div><span style={{fontSize: '16px', color: soft.scoreColor}}>{soft.score}</span></div>
            : <div className="light-green-text">Not vulnerable</div>
    }
    
    getVulnerability(vns) {
        return <li key={vns.id} className="collection-item data-item">
            <div>
                <a className="" href={"https://vulners.com/" + vns.type + "/" + vns.id + "?utm_source=scanner&utm_medium=chromePlugin&utm_campaign=scan"}>
                    <span className="title">{vns.id}</span>
                </a>
                <span className="truncate data-title ">{vns.title}</span>
            </div>
            <a className="secondary-content">
                <span style={{fontSize: '16px', color: vns.scoreColor}}>{vns.score}</span>
            </a>
        </li>
    }

    getSoftware(softName, soft) {
        return <li key={softName} className={["soft"].concat(soft.score && "hoverable").join(' ')}>

            <div className="collapsible-header">
                { soft.software - soft.version}
                {this.getScore(soft)}
            </div>

            <div className="collapsible-body">
                <ul className="collection">
                    {soft.vulnerabilities.map(v => this.getVulnerability(v))}
                </ul>
            </div>

        </li>
    }

    componentDidMount() {
        $('.collapsible').collapsible();
        $('.tooltipped').tooltip({delay: 50});
    }

    render() {
        let software = this.props.software;
        let name = this.props.name;

        return <div key={name} className="center-align">

            <span className="domain-name amber-text text-darken-4">{name}</span>
            <ul className="collapsible" data-collapsible="expandable">
                {Object.keys(software).map(soft => this.getSoftware(soft, software[soft]))}
            </ul>

        </div>
    }

}