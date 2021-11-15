import React from 'react';

import Header from "./Header";
import Navbar from "./Navbar";
import {makeStyles} from "@material-ui/core/styles";
import {Box} from "@material-ui/core";
import Error from "./Error";

const useStyles = makeStyles(theme => ({
    root: {
        height: '100%',
        backgroundColor: theme.palette.background.default
    },
    body: {
        height: 'calc(100% - 48px)',
        overflowY: 'hidden'
    }
}));

const Layout = ({children}) => {
    const classes = useStyles()

    return <Box className={classes.root}>
        <Header/>
        <Error/>
        <Navbar/>
        <Box className={classes.body}>
            {children}
        </Box>
    </Box>
}

export default Layout