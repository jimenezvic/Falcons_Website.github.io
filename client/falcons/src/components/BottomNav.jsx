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
          <NavLink exact to='/' className='nav-logo' activeClassName='active' onClick={handleClick}>
          Falcons Academy
          </NavLink>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className='nav-item'>
            <NavLink exact to='/' className='nav-links' activeClassName='active' onClick={handleClick}>
          Home
          </NavLink>
            </li>
            <li className='nav-item'>
          <NavLink exact to='/proyect' className='nav-links' activeClassName='active' onClick={handleClick}>
          Proyect
          </NavLink>
            </li>
            <li className='nav-item'>
            <NavLink exact to='/registration' className='nav-links' activeClassName='active' onClick={handleClick}>
          Registration
          </NavLink>
            </li>
            <li className='nav-item'>
            <NavLink exact to='/policies' className='nav-links' activeClassName='active' onClick={handleClick}>
          Register
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
