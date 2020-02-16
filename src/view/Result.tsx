import React, { Component } from "react";
import './Result.scss';
import SubmitButton from "../components/SubmitButton";


import Person from '../types/Person';
import { Router, Redirect, Route, Link } from "react-router-dom";

type ResultProps = {
    person?: Person;
};

class Result extends Component<ResultProps> {
    render = () => {
        const interests = this.props.person?.interests.map((interest) => {
            return (
                <div>{interest}</div>
            );
        });
        if (!this.props.person?.found) {
            return (
                <Redirect to="/"/>
            );
        } else {
            return (
                <div>
                    <div>According to your interests, we think that you'd be a good match with: </div>
                    <div>{this.props.person.name.first} {this.props.person.name.last}</div>
                    <div>{this.props.person.email}</div>
                    <div>{this.props.person.role} for {this.props.person.project}</div>
                    <div>Interests:</div>
                    <div>{interests}</div>
                    <div>{this.props.person.about}</div>
                    <Link to='/'>
                    <div className='submit-container'>
                        <SubmitButton/>
                    </div>
                    </Link>
                </div>
            );
        }
    };
}

export default Result;