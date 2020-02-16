import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Splash from './view/Splash';
import Front from './view/Front';
import Form from './view/Form';
import Result from './view/Result';
import Check from './types/Check';

class App extends Component  {
  projects: string[] = [
    "Small PP",
    "The Project That Must Not Be Named"
  ];
  roles: string[] = [
    "Integrations Expert",
    "Team Mascot",
    "Coder"
  ];
  interests: Check[] = [
    { value: "mgmt", text: "Management" },
    { value: "cld", text: "Cloud" },
    { value: "dev", text: "Dev Ops" }
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
            <Form projects={this.projects} roles={this.roles} interests={this.interests} />
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
