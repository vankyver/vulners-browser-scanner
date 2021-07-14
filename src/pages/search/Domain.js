import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import Software from "./Software";
import HiddenSoft from "./placeholder/HiddenSoft";
import {inject, observer} from "mobx-react";
import {Box, Card, CardActions, List, Paper, Typography} from "@material-ui/core";
import {makeStyles} from "@material-ui/styles";


const useStyles = makeStyles(theme => ({
    header: {
        fontWeight: 300
    }
}))

const Domain = ({settingsStore, name='', software={}, vulnerable=false}) => {

    const classes = useStyles()

    const [showOnlyVulnerable, setShowOnlyVulnerable] = useState(settingsStore.showOnlyVulnerable)

    let softToShow = []
    let softToHide = []
    if (showOnlyVulnerable) {
        for (let soft of Object.values(software)) {
            !!soft.vulnerabilities.length ? softToShow.push(soft) : softToHide.push(soft)
        }
    } else {
        softToShow = Object.values(software)
    }

    return <Box key={name} pr={1} pl={1} mb={1}>

        <Box pt={3} pb={1}>
            <Typography variant='h5' color='primary' align='center' className={classes.header}>{name}</Typography>
        </Box>
        <Paper elevation={3}>
            <List>
                {softToShow.map(soft => <Software key={soft.software} software={soft.software} {...soft}/>)}
            </List>

            {showOnlyVulnerable && <HiddenSoft soft={softToHide} onClick={() => setShowOnlyVulnerable(!showOnlyVulnerable)}/>}
        </Paper>

    </Box>
}

export default inject('settingsStore')(observer(Domain))