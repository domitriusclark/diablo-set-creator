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
        id: ID!
        characterName: String!
        characterClass: String!
        equipment: [Item]
    }

    type ItemType {
        twoHanded: Boolean!
        id: ID!
    }

    type Item {
        id: ID!
        name: String!
        icon: String
        slots: [String]!
        setName: String!
        type: ItemType
    }

    type Mutation {
        addCharacter(characterName: String!, characterClass: String!): Character
        addEquipmentSlot(id: ID!, item: Item!): Item
    }

    type Query {
        characters: [Character]
        userCharacters: [UserCharacter]
        items: [Item]
        userCharacter(id: ID!): UserCharacter!
    }
`

const client = new ApolloClient({
    cache,
    resolvers,
    typeDefs
});

cache.writeData({
    data: {
        // userCharacters: [{ 
        //     __typename: "SingleCharacter", 
        //     characterName: "Juicetrades", 
        //     characterClass: "DemonHunter", 
        //     id: "rando_123456_wow",
        //     equipment: []
        // }],   
        userCharacters: [], 
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
                id: "Unique_Shoulder_Set_05_x1",
                name: "Raekor's Burden",
                icon: "unique_shoulder_set_05_x1_demonhunter_male",
                slots: ["shoulders"],
                setName: "The Legacy of Raekor",
                type: {
                    __typename: 'ItemType',
                    twoHanded: false,
                    id: "Shoulders_Barbarian"
                }
            },
            {
                __typename: "Item",
                id: "Unique_Helm_Set_02_p3",
                name: "Arachyr's Visage",
                icon: "unique_helm_set_02_p3_demonhunter_male",
                slots: ["head"],
                setName: "Spirit of Arachyr",
                type: {
                    __typename: 'ItemType',
                    twoHanded: false,
                    id: "Helm_WitchDoctor"
                }
            },
            {
                __typename: "Item",
                id: "Unique_Chest_Set_06_x1",
                name: "Firebird's Breast",
                icon: "unique_chest_set_06_x1_demonhunter_male",
                slots: ["torso"],
                setName: "Firebird's Finery",
                type: {
                    __typename: 'ItemType',
                    twoHanded: false,
                    id: "ChestArmor_Wizard"
                }
            },
            {
                __typename: "Item",
                id: "P6_Necro_Set_1_Pants",
                name: "Rathma's Skeletal Legplates",
                icon: "p6_necro_set_1_pants_demonhunter_male",
                slots: ["legs"],
                setName: "Bones of Rathma",
                type: {
                    __typename: 'ItemType',
                    twoHanded: false,
                    id: "Legs_Necromancer"
                }
            },
            {
                __typename: "Item",
                id: "Unique_Boots_Set_01_p3",
                name: "Uliana's Destiny",
                icon: "unique_boots_set_01_p3_demonhunter_male",
                slots: ["feet"],
                setName: "Uliana's Stratagem",
                type: {
                    __typename: 'ItemType',
                    twoHanded: false,
                    id: "Boots_Monk"
                }
            },
            {
                __typename: "Item",
                id: "Unique_CruShield_107_x1",
                name: "The Final Witness",
                icon: "unique_crushield_107_x1_demonhunter_male",
                slots: [
                    "right-hand",
                    "follower-right-hand"
                ],
                setName: "Uliana's Stratagem",
                type: {
                    __typename: 'ItemType',
                    twoHanded: false,
                    id: "CrusaderShield"
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


