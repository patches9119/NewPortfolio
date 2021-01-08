import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import './App.css';
import About from './pages/About/about';
import Portfolio from './pages/Portfolio/portfolio';
import Contact from './pages/Contact/contact';
import Navbar from './components/navbar/navbar';
import 'semantic-ui-css/semantic.min.css';

function App() {
  return (
    <Router>
    <div class="container">
      <Navbar></Navbar>
      <br/>
      <Route path= '/' exact component = {About} />
      <Route path = '/portfolio' exact component = {Portfolio} />
      <Route path = '/contact' exact component = {Contact} />
    </div>
    </Router>
  );
}

export default App;
