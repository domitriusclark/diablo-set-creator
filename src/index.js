import React from 'react';
import ReactDOM from 'react-dom';
import { ApolloProvider } from 'react-apollo';
import ApolloClient from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { ApolloLink } from 'apollo-link';
import { withClientState } from 'apollo-link-state';


import defaults from './apollo/defaults';
import resolvers from './apollo/resolvers';
import App from './App';
import './index.css';

const cache = new InMemoryCache();

const typeDefs = `
    type Character {
        id: Int!
        characterName: String!
        characterClass: String!
    }

    type Mutation {
        addCharacter(characterName: String!, characterClass: String!): Character
    }

    type Query {
        characters: [Character]
    }
`

const stateLink = withClientState({
    cache,
    defaults,
    resolvers,
    typeDefs
});

const client = new ApolloClient({
    cache,
    link: ApolloLink.from([
        stateLink
    ])
});

ReactDOM.render(
    <ApolloProvider client={client}>
        <App />
    </ApolloProvider>
    , document.getElementById('root')
);


