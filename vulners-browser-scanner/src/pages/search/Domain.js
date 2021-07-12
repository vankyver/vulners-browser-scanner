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

const Domain = ({dataStore, name='', software={}, settings={}, hiddenSoft={}, vulnerable=false}) => {

    const classes = useStyles()

    const [showOnlyVulnerable, setShowOnlyVulnerable] = useState(settings.showOnlyVulnerable)

    return <Box key={name} pr={1} pl={1}>

        <Box pt={3} pb={1}>
            <Typography variant='h5' color='primary' align='center' className={classes.header}>{name}</Typography>
        </Box>
        <Paper elevation={3}>
            <List>
                {Object.keys(software)
                    .filter(softName => !(showOnlyVulnerable && !software[softName].vulnerabilities.length))
                    .map(softName => <Software key={softName} software={softName} {...software[softName]}/>
                )}
            </List>

            <HiddenSoft showOnlyVulnerable={showOnlyVulnerable} hiddenSoft={hiddenSoft} onClick={() => setShowOnlyVulnerable(!showOnlyVulnerable)}/>
        </Paper>

    </Box>
}

export default inject('dataStore')(observer(Domain))