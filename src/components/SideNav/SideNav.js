import React from 'react';
import styled from 'styled-components';

const SideNavContainer = styled.nav`
    display: flex;
    flex-direction: column;
    width: 12.5%;
    background: grey;
`

const SideNav = () => {
    return (
        <SideNavContainer>
            <h1>SideNav</h1>
        </SideNavContainer>
    )
};

export default SideNav;