import React, { Component } from 'react';
import Splash from './view/Splash';
import Front from './view/Front';
import Form from './view/Form';
import Result from './view/Result';

import Check from './types/Check';
import OurFormData from './types/OurFormData';
import Person from './types/Person';

import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";


const foundPerson: Person = {
  role: "Back-End Development",
  interests: [
    "Data Science",
    "Marketing",
    "Back-End Development",
    "Human Resources",
    "Front-End Development"
  ],
  name: {
    first: "Shirley",
    last: "Cherry"
  },
  project: "Ignite",
  email: "shirley.cherry@respec.com",
  about: "Lorem esse elit irure officia eiusmod duis incididunt elit id dolor anim eiusmod pariatur. Sint sint cupidatat enim ex cillum ad. Nulla et sint occaecat veniam eu elit adipisicing ut. Amet dolore nostrud quis voluptate sint occaecat enim dolore adipisicing ipsum. Laborum nulla ut et irure. Occaecat ullamco ex reprehenderit qui reprehenderit aliquip magna cupidatat cupidatat pariatur exercitation excepteur."
};


type AppState = {
  toResult: boolean;
};

class App extends Component<{}, AppState>  {
  state: AppState = {
    toResult: false,
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
        <Router><Redirect to='/done'/></Router>
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
            <Result person={foundPerson} />
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
    
    console.log(obj[0].project);
    var scoresArr = [];
    for (var i=0 ; i<obj.length ; i++){
      //console.log("i : " + obj[i].interests)
      var score = 0;
      for (var j=0 ; j<int.length ; j++){
        //console.log("j : " + int[j])
        if (obj[i].interests.includes(int[j]))
          score ++ ;
      }
      scoresArr[i] = score;
    }
    //console.log(scoresArr);

    let index = scoresArr.indexOf(Math.max(...scoresArr));
    //console.log(index);
    //console.log(obj[index].name);

    var matchFirst = obj[index].name.first;
    var matchLast = obj[index].name.last;
    var matchEmail = obj[index].email ;
    var matchRole = obj[index].role ;
    var matchProject = obj[index].project ;
    var matchInterests = obj[index].interests ;
    var matchBio = obj[index].about ;
    var match = {name: { first: matchFirst, last: matchLast},  email: matchEmail, role: matchRole, project: matchProject, interests: matchInterests, about: matchBio};

    console.log(match);
    this.setState({
      toResult: true
    });
  };
}

export default App;
