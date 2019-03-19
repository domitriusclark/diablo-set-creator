import React, { Fragment } from 'react';
import styled  from 'styled-components';

const InventoryManagerContainer = styled.div`
    height: 100vh;
    width: 70%;
    background: rebeccapurple;
`;

const EquipmentSlot = styled.div`
    width: 5rem;
    height: 10rem;
    display: flex;
    flex-direction: column;
    background: black;
`

const EquipmentName = styled.div`
    align-self: flex-end;
    height: 20%;
    color: white;
`


const InventoryManager = (props) => {
    const { currentCharacter } = props;
    return (
        <InventoryManagerContainer>
            {currentCharacter.equipment.map(item => {                            
                return (
                    <EquipmentSlot>
                        <EquipmentName>
                            <p></p>
                        </EquipmentName>
                    </EquipmentSlot>
                )
            })}
        </InventoryManagerContainer>      
    )
};

export default InventoryManager;