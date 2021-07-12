import React from 'react'
import {inject, observer} from "mobx-react";
import {Card, CardActions, Typography} from "@material-ui/core";


const HiddenSoft = ({showOnlyVulnerable, hiddenSoft, onClick}) => {

    if (!showOnlyVulnerable || !hiddenSoft) {
        return false
    }

    let softLength = Object.values(hiddenSoft.software).filter(s => !s.vulnerabilities.length).length;

    if (!softLength) {
        return false
    }

    return <CardActions>

        <Typography variant='subtitle2' color='textSecondary'>
            {softLength} fingerprint{softLength > 1 && 's'}&nbsp;<a href="#" onClick={onClick}>hidden</a>
        </Typography>
    </CardActions>

}

export default inject('dataStore')(observer(HiddenSoft))