import React from 'react';
import styled from 'styled-components';
import { EquipmentName } from './InventoryManager';

const EquipmentSlot = styled.div`
    width: 10rem;
    height: 10rem;
    display: flex;
    flex-direction: column;   
`

const HelmSlot = styled(EquipmentSlot)`

`

const Helm = ({ equip }) => {
    const { items } = equip
    if (items.length >= 0) {
        items.map(item => {
            console.log(item)
            return (
                
                <HelmSlot key={item.id}>
                    <EquipmentName>
                        <img src={`http://media.blizzard.com/d3/icons/items/large/${item.icon}.png`}></img>
                    </EquipmentName>
                </HelmSlot>
            )    
        })   
    }
    return (
        <HelmSlot>
            <EquipmentName>
                    
            </EquipmentName>
        </HelmSlot>
    ) 
}

export default Helm;