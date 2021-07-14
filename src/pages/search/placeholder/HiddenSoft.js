import React from 'react'
import {inject, observer} from "mobx-react";
import {Box, Link, Typography} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
    hidden: {
        fontWeight: 400,
        color: theme.palette.secondary.dark
    }
}));

const HiddenSoft = ({soft, onClick}) => {

    const classes = useStyles()
    if (!soft || !soft.length) {
        return false
    }

    return <Box justifyContent='flex-end' pr={1} pb={1}>
        <Typography variant='subtitle2' color='textSecondary' align='right'>
            <Link href="#" onClick={onClick} className={classes.hidden}>
                {soft.length} fingerprint{soft.length > 1 && 's'}&nbsp;hidden
            </Link>
        </Typography>
    </Box>

}

export default inject('dataStore')(observer(HiddenSoft))