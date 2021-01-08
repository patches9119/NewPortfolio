import React, { Component } from 'react';
import './style.css';
import BuffPicture from '../../assets/Main_Page.png';
// import EmployeeList from './employee-list.component.js';
import ProjectList from '../../components/projects/projectsList';


export default class Portfolio extends Component {
    render() {
        return (
        <ProjectList />
        )
    }
}