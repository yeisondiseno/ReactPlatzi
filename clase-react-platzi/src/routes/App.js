import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

// routes
import Home from '../template/Home';
import Login from '../template/Login';
import Register from '../template/Register';
import NotFound from '../template/NotFound.jsx';

const App = () => (
  // Leer la nueva documentación, es muy explícita
  <Router>
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/login">
        <Login />
      </Route>
      <Route exact path="/register">
        <Register />
      </Route>
      <Route path="*">
        <NotFound />
      </Route>
    </Switch>
  </Router>
);

export default App;