import React, { Component } from "react";
import './CheckInputList.scss'

import Check from "../types/Check";
import CheckInput from "./CheckInput";

type CheckInputListProps = {
    internalName: string;
    options: Check[];
};

class CheckInputList extends Component<CheckInputListProps> {
    render = () => {
        const options = this.props.options.map((option) => {
            return (
                <CheckInput internalName={ this.props.internalName } option={ option } />
            );
        });
        return (
            <fieldset className='group'>
                { options }
            </fieldset>
        );
    };
}

export default CheckInputList;