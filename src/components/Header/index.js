import React from 'react';
import {Link} from 'react-router-dom';

import './../../App.css';

const Header = () => {
    const isLoggedIn = localStorage.getItem("isLoggedIn");

    let dynamicMenu;
    let menuInOut;
    if (isLoggedIn) {
        dynamicMenu = <Link to="/movie-list-editor">Movie List Editor</Link>;
        menuInOut = <Link to="logout">Logout</Link>
    } else {
        dynamicMenu = '';
        menuInOut = <Link to="/login">Login</Link>;
    }

    return (
        <div className="header">
            <img id="logo" src="/img/logo.png" width="200px" alt="sanber-logo" />
            <div className="nav-link">
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                {dynamicMenu}
                {menuInOut}
            </div>
        </div>
    );
};

export default Header;