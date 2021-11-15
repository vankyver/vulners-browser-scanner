import React from "react";
import {Box, Typography} from "@material-ui/core";
import {inject, observer} from "mobx-react";


const Error = ({settingsStore}) => {
    return settingsStore.error && <Box p={2} style={{background: '#f44336', color: '#fff'}}>
        <Typography variant='body2'>{settingsStore.error}</Typography>
    </Box>
}

export default inject('settingsStore')(observer(Error))