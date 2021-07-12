import React from 'react';
import { useHistory } from "react-router-dom";

import Navbar from "./Navbar";
import {makeStyles} from "@material-ui/core/styles";
import {Box} from "@material-ui/core";



const useStyles = makeStyles({
    root: {
        height: '100%',
    },
    body: {
        height: 'calc(100% - 48px)',
        overflowY: 'hidden'
    }
});

const Layout = ({children}) => {

    const classes = useStyles()

    return <Box className={classes.root}>
        <Navbar/>
        <Box className={classes.body}>
            {children}
        </Box>
    </Box>
}

export default Layout