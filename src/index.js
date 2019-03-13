import React from 'react';
import ReactDOM from 'react-dom';
import { ApolloProvider } from 'react-apollo';
import { ApolloProvider as ApolloHooksProvider } from 'react-apollo-hooks';
import ApolloClient from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';

import resolvers from './apollo/resolvers';
import App from './App';

const cache = new InMemoryCache();

const typeDefs = `
    type UserCharacter {
        id: Int!
        characterName: String!
        characterClass: String!
    }

    type ItemType {
        twoHanded: Boolean!
        id: String!
    }

    type Item {
        id: String!
        name: String!
        icon: "String"
        slots: [String]!
        setName: String!
        type: ItemType
    }

    type Mutation {
        addCharacter(characterName: String!, characterClass: String!): Character
    }

    type Query {
        characters: [Character]
        userCharacters: [UserCharacter]
        items: [Item]
    }
`

const client = new ApolloClient({
    cache,
    typeDefs,
    resolvers
});

cache.writeData({
    data: {
        userCharacters: [{ 
            __typename: "SingleCharacter", 
            characterName: "Juicetrades", 
            characterClass: "Demon Hunter", 
            id: 0
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
        <ApolloHooksProvider client={client}>
            <App /> 
        </ApolloHooksProvider>
    </ApolloProvider>
    , document.getElementById('root')
);


