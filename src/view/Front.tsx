import React, { Component } from "react";
import './Front.scss';

import { Link } from "react-router-dom";

class Front extends Component {
    render = () => {
        return (
            <div>
                Add front page
                <Link to='/splash'>Try app</Link>
            </div>
        );
    };
}

export default Front;