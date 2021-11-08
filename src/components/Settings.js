import React from "react";
import {
    Box,
    Divider,
    FormControlLabel,
    IconButton,
    List,
    ListItem,
    ListItemIcon, ListItemText,
    ListSubheader,
    Switch,
    Tooltip, Typography
} from "@material-ui/core";
import {Brightness4, Brightness5, Close, DeleteOutline, HelpOutline, VpnKey} from "@material-ui/icons";
import {inject, observer} from "mobx-react";
import {makeStyles} from "@material-ui/styles";

const useStyles = makeStyles(theme => ({
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
    },
    switch: {
        marginRight: 8
    }
}))

const Settings = ({dataStore, settingsStore, setApiKeyOpen}) => {
    const classes = useStyles()

    return <React.Fragment>
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
            <ListItem button>
                <FormControlLabel
                    control={<Switch className={classes.switch} color='primary' checked={settingsStore.showAllDomains} onChange={settingsStore.setShowAllDomains} name="showAllDomains" />}
                    label="Show All Domains"
                />
            </ListItem>
            <ListItem button>
                <FormControlLabel
                    control={<Switch className={classes.switch} color='primary' checked={settingsStore.showOnlyVulnerable} onChange={settingsStore.setShowNotVulnerable} name="showOnlyVulnerable" />}
                    label="Show only vulnerable hosts"
                />
            </ListItem>
            <Divider/>
            <ListItem button>
                <FormControlLabel
                    control={<Switch className={classes.switch} color='primary' checked={settingsStore.doExtraScan} onChange={settingsStore.setDoExtraScan} name="doExtraScan" />}
                    label="Do extra scan of resources"
                />
                <Tooltip title="extension will do second request to receive and parse content of static files (for example checking the vulnerable CDNs)">
                    <ListItemIcon className={classes.listIcon}>
                        <HelpOutline/>
                    </ListItemIcon>
                </Tooltip>
            </ListItem>
            <Divider/>
            <ListItem button onClick={settingsStore.changeTheme}>
                {/*<FormControlLabel*/}
                {/*    control={<Switch color='primary' checked={settingsStore.theme === settingsStore.THEMES.DARK} onChange={settingsStore.changeTheme} name="changeTheme" />}*/}
                {/*    label="Dark Theme"*/}
                {/*/>*/}
                <ListItemIcon>
                    {settingsStore.theme === settingsStore.THEMES.DARK ? <Brightness5/> : <Brightness4/>}
                </ListItemIcon>
                <ListItemText primary='Dark Theme'/>
            </ListItem>
        </List>

        <div className={classes.spacer}/>

        <List>
            <ListItem button onClick={() => setApiKeyOpen(true)}>
                <ListItemIcon>
                    <VpnKey/>
                </ListItemIcon>
                <ListItemText>
                    <Typography align='left'>
                        Change API key
                    </Typography>
                </ListItemText>
            </ListItem>
        </List>

        <List>
            <ListItem button onClick={() => {
                settingsStore.closeSettings()
                dataStore.clearData()
            }}>
                <ListItemIcon>
                    <DeleteOutline/>
                </ListItemIcon>
                <ListItemText>
                    <Typography align='left'>
                        Clear all scans&nbsp;
                    </Typography>
                </ListItemText>
            </ListItem>
        </List>
    </React.Fragment>
}


export default inject('dataStore', 'settingsStore')(observer(Settings))