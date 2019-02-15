import React from 'react';
import styled from 'styled-components';
import { useQuery } from 'react-apollo-hooks';
import gql from 'graphql-tag';

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
        userCharacters {
            characterClass
        }
    }
`;

const GET_ITEMS = gql`
    {
        items {
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


const ItemsNav = () => {
    const { data } = useQuery(GET_CLASS_FROM_CHARACTER);
    const { userCharacters } = data;
    const currentCharacter = userCharacters[0];
    const { characterClass } = currentCharacter;

    const { data: itemData } = useQuery(GET_ITEMS);
    const { items } = itemData;



    return (
        <ItemsNavContainer>
            {items.map((item) => {
                const { name, icon, setName, type } = item;
                const { id } = type;
                
                return (
                    <Item>
                        <p>{name}</p>
                        <p>{setName}</p>
                    </Item>
            )})}
        </ItemsNavContainer>
    )
};

export default ItemsNav;