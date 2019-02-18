import React, { Component } from 'react';
import {BrowserRouter as Router } from 'react-router-dom';
import './App.css';

import Routes from './Routes';
import Menu from './Menu';
import Header from '../components/Header';
// import NavMobile from '../components/NavMobile';
// import HeaderMobile from '../components/HeaderMobile';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="container_app">
          <Header />
          <Menu/>
          <Routes/>
        </div>
      </Router>
    );
  }
}

export default App;
