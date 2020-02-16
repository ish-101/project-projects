import React, { Component } from "react";
import './Button2.scss';

type Button2Props = {
    text: string;
    onClick?: any;
};

class Button2 extends Component<Button2Props> {
    render = () => {
        return (
            <button className='button' onClick={this.props.onClick} >{this.props.text}</button>
        );
    };
}

export default Button2;