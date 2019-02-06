import gql from 'graphql-tag';

let nextCharacterId = 0;

export default {
    Mutation: {
        addCharacter: (_, { characterName, characterClass }, { cache }) => {
            const query = gql`
                query GetUserCharacters {
                    userCharacters @client {
                        id
                        characterName
                        characterClass
                    }
                }
            `
            const previousState = cache.readQuery({ query });

            console.log(previousState);

            const newCharacter = {
                __typename: 'SingleCharacter',
                id: nextCharacterId++,
                characterName,
                characterClass
            };

            const data = {
                userCharacterList: previousState.userCharacterList.concat(newCharacter),
            };

            cache.writeData({ data });

            return newCharacter;
        }
    }
}