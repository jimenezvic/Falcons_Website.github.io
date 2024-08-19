import React from 'react';
import './UpNav.css'; // Assuming the CSS is in a separate file
import BottomNav from './BottomNav';

const UpNav = () => {

  return (
    <>
      <div className='top-navbar'>
        <h1>Top Navbar</h1>

      <div className='scroll-navbar'>
        <h1>Scroll Navbar</h1>
      </div>
      </div>
      
    <BottomNav />
    </>
  );
};

export default UpNav;
