import React from 'react';
import styled from 'styled-components';
import { EquipmentName } from './InventoryManager';

const EquipmentSlot = styled.div`
    width: 10rem;
    height: 10rem;
    display: flex;
    flex-direction: column;   
`

const HandsSlot = styled(EquipmentSlot)`
    
`

const Hands = ({ item, slot_hands }) => {
    if (item !== undefined ) {
        if (item.slots[0].includes('hands' || "right-hand" || "left-hand")) {
            slot_hands.push(item);
            return (
                <HandsSlot key={item.id}>
                    <EquipmentName>
                        <img src={`http://media.blizzard.com/d3/icons/items/large/${item.icon}.png`}></img>
                    </EquipmentName>
                </HandsSlot>
            )
        }
    }
    return (
        <HandsSlot>
            <EquipmentName>
                    
            </EquipmentName>
        </HandsSlot>
    ) 
}

export default Hands;