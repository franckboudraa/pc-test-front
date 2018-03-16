import React, { Component } from 'react';
import { Container, Image, Menu } from 'semantic-ui-react';

import Dishes from './Dishes';

class App extends Component {
  render() {
    return (
      <Container>
        <Menu stackable widths={1}>
          <Menu.Item>
            <Image src="https://eatpopchef.com/assets/images/logo-green.svg" />
          </Menu.Item>
        </Menu>
        <Dishes />
      </Container>
    );
  }
}

export default App;
