import gql from 'graphql-tag'
import uuid from 'uuid/v4'

export default {
    Mutation: {
        addCharacter: (_, { characterName, characterClass }, { cache }) => {
            const query = gql`
                query GetUserCharacters {
                    userCharacters @client {
                        id
                        characterName     
                        characterClass
                        equipment {
                            name
                            id
                            __typename
                            icon
                            slots
                            setName
                            type {
                                __typename
                                twoHanded
                                id
                            }
                        }                   
                    }
                }
            `;

            const randomId = uuid();

            const prevState = cache.readQuery({ query });
    
            const newCharacter = {
                __typename: 'SingleCharacter',
                id: randomId,
                characterName,
                characterClass,
                equipment: []
            };

            const data = {
                userCharacters: prevState.userCharacters.concat(newCharacter)
            }
            
            cache.writeData({ data });

            return newCharacter;
            
        },
        addEquipment: (_, { item, id: characterId }, { cache }) => {
            const id = `SingleCharacter:${characterId}`;
            const fragment = gql`
                fragment addEquip on SingleCharacter {
                    equipment {
                        name
                        id
                        __typename
                        icon
                        slots
                        setName
                        type {
                            __typename
                            twoHanded
                            id
                        }
                    }
                }
            `
            const prevState = cache.readFragment({ fragment, id });

            const data = { 
                equipment: prevState.equipment.concat(item)
            }

            cache.writeFragment({ 
                fragment,
                id,
                data 
            });
            return null;
        }
    },
    Query: {
        userCharacter: (_, { id }, { cache }) => {
            const query = gql`
                query GetUserCharacters {
                    userCharacters @client {
                        id       
                    }
                }
            `;
            
            const prevState = cache.readQuery({ query });
            const { userCharacters } = prevState;
            const character = userCharacters.find(character => {                
                return character.id === id
            });

            return character;
        }
    }
}