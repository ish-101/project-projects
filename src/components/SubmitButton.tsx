import React, { Component } from "react";
import './SubmitButton.scss';

class SubmitButton extends Component {
    render = () => {
        return (
            <input className="submit" value="Next" type="submit" />
        );
    };
}

export default SubmitButton;