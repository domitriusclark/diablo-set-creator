import React from 'react';
import SideNav from '../SideNav/SideNav';
import InventoryManager from '../InventoryManager/InventoryManager';
import ItemsNav from '../ItemsNav/ItemsNav';
import styled from 'styled-components'
import gql from 'graphql-tag'
import { Query } from 'react-apollo';
import { withRouter } from 'react-router-dom';

const SetCreationWrapper = styled.div`
    display: flex;
    width: 100%;
    border: 2px solid red;
`

const GET_CHARACTER = gql`
    query GetCharacter($id: ID!) {
        userCharacter(id: $id) @client {
            id
            characterClass
            characterName
            equipment {
                name
                id
                __typename
                icon
                slots
                setName
                type {
                    __typename
                    twoHanded
                    id
                }
            }
        }
    }
`;


const CharacterSetLanding = (props) => {
    return (
        <Query query={GET_CHARACTER} variables={{ id: props.match.params.characterId}}>
            {({ data, loading}) => {       
                if (loading ) return <p>Loading...</p>;
                const { userCharacter } = data;

                return (
                    <SetCreationWrapper>
                        <SideNav />
                        <InventoryManager currentCharacter={userCharacter} />
                        <ItemsNav currentCharacter={userCharacter}/>
                    </SetCreationWrapper>
                )
            }}
        </Query>
    )
};

export default withRouter(CharacterSetLanding);