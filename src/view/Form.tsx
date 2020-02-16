import React, { Component } from "react";
import './Form.scss';

import Field from "../components/Field";
import TextInput from "../components/TextInput";
import SelectInput from "../components/SelectInput";
import CheckInputList from "../components/CheckInputList";
import Check from "../types/Check";

type FormProps = {
    projects: string[];
    roles: string[];
    interests: Check[];
};

class Form extends Component<FormProps> {

    /* handleClick(id: any, project: any, role: any, interests: any) {
        console.log('Click happened');
        if (project == "ProjectX"){
            //Use Ignite
            var obj = require("../data/ignite.json");
        }
        else{
            //Use Project X
            var obj = require("../data/ProjectX.json");
        }
    } */
    
    render = () => {
        return (
            <form className='form'>
                <Field text='What is your employee ID?' icon='name.svg'>
                    <TextInput/>
                </Field>
                <Field text='What project are you working on?' icon='writing.svg'>
                    <SelectInput options={ this.props.projects } />
                </Field>
                <Field text='What is your role in the project?' icon='group.svg'>
                    <SelectInput options={ this.props.roles } />
                </Field>
                <Field text='What do you want to learn?' icon='idea.svg'>
                    <CheckInputList options={ this.props.interests } internalName='interests' />
                </Field>
            </form>
        );
    };
}

export default Form;