import React from 'react';
import {Box, Link, Typography} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import Logo from '../img/logo.svg'

const useStyles = makeStyles(theme => ({
    footer: {
        backgroundColor: theme.palette.default.main
    },
    link: {
        fontSize: 12,
        color: theme.palette.secondary.main,
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center'
    },
    img: {
        height: 36
    }
}))

const Footer = () => {
    const classes = useStyles()

    return <Box p={2} pt={1} pb={1} className={classes.footer}>
        <Typography className="container" align='center'>
            <Link className={classes.link} target="_blank" href="https://vulners.com?utm_source=scanner&utm_medium=chromePlugin&utm_campaign=scan">
                <img className={classes.img} src={Logo}/>
                <div>
                    {new Date().getUTCFullYear()}&nbsp;Vulners.com
                </div>
            </Link>
        </Typography>
    </Box>
}


export default Footer