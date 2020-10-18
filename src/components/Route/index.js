import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom';

import Navigation from './../Navigation';

function Route() {
    return (
        <Router>
            <Navigation />
        </Router>
    );
}

export default Route;