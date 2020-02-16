import React, { Component } from "react";
import './Front.scss';
import SubmitButton from "../components/SubmitButton";


import { Link } from "react-router-dom";

class Front extends Component {
    render = () => {
        return (
            <div>
                Add front page
                <Link to='/splash'>
                <div className='submit-container'>
                    <SubmitButton / >
                </div>
                </Link>
            </div>
        );
    };
}

export default Front;