import React from 'react';
import { withRouter } from 'react-router';
import gql from 'graphql-tag';
import styled from 'styled-components';
import { Mutation } from 'react-apollo';
import { diabloClasses } from '../../utils';

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
`;


const ADD_CHARACTER = gql`
    mutation AddCharacter($characterName: String!, $characterClass: String!) {
        addCharacter(characterName: $characterName, characterClass: $characterClass) @client {
            id 
            characterName
            characterClass
        }
    }
`;

const GET_USER_CHARACTERS = gql`
    query GetUserCharacters {
        userCharacters @client {
            id
            characterName
            characterClass
        }
    }
`

const CharacterForm = (props) => {
    const textInput = React.useRef();
    const characterSelect = React.useRef();

    return (
        <Mutation mutation={ADD_CHARACTER}>
            {(addCharacter) => (
                <div>
                    <FormWrapper>
                        <H1>Add Your Character!</H1>
                        <StyledForm onSubmit={(e) => {
                            e.preventDefault();
                            addCharacter({ variables: { characterName: textInput.current.value, characterClass: characterSelect.current.value }})
                                .then(res => {
                                    const { addCharacter } = res.data;
                                    const { id } = addCharacter;
                                    return props.history.push(`/${characterSelect.current.value.replace(/\s/g, '')}/${id}`)
                                });         
                        }}>
                            <input type="text" ref={textInput} />
                            <select ref={characterSelect}>
                                {diabloClasses.map((diabloClass) => (
                                    <option key={diabloClass.id} value={diabloClass.name}>{diabloClass.name}</option>
                                ))}
                            </select>
                            <button>Add Character</button>
                        </StyledForm>                                
                    </FormWrapper>
                </div>                        
            )}
        </Mutation>
    )
}

export default withRouter(CharacterForm);
export { GET_USER_CHARACTERS }