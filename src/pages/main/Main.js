import React, {useEffect, useState} from 'react';
import {inject, observer} from "mobx-react";
import {
    Box,
    Button, Collapse,
    FormControlLabel,
    Grow, IconButton,
    Link,
    ListItem,
    ListItemIcon, ListItemText,
    MobileStepper,
    Paper,
    Switch,
    TextField,
    Tooltip,
    Typography
} from "@material-ui/core";
import {ArrowDownward, ArrowForward, ExpandMore, HelpOutline} from "@material-ui/icons";
import {useHistory} from "react-router-dom";
import {makeStyles} from "@material-ui/core/styles";
import Logo from '../../img/logo.svg'
import {set} from "mobx";
import StepSettings from './StepSettings'
import StepAPIKey from "./StepAPIKey";

const useStyles = makeStyles(theme => ({
    main: {
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        background: theme.palette.type === 'light' ? 'url("/img/background_light.png") 39% 4%' : 'url("/img/background_dark.png") 40% 4%',
        color: theme.palette.type === 'light' ? theme.palette.default.main : theme.palette.secondary.main
    },
    logo: {
        height: 60
    },
    button: {
        width: 150
    },
    footer: {
        background: theme.palette.type === 'light' ? '#fff' : '#4d4d4d'
    },
    link: {
        textDecoration: 'none',
        color: theme.palette.primary.main
    }
}));

const StepWelcome = ({classes, onNextClick}) =>
        <Box display='flex' justifyContent='center' alignItems='center' flexDirection='column' flex={1} p={5}>

            <Box mb={3}>
                <Link href='https://vulners.com' target='_blank'>
                    <img src={Logo} className={classes.logo}/>
                </Link>
            </Box>

            <Typography variant='h5' align='center'>Welcome to <br/>Vulners web scanner!</Typography>

            <Box p={3}>
                Extension provides ability to passively scan web-sites while you surf internet
            </Box>

            <br/>

            <Button endIcon={<ArrowForward/>} color='primary' variant='contained' onClick={onNextClick} className={classes.button}>
                Start
            </Button>
            <br/>
        </Box>




const Main = ({settingsStore, dataStore}) =>  {

    const classes = useStyles()

    const onNextClick = () => {
        settingsStore.setIntroStep(activeStep + 1)
        setActiveStep(activeStep + 1)
    }
    const onPrevClick = () => {
        settingsStore.setIntroStep(activeStep - 1)
        setActiveStep(activeStep - 1)
    }

    console.log('[INTRO STEP]', settingsStore.introStep)
    const [activeStep, setActiveStep] = useState(settingsStore.introStep)
    const getStepContent = () => {
        switch (activeStep) {
            case 0:
                return <StepWelcome {...{classes, onNextClick}}/>
            case 1:
                return <StepSettings {...{classes, onNextClick}}/>
            case 2:
                return <StepAPIKey {...{classes, onNextClick}}/>
            default:
                return <StepWelcome {...{classes, onNextClick}}/>
        }
    }

    // useEffect(() => {
    //     !settingsStore.apiKey && settingsStore.introStep && settingsStore.setIntroStep(activeStep)
    //     console.log('[activeStep]', activeStep)
    // }, [activeStep])

    // useEffect(() => {
    //     !settingsStore.apiKey && settingsStore.introStep && setActiveStep(settingsStore.introStep)
    // }, [settingsStore.introStep])

    return <Box className={classes.main}>

        <Grow in timeout={1000}>
            <Box flex={1} display='flex' justifyContent='center' flexDirection='column'>

                {getStepContent()}

                {activeStep !== 0 &&
                    <MobileStepper
                        variant="dots"
                        steps={3}
                        position="static"
                        activeStep={activeStep}
                        className={classes.footer}
                        nextButton={
                            <Button color='primary' size="small" onClick={onNextClick} disabled={activeStep === 2}>
                                Next
                            </Button>
                        }
                        backButton={
                            <Button size="small" onClick={onPrevClick} disabled={activeStep === 0}>
                                Back
                            </Button>
                        }
                    />}
            </Box>
        </Grow>
    </Box>

}

export default inject('dataStore', 'settingsStore')(observer(Main))