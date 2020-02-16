import React, { Component } from "react";
import './SelectInput.scss';

type SelectInputProps = {
    options: string[]
};

class SelectInput extends Component<SelectInputProps> {
    render = () => {
        const options = this.props.options.map((optionText) => {
            return (
                <option>{ optionText }</option>
            );
        });
        return (
            <div className="select-wrapper">
                <select className='select'>
                    { options }
                </select>
            </div>
        );
    };
}

export default SelectInput;