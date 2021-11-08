import React, {useState} from 'react';

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
import {Close, Code, DeleteOutline, HelpOutline, VpnKey} from "@material-ui/icons";
import {inject, observer} from "mobx-react";
import {makeStyles} from "@material-ui/styles";
import Footer from "./Footer";
import ApiKeyForm from "./ApiKeyForm";
import Settings from "./Settings";


const useStyles = makeStyles(theme => ({
    navbar: {
        display: 'flex',
        flexDirection: 'column',
        maxWidth: '50%'
    }
}))


const Navbar = ({settingsStore, dataStore}) => {

    const classes = useStyles()
    const [apiKeyOpen, setApiKeyOpen] = useState(false);

    const handleSuccess = () => {
        settingsStore.closeSettings()

        //#424242
    }

    return <Drawer anchor='right' open={settingsStore.open} onClose={settingsStore.closeSettings} className={classes.navbar}>
        {apiKeyOpen ?
            <ApiKeyForm onClose={() => setApiKeyOpen(false)} onSuccess={handleSuccess}/> :
            <Settings {...{setApiKeyOpen}}/>
        }
        <br/>
        <Footer/>
    </Drawer>

}

export default inject('dataStore', 'settingsStore')(observer(Navbar))