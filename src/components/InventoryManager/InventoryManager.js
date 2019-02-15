import React from 'react';
import styled  from 'styled-components';

const InventoryManagerContainer = styled.div`
    height: 100vh;
    width: 70%;
    background: rebeccapurple;
`

const InventoryManager = () => {
    return (
        <InventoryManagerContainer>
            <h1>InventoryManager</h1>
        </InventoryManagerContainer>
    )
};

export default InventoryManager;