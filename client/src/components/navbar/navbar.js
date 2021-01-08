import React, { Component } from 'react'
import { Container, Menu, Segment } from 'semantic-ui-react'

export default class MenuExampleInvertedSegment extends Component {
  state = { activeItem: 'home' }

  handleItemClick = (e, { name }) => {
      this.setState({ activeItem: name });
      if(name === 'about me') {
          window.location = '/';
      } else {
          window.location = '/' + name;
      }
    }

  render() {
    const { activeItem } = this.state

    return (
        <Segment inverted>
        <Menu inverted secondary>
          <Menu.Item
            name='about me'
            active={activeItem === 'about me'}
            onClick={this.handleItemClick}
          />
          <Menu.Item
            name='portfolio'
            active={activeItem === 'portfolio'}
            onClick={this.handleItemClick}
          />
          <Menu.Item
            name='contact'
            active={activeItem === 'contact'}
            onClick={this.handleItemClick}
          />
        </Menu>
      </Segment>
    )
  }
}