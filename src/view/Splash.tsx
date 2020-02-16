import React, { Component } from "react";
import './Splash.scss';

import { Link } from "react-router-dom";

class Splash extends Component {
    render = () => {
        return (
            <div>
                Splash
                <Link to='/you'>Form</Link>
            </div>
        );
    };
}

export default Splash;