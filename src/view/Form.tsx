import React, { Component } from "react";
import './Form.scss';

import Field from "../components/Field";
import TextInput from "../components/TextInput";
import SelectInput from "../components/SelectInput";

type FormProps = {
    projects: string[],
    roles: string[],
    learns: string[]
};

class Form extends Component<FormProps> {

    /* handleClick(id, project, role, interests) {
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
    
    stringsToOptions = (namesList: String[]) => {
        return namesList.map((name) => {
            return (
                <option>{ name }</option>
            );
        });
    };
    render = () => {
        return (
            <form className='form'>
                <Field text='What is your employee ID?' icon='name.svg'>
                    <TextInput/>
                </Field>
                <Field text='What project are you working on?' icon='writing.svg'>
                    <SelectInput>
                        { this.stringsToOptions(this.props.projects) }
                    </SelectInput>
                </Field>
                <Field text='What is your role in the project?' icon='group.svg'>
                    <SelectInput>
                        { this.stringsToOptions(this.props.roles) }
                    </SelectInput>
                </Field>
                <Field text='What do you want to learn?' icon='idea.svg'>
                    <select>
                        { this.stringsToOptions(this.props.learns) }
                    </select>
                </Field>
            </form>
        );
    };
}

export default Form;