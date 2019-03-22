import gql from 'graphql-tag'
import uuid from 'uuid/v4'
import { EquipmentName } from '../../components/InventoryManager/InventoryManager';

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
                            items {
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
                }
            `;

            const randomId = uuid();

            const prevState = cache.readQuery({ query });
    
            const newCharacter = {
                __typename: 'SingleCharacter',
                id: randomId,
                characterName,
                characterClass,
                equipment: [
                    {
                        name: 'head_slot',
                        items: [],
                        __typename: 'Slot'
                    },
                    {
                        name: 'shoulders_slot',
                        items: [],
                        __typename: 'Slot'
                    },
                    {
                        name: 'torso_slot',
                        items: [],
                        __typename: 'Slot'
                    },
                    {
                        name: 'belt_slot',
                        items: [],
                        __typename: 'Slot'
                    },                    
                    {
                        name: 'right_hand_slot',
                        items: [],
                        __typename: 'Slot'
                    },
                    {
                        name: 'left_hand_slot',
                        items: [],
                        __typename: 'Slot'
                    },
                    {
                        name: 'amulet_slot',
                        items: [],
                        __typename: 'Slot'
                    },
                    {
                        name: 'hands_slot',
                        items: [],
                        __typename: 'Slot'
                    },
                    {
                        name: 'rings_slot',
                        items: [],
                        __typename: 'Slot'
                    },
                    {
                        name: 'legs_slot',
                        items: [],
                        __typename: 'Slot'
                    },
                    {
                        name: 'feet_slot',
                        items: [],
                        __typename: 'Slot'
                    }
                ]
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
                        items {
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
            `
            const prevState = cache.readFragment({ fragment, id });

            if (item.slots[0].includes('head')) {
                const index = prevState.equipment.findIndex((item) => {
                    return item.name.includes('head_slot');
                })

                const addItem = {
                    name: 'head_slot',
                    items: prevState.equipment[index].items.concat(item),
                    __typename: 'Slot'
                }

                prevState.equipment.splice(index, 1 ,addItem)
                
                const newState = prevState.equipment;

                const data = { 
                    equipment: newState
                }

                return cache.writeFragment({ 
                    fragment,
                    id,
                    data 
                });
            } else if (item.slots[0].includes('shoulders')) {
                const index = prevState.equipment.findIndex((item) => {
                    return item.name.includes('shoulders_slot');
                })

                const addItem = {
                    name: 'shoulders_slot',
                    items: prevState.equipment[index].items.concat(item),
                    __typename: 'Slot'
                }

                prevState.equipment.splice(index, 1 ,addItem)
                
                const newState = prevState.equipment;

                const data = { 
                    equipment: newState
                }

                return cache.writeFragment({ 
                    fragment,
                    id,
                    data 
                });
            } else if (item.slots[0].includes('torso')) {
                const index = prevState.equipment.findIndex((item) => {
                    return item.name.includes('torso_slot');
                })

                const addItem = {
                    name: 'torso_slot',
                    items: prevState.equipment[index].items.concat(item),
                    __typename: 'Slot'
                }

                prevState.equipment.splice(index, 1 ,addItem)
                
                const newState = prevState.equipment;

                const data = { 
                    equipment: newState
                }

                return cache.writeFragment({ 
                    fragment,
                    id,
                    data 
                });
            } else if (item.slots[0].includes('amulet')) {
                const index = prevState.equipment.findIndex((item) => {
                    return item.name.includes('amulet_slot');
                })

                const addItem = {
                    name: 'amulet_slot',
                    items: prevState.equipment[index].items.concat(item),
                    __typename: 'Slot'
                }

                prevState.equipment.splice(index, 1 ,addItem)

                const newState = prevState.equipment;
                
                const data = { 
                    equipment: newState
                }

                return cache.writeFragment({ 
                    fragment,
                    id,
                    data 
                });
            } else if (item.slots[0].includes('hands')) {
                const index = prevState.equipment.findIndex((item) => {
                    return item.name.includes('hands_slot');
                })

                const addItem = {
                    name: 'hands_slot',
                    items: prevState.equipment[index].items.concat(item),
                    __typename: 'Slot'
                }

                prevState.equipment.splice(index, 1 ,addItem)

                const newState = prevState.equipment;

                const data = { 
                    equipment: newState
                }

                return cache.writeFragment({ 
                    fragment,
                    id,
                    data 
                });
            } else if (item.slots[0].includes('belt')) {
                const index = prevState.equipment.findIndex((item) => {
                    return item.name.includes('belt_slot');
                })

                const addItem = {
                    name: 'belt_slot',
                    items: prevState.equipment[index].items.concat(item),
                    __typename: 'Slot'
                }

                prevState.equipment.splice(index, 1 ,addItem)

                const newState = prevState.equipment;

                const data = { 
                    equipment: newState
                }

                return cache.writeFragment({ 
                    fragment,
                    id,
                    data 
                });
            } else if (item.slots[0].includes('right-hand')) {
                const index = prevState.equipment.findIndex((item) => {
                    return item.name.includes('right_hand_slot');
                })

                const addItem = {
                    name: 'right_hand_slot',
                    items: prevState.equipment[index].items.concat(item),
                    __typename: 'Slot'
                }

                prevState.equipment.splice(index, 1 ,addItem)

                const newState = prevState.equipment;

                const data = { 
                    equipment: newState
                }

                return cache.writeFragment({ 
                    fragment,
                    id,
                    data 
                });
            } else if (item.slots[0].includes('left-hand')) {
                const index = prevState.equipment.findIndex((item) => {
                    return item.name.includes('left_hand_slot');
                })

                const addItem = {
                    name: 'left_hand_slot',
                    items: prevState.equipment[index].items.concat(item),
                    __typename: 'Slot'
                }

                prevState.equipment.splice(index, 1 ,addItem)

                const newState = prevState.equipment;

                const data = { 
                    equipment: newState
                }

                return cache.writeFragment({ 
                    fragment,
                    id,
                    data 
                });
            } else if (item.slots[0].includes('rings')) {
                const index = prevState.equipment.findIndex((item) => {
                    return item.name.includes('ring_slot');
                })

                const addItem = {
                    name: 'ring_slot',
                    items: prevState.equipment[index].items.concat(item),
                    __typename: 'Slot'
                }

                prevState.equipment.splice(index, 1 ,addItem)

                const newState = prevState.equipment;

                const data = { 
                    equipment: newState
                }

                return cache.writeFragment({ 
                    fragment,
                    id,
                    data 
                });
            } else if (item.slots[0].includes('legs')) {
                const index = prevState.equipment.findIndex((item) => {
                    return item.name.includes('legs_slot');
                })

                const addItem = {
                    name: 'legs_slot',
                    items: prevState.equipment[index].items.concat(item),
                    __typename: 'Slot'
                }

                prevState.equipment.splice(index, 1 ,addItem)

                const newState = prevState.equipment;

                const data = { 
                    equipment: newState
                }

                return cache.writeFragment({ 
                    fragment,
                    id,
                    data 
                });
            } else if (item.slots[0].includes('feet')) {
                const index = prevState.equipment.findIndex((item) => {
                    return item.name.includes('feet_slot');
                })

                const addItem = {
                    name: 'feet_slot',
                    items: prevState.equipment[index].items.concat(item),
                    __typename: 'Slot'
                }

                prevState.equipment.splice(index, 1 ,addItem)
                
                const newState = prevState.equipment;

                console.log(newState)
                const data = { 
                    equipment: newState
                }

                return cache.writeFragment({ 
                    fragment,
                    id,
                    data 
                });
            }
            
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