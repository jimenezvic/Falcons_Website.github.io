import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.css'

function Nav() {
  return (
    <>
    <header className="header">

      <nav className="navbar navbar-bottom">


        <div className="nav-content">
          <Link to="/proyect">
            <p>About our project</p>
          </Link>
          <Link to="/registration">
            <p>Main Page</p>
          </Link>
          <Link to='/'>
            <p>Matches</p>
          </Link>
          <Link to='/policies'>
          <p>Register</p>
          </Link>
        </div>
      </nav>
    </header>
    </>
  );
}

export default Nav;
