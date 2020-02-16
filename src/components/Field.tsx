import React, { Component } from "react";
import './Field.scss';

type FieldProps = {
    icon: string,
    text: string,
    children: any
};

class Field extends Component<FieldProps> {
    render = () => {
        return (
            <div className='field'>
                <div className='top'>
                    <img className='icon' src={ require(`../icons/${ this.props.icon }`) } alt={this.props.icon} />
                    <label className='label'>{ this.props.text }</label>
                </div>
                <div className='bottom'>
                    { this.props.children }
                </div>
            </div>
        );
    };
}

export default Field;