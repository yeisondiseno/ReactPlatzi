import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from '../template/Home';
import Login from '../template/Login';

const App = () => (
    // Leer la nueva documentación, es muy explícita 
    <Router>
        <Switch>
            <Route exact path="/">
                <Home/>
            </Route>
            <Route exact path="/login">
                <Login/>
            </Route>
        </Switch>
    </Router>
);

export default App;