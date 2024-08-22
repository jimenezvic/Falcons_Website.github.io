import React from 'react';
import {Link} from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import './UpNav.css'; 
import BottomNav from './BottomNav';

const UpNav = () => {

  const navigate = useNavigate();
  function mainPage(){
    navigate('/')
  }

  return (
    <>

      <div className='top-navbar'>
       
        <h1></h1>
       
        {/* <img src="images/myLogo.png" alt="Falcon Logo" className='falcon-logo' onClick={mainPage}/> */}
       
      <div className='scroll-navbar'>
      <span className='official'>THE OFFICIAL WEBSITE OF THE</span>

        <p className='falcones'>FALCONS ACADEMY</p>

      </div>

      </div>
      <BottomNav />


    </>
  );
};

export default UpNav;
