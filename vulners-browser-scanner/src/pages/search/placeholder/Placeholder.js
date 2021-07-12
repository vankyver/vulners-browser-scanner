import React from 'react';

export default (props) =>

        <div className="page-info center-align">
            <i className="large material-icons">broken_image</i>

            <h5 className="">
                { props.url }
                <br/>
            </h5>

            <p>Seems current host is not a web site which can be scanned, please follow http(s) websites</p>
        </div>
