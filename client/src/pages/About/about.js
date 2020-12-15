import React, { Component } from 'react';
// import EmployeeList from './employee-list.component.js';

export default class About extends Component {
    render() {
        return (
            <div class="container">
      <div class="row">
        <div class="col-md-8">
          <div class="page-header">
            <h1>About Me</h1>
          </div>
          <div class="row">
            <div class="col-md-3">
              <img src="https://patches9119.github.io/responsive-portfolio/assets/chuckeshoops.jpg" alt="Placeholder" class="img-thumbnail"></img>
            </div>
            <div class="col-md-9">
              <p>
                My name is Patrick and I am currently a Full-Stack web developer living in San Diego.
                Some of my hobbies include hiking and fighting games. Also working to find the common ground between my skills and my passions.
              </p>
            </div>
          </div>
        </div>
        </div>
        </div>
        )
    }
}