import React, {Component} from 'react';

import {makeStyles} from "@material-ui/core/styles";
import {inject, observer} from "mobx-react";
import {Settings} from "@material-ui/icons";
import {Box, IconButton, Typography} from "@material-ui/core";

import Icon from '../img/logo_small.png'

const useStyles = makeStyles(theme => ({
    root: {
        background: 'url("/img/background_new.jpg") 20%;',
        color: theme.palette.secondary.main,
    },
    icon: {
        width: 32,
        height: 32,
    }
}))

const Header = ({dataStore}) => {

    const classes = useStyles()

    let {stat, settingsOpen} = dataStore

    return <Box display="flex" alignItems="center" justifyContent="space-between" className={classes.root}>
        <Box display="flex" alignItems="center">
            <Box p={1}>
                <img src={Icon} className={classes.icon}/>
            </Box>
            <Box variant='body1' ml={2}> vulnerable&nbsp;&nbsp;<Typography component='span' variant='body1' color='primary'>{stat.vulnerable}</Typography></Box>
            <Box variant='body1' ml={2}> scanned&nbsp;&nbsp;<Typography component='span' variant='body1' color='primary'>{stat.scanned}</Typography></Box>
        </Box>
        <IconButton color='secondary' onClick={() => !settingsOpen ? dataStore.openSettings() : dataStore.closeSettings()}>
            <Settings/>
        </IconButton>
    </Box>
}

export default inject('dataStore')(observer(Header))
