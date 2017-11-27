import React from 'react';

export default class Header extends (React.Component) {

    render() {
        return <div id="header">
            <nav>
                <div className="nav-wrapper grey darken-3">
                    <ul className="left stat">
                        <li><div> vulnerable <span id="stat-vulnerable"> </span> </div></li>
                        <li><div> scanned <span id="stat-scanned"> </span> </div></li>
                    </ul>
                    <ul className="right ">
                        <li><div>Show all domains</div></li>
                        <li>
                            <div className="switch">
                                <label>
                                    <input id="show_all_content" type="checkbox"/>
                                    <span className="lever"></span>
                                </label>
                            </div>
                        </li>
                        <li><i className="material-icons delete">delete</i></li>
                    </ul>
                </div>
            </nav>
        </div>
    }
}
