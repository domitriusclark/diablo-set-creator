import React, { Component } from 'react';
import { Query, Mutation } from 'react-apollo';
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

const GET_USER_CHARACTERS = gql`
    query GetUserCharacters {
        userCharacters @client {
            characterName
        }
    }
`;

class CharacterForm extends Component {
    constructor() {
        super();

        this.textInput = React.createRef();
        this.dropDownInput = React.createRef();
    }

    render() {
        return (
            <div>
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

            <Query query={GET_USER_CHARACTERS}>
                {({ data, error, loading }) => {
                    if (error) return <h1>Error</h1>
                    if (loading) return <h1>Loading...</h1>


                    return (
                        <div>
                            {data.userCharacters.map((character) => {
                                return <p>{character.characterName}</p>
                            })}
                        </div>

                    )
                }}
            </Query>
            </div>
        )
    }
}

export default CharacterForm;