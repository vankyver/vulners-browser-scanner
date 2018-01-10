import React from 'react';

import Score from "./vulnerability/Score";
import Vulnerability from "./Vulnerability";

export default (props) => {

    return <li key={console.log(props)} className={["soft"].concat(props.score && "hoverable").join(' ')}>
        <div className="collapsible-header">
            <span>{props.software} {props.version ? (" - " + props.version) : ""}</span>
            <Score score={props.score} scoreColor={props.scoreColor}/>
        </div>

        <div className="collapsible-body">
            <div className="collection">
                {props.vulnerabilities.map(v =>
                    <Vulnerability key={v.id} {...v}/>
                )}
            </div>
        </div>
    </li>
}
