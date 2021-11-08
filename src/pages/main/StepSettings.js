import {Box, FormControlLabel, ListItem, ListItemIcon, Paper, Switch, Tooltip, Typography} from "@material-ui/core";
import {HelpOutline} from "@material-ui/icons";
import React from "react";
import {inject, observer} from "mobx-react";

const StepSettings = ({classes, onNextClick, settingsStore}) => {
    const {theme, THEMES} = settingsStore

    return <Box display='flex' justifyContent='center' alignItems='center' flexDirection='column' flex={1} p={1} m={1}>
        <Paper>
            <Box p={2}>
                <Typography variant='h5'>
                    Settings
                </Typography>
                <Typography variant='subtitle1'>
                    Select default behaviour and feeling of app
                </Typography>
                <ListItem>
                    <FormControlLabel
                        control={<Switch color='primary' checked={settingsStore.doExtraScan} onChange={settingsStore.setDoExtraScan} name="doExtraScan" />}
                        label="Do extra scan of resources"
                    />
                    <Tooltip title="Extension will do second request to receive and parse content of static files (for example checking the vulnerable CDNs)">
                        <ListItemIcon className={classes.listIcon}>
                            <HelpOutline/>
                        </ListItemIcon>
                    </Tooltip>
                </ListItem>
                <ListItem>
                    <FormControlLabel
                        control={<Switch color='primary' checked={theme === THEMES.DARK} onChange={settingsStore.changeTheme} name="changeTheme" />}
                        label="Dark Theme"
                    />
                </ListItem>
            </Box>
        </Paper>
    </Box>
}

export default inject('settingsStore')(observer(StepSettings))