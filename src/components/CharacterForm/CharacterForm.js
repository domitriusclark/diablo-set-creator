import React, { Component } from 'react';
import { Query, Mutation } from 'react-apollo';
import { withRouter } from 'react-router';
import gql from 'graphql-tag';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import DataError from '../Utils/DataError/DataError';
import Loading from '../Utils/Loading/Loading';

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

const StyledLink = styled(Link)`
    text-decoration: none;
    color: black;

    &::before {
        text-decoration: none;
    }

    &::after{
        text-decoration: none;
    }

    &:visited {
        text-decoration: none;
        color: black;
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

const diabloClasses = [
    {
        id: 0,
        name: "Witch Doctor"
    },
    {
        id: 1,
        name: "Barbarian"
    },
    {
        id: 2,
        name: "Wizard"
    },
    {
        id: 3,
        name: "Monk"
    },
    {
        id: 4,
        name: "Demon Hunter"
    },
    {
        id: 5,
        name: "Crusader"
    },
    {
        id: 6,
        name: "Necromancer"
    }
]

class CharacterForm extends Component {
    constructor() {
        super();

        this.textInput = React.createRef();
        this.characterSelect = React.createRef();
    }


    render() {
        return (
            <div>
                <Mutation mutation={ADD_CHARACTER} onCompleted={() => this.props.history.push('/set-creator')}>
                    {(addCharacter) => {
                        return (
                            <FormWrapper>
                                <H1>Add Your Character!</H1>
                                <StyledForm onSubmit={(e) => {
                                    e.preventDefault();
                                    addCharacter({ variables: { characterName: this.textInput.current.value, characterClass: this.characterSelect.current.value }});
                                    this.textInput.current.value = '';
                                }}>
                                    <input type="text" ref={this.textInput} />
                                    <select ref={this.characterSelect}>
                                        {diabloClasses.map((singleClass) => (
                                            <option value={singleClass.name}>{singleClass.name}</option>
                                        ))}
                                    </select>
                                    <button>Add Character</button>
                                </StyledForm>                                
                            </FormWrapper>
                        )
                    }}
                </Mutation>
                <Query query={GET_USER_CHARACTERS}>
                    {({data, error, loading}) => {
                        if (error) return <DataError />
                        if (loading) return <Loading />

                        const { userCharacters } = data;
                        return (
                            <div>
                                {userCharacters.map((character) => {
                                    const { characterName, id } = character;
                                    return <p key={id}>{characterName}</p>
                                })}
                            </div>
                        )
                    }}
                </Query>
            </div>
            
        )
    }
}

export default withRouter(CharacterForm);
export { GET_USER_CHARACTERS }