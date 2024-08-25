import React, { useEffect, useState } from 'react';
import Carousel from '../components/Carousel';
import { slides } from "../data/carouselData.json";
import Loader from './Loader';
import Cards from './Cards';
import Footer from './Footer';

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

    <Footer />
      </div>
    
  );
}

export default MainPage;
