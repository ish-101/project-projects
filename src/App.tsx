import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Splash from './Splash';
import Front from './Front';
import Form from './Form';
import Result from './Result';

class App extends Component  {
  render = () => {
    return (
      <Router>
        <Switch>
          <Route exact path="/">
            <Front/>
          </Route>
          <Route exact path="/splash">
            <Splash/>
          </Route>
          <Route exact path="/you">
            <Form/>
          </Route>
          <Route exact path="/done">
            <Result/>
          </Route>
        </Switch>
      </Router>
    );
  };
}

export default App;
