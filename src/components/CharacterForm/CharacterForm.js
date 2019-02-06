import React, { Component } from 'react';
import { Mutation } from 'react-apollo';
import gql from 'graphql-tag';
import styled from 'styled-components';

const FormWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    border: 2px solid rebeccapurple;
    margin: 5rem;
    height: 15rem;
    padding: 5rem;
`

const StyledForm = styled.form`
    display: flex;
    justify-content: space-around;
    flex-direction: column;
    height: 10rem;

    & input {
        border: 1px solid black;
    }

    & button {
        border-radius: 4px;
        padding: 1rem;
        cursor: pointer;
    }
`

const H1 = styled.h1`
    font-size: 2rem;
    color: rebeccapurple;
`


const ADD_CHARACTER = gql`
    mutation AddCharacter($characterName: String!, $characterClass: String!) {
        addCharacter(characterName: $characterName, characterClass: $characterClass) {
            id 
            characterClass
            characterName
        }
    }
`;

class CharacterForm extends Component {
    constructor() {
        super();

        this.textInput = React.createRef();
        this.characterSelect = React.createRef();
    }


    render() {
        return (
            <Mutation mutation={ADD_CHARACTER}>
                {(addCharacter) => {
                    return (
                        <FormWrapper>
                            <H1>Add Your Character!</H1>
                            <StyledForm onSubmit={(e) => {
                                e.preventDefault();
                                addCharacter({ variables: { characterName: this.textInput.value, characterClass: this.characterSelect.value }});
                                this.textInput.current.value = '';
                            }}>
                                <input type="text" ref={this.textInput} />
                                <select ref={this.characterSelect}>
                                    <option value="one">One</option>
                                    <option value="two">Two</option>
                                </select>
                                <button>Add Character</button>
                            </StyledForm>
                        </FormWrapper>
                    )
                }}
            </Mutation>
        )
    }
}

export default CharacterForm;