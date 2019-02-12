import React from 'react';
import SideNav from '../SideNav/SideNav';
import InventoryManager from '../InventoryManager/InventoryManager';
import SetPicker from '../SetPicker/SetPIcker';

const CharacterSetLanding = () => {
    return (
        <div>
            <SideNav />
            <InventoryManager />
            <SetPicker />
        </div>
    )
};

export default CharacterSetLanding;