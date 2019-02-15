import React from 'react';
import SideNav from '../SideNav/SideNav';
import InventoryManager from '../InventoryManager/InventoryManager';
import ItemsNav from '../ItemsNav/ItemsNav';
import styled from 'styled-components'

const SetCreationWrapper = styled.div`
    display: flex;
    width: 100%;
    border: 2px solid red;
`


const CharacterSetLanding = () => {
    return (
        <SetCreationWrapper>
            <SideNav />
            <InventoryManager />
            <ItemsNav />
        </SetCreationWrapper>
    )
};

export default CharacterSetLanding;