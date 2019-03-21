import React from 'react';
import { withRouter } from 'react-router';
import gql from 'graphql-tag';
import styled from 'styled-components';
import { Mutation } from 'react-apollo';
import { diabloClasses } from '../../utils';

const FormWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 5rem;
    font-family: 'Press Start 2P', cursive;
`;

const DiabloLogo = styled.img`
    object-fit: cover;
    
    
`

const StyledForm = styled.form`
    display: flex;
    justify-content: space-around;
    flex-direction: column;
    height: 10rem;

    & input {
        border: 1px solid black;
        background: none;
        border-bottom: 1px solid white;
        color: #B49F77;
        font-size: 1.6rem;

        &:focus {
            outline: none;
        }
    }

    & button {
        border-radius: 4px;
        padding: 1rem;
        cursor: pointer;
        font-size: 1.3rem;
    }
`

const H1 = styled.h1`
    font-size: 2rem;
    color: #B49F77;
`;

const SelectContainer = styled.div`
    height: 3rem;
    width: 100%;
    

    & select {
        width: 100%;
        height: 100%;
        font-size: 1.4rem;
    }
`


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
                        <DiabloLogo src="newlogo.png" />
                        <H1>Create Your Character!</H1>
                        <StyledForm onSubmit={(e) => {
                            e.preventDefault();
                            addCharacter({ variables: { characterName: textInput.current.value, characterClass: characterSelect.current.value }})
                                .then(res => {
                                    const { addCharacter } = res.data;
                                    const { id } = addCharacter;
                                    return props.history.push(`/${characterSelect.current.value.replace(/\s/g, '')}/${id}`)
                                });         
                        }}>
                            <input autoFocus type="text" ref={textInput} />
                            <SelectContainer>
                                <select ref={characterSelect}>
                                    {diabloClasses.map((diabloClass) => (
                                        <option key={diabloClass.id} value={diabloClass.name}>{diabloClass.name}</option>
                                    ))}
                                </select>
                            </SelectContainer>                            
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