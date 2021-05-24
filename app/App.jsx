import React from 'react';
import {
    BrowserRouter as Router,
    Switch, 
    Route
} from "react-router-dom";
import { Header } from '@tiger/header';
import { Home } from '@tiger/home';
import { Blog } from '@tiger/blog';
import { About } from '@tiger/about';

export function App () {
    return (
        <div className='container mx-auto'>
            <Router>
                <Header></Header>
                <Switch>
                    <Route path="/home">
                        <Home />
                    </Route>
                    <Route path="/blog">
                        <Blog />
                    </Route>
                    <Route path="/about">
                        <About />
                    </Route>
                </Switch>
            </Router>
        </div>
    );
}