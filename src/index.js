import React from 'react';
import ReactDOM from 'react-dom';
import { ApolloProvider } from 'react-apollo';
import ApolloClient from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';

import gql from 'graphql-tag';  
import resolvers from './apollo/resolvers';
import App from './App';

const cache = new InMemoryCache();

const typeDefs = gql`
    type UserCharacter {
        id: Int!
        characterName: String!
        characterClass: String!
        equipment: [Item!]!
    }

    type ItemType {
        twoHanded: Boolean!
        id: String!
    }

    type Item {
        id: String!
        name: String!
        icon: String
        slots: [String]!
        setName: String!
        type: ItemType
    }

    type Mutation {
        addCharacter(characterName: String!, characterClass: String!): Character
        addEquipmentSlot(id: Int!, item: Item!): Item
    }

    type Query {
        characters: [Character]
        userCharacters: [UserCharacter]
        items: [Item]
        userCharacter(id: Int!): UserCharacter!
    }
`

const client = new ApolloClient({
    cache,
    resolvers,
    typeDefs
});

cache.writeData({
    data: {
        userCharacters: [{ 
            __typename: "SingleCharacter", 
            characterName: "Juicetrades", 
            characterClass: "DemonHunter", 
            id: 0,
            equipment: []
        }],    
        items: [
            {
                __typename: "Item",
                id: 'Unique_Gloves_Set_03_p2',
                name: 'Fiendish Grips',
                icon: 'unique_gloves_set_03_p2_demonhunter_male',
                slots: ["hands"],
                setName: 'Unhallowed Essence',
                type: {
                    __typename: 'ItemType',
                    twoHanded: false,
                    id: "Gloves_DemonHunter"
                }
            },
            {
                __typename: "Item",
                id: 'Unique_Gloves_Set_07_x1',
                name: "Marauder's Gloves",
                icon: 'unique_gloves_set_07_x1_demonhunter_male',
                slots: ["hands"],
                setName: 'Embodiment of the Marauder',
                type: {
                    __typename: 'ItemType',
                    twoHanded: false,
                    id: "Gloves_DemonHunter"
                }
            }
        ]
    }
})

ReactDOM.render(
    <ApolloProvider client={client}>
        <App />         
    </ApolloProvider>
    , document.getElementById('root')
);


