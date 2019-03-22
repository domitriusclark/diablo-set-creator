import React from 'react';
import styled from 'styled-components';
import { Query } from 'react-apollo';
import { GET_USER_CHARACTERS } from '../CharacterForm/CharacterForm';
import { Link } from 'react-router-dom';

const FieldsetNavContainer = styled.fieldset`
    display: flex;
    flex-direction: column;
    width: 12.5%;
    height: 90%;
    background: #281D19;
    border: 4px solid #2F2C29;

    & legend {
        font-size: 1.4rem;
        color: white;
    }

    & a {
        font-size: 2rem;
        margin: 2rem 0;
        color: #B49F77;
        text-shadow: -1px -1px 0 #000,
		1px -1px 0 #000,
		-1px 1px 0 #000,
		1px 1px 0 #000;
        text-decoration: none;

        &::before {
            text-decoration: none;
        }

        &::after{
            text-decoration: none;
        }

        &:visited {
            text-decoration: none;
            color: #B49F77;
        }

    }
`

const SideNav = () => {
    return (
        <Query query={GET_USER_CHARACTERS}>
            {({data}) => {
                const { userCharacters } = data;
                return (
                    <FieldsetNavContainer>
                        <legend>Character List</legend>
                        <Link to="/">Home</Link>
                        {userCharacters.map(character => {
                            const { characterName, characterClass, id } = character;
                            return <Link key={id} to={`/${characterClass.replace(/\s/g, '')}/${id}`}>{characterName}</Link>
                        })}
                    </FieldsetNavContainer>                    
                )
            }}
        </Query>
    )
};

export default SideNav;