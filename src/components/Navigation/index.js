import React from 'react';
import {Switch, Route} from 'react-router';

import Header from './../Header';
import Footer from './../Footer';
import Home from './../Home';
import About from './../About';
import MovieListEditor from './../MovieListEditor';
import Login from './../Login';
import Logout from './../Logout';

import {MovieListProvider} from './../Context';

const Navigation = () => {
    return (
        <>
            <MovieListProvider>
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
                    <Route path="/logout">
                        <Logout />
                    </Route>
                    <Route path="/">
                        <Home />
                    </Route>
                </Switch>
                <Footer />
            </MovieListProvider>
        </>
    );
};

export default Navigation;