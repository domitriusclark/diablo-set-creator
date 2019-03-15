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
                characterClass,
                equipment: []
            };

            const data = {
                userCharacters: previousState.userCharacters.concat(newCharacter)
            };

            cache.writeData({ data });

            return newCharacter;
            
        },
        addEquipment: (_, { item, id: characterId }, { cache }) => {
            const query = gql`
                query GetSingleCharacter($id: Int!) {
                    userCharacter(id: $id) @client {
                        equipment
                    }
                }                
            `;

            const previousState = cache.readQuery({ query, variables: { id: characterId }});

             const data = {
                 userCharacter: {
                     equipment: previousState.userCharacter.equipment.push(item)
                 }
             }

             cache.writeData({ data });

             return item;
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
            return character;
        }
    }
}