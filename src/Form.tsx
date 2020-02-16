import React, { Component } from "react";
import { Link } from "react-router-dom";

class Form extends React.Component {

    handleClick(id, project, role, interests) {
        console.log('Click happened');
        if (project == "ProjectX"){
            //Use Ignite
            var obj = require("../data/ignite.json");
        }
        else{
            //Use Project X
            var obj = require("../data/ProjectX.json");
        }
    }

    render = () => {
        return (
            <div>
                Form
                <Link to='/done'>Result</Link>
            </div>
        );
    };
}

export default Form;