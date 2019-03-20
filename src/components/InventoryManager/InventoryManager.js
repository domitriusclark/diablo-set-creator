import React from 'react';
import styled  from 'styled-components';

const InventoryManagerContainer = styled.div`
    height: 100vh;
    width: 70%;
    background: rebeccapurple;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const EquipmentSlot = styled.div`
    width: 10rem;
    height: 15rem;
    display: flex;
    flex-direction: column;
    
`

const EquipmentName = styled.div`
    align-self: flex-end;
    height: 20%;
    color: white;
`


const InventoryManager = (props) => {
    const { currentCharacter } = props;
    const characterSlots = {
        helm: [],
        shoulders: [],
        torso: [],
        hands: [],
        legs: [],
        feet: []    
    }
    console.log(characterSlots);
    return (
        <InventoryManagerContainer>
            {currentCharacter.equipment.map(item => {                            
                if (item.slots[0].includes('head')) {
                    characterSlots.helm.push(item);
                    console.log(characterSlots.helm);
                    return (
                        <EquipmentSlot style={{ marginBottom: '3rem'}} key={item.id}>
                            <EquipmentName>
                                <img src={`http://media.blizzard.com/d3/icons/items/large/${item.icon}.png`}></img>
                            </EquipmentName>
                        </EquipmentSlot>
                    )
                } else if (item.slots[0].includes('torso')) {
                    characterSlots.torso.push(item);
                    return (
                        <EquipmentSlot key={item.id}>
                            <EquipmentName>
                                <img src={`http://media.blizzard.com/d3/icons/items/large/${item.icon}.png`}></img>
                            </EquipmentName>
                        </EquipmentSlot>
                    )
                } else if (item.slots[0].includes('shoulders')) {
                    characterSlots.shoulders.push(item);
                    return characterSlots.shoulders.length > 0 ? (
                        <EquipmentSlot key={item.id}>
                            <EquipmentName>
                                <img src={`http://media.blizzard.com/d3/icons/items/large/${item.icon}.png`}></img>
                            </EquipmentName>
                        </EquipmentSlot>
                    ) : characterSlots.shoulders.length > 1 && (
                        <EquipmentSlot key={item.id}>
                            <EquipmentName>
                                <img src={`http://media.blizzard.com/d3/icons/items/large/${item.icon}.png`}></img>
                            </EquipmentName>
                        </EquipmentSlot>
                    )
                } else if (item.slots[0].includes('right-hand' || 'hands')) {
                    characterSlots.hands.push(item);
                    return characterSlots.hands.length > 0 ? (
                        <EquipmentSlot key={item.id}>
                            <EquipmentName>
                                <img src={`http://media.blizzard.com/d3/icons/items/large/${item.icon}.png`}></img>
                            </EquipmentName>
                        </EquipmentSlot>
                    ) : characterSlots.hands.length > 1 && (
                        <EquipmentSlot key={item.id}>
                            <EquipmentName>
                                <img src={`http://media.blizzard.com/d3/icons/items/large/${item.icon}.png`}></img>
                            </EquipmentName>
                        </EquipmentSlot>
                    )
                } else if (item.slots[0].includes('left-hand' || "hands")) {
                    characterSlots.hands.push(item);
                    return characterSlots.hands.length > 0 ? (
                        <EquipmentSlot key={item.id}>
                            <EquipmentName>
                                <img src={`http://media.blizzard.com/d3/icons/items/large/${item.icon}.png`}></img>
                            </EquipmentName>
                        </EquipmentSlot>
                    ) : characterSlots.hands.length > 1 && (
                        <EquipmentSlot key={item.id}>
                            <EquipmentName>
                                <img src={`http://media.blizzard.com/d3/icons/items/large/${item.icon}.png`}></img>
                            </EquipmentName>
                        </EquipmentSlot>
                    )
                } else if (item.slots[0].includes('legs')) {
                    characterSlots.legs.push(item);
                    return (
                        <EquipmentSlot key={item.id}>
                            <EquipmentName>
                                <img src={`http://media.blizzard.com/d3/icons/items/large/${item.icon}.png`}></img>
                            </EquipmentName>
                        </EquipmentSlot>
                    )
                } else if (item.slots[0].includes('feet')) {
                    characterSlots.feet.push(item);
                    return characterSlots.feet.length > 0 ? (
                        <EquipmentSlot key={item.id}>
                            <EquipmentName>
                                <img src={`http://media.blizzard.com/d3/icons/items/large/${item.icon}.png`}></img>
                            </EquipmentName>
                        </EquipmentSlot>
                    ) : characterSlots.feet.length > 1 && (
                        <EquipmentSlot key={item.id}>
                            <EquipmentName>
                                <img src={`http://media.blizzard.com/d3/icons/items/large/${item.icon}.png`}></img>
                            </EquipmentName>
                        </EquipmentSlot>
                    )
                } 
            })}
        </InventoryManagerContainer>      
    )
};

export default InventoryManager;