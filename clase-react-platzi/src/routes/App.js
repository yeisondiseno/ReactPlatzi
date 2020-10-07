import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

// routes
import Home from '../template/Home';
import Login from '../template/Login';
import Register from '../template/Register';
import NotFound from '../template/NotFound.jsx';
import Layout from '../Component/Layout';

const App = () => (
  // Leer la nueva documentación, es muy explícita
  <Router>
    <Layout>
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
    </Layout>
  </Router>
);

export default App;