import React from 'react'

import HiddenSoft from "./HiddenSoft";
import {BrokenImage, CloudDone, CloudDoneOutlined} from "@material-ui/icons";
import {Box, Typography} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
    box: {
        height: '100%',
        color: theme.palette.text.primary
    },
    icon: {
        fontSize: 40,
        fontWeight: 200
    },
    domain: {
        fontWeight: 300
    }
}))

const NotVulnerable = ({url, data, hiddenSoft}) => {

    const classes = useStyles()
    const DOMAIN_REGEX = /(?:[\w-]+\.)*([\w-]{1,63})(?:\.(?:\w{3}|\w{2}))(?:$|\/)/i;

    let text, icon;
    if (url && url.match(DOMAIN_REGEX)) {
        icon = <CloudDoneOutlined className={classes.icon}/>
        text = <span>
                <p>Seems current host is not Vulnerable</p>
                <HiddenSoft hiddenSoft={hiddenSoft}/>
            </span>
    } else {
        icon = <BrokenImage className={classes.icon}/>
        text = <p>Invalid host</p>
    }

    return <Box display='flex' alignItems='center' justifyContent='center' flexDirection='column' className={classes.box}>
        {icon}
        <br/>
        <br/>
        <Typography color='primary' variant='h5' className={classes.domain}>
            {url}
        </Typography>
        {text}
    </Box>

}

export default NotVulnerable