import React from 'react'
import {Box, Typography} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
    text: {
        color: theme.palette.text.primary
    }
}));

const NotFound = () =>  {
    const classes = useStyles()

    return <Box display='flex' alignItems='center' justifyContent='center' style={{height: '100%'}}>
        <Typography className={classes.text}>
            Nothing found
        </Typography>
    </Box>
}

export default NotFound