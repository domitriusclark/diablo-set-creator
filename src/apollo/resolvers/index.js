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
                            item {
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
                const headSlot = prevState.equipment.find((item) => {
                    return item.name.includes('head_slot');
                })
                console.log(headSlot);
                const data = { 
                    equipment: [
                        ...prevState.equipment,
                        {
                            ...headSlot,
                            items: headSlot.items.concat(item)
                        }
                    ]
                    
                }
                return cache.writeFragment({ 
                    fragment,
                    id,
                    data 
                });
            } else if (item.slots[0].includes('shoulders')) {
                const shouldersSlot = prevState.equipment.find((item) => {
                    return item.name.includes('shoulders_slot');
                })
                const data = { 
                    equipment: [
                        ...prevState.equipment,
                        {
                            ...shouldersSlot,
                            items: shouldersSlot.items.concat(item),                            
                        }
                    ]
                    
                }
                return cache.writeFragment({ 
                    fragment,
                    id,
                    data 
                });
            } else if (item.slots[0].includes('torso')) {
                const torsoSlot = prevState.equipment.find((item) => {
                    return item.name.includes('torso_slot');
                })
                const data = { 
                    equipment: [
                        ...prevState.equipment,
                        {
                            ...torsoSlot,
                            items: torsoSlot.items.concat(item)                            
                        }
                    ]
                    
                }
                return cache.writeFragment({ 
                    fragment,
                    id,
                    data 
                });
            } else if (item.slots[0].includes('amulet')) {
                const amuletSlot = prevState.equipment.find((item) => {
                    return item.name.includes('amulet_slot');
                })
                const data = { 
                    equipment: [
                        ...prevState.equipment,
                        {
                            ...amuletSlot,
                            items: amuletSlot.items.concat(item),
                        }
                    ]
                    
                }
                return cache.writeFragment({ 
                    fragment,
                    id,
                    data 
                });
            } else if (item.slots[0].includes('hands' || 'right-hand' || 'left-hand')) {
                const handsSlot = prevState.equipment.find((item) => {
                    return item.name.includes('hands_slot');
                })
                const data = { 
                    equipment: [
                        ...prevState.equipment,
                        {
                            ...handsSlot,
                            items: handsSlot.items.concat(item)
                        }
                    ]
                    
                }
                return cache.writeFragment({ 
                    fragment,
                    id,
                    data 
                });
            } else if (item.slots[0].includes('rings')) {
                const ringsSlot = prevState.equipment.find((item) => {
                    return item.name.includes('rings_slot');
                })
                const data = { 
                    equipment: [
                        ...prevState.equipment,
                        {
                            ...ringsSlot,
                            items: ringsSlot.items.concat(item)
                        }
                    ]
                    
                }
                return cache.writeFragment({ 
                    fragment,
                    id,
                    data 
                });
            } else if (item.slots[0].includes('legs')) {
                const legsSlot = prevState.equipment.find((item) => {
                    return item.name.includes('legs_slot');
                })
                const data = { 
                    equipment: [
                        ...prevState.equipment,
                        {
                            ...legsSlot,
                            items: legsSlot.items.concat(item)
                        }
                    ]
                    
                }
                return cache.writeFragment({ 
                    fragment,
                    id,
                    data 
                });
            } else if (item.slots[0].includes('feet')) {
                const feetSlot = prevState.equipment.find((item) => {
                    return item.name.includes('feet_slot');
                })
                const data = { 
                    equipment: [
                        ...prevState.equipment,
                        {
                            ...feetSlot,
                            items: feetSlot.items.concat(item)
                        }
                    ]
                    
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