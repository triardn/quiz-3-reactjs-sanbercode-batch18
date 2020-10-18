import React from 'react';
import {Switch, Route} from 'react-router';

import Header from './../Header';
import Footer from './../Footer';
import Home from './../Home';
import About from './../About';
import MovieListEditor from './../MovieListEditor';
import Login from './../Login';

const Navigation = () => {
    return (
        <>
            <Header />
            <Switch>
                <Route path="/about">
                    <About />
                </Route>
                <Route path="/movie-list-editor">
                    <MovieListEditor />
                </Route>
                <Route path="/login">
                    <Login />
                </Route>
                <Route path="/">
                    <Home />
                </Route>
            </Switch>
            <Footer />
        </>
    );
};

export default Navigation;