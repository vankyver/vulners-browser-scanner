import {Box, Button, TextField} from "@material-ui/core";
import {useState} from "react";
import {makeStyles} from "@material-ui/styles";
import {inject, observer} from "mobx-react";



const useStyles = makeStyles(theme => ({
    form: {
        flex: 1
    }
}))

const ApiKeyForm = ({settingsStore}) => {

    const classes = useStyles()
    const [value, setValue] = useState('')

    return <Box p={2} className={classes.form}>
        <TextField label='API Key' defaultValue={settingsStore.apiKey} fullWidth value={value} onChange={e => setValue(e.target.value)}/>

        <Button color='primary'>Save</Button>
    </Box>

}

export default inject('dataStore', 'settingsStore')(observer(ApiKeyForm))