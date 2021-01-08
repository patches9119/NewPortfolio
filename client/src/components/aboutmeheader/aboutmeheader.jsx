import React, { Component } from 'react';
import { Container, Header, Icon, Button } from 'semantic-ui-react'
import './style.css'


const AboutHeader = () => {

  const handleClick = () => {
    window.location = '/portfolio'
  }

  return (
      <Container text>
      <Header
        as='h1'
        content='Patrick Sanders'
        inverted
        style={{
          fontSize: '4em',
          fontWeight: 'normal',
          marginBottom: 0,
          marginTop: '3em',
          color: 'black'
        }}
      />
      <Header
        as='h2'
        content='See my projects!'
        inverted
        style={{
          fontSize: '1.7em',
          fontWeight: 'normal',
          marginTop: '1.5em',
          color: 'black'
        }}
      />
      <Button primary size='large' onClick={handleClick}>
        Click Here
        <Icon name='right arrow' />
      </Button>
    </Container>
  )
}


export default AboutHeader