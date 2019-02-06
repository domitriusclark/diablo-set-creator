import gql from 'graphql-tag';

let nextCharacterId = 0;

export default {
    Mutation: {
        addCharacter: (_, { characterName, characterClass }, { cache }) => {
            const query = gql`
                query GetUserCharacters {
                    characters @client {
                        id 
                        characterName
                        characterClass
                    }
                }
            `;

            const previousState = cache.readQuery({ query });

            const newCharacter = {
                __typename: 'SingleCharacter',
                id: nextCharacterId++,
                characterName,
                characterClass
            };

            const data = {
                userCharacters: previousState.characters.concat(newCharacter)
            };

            cache.writeData({ data });

            return newCharacter;
            
        }
    }
}