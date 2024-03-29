import React, {useEffect, useState} from 'react'
import Domain from "./search/Domain"
import NotVulnerable from "./search/placeholder/NotVulnerable"
import {inject, observer} from "mobx-react";
import {useHistory} from "react-router-dom";
import {Box, Card, IconButton, TextField} from "@material-ui/core";
import {SearchOutlined} from "@material-ui/icons";
import {makeStyles} from "@material-ui/core/styles";
import NotFound from "./search/placeholder/NotFound";


const useStyles = makeStyles({
    root: {
        height: '100%',
        display: 'flex',
        flexDirection: 'column'
    },
    data: {
        overflowY: 'scroll',
        scrollbarWidth: 'none',  /* Firefox */
        '&::-webkit-scrollbar': {
            display: 'none'
        },
        "& >div:last-child": {
            marginBottom: "56px"
        }
    }
});

const Search = ({dataStore, settingsStore}) => {

    const classes = useStyles()
    const history = useHistory()
    const [searchValue, setSearchValue] = useState()

    useEffect(() => {
        setSearchValue('')
    }, [settingsStore.showOnlyVulnerable, settingsStore.showAllDomains])

    let {data, url, landingSeen} = dataStore;
    let domainSoft = url && (data.find(domain => domain.name === url));

    data = [].concat(data);

    if (!settingsStore.showAllDomains && url) {
        data = domainSoft ? [domainSoft] : []
    }

    if (settingsStore.showOnlyVulnerable) {
        data = data.filter(domain => domain.vulnerable)
    }

    if (!data.length) {
        return <NotVulnerable url={url} data={data} hiddenSoft={domainSoft}/>
    }

    if (searchValue) {
        let re = new RegExp(searchValue, 'ig');
        data = data.filter(d => re.test(Object.keys(d.software).join() + d.name + d.score));
    }

    return <div className={classes.root}>
        {settingsStore.showAllDomains && <Box display='flex' pr={2} alignItems='center'>
            <IconButton>
                <SearchOutlined/>

            </IconButton>
            <TextField value={searchValue} fullWidth onChange={(e) => setSearchValue(e.target.value)}/>
        </Box>}
        <Box className={classes.data} flex={1}>
            {searchValue && !data.length && <NotFound/>}
            {data.map(domain => <Domain key={domain.name} name={domain.name} vulnerable={domain.vulnerable} software={domain['software']}/>)}
        </Box>
    </div>

}

export default inject('dataStore', 'settingsStore')(observer(Search))