import React, { Component } from 'react';
import { Mutation } from 'react-apollo';
import gql from 'graphql-tag';
import styled from 'styled-components';

const ADD_CHARACTER = gql`
    mutation AddCharacter($characterName: String!, $characterClass: String!) {
        addCharacter(characterName: $characterName, characterClass: $characterClass){
            id
            characterName
            characterClass
        }
    }
`;

class CharacterForm extends Component {
    textInput = React.createRef();
    dropdownInput = React.createRef();

    render() {
        return (
            <Mutation mutation={ADD_CHARACTER}>
                {(addCharacter) => {
                    return (
                        <form onSubmit={e => {
                            e.preventDefault();
                            addCharacter({ variables : { characterName: this.textInput.value, characterClass: this.dropdownInput.value  }})
                            this.textInput = '';
                        }}>
                            <input type="text" ref={this.textInput} />
                            <select ref={this.dropDownInput}>
                                <option  value="one">One</option>
                                <option value="one">Two</option>
                            </select>
                            <button onSubmit={addCharacter}>Add Character</button> 
                        </form>
                    )
                }}
            </Mutation>

        )
    }
}

export default CharacterForm;