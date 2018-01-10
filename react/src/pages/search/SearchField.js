import React from 'react';

export default (props) =>
    <div className="search-field input-field">
        <i className="material-icons prefix black-text text-darken-2">search</i>
        <input placeholder="Filter..." type="text" className="validate" onChange={props.onChange}/>
    </div>
