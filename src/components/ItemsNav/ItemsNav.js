import React from 'react';
import styled from 'styled-components';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import { withRouter } from 'react-router';

import ItemAccordian from './ItemAccordian/ItemAccordian';

const ItemsNavContainer = styled.nav`
    display: flex;
    flex-direction: column;
    width: 17.5%;
`

const Item = styled.div`
    height: 10rem;
    width: 99%;
    border: 1px solid green;
    display: flex;
    justify-content: space-around;
    align-items: center;
`

const GET_CLASS_FROM_CHARACTER = gql`
    {
        userCharacters @client {
            characterClass
        }
    }
`;

const GET_ITEMS = gql`
    {
        items @client{
            id
            name
            slots
            icon
            setName
            type {
                id
            }
        }
    }
`;



const ItemsNav = (props) => {
    const { id: currentUserClassId } = props.match.params
    return (
        <Query query={GET_CLASS_FROM_CHARACTER}>
            {data => {
                const { data: localData } = data;
                const { userCharacters } = localData;
                const currentCharacter = userCharacters[0];
                const { characterClass } = currentCharacter;

                return (
                    <Query query={GET_ITEMS}>
                        {data => {
                            const { data: localData } = data;
                            const { items } = localData;

                            return (
                                <ItemsNavContainer>
                                    {items.map((item) => {        
                                        return (
                                            <ItemAccordian {...item} />
                                    )})}
                                </ItemsNavContainer>
                            )
                        }}
                    </Query>
                )
            }}
        </Query>
    )
}

export default withRouter(ItemsNav);