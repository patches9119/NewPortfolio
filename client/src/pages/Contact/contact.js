import React, { Component } from 'react';
import EmailPic from '../../assets/email.png';
import { Container, Image } from 'semantic-ui-react'

export default class Contact extends Component {
    render() {
        return (
         <Container>
    <div class="row">
      <div class="col-md-8">
        <div class="page-header">
          <h1>Contact Me</h1>
        </div>
        <div class="row">
          <div class="col-md-3">
            <Image src={EmailPic} size='small' alt="Placeholder" class="img-thumbnail"></Image>
          </div>
          <div class="col-md-9">
            <p>
              <ul>
                <li><strong>Email Address:</strong> <a href="mailto:pbsanders1@gmail.com">pbsanders1@gmail.com</a></li>
                <li><strong>GitHub Account:</strong> <a href="https://www.https://github.com/patches9119">Click Here</a></li>
                <li><strong>LinkedIn Profile:</strong> <a href="https://www.linkedin.com/in/patrick-sanders-003546193/">Click Here</a></li>
                <li><strong>Resume:</strong> <a href="./assets/Resume.33.pdf">Click Here</a>
                </li>
              </ul>
            </p>
          </div>
        </div>
      </div>
      </div>
      </Container>
        )
    }
}