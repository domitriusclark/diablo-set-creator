import React, { Component } from 'react';
import CharacterForm from '../CharacterForm/CharacterForm';
import styled from 'styled-components';

const AppContainer = styled.div`
 
`

class Main extends Component {
    render() {
        const { DefaultComponent } = this.props;
        return (
            <AppContainer>
                { !DefaultComponent ? (<CharacterForm />) : (<DefaultComponent /> ) }                               
            </AppContainer>                                                    
        )
    };
};
 
export default Main;