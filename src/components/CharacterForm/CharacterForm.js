import React, { Component } from 'react';
import styled from 'styled-components';

const H1 = styled.h1`
    color: white;
    font-size: 2rem;
`

class CharacterForm extends Component {
    constructor() {
        super();

        this.state = {
            characterNameInput: '',
            characterClass: ''
        }
    }

    render() {
        return (
            <H1>I am the Form component for the character and class choices</H1>
        )
    }
}

export default CharacterForm;