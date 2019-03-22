import React from 'react';
import styled from 'styled-components';
import {EquipmentName } from './InventoryManager';

const EquipmentSlot = styled.div`
    width: 10rem;
    height: 10rem;
    display: flex;
    flex-direction: column;   
`

const TorsoSlot = styled(EquipmentSlot)`

`

const Torso = ({ item, slot_torso }) => {
    if (item !== undefined ) {
        if (item.slots[0].includes('torso')) {
            slot_torso.push(item);
            return (
                <TorsoSlot key={item.id}>
                    <EquipmentName>
                        <img src={`http://media.blizzard.com/d3/icons/items/large/${item.icon}.png`}></img>
                    </EquipmentName>
                </TorsoSlot>
            )
        }
    }
    return (
        <TorsoSlot>
            <EquipmentName>
                    
            </EquipmentName>
        </TorsoSlot>
    ) 
}

export default Torso;