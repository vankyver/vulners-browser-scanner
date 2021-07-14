import React from 'react';
import {Box, Link, Typography} from "@material-ui/core";

export default class About extends(React.Component) {

    render() {
        return <Box p={2}>

            <Typography variant='h5'>
                How It Works?
            </Typography>
            <br/>

            <Typography variant='body2'>
                When you visit web-page, plugin is looking through HTTP Headers and web content in attempts to collect versions of software and libraries.
                Plugin is using detect-rules from <Link href='https://github.com/vulnersCom/detect-rules' target='_blank'>github.com/vulnersCom/detect-rules</Link>
                &nbsp;and <Link href='https://docs.vulners.com'>Vulners-API</Link> to recognize vulnerabilities of collected components.
            </Typography>

        </Box>
    }

}