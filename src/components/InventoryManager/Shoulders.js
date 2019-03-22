import React from 'react';
import styled from 'styled-components';
import {EquipmentName } from './InventoryManager';

const EquipmentSlot = styled.div`
    width: 10rem;
    height: 10rem;
    display: flex;
    flex-direction: column;   
`

const ShouldersSlot = styled(EquipmentSlot)`

`

const Shoulders = ({ item, slot_shoulders }) => {
    if (item !== undefined ) {
        if (item.slots[0].includes('shoulders')) {
            slot_shoulders.push(item);
            return (
                <ShouldersSlot key={item.id}>
                    <EquipmentName>
                        <img src={`http://media.blizzard.com/d3/icons/items/large/${item.icon}.png`}></img>
                    </EquipmentName>
                </ShouldersSlot>
            )
        }
    }
    return (
        <ShouldersSlot>
            <EquipmentName>
                    
            </EquipmentName>
        </ShouldersSlot>
    ) 
}

export default Shoulders;