import React, { Component } from "react";
import { Link } from "react-router-dom";

class Splash extends Component {
    render = () => {
        return (
            <div>
                Splash
                <Link to='/hello'>Front</Link>
            </div>
        );
    };
}

export default Splash;