import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './BottomNav.css'; 

function BottomNav() {
  const[click, setClick] = useState(false)

  const handleClick = () => setClick(!click);

 
  return (
    <>
      <nav className='navbar'>
        <div className="nav-container">
          <NavLink to='/' className='nav-logo' activeclassname='active' onClick={handleClick}>
          FALCONS ACADEMY
          </NavLink>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li className='nav-item'>
            <NavLink to='/registration' className='nav-links' activeclassname='active' onClick={handleClick}>
          Home
          </NavLink>
            </li>
            <li className='nav-item'>
          <NavLink to='/proyect' className='nav-links' activeclassname='active' onClick={handleClick}>
          Team
          </NavLink>
            </li>
            <li className='nav-item'>
            <NavLink  to='/' className='nav-links' activeclassname='active' onClick={handleClick}>
          Our Project
          </NavLink>
            </li>
            
            
            <li className='nav-item'>
            <NavLink  to='/policies' className='nav-links' activeclassname='active' onClick={handleClick}>
          Get Started
          </NavLink>
            </li>
          </ul>
          <div className="nav-icon" onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'}></i>
          </div>
        </div>
      </nav>
    </>
  );
}

export default BottomNav;
