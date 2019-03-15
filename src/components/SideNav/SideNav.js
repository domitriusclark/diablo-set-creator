import React from 'react';
import styled from 'styled-components';
import { Query } from 'react-apollo';
import { GET_USER_CHARACTERS } from '../CharacterForm/CharacterForm';
import { Link } from 'react-router-dom';

const SideNavContainer = styled.nav`
    display: flex;
    flex-direction: column;
    width: 12.5%;
    background: grey;
`

const SideNav = () => {
    return (
        <Query query={GET_USER_CHARACTERS}>
            {({data}) => {
                const { userCharacters } = data;
                return (
                    <SideNavContainer>
                        <Link to="/">Home</Link>
                        {userCharacters.map(character => {
                            const { characterName, characterClass, id } = character;
                            return <Link to={`/${characterClass.replace(/\s/g, '')}/${id}`}>{characterName}</Link>
                        })}
                    </SideNavContainer>                    
                )
            }}
        </Query>
    )
};

export default SideNav;