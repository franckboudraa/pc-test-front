import React, { Component } from 'react';
import { Container, Menu } from 'semantic-ui-react';

import Dishes from './Dishes';

class App extends Component {
  render() {
    return (
      <Container>
        <Menu stackable widths={1}>
          <Menu.Item>
            <h1>popchef</h1>
          </Menu.Item>
        </Menu>
        <Dishes />
      </Container>
    );
  }
}

export default App;
