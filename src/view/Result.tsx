import React, { Component } from "react";
import './Result.scss';
import SubmitButton from "../components/SubmitButton";


import Person from '../types/Person';
import { Router, Redirect, Route, Link } from "react-router-dom";
import Button2 from "../components/Button2";

type ResultProps = {
    person: Person;
};

type ResultState = {
    active: boolean;
};

class Result extends Component<ResultProps, ResultState> {
    state = {
        active: true,
    };
    render = () => {
        const interests = this.props.person?.interests.map((interest) => {
            return (
                <div>‣ {interest}</div>
            );
        });
        if (!this.props.person?.found || !this.state.active) {
            return (
                <Redirect to="/"/>
            );
        } else {
            return (
                <div className="label" id="resultsContainer">
                    <div className='four'>According to your interests, we think that you'd be a good match with: </div>
                    <h1>{this.props.person.name.first} {this.props.person.name.last}</h1>
                    <h2>{this.props.person.role} for {this.props.person.project}</h2>
                    <h3>{this.props.person.email}</h3>
                    <div className='one'> 
                        <div className='two'>
                            <div>Interests:</div>
                            <div>{interests}</div>
                        </div>
                        <div className='three'>{this.props.person.about}</div>
                    </div>
                    <div style={{height: '8rem'}}></div>
                    <div className='submit-container'>
                        <Button2 onClick={ () => window.location.reload(false) } text='Start Again'></Button2>
                    </div>
                </div>
            );
        }
    };
}

export default Result;