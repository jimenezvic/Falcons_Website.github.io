import React, { useEffect, useState } from 'react';
import Carousel from '../components/Carousel';
import { slides } from "../data/carouselData.json";
import Loader from './Loader';

function MainPage() {
 

  return (
   
      <div className='main-page'>
        <h2>Falcons Academy Main Page</h2>
        <Carousel data={slides} />
        <div><p>Lorem ipsum dolor, sit amet consectetur adipisicing elit...</p></div>
        <div><p>Lorem ipsum dolor sit amet consectetur adipisicing elit...</p></div>
        <div><p>Lorem ipsum dolor sit amet consectetur adipisicing elit...</p></div>
        <div><p>Lorem ipsum dolor sit amet consectetur adipisicing elit...</p></div>
        <div><p>Lorem ipsum dolor, sit amet consectetur adipisicing elit...</p></div>
        <div><p>Lorem ipsum dolor sit amet consectetur adipisicing elit...</p></div>
        <div><p>Lorem ipsum dolor sit amet consectetur adipisicing elit...</p></div>
        <div><p>Lorem ipsum dolor sit amet consectetur adipisicing elit...</p></div>


        {/* <div className="videoUniform">
  <video  id='video' src='images/uniformVideo.mp4' type="video/mp4" autoPlay loop muted>
  </video>
</div> */}
      </div>
    
  );
}

export default MainPage;
