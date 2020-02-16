import React, { Component } from "react";
import { Link } from "react-router-dom";

class Form extends Component {
    render = () => {
        return (
            <div>
                Form
                <Link to='/done'>Result</Link>
            </div>
        );
    };
}

export default Form;