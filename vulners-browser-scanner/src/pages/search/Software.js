import React, {useState} from 'react';

import Score from "./vulnerability/Score";
import Vulnerability from "./Vulnerability";
import {Collapse, List, ListItem, ListItemText} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";


const useStyles = makeStyles({
    content: {
        display: 'flex',
        justifyContent: 'space-between'
    }
});

const Software = ({software, version, score, scoreColor, exploit, vulnerabilities}) => {

    const classes = useStyles()
    const [open, setOpen] = useState(false)

    return [<ListItem button
                      key={software+version}
                      className={classes.content}
                      onClick={() => setOpen(!open)}>
        <div>{software} {version ? (" - " + version) : ""}</div>
        {exploit && <div> HAS EXPLOIT! </div>}
        <Score score={score} scoreColor={scoreColor}/>
    </ListItem>,
    <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
            {vulnerabilities.map(v =>
                <ListItem>
                    <Vulnerability key={v.id} {...v}/>
                </ListItem>
            )}
        </List>
    </Collapse>]
}

export default Software