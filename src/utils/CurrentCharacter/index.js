import React from 'react';
import { withRouter } from 'react-router-dom';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';

const GET_CHARACTER = gql`
    query GetSingleCharacte($id: Int!) {
        userCharacter(id: $id) @client{
            characterName
            id
        }
    }
`;

const CurrentCharacter = (props) => {
    return (
        <Query query={GET_CHARACTER} variables={{id: parseInt(props.match.params.characterId)}}>
            {(payload) => {
                return props.children({data: {...payload.data}});
            }}
        </Query>
    )
};

export default withRouter(CurrentCharacter);