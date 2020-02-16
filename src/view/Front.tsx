import React, { Component } from "react";
import './Front.scss';
import SubmitButton from "../components/SubmitButton";
import Button2 from "../components/Button2";
import logo from "../icons/meetingmatchlogo.png"
import { Link } from "react-router-dom";
class Front extends Component {
    render = () => {
        return (
            <div id="front">
                <img src={logo} className="logo" id="left"/>
                <div id="right" className="label">
                    <h1>Welcome!</h1>
                    <p>Want to get know your colleages better? Click next to get started!</p>
                </div>
                <Link to='/splash' style={{textDecoration: 'none'}}>
                    <div className='submit-container'>
                        <Button2 text='Get Started' />
                    </div>
                </Link>
            </div>
        );
    };
}

export default Front;