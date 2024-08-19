import React from 'react';
import {Link} from 'react-router-dom';
import './UpNav.css'; 
import BottomNav from './BottomNav';

const UpNav = () => {

  return (
    <>

      <div className='top-navbar'>
       
        <h1>🪽</h1>

      <div className='scroll-navbar'>
      <span className='official'>THE OFFICIAL WEBSITE OF THE</span>

        <p>Falcons Academy</p>

      </div>

      </div>
      <BottomNav />


    </>
  );
};

export default UpNav;
