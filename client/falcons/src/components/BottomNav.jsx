import React, {useState} from 'react';
import { NavLink } from 'react-router-dom';
import './BottomNav.css'; 

function BottomNav() {

const [menuOpen, setMenuOpen] = useState(false)



  return (
    <>
      <nav className="nav-second flex">
        <div className="logo">
          {/* <p className='title'>FALCONS ACADEMY</p> */}
        </div>
        <div className="menu" onClick={() => {
          setMenuOpen(!menuOpen)
        }}>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <ul className={menuOpen ? "open" : ""}>
          <div className='title'>
          <li className='title'>Falcons Academy</li>
          </div>
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

