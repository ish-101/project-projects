import React, { Component } from "react";
import './Result.scss';

import Person from '../types/Person';

type ResultProps = {
    person: Person;
};

class Result extends Component<ResultProps> {
    render = () => {
        return (
            <div>
                <p></p>
                { console.log(this.props.person) }
            </div>
        );
    };
}

export default Result;