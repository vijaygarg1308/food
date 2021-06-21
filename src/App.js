import React from "react";
import './App.css';
import Routes from './Routes';
import { BrowserRouter as Router,Link } from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <Router>
        <div className="HeaderLink">
          <Link to="/">HOME</Link>
          <Link to="/our-menu">OUR MENU</Link>
          <Link to="/services">SERVICES</Link>
          <Link to="/about">ABOUT</Link>
          <Link to="/delivery">DELIVERY</Link>
          <Link to="/reservation">RESERVATION</Link>
        </div>
        <Routes />
      </Router>
    </div>
  );
}

export default App;
