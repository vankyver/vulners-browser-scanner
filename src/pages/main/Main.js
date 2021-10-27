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



const StepSettings = ({classes, onNextClick, settingsStore}) => {
    const {theme, THEMES} = settingsStore

    return <Box display='flex' justifyContent='center' alignItems='center' flexDirection='column' flex={1} p={1} m={1}>
        <Paper>
            <Box p={2}>
                <Typography variant='h5'>
                    Settings
                </Typography>
                <Typography variant='subtitle1'>
                    Select default behaviour and feeling of app
                </Typography>
                <ListItem>
                    <FormControlLabel
                        control={<Switch color='primary' checked={settingsStore.doExtraScan} onChange={settingsStore.setDoExtraScan} name="doExtraScan" />}
                        label="Do extra scan of resources"
                    />
                    <Tooltip title="Extension will do second request to receive and parse content of static files (for example checking the vulnerable CDNs)">
                        <ListItemIcon className={classes.listIcon}>
                            <HelpOutline/>
                        </ListItemIcon>
                    </Tooltip>
                </ListItem>
                <ListItem>
                    <FormControlLabel
                        control={<Switch color='primary' checked={theme === THEMES.DARK} onChange={settingsStore.changeTheme} name="changeTheme" />}
                        label="Dark Theme"
                    />
                </ListItem>
            </Box>
        </Paper>
    </Box>
}

const SERVER_URL = "https://vulners.com"
const StepAPIKey = ({classes, onNextClick, settingsStore}) => {
    const [apiKey, setApiKey] = useState(settingsStore.apiKey)
    const [apiKeyError, setApiKeyError] = useState('')
    const [fieldOpen, setFieldOpen] = useState(false)

    const handleChangeKey = (apiKey) => {
        setApiKey(apiKey)
        setApiKeyError('')
    }

    const handleSaveKey = () => {
        if (!settingsStore.apiKey && !apiKey) {
            return setApiKeyError('API Key can not be empty')
        }

        settingsStore.validateAPIKey(apiKey, (response) => {
            if (response.valid) {
                settingsStore.setApiKey(apiKey)
                onNextClick()
            } else {
                setApiKeyError('API Key is not valid')
            }
        })
    }

    return <Box display='flex' justifyContent='center' alignItems='center' flexDirection='column' flex={1} p={1} m={1}>
        <Paper>
            <Box p={2}>
                <Typography variant='h5'>
                    API Key
                </Typography>
                <Typography variant='subtitle1'>
                    Extension requires API Key to work properly
                    Generate it by clicking button below
                </Typography>
                <Box display='flex' justifyContent='center' mt={3}>
                    <Button href={SERVER_URL + "/api-keys#web-extension"} target='_blank' color='primary' variant='contained'>Get API KEY</Button>
                </Box>

                <br/>

                <ListItem button onClick={() => setFieldOpen(!fieldOpen)} size='small'>
                    <ListItemText>
                        Or add key manually
                    </ListItemText>
                    <ListItemIcon>
                        <ExpandMore style={{transition: 'all 0.5s', transform: fieldOpen ? 'rotate(0.5turn)' : ''}}/>
                    </ListItemIcon>
                </ListItem>
                <Collapse in={fieldOpen}>
                    <Typography variant='body2' component='div'>
                        <ul>
                            <li>Go to <a href='https://vulners.com/api-keys' target='_blank' className={classes.link}>vulners.com/api-keys</a></li>
                            <li>Create API Key with scope <i>scan</i> or use WebExtension Template</li>
                            <li>Insert generated key below</li>
                        </ul>
                    </Typography>
                    <TextField label='API Key' fullWidth value={apiKey} onChange={e => handleChangeKey(e.target.value)}/>

                    <Box display='flex' justifyContent='center' mt={3}>
                        <Button disabled={!apiKey} color='primary' onClick={handleSaveKey}>
                            Save
                        </Button>
                    </Box>
                </Collapse>
                {apiKeyError && <Box className={classes.link}>
                    {apiKeyError}
                </Box>}
            </Box>
        </Paper>
    </Box>
}

const Main = ({settingsStore, dataStore}) =>  {

    const classes = useStyles()
    const history = useHistory()

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
                return <StepSettings {...{classes, onNextClick, settingsStore}}/>
            case 2:
                return <StepAPIKey {...{classes, onNextClick, settingsStore}}/>
            default:
                return <StepWelcome {...{classes, onNextClick}}/>
        }
    }

    // useEffect(() => {
    //     !settingsStore.apiKey && settingsStore.introStep && settingsStore.setIntroStep(activeStep)
    //     console.log('[activeStep]', activeStep)
    // }, [activeStep])

    useEffect(() => {
        settingsStore.apiKey && history.push('/')
    }, [settingsStore.apiKey])

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