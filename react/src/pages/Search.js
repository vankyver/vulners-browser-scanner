import React from 'react';
import Domain from "./search/Domain";
import {browser} from '../Browser';

export default class Search extends React.Component {

    static propTypes = {
        data: React.PropTypes.array.isRequired
    };

    static defaultProps = {
        data: []
    };

    state = {
        data: [],
        stats: []
    };

    componentDidMount() {
        browser.tabs.getSelected(tab => {
            browser.runtime.sendMessage({action: 'show_vulnerabilities', tab_id: tab.id}, (resp) => {
                this.setState({...resp})
            })
        })
    }

    render() {
        let data = this.state.data;

        return <div id="index-content" className="center-align">
            {Object.keys(data).map(name => <Domain name={name} software={data[name]}/>)}
        </div>
    }

}