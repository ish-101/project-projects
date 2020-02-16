import React, { Component } from 'react';
import Splash from './view/Splash';
import Front from './view/Front';
import Form from './view/Form';
import Result from './view/Result';

import Check from './types/Check';
import OurFormData from './types/OurFormData';
import Person from './types/Person';

import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";

type AppState = {
  toResult: boolean;
  foundPerson: Person;
};

class App extends Component<{}, AppState>  {
  state: AppState = {
    toResult: false,
    foundPerson: {
      role: "",
      interests: [],
      name: {
        first: "",
        last: ""
      },
      project: "",
      email: "",
      about: "",
      found: false
    }
  };
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
    { value: "Management", text: "Management" },
    { value: "Front-End Development", text: "Front-End Development" },
    { value: "Data Science", text: "Data Science" },
    { value: "Human Resources", text: "Human Resources" },
    { value: "Marketin", text: "Marketing" },
    { value: "Public Relations", text: "Public Relations" },
    { value: "Back-End Development", text: "Back-End Development" }
  ];
  render = () => {
    if (this.state.toResult === true) {
      return (
        <Router>
          <Redirect to="/done"/>
          <Route exact path="/done">
            <Result person={this.state.foundPerson} />
          </Route>
        </Router>
      )
    }
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
            <Result person={this.state.foundPerson} />
          </Route>
        </Switch>
      </Router>
    );
  };
  onSubmit = (data: OurFormData) => {
    var eID = data.id ;
    var proj = data.project;
    var rol = data.role;
    var int = data.interests;
    var obj;
    if (proj == "ProjectX")
      obj = require("./data/ignite.json");
    else
      obj = require("./data/ProjectX.json");
    
    var scoresArr = [];
    for (var i=0 ; i<obj.length ; i++){
      var score = 0;
      for (var j=0 ; j<int.length ; j++){
        if (obj[i].interests.includes(int[j]))
          score ++ ;
      }
      scoresArr[i] = score;
    }

    let index = scoresArr.indexOf(Math.max(...scoresArr));

    var matchFirst = obj[index].name.first;
    var matchLast = obj[index].name.last;
    var matchEmail = obj[index].email ;
    var matchRole = obj[index].role ;
    var matchProject = obj[index].project ;
    var matchInterests = obj[index].interests ;
    var matchBio = obj[index].about ;
    var match = {found: true, name: { first: matchFirst, last: matchLast},  email: matchEmail, role: matchRole, project: matchProject, interests: matchInterests, about: matchBio};

    this.setState({
      foundPerson: match,
    }, () => {
      this.setState({
        toResult: true,
      });
    });
  };
}

export default App;
