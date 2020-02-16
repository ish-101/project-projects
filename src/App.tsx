import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Splash from './view/Splash';
import Front from './view/Front';
import Form from './view/Form';
import Result from './view/Result';

class App extends Component  {
  projects = [
    "Small PP",
    "The Project That Must Not Be Named"
  ];
  roles = [
    "Integrations Expert",
    "Team Mascot",
    "Coder"
  ];
  learns = [
    "Management",
    "Cloud",
    "DevOps"
  ];
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
            <Form projects={this.projects} roles={this.roles} learns={this.learns} />
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
