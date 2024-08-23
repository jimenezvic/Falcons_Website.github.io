import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './BottomNav.css'; 

function BottomNav() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <nav className="nav-second">
        <div className="menu" onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <ul className={menuOpen ? "open" : ""}>
          <li id='follow'><NavLink to="/proyect" className="links">FALCONS ACADEMY</NavLink></li>
          <li><NavLink to="/proyect" className="links">Proyect</NavLink></li>
          <li><NavLink to="/registration" className="links">Registration</NavLink></li>
          <li><NavLink to="/" className="links">Matches</NavLink></li>
          <li><NavLink to="/policies" className="links">Register</NavLink></li>
        </ul>
      </nav>


    </>
  );
}

export default BottomNav;
