import React from 'react';
import { Link } from 'react-router-dom';
import './BottomNav.css'; 

function BottomNav() {
  return (
    <>
      <nav className="nav-second flex">
        <div className="logo">
          <h1>FALCONS</h1>
        </div>
        <ul className="flex">
          <li><Link to="/proyect" className="links">Proyect</Link></li>
          <li><Link to="/registration" className="links">Registration</Link></li>
          <li><Link to="/" className="links">Matches</Link></li>
          <li><Link to="/policies" className="links">Register</Link></li>
        </ul>
      </nav>
    </>
  );
};

export default BottomNav;

