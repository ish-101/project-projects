import React, { Component } from "react";
import './Splash.scss';
import logo from "../icons/meetingmatchlogo.png"
import { Link, Redirect } from "react-router-dom";

type SplashState = {
    toForm: boolean;
};

class Splash extends Component<{}, SplashState> {
    state = {
        toForm: false,
    };
    render = () => {
        if (this.state.toForm === true) {
            return (<Redirect to="/you"/>);
        }
        return (
            <div>
                <img src={logo} id="logoSplash" className="logoSplash" />
            </div>

        );
    };
    componentDidMount() {
        setTimeout(() => {
            this.setState({
                toForm: true
            });
        }, 3000);
    }
}

export default Splash;