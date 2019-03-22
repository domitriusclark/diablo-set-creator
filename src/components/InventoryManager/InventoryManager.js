import React from 'react';
import styled  from 'styled-components';

const InventoryManagerContainer = styled.div`
    width: 75%;
    height: 85%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: #A78255;
`;

const EquipmentSlot = styled.div`
    width: 10rem;
    height: 10rem;
    display: flex;
    flex-direction: column;   
`

export const EquipmentName = styled.div`
    align-self: flex-end;
    height: 5rem;
    width: 5rem;
    color: white;
    background: #714619;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const InventoryManager = (props) => {
    const { currentCharacter } = props; 
    return (
        <InventoryManagerContainer>
            {currentCharacter.equipment.map((equip) => {  
                return <EquipmentSlot equip={equip}>
                    <EquipmentName>
                        {equip.items.length > 0 ? <img src={`http://media.blizzard.com/d3/icons/items/large/${equip.items[0].icon}.png`}></img> : null}
                    </EquipmentName>
                </EquipmentSlot>
            })}
        </InventoryManagerContainer>
    )
};

export default InventoryManager;