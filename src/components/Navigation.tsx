import React from "react";
import {NavLink} from "react-router-dom";

export const Navigation = () => (
    <nav className="navigation">
        <ul className="navigation-list">
            <li className="navigation-item">
                <NavLink to="/welcome/18" className="navigation-link" activeClassName="active-route">Welcome</NavLink>
            </li>
            <div>
                <li className="navigation-item">
                    <NavLink to="/login" className="navigation-link" activeClassName="active-route">Sign in</NavLink>
                </li>
                <li className="navigation-item">
                    <NavLink to="/" exact={true} className="navigation-link" activeClassName="active-route">Sign
                        up</NavLink>
                </li>
            </div>
        </ul>
    </nav>
);
