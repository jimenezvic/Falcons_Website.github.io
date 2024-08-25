import React from 'react';
import { NavLink } from 'react-router-dom';
import './Footer.css';

function Footer() {
  return (
    <footer className='footer'>
      <div className='sb_footer section_padding'>
        <div className='sb_footer-links'>
          <div className="sb_footer-links_div">
            <h4>Business</h4>
            <NavLink to='/form' className='footer-link'>Our Form</NavLink>
            <NavLink to='/project' className='footer-link'>The Project</NavLink>
            <NavLink to='/registration' className='footer-link'>Registration</NavLink>
          </div>
          <div className="sb_footer-links_div">
            <h4>Resources</h4>
            <NavLink to='/resource1' className='footer-link'>Resource 1</NavLink>
            <NavLink to='/resource2' className='footer-link'>Resource 2</NavLink>
            <NavLink to='/resource3' className='footer-link'>Resource 3</NavLink>
          </div>
          <div className="sb_footer-links_div">
            <h4>Partners</h4>
            <NavLink to='/partners' className='footer-link'>Partners</NavLink>
          </div>
          <div className="sb_footer-links_div">
            <h4>Company</h4>
            <NavLink to='/company1' className='footer-link'>Company 1</NavLink>
            <NavLink to='/company2' className='footer-link'>Company 2</NavLink>
            <NavLink to='/company3' className='footer-link'>Company 3</NavLink>
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
          <NavLink to='/terms' className='footer-link'>Terms & Conditions</NavLink>
          <NavLink to='/privacy' className='footer-link'>Privacy Policy</NavLink>
          <NavLink to='/cookies' className='footer-link'>Cookie Declaration</NavLink>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
