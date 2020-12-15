import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Navbar extends Component {
    render() {
        return (
            <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
                <Link to="/" className='navbar-brand'>About</Link>
                <Link to="/portfolio" className='navbar-brand'>Portfolio</Link>
                <Link to='/contact' className="navbar-brand">Contact</Link>
            </nav>
        )
    }
}