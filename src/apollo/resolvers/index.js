import gql from 'graphql-tag'

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
            `;

            const previousState = cache.readQuery({ query });

            const newCharacter = {
                __typename: 'SingleCharacter',
                id: nextCharacterId++,
                characterName,
                characterClass
            };

            console.log('This is the new character obj', newCharacter);

            const data = {
                userCharacters: previousState.userCharacters.concat(newCharacter)
            };

            cache.writeData({ data });

            return newCharacter;
            
        },
        addEquipment: (_, { item }, { cache }) => {
            const query = gql`
                query GetCharacterSet {
                    userCharacter(id: )
                }
            `;
        }
    },
    Query: {
        userCharacter: (_, { id }, { cache }) => {
            const query = gql`
                query GetUserCharacters {
                    userCharacters @client {
                        id 
                        characterName     
                        characterClass                   
                    }
                }
            `;

            const prevState = cache.readQuery({ query });
            const { userCharacters } = prevState;
            const character = userCharacters.find(character => character.id === id);
            console.log(character);
            return character;
        }
    }
}