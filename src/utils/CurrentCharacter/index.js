import React from 'react';
import { withRouter } from 'react-router-dom';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';

const GET_CHARACTER = gql`
    query GetSingleCharacter($id: ID!) {
        userCharacter(id: $id) @client{
            characterName
            id
            equipment
            characterClass
            characterName
        }
    }
`;

const CurrentCharacter = (props) => {
    const urlId = props.match.params.characterId;
    return (
        <Query query={GET_CHARACTER} variables={{
            id: urlId
        }}>
            {(payload) => {                
                return props.children({data: {...payload.data}}, payload.loading);
            }}
        </Query>
    )
};

export default withRouter(CurrentCharacter);