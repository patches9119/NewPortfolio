import React, { Component } from 'react';
import { Container, Segment, Grid, Image, Divider } from 'semantic-ui-react';

import Aboutmeheader from '../../components/aboutmeheader/aboutmeheader.jsx';


const About = () => (
  <Container>
  <Aboutmeheader></Aboutmeheader>
  <Segment>
    <Grid columns={2} relaxed='very'>
      <Grid.Column>
        <p>
          <Image bordered size='medium' src='https://patches9119.github.io/responsive-portfolio/assets/chuckeshoops.jpg' />
        </p>
      </Grid.Column>
      <Grid.Column textAlign='center'>
        <p>
        My name is Patrick and I am currently a Full-Stack web developer living in San Diego. 
        Some of my hobbies include hiking and fighting games. Also working to find the common ground between my skills and my passions.
        </p>
      </Grid.Column>
    </Grid>

    <Divider vertical></Divider>
  </Segment>
  </Container>
)

export default About