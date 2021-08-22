import React, {Component} from 'react';

import {makeStyles} from "@material-ui/core/styles";
import {inject, observer} from "mobx-react";
import {ArrowBack, Settings} from "@material-ui/icons";
import {Box, IconButton, Link, Typography} from "@material-ui/core";

import Icon from '../img/icon.svg'
import {useHistory} from "react-router-dom";

const useStyles = makeStyles(theme => ({
    header: {
        background: theme.palette.type === 'light' ? 'url("/img/background_light.png") 40% 4%' : 'url("/img/background_dark.png") 40% 4%',
        color: theme.palette.secondary.main,
    },
    icon: {
        width: 42,
        height: 42,
    }
}))

const Header = ({dataStore, settingsStore}) => {

    const classes = useStyles()

    let {stat} = dataStore
    let {open, openSettings, closeSettings} = settingsStore
    let history = useHistory()

    return <Box display="flex" alignItems="center" justifyContent="space-between" className={classes.header} pr={1}>
        <Box display="flex" alignItems="center">
            <Box p={1}>
                {
                    history.location.pathname === '/about' ?
                        <IconButton onClick={() => history.push('/')}>
                            <ArrowBack/>
                        </IconButton> :
                        <Link href='https://vulners.com' target='_blank'>
                            <img src={Icon} className={classes.icon}/>
                        </Link>
                }
            </Box>
            <Box variant='body1' ml={2}> vulnerable&nbsp;&nbsp;<Typography component='span' variant='body1' color='primary'>{stat.vulnerable || 0}</Typography></Box>
            <Box variant='body1' ml={2}> scanned&nbsp;&nbsp;<Typography component='span' variant='body1' color='primary'>{stat.scanned || 0}</Typography></Box>
        </Box>
        <IconButton color='secondary' onClick={() => !open ? settingsStore.openSettings() : settingsStore.closeSettings()}>
            <Settings/>
        </IconButton>
    </Box>
}

export default inject('dataStore', 'settingsStore')(observer(Header))
