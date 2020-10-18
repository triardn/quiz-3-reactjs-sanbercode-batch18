import React from 'react';
import {Link} from 'react-router-dom';

import './../../App.css';

const Header = () => {
    return (
        <div className="header">
            <img id="logo" src="/img/logo.png" width="200px" alt="sanber-logo" />
            <div className="nav-link">
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/movie-list-editor">Movie List Editor</Link>
                <Link to="/logout">Logout</Link>
                <Link to="/login">Login</Link>
            </div>
        </div>
    );
};

export default Header;