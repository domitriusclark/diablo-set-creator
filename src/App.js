import React, { Component } from 'react';
import Routes from './routes';
import styled from 'styled-components';

const StyledAppContainer = styled.div`
    width: 100vw;
    height: 100vh;
    background: black;
`

class App extends Component {
  render() {
    return (
      <StyledAppContainer>
        <Routes />
      </StyledAppContainer>
    );
  }
}

export default App;
