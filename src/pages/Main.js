import React from 'react';
import Footer from "../components/Footer";
import {inject, observer} from "mobx-react";
import {Box, Button, Link, Typography} from "@material-ui/core";
import {ArrowForward, Help, HelpOutlined, HelpOutline} from "@material-ui/icons";
import { useHistory } from "react-router-dom";
import {makeStyles} from "@material-ui/core/styles";
import Logo from '../img/logo.svg'

const useStyles = makeStyles(theme => ({
    main: {
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        background: 'url("/img/background.jpg") 20%;',
        color: theme.palette.secondary.main
    },
    logo: {
        height: 75
    },
    button: {
        width: 150
    }
}));

const Main = ({dataStore}) =>  {

    const classes = useStyles()
    const history = useHistory()

    const onNextClick = () => {
        dataStore.setLandingSeen()
        history.push('/')
    };

    const onAboutClick = () => {
        dataStore.setLandingSeen()
        history.push('/about')
    };

    return <Box className={classes.main}>


        <Box display='flex' justifyContent='center' alignItems='center' flexDirection='column'>
            <Box mb={3}>
                <Link href='https://vulners.com' target='_blank'>
                    <img src={Logo} className={classes.logo}/>
                </Link>
            </Box>

            <Typography variant='h5'>Welcome to Vulners web scanner!</Typography>

            <Box p={3}>
                Extension provides ability to passively scan web-sites while you surf internet
            </Box>

            <br/>

            <Button endIcon={<ArrowForward/>} color='primary' variant='contained' onClick={onNextClick} className={classes.button}>
                Start scan
            </Button>
            <br/>

            {/*<Button endIcon={<HelpOutline/>} color='secondary' variant='outlined' onClick={onAboutClick} className={classes.button}>*/}
            {/*    About*/}
            {/*</Button>*/}
        </Box>


    </Box>

}

export default inject('dataStore')(observer(Main))