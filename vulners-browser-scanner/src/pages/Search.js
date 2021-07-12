import React, {useEffect, useState} from 'react'
import Domain from "./search/Domain"
import NotVulnerable from "./search/placeholder/NotVulnerable"
import {inject, observer} from "mobx-react";
import {useHistory} from "react-router-dom";
import {Box, Card, TextField} from "@material-ui/core";
import {SearchOutlined} from "@material-ui/icons";
import {makeStyles} from "@material-ui/core/styles";


const useStyles = makeStyles({
    root: {
        height: '100%',
    },
    data: {
        height: 'calc(100% - 56px)',
        overflowY: 'scroll'
    }
});

const Search = ({dataStore}) => {

    const classes = useStyles();
    const history = useHistory();
    const [searchValue, setSearchValue] = useState();

    useEffect(() => {
        dataStore.loadData()
    }, [])

    let {data, settings, url, landingSeen} = dataStore;
    let domainSoft = url && (data.find(domain => domain.name === url));

    data = [].concat(data);

    if (!settings.showAllDomains && url) {
        data = domainSoft ? [domainSoft] : []
    }

    if (settings.showOnlyVulnerable) {
        data = data.filter(domain => domain.vulnerable)
    }

    if (!landingSeen) {
        history.push('/main')
    }

    if (!data.length) {
        return <NotVulnerable url={url} data={data} hiddenSoft={domainSoft}/>
    }

    if (searchValue) {
        let re = new RegExp(searchValue, 'ig');
        data = data.filter(d => re.test(Object.keys(d.software).join() + d.name + d.score));
    }

    return <div className={classes.root}>
        {settings.showAllDomains && <Box display='flex' p={2} pt={1} pb={1} alignItems='center'>
            <SearchOutlined/>
            <TextField fullWidth onChange={(e) => setSearchValue(e.target.value)}/>
        </Box>}
        <Box className={classes.data}>
            {data.map(domain => <Domain key={domain.name} name={domain.name} vulnerable={domain.vulnerable} software={domain['software']} hiddenSoft={domainSoft}/>)}
        </Box>
    </div>

}

export default inject('dataStore')(observer(Search))