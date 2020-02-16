import React, { Component } from "react";
import './Splash.scss';

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
                Wait 3s
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