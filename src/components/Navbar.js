import React from 'react';

import {
    Divider,
    Drawer,
    FormControlLabel,
    IconButton,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    ListSubheader,
    Switch,
    Tooltip,
    Typography
} from "@material-ui/core";
import {Close, DeleteOutline, HelpOutline} from "@material-ui/icons";
import {inject, observer} from "mobx-react";
import {makeStyles} from "@material-ui/styles";
import Footer from "./Footer";


const useStyles = makeStyles(theme => ({
    navbar: {
        display: 'flex',
        flexDirection: 'column',
        maxWidth: '50%'
    },
    subheader: {
        display: 'flex',
        justifyContent: 'space-between',
        paddingRight: 4
    },
    spacer: {
        flex:1
    },
    listIcon: {
        minWidth: 'initial'
    }
}))

const Navbar = ({settingsStore, dataStore}) => {

    const classes = useStyles()
    const {showAllDomains, showOnlyVulnerable, doExtraScan, open, theme, THEMES} = settingsStore

    console.log('[THEME]', theme, THEMES)

    return <Drawer anchor='right' open={open} onClose={settingsStore.closeSettings} className={classes.navbar}>

        <List subheader={
                <ListSubheader component="div" className={classes.subheader}>
                    <div>
                        Settings
                    </div>
                    <IconButton onClick={settingsStore.closeSettings}>
                        <Close/>
                    </IconButton>
                </ListSubheader>
            }>
            <ListItem>
                <FormControlLabel
                    control={<Switch color='primary' checked={showAllDomains} onChange={settingsStore.setShowAllDomains} name="showAllDomains" />}
                    label="Show All Domains"
                />
            </ListItem>
            <ListItem>
                <FormControlLabel
                    control={<Switch color='primary' checked={showOnlyVulnerable} onChange={settingsStore.setShowNotVulnerable} name="showOnlyVulnerable" />}
                    label="Show only vulnerable hosts"
                />
            </ListItem>
            <Divider/>
            <ListItem>
                <FormControlLabel
                    control={<Switch color='primary' checked={doExtraScan} onChange={settingsStore.setDoExtraScan} name="doExtraScan" />}
                    label="Do extra scan of resources"
                />
                <Tooltip title="extension will do second request to receive and parse content of static files">
                    <ListItemIcon className={classes.listIcon}>
                        <HelpOutline/>
                    </ListItemIcon>
                </Tooltip>
            </ListItem>
            <Divider/>
            <ListItem>
                <FormControlLabel
                    control={<Switch color='primary' checked={theme === THEMES.DARK} onChange={settingsStore.changeTheme} name="changeTheme" />}
                    label="Dark Theme"
                />
            </ListItem>
        </List>

        <div className={classes.spacer}/>

        <List>
            <ListItem button onClick={dataStore.clearData}>
                <ListItemText>
                    <Typography align='center'>
                        Clear all scans
                    </Typography>
                </ListItemText>
                <ListItemIcon className={classes.listIcon}>
                    <DeleteOutline/>
                </ListItemIcon>
            </ListItem>
        </List>

        <br/>
        <Footer/>
    </Drawer>

}

export default inject('dataStore', 'settingsStore')(observer(Navbar))