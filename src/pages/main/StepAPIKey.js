import React, {useState} from "react";
import {
    Box,
    Button,
    Collapse,
    ListItem,
    ListItemIcon,
    ListItemText,
    Paper,
    TextField,
    Typography
} from "@material-ui/core";
import {ExpandMore} from "@material-ui/icons";
import {inject, observer} from "mobx-react";

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

export default inject('settingsStore')(observer(StepAPIKey))