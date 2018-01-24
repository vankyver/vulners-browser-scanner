import React from 'react'
import Domain from "./search/Domain"
import NotVulnerable from "./search/placeholder/NotVulnerable"
import {loadData} from "../redux/actions"
import {connect} from 'react-redux'
import SearchField from "./search/SearchField";


const mapStateToProps = (state, filter) => {
    let {data, settings, url, landingSeen} = state;
    let domainSoft = url && (data.find(domain => domain.name === url));

    data = [].concat(data);

    if (!settings.showAllDomains && url) {
        data = domainSoft ? [domainSoft] : []
    }

    if (settings.showOnlyVulnerable) {
        data = data.filter(domain => domain.vulnerable)
    }

    console.log('[SEARCH]', data);
    return {data, settings, url, domainSoft, landingSeen}
};


@connect(mapStateToProps, {loadData})
export default class Search extends React.Component {

    state = {
        searchValue: ''
    };

    static propTypes = {

    };

    static defaultPropTypes = {
        data: [],
        settings: {}
    };

    componentDidMount = () => {
        this.props.loadData();
    };

    onSearchChange(searchValue) {
        this.setState({searchValue})
    }

    render () {
        let {data, settings, url, domainSoft, landingSeen} = this.props;
        let {searchValue} = this.state;

        if (!localStorage.getItem('landingSeen')) {
            this.props.history.push('/main')
        }

        if (!data.length) {
            return <NotVulnerable url={url} data={data} hiddenSoft={domainSoft}/>
        }

        if (searchValue) {
            let re = new RegExp(searchValue, 'ig');
            data = data.filter(d => re.test(Object.keys(d.software).join() + d.name + d.score));
        }

        return <div id="index-content" className="center-align">
            {settings.showAllDomains && <SearchField onChange={(e) => this.onSearchChange(e.target.value)}/>}
            {data.map(domain => <Domain key={domain.name} name={domain.name} vulnerable={domain.vulnerable} software={domain['software']} hiddenSoft={domainSoft}/>)}
        </div>
    }

}