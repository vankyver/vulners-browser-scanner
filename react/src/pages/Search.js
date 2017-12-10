import React from 'react';
import Domain from "./search/Domain";
import {loadData} from "../redux/actions";
import {connect} from 'react-redux';
import {mstp} from "../redux/utils";


@connect(mstp('data'), {loadData})
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

        return <div id="index-content" className="center-align">
            {Object.keys(data).map(name => <Domain key={name} name={name} software={data[name]}/>)}
        </div>
    }

}
