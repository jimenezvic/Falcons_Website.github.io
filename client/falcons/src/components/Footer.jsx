import React from 'react';
import { NavLink } from 'react-router-dom';
import './Footer.css';

function Footer() {
  return (
    <footer className='footer'>
      <div className='sb_footer section_padding'>
        <div className='sb_footer-links'>
          <div className="sb_footer-links_div">
            {/* <h4>Products</h4> */}
            <NavLink to='/' className='footer-link'>Home</NavLink>
            <NavLink to='/project' className='footer-link'>About</NavLink>
            <NavLink to='/registration' className='footer-link'>Contact</NavLink>
          </div>
          <div className="sb_footer-links_div">
            {/* <h4>Shop</h4> */}
            <NavLink to='#' className='footer-link'>Shop</NavLink>
            <NavLink to='/#' className='footer-link'>Resources</NavLink>
            <NavLink to='/#' className='footer-link'>Upcoming Events</NavLink>
          </div>
          <div className="sb_footer-links_div">
            <h4>Sponsors</h4>
            <NavLink to='#' className='footer-link'>CaS & A.C</NavLink>
          </div>
          <div className="sb_footer-links_div">
            {/* <h4>Company</h4> */}
            <NavLink to='#' className='footer-link'>FAQ</NavLink>
            <NavLink to='/policies' className='footer-link'>Register</NavLink>
            <NavLink to='#' className='footer-link'>Privacy & Termn</NavLink>
          </div>
          <div className="sb_footer-links_div">
            <h4>Follow Us</h4>
            <div className="social-media">
              <a href="https://facebook.com" className="social-icon"><i className="fa-brands fa-facebook"></i></a>
              <a href="https://twitter.com" className="social-icon"><i className="fa-brands fa-x-twitter"></i></a>
              <a href="https://instagram.com" className="social-icon"><i className="fa-brands fa-instagram"></i></a>
            </div>
          </div>
        </div>
      </div>
      <hr className="footer-divider" />
      <div className="sb_footer-below">
        <div className="sb_footer-copyright">
          <p>&copy; {new Date().getFullYear()} Falcons Academy. All rights reserved.</p>
        </div>
        <div className="sb_footer-below-links">
          <NavLink to='/#' className='footer-link'>Terms & Conditions</NavLink>
          <NavLink to='/#' className='footer-link'>Privacy Policy</NavLink>
          <NavLink to='/#' className='footer-link'>Cookie Declaration</NavLink>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
