import React, {useState} from 'react';

import {
    Box,
    Divider,
    Drawer,
    FormControlLabel, IconButton,
    List,
    ListItem,
    ListItemIcon, ListItemText,
    ListSubheader,
    Switch, Tooltip
} from "@material-ui/core";
import {Close, DeleteOutline, HelpOutline} from "@material-ui/icons";
import {inject, observer} from "mobx-react";
import {makeStyles} from "@material-ui/styles";
import Footer from "./Footer";


const useStyles = makeStyles(theme => ({
    navbar: {
        display: 'flex',
        flexDirection: 'column'
    },
    subheader: {
        display: 'flex',
        justifyContent: 'space-between'
    },
    spacer: {
        flex:1
    }
}))

const Navbar = ({dataStore}) => {

    const classes = useStyles()
    const {showAllDomains, showOnlyVulnerable, doExtraScan} = dataStore.settings

    return <Drawer anchor='right' open={dataStore.settingsOpen} onClose={dataStore.closeSettings} className={classes.navbar}>

        <List subheader={
                <ListSubheader component="div" className={classes.subheader}>
                    <div>
                        Settings
                    </div>
                    <IconButton onClick={dataStore.closeSettings}>
                        <Close/>
                    </IconButton>
                </ListSubheader>
            }>
            <ListItem>
                <FormControlLabel
                    control={<Switch color='primary' checked={showAllDomains} onChange={dataStore.showAllDomains} name="showAllDomains" />}
                    label="Show All Domains"
                />
            </ListItem>
            <ListItem>
                <FormControlLabel
                    control={<Switch color='primary' checked={showOnlyVulnerable} onChange={dataStore.showNotVulnerable} name="showOnlyVulnerable" />}
                    label="Show only vulnerable"
                />
            </ListItem>
            <Divider/>
            <ListItem>
                <FormControlLabel
                    control={<Switch color='primary' checked={doExtraScan} onChange={dataStore.doExtraScan} name="doExtraScan" />}
                    label="Do extra scan of resources"
                />
                <Tooltip title="extension will do second request to receive and parse content of static files">
                    <ListItemIcon>
                        <HelpOutline/>
                    </ListItemIcon>
                </Tooltip>
            </ListItem>
            <Divider/>
            <ListItem button onClick={dataStore.clearData}>
                <ListItemText>
                    Clear all scans
                </ListItemText>
                <ListItemIcon>
                    <DeleteOutline/>
                </ListItemIcon>
            </ListItem>
        </List>

        <div className={classes.spacer}/>

        <Footer/>
    </Drawer>

}

export default inject('dataStore')(observer(Navbar))