import React, { useState, useEffect } from 'react';
import {Link} from 'react-router-dom';

import './BottomNav.css'; 

function BottomNav(){
  return (
<>

    <div className="thewhole">

    <div className="top-navbar">
    <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam quam ratione eveniet quod omnis atque sint nobis numquam, eaque id eos ipsum adipisci. Saepe corrupti eum soluta sed, eos dolorem!</h1>
    </div>
    

    <div className="bottom-navbar">

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



    </div>

</>

  
  );
};
export default BottomNav;
