import React, { Component } from "react";
import './SelectInput.scss';

type SelectInputProps = {
    children: any
};

class SelectInput extends Component<SelectInputProps> {
    render = () => {
        return (
            <div className="select-wrapper">
                <select className='select'>
                    { this.props.children }
                </select>
            </div>
        );
    };
}

export default SelectInput;