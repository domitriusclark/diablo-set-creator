import React from 'react';
import styled from 'styled-components';
import { EquipmentName } from './InventoryManager';

const EquipmentSlot = styled.div`
    width: 10rem;
    height: 10rem;
    display: flex;
    flex-direction: column;   
`

const FeetSlot = styled(EquipmentSlot)`

`

const Feet = ({ item, slot_feet }) => {
    if (item !== undefined ) {
        if (item.slots[0].includes('feet')) {
            slot_feet.push(item);
            return (
                <FeetSlot key={item.id}>
                    <EquipmentName>
                        <img src={`http://media.blizzard.com/d3/icons/items/large/${item.icon}.png`}></img>
                    </EquipmentName>
                </FeetSlot>
            )
        }
    }
    return (
        <FeetSlot>
            <EquipmentName>
                    
            </EquipmentName>
        </FeetSlot>
    ) 
}

export default Feet;