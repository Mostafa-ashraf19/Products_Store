import React from 'react';
import {NavLink, Link} from 'react-router-dom';

export default function Nav(props) {

        return (
            <nav className='nav'>
                <h1>{props.slang}</h1>
                <ul>
                    <li>                     
                        <NavLink to="/" exact="true"  className="selected">Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/new" exact="true" className="selected">New Tweet</NavLink>
                    </li>
                </ul>
            </nav>
        )
}