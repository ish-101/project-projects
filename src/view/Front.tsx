import React, { Component } from "react";
import './Front.scss';
import logo from "../icons/meetingmatchlogo.png"

import { Link } from "react-router-dom";

class Front extends Component {
    render = () => {
        return (
            <div>
                <img src={logo} />
                <h1>Welcome!</h1>
                <p>Want to get matched with your new project team? Click next to get started!</p>
                <Link to='/splash'>Try app</Link>
            </div>
        );
    };
}

export default Front;