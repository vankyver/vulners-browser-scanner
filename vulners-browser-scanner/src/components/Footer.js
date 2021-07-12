import React from 'react';
import {Box, Typography} from "@material-ui/core";

const Footer = () => {

    return <Box p={2}>
        <Typography className="container">{new Date().getUTCFullYear()}
            <a target="_blank" href="https://vulners.com?utm_source=scanner&utm_medium=chromePlugin&utm_campaign=scan">
                Vulners.com
            </a>
        </Typography>
    </Box>
}


export default Footer