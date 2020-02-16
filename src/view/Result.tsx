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
                <div>‣ {interest}</div>
            );
        });
        if (!this.props.person?.found) {
            return (
                <Redirect to="/"/>
            );
        } else {
            return (
                <div className="label" id="resultsContainer">
                    <div>According to your interests, we think that you'd be a good match with: </div>
                    <h1>{this.props.person.name.first} {this.props.person.name.last}</h1>
                    <h2>{this.props.person.role} for {this.props.person.project}</h2>
                    <h3>{this.props.person.email}</h3>
                    <div>Interests:</div>
                    <div>{interests}</div>
                    <div><br/>{this.props.person.about}</div>
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