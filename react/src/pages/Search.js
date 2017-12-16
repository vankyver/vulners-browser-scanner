import React from 'react';
import Domain from "./search/Domain";
import {loadData} from "../redux/actions";
import {connect} from 'react-redux';
import {mstp} from "../redux/utils";

const mapStateToProps = (state) => {
    console.log('[SEARCH PROPS]', state);
    let v = state.vulners;
    let settings = v.settings;

    if (settings) {
        if (!settings.showAllDomains && v.url) {
            v.data = {[v.url]: v.data[v.url]}
        }
    }

    return {
        data: v.data
    }
};

@connect(mapStateToProps, {loadData})
export default class Search extends React.Component {

    componentDidMount() {
        this.props.loadData();
    }

    componentDidUpdate() {
        $('.tooltipped').tooltip({delay: 50});
        $('.collapsible').collapsible();
    }

    render() {
        let data = this.props.data || {};

        console.log('{DATA}', data);
        return <div id="index-content" className="center-align">
            {Object.keys(data).map(name => <Domain key={name} name={name} software={data[name]['software']}/>)}
        </div>
    }

}
