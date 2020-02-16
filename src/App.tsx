import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Splash from './view/Splash';
import Front from './view/Front';
import Form from './view/Form';
import Result from './view/Result';
import Check from './types/Check';
import OurFormData from './types/OurFormData';

class App extends Component  {
  projects: string[] = [
    "ProjectX",
    "Ignite"
  ];
  roles: string[] = [
    "Front-End Development", 
    "Data Science", 
    "Management" , 
    "Human Resources" , 
    "Marketing" , 
    "Public Relations" , 
    "Back-End Development"
  ];
  interests: Check[] = [
    { value: "mgmt", text: "Management" },
    { value: "fed", text: "Front-End Development" },
    { value: "ds", text: "Data Science" },
    { value: "hr", text: "Human Resources" },
    { value: "mrkt", text: "Marketing" },
    { value: "pr", text: "Public Relations" },
    { value: "bed", text: "Back-End Development" }
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
            <Form projects={this.projects} roles={this.roles} interests={this.interests} onSubmit={ this.onSubmit } />
          </Route>
          <Route exact path="/done">
            <Result/>
          </Route>
        </Switch>
      </Router>
    );
  };
  onSubmit = (data: OurFormData) => {
  };
}

export default App;
