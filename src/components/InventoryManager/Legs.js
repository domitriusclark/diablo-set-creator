import React from 'react';
import styled from 'styled-components';
import { EquipmentName } from './InventoryManager';

const EquipmentSlot = styled.div`
    width: 10rem;
    height: 10rem;
    display: flex;
    flex-direction: column;   
`

const LegsSlot = styled(EquipmentSlot)`

`

const Legs = ({ item, slot_legs }) => {
    if (item !== undefined ) {
        if (item.slots[0].includes('legs')) {
            slot_legs.push(item);
            return (
                <LegsSlot key={item.id}>
                    <EquipmentName>
                        <img src={`http://media.blizzard.com/d3/icons/items/large/${item.icon}.png`}></img>
                    </EquipmentName>
                </LegsSlot>
            )
        }
    }
    return (
        <LegsSlot>
            <EquipmentName>
                    
            </EquipmentName>
        </LegsSlot>
    ) 
}

export default Legs;