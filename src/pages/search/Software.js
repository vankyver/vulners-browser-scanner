import React, {useState} from 'react';

import Score from "./vulnerability/Score";
import Vulnerability from "./Vulnerability";
import {Box, Collapse, List, ListItem, ListItemText, Typography} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";


const useStyles = makeStyles({
    content: {
        display: 'flex'
    },
    name: {
        flex: 1
    }
});

const Software = ({software, version, score, scoreColor, exploit, vulnerabilities}) => {

    const classes = useStyles()
    const [open, setOpen] = useState(false)

    return <React.Fragment key={software+version}>
        <ListItem button={!!vulnerabilities.length}
                  className={classes.content}
                  onClick={() => setOpen(!open)}>
            <Typography variant='body2' component='div' className={classes.name}>{software} {version ? (" - " + version) : ""}</Typography>
            {exploit && <Box pr={2} pl={1}> HAS EXPLOIT! </Box>}
            <Score score={score} scoreColor={scoreColor}/>
        </ListItem>
        <Collapse in={open} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
                {vulnerabilities.map(v =>
                    <ListItem key={v.id} >
                        <Vulnerability {...v}/>
                    </ListItem>
                )}
            </List>
        </Collapse>
    </React.Fragment>
}

export default Software