import React from 'react';
import Footer from "../components/Footer";
import {inject, observer} from "mobx-react";
import {Button} from "@material-ui/core";
import {ArrowForward} from "@material-ui/icons";
import { useHistory } from "react-router-dom";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles({
    main: {
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        background: 'url("/img/background_new.jpg") 20%;',
    }
});

const Main = ({dataStore}) =>  {

    const classes = useStyles()
    const history = useHistory()

    const onNextClick = () => {
        dataStore.setLandingSeen()
        history.push('/')
    };

    return <div className={classes.main}>

        <div id="index-content" className="center-align">

            <div>
                <img id="logo" src="/img/logo_small.png"/>
            </div>

            <h3>Welcome to Vulners web scanner!</h3>

            <p>Extension provides ability to passively scan web-sites while you surf internet</p>

            <br/>

            <Button startIcon={<ArrowForward/>} color='primary' variant='contained' onClick={onNextClick}>
                Start scan
            </Button>

        </div>

        <Footer/>

    </div>

}

export default inject('dataStore')(observer(Main))