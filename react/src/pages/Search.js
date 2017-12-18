import React from 'react';
import Domain from "./search/Domain";
import {loadData} from "../redux/actions";
import {connect} from 'react-redux';
import {mstp} from "../redux/utils";


const mapStateToProps = (state, filter) => {
    console.log('[SEARCH PROPS]', state, filter);

    let {data, settings} = state;
    data = [].concat(data);

    if (!settings.showAllDomains && settings.url) {
        data = data[0]
    }
    if (settings.showOnlyVulnerable) {
        data = data.filter(domain => domain.vulnerable)
    }

    console.log('[SEARCH PROPS]', data);
    return {data}
};

@connect(mapStateToProps, {loadData})
export default class Search extends React.Component {

    componentDidMount() {
        this.props.loadData();
    }

    componentDidUpdate() {
        $('.tooltipped').tooltip({delay: 50});
        $('.collapsible').collapsible();
        Materialize.showStaggeredList('.collapsible')
    }

    render() {
        let data = this.props.data || [];

        console.log('{DATA}', data);
        return <div id="index-content" className="center-align">
            {data.map(domain => <Domain key={domain.name} name={domain.name} software={domain['software']}/>)}
        </div>
    }

}
