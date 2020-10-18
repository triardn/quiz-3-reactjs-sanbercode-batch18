import React, {useContext} from 'react';
import {Link} from 'react-router-dom';

import {MovieListContext} from './../Context';

import './../../App.css';

const Header = () => {
    const [isLoggedIn] = useContext(MovieListContext);

    let dynamicMenu;
    if (isLoggedIn) {
        dynamicMenu = <div><Link to="/movie-list-editor">Movie List Editor</Link>
        <Link to="/logout">Logout</Link></div>;
    } else {
        dynamicMenu = <Link to="/login">Login</Link>;
    }

    return (
        <div className="header">
            <img id="logo" src="/img/logo.png" width="200px" alt="sanber-logo" />
            <div className="nav-link">
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                {dynamicMenu}
            </div>
        </div>
    );
};

export default Header;