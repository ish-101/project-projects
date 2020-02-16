import React, { Component } from 'react';
import './CheckInput.scss';
import Check from '../types/Check';

type CheckInputProps = {
    internalName: string;
    option: Check;
};

class CheckInput extends Component<CheckInputProps> {
    render = () => {
        return (
            <div className='container'>
                <input className='check' type='checkbox' name={ this.props.internalName } id={ this.props.option.value } value={ this.props.option.value } />
                <div className='button'>
                    <label htmlFor={ this.props.option.value } className='text'>{ this.props.option.text }</label>
                </div>
            </div>
        );
    };
}

export default CheckInput;