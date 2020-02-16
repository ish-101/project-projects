import React, { Component } from "react";
import './TextInput.scss';

type TextInputProps = {
    internalName: string;
};

class TextInput extends Component<TextInputProps> {
    render = () => {
        return (
            <input name={this.props.internalName} className='input' />
        );
    };
}

export default TextInput;