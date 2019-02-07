import gql from 'graphql-tag';

let nextCharacterId = 0;

export default {
    Mutation: {
        addCharacter: (_, { characterName }, { cache }) => {
            const query = gql`
                query GetUserCharacters {
                    userCharacters @client {
                        id
                        characterName                      
                    }
                }
            `

            const previousState = cache.readQuery({ query });

            const newCharacter = {
                __typename: 'SingleCharacter',
                id: nextCharacterId++,
                characterName
            };

            const data = {
                userCharacters: previousState.userCharacters.concat(newCharacter),
            };

            cache.writeData({ data });

            return newCharacter;
        }
    }
}