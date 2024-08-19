import React from 'react';
import { NavLink } from 'react-router-dom';
import './BottomNav.css'; 

function BottomNav() {
  return (
    <>
      <nav className="nav-second flex">
        <div className="logo">
          <h1>FALCONS</h1>
        </div>
        <div className="menu">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <ul className="flex">
          <li><NavLink to="/proyect" className="links">Proyect</NavLink></li>
          <li><NavLink to="/registration" className="links">Registration</NavLink></li>
          <li><NavLink to="/" className="links">Matches</NavLink></li>
          <li><NavLink to="/policies" className="links">Register</NavLink></li>
        </ul>
      </nav>
    </>
  );
};

export default BottomNav;

