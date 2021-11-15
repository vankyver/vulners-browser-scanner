import React from "react";
import {Box, Button, IconButton, List, ListSubheader, TextField, Typography} from "@material-ui/core";
import {useState} from "react";
import {makeStyles} from "@material-ui/styles";
import {inject, observer} from "mobx-react";
import {Close} from "@material-ui/icons";
import {Link} from "react-router-dom";



const useStyles = makeStyles(theme => ({
    subheader: {
        display: 'flex',
        justifyContent: 'space-between',
        paddingRight: 4,
        width:320
    },
    form: {
        flex: 1
    },
    link: {
        textDecoration: 'none',
        color: theme.palette.primary.main
    }
}))

const ApiKeyForm = ({settingsStore, onClose, onSuccess}) => {

    let classes = useStyles()
    let [value, setValue] = useState(settingsStore.apiKey)
    let [hidden, setHidden] = useState(true)
    let [error, setError] = useState('')

    const handleSaveKey = () => {
        if (!value) {
            return setError('API Key can not be empty')
        }

        settingsStore.validateAPIKey(value, (response) => {
            if (response.valid) {
                settingsStore.setApiKey(value)
                onSuccess()
            } else {
                setError('API Key is not valid')
            }
        })
    }

    const handleChange = (e) => {
        setError('')
        setValue(e.target.value)
    }

    value = hidden ? value.slice(0,3) + ' * * * * ' + value.slice(value.length-3, value.length) : value

    return <List style={{height: '100%'}} subheader={
        <ListSubheader component="div" className={classes.subheader}>
            <div>
                Change Api Key
            </div>
            <IconButton onClick={onClose}>
                <Close/>
            </IconButton>
        </ListSubheader>
    }>
        <Box p={2} mt={1}>
            <Typography variant='body1'>
                Follow <a className={classes.link} href="https://vulners.com/api-keys#web-extension" target="_blank">vulners.com</a> to create new api key
            </Typography>
        </Box>
        <Box p={2} className={classes.form}>

            <TextField label='API Key' fullWidth value={value}
                       error={!!error}
                       helperText={error}
                       onChange={handleChange}
                       onClick={() => hidden && setHidden(false)}/>

            <Box mt={2} display='flex' justifyContent='flex-end'>
                <Button color='primary' onClick={handleSaveKey}>Save</Button>
            </Box>
        </Box>
    </List>

}

export default inject('dataStore', 'settingsStore')(observer(ApiKeyForm))