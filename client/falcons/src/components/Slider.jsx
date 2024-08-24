import React, { useState, useEffect, useRef } from 'react';
import Card from './Card'
import '../components/Slider.css';

function Slider() {
  const [activeIndex, setActiveIndex] = useState(0);
  const itemCount = 4; 
  const intervalRef = useRef(null);

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % itemCount);
    }, 6000);

    return () => clearInterval(intervalRef.current);
  }, []);

  const goToNextSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % itemCount);
  };

  const goToPrevSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + itemCount) % itemCount);
  };

  const handleThumbnailClick = (index) => {
    setActiveIndex(index);
  };



  const slides = [
{
  image: '/images/home.jpg',
  title: 'Slider 1',
  description: "Lorem"
},
{
  image: '/images/dude2.jpg',
  title: 'Slider 2',
  description: "Lorem"
},
{
  image: '/images/players.jpg',
  title: 'Slider 3',
  description: "Lorem"
},
{
  image: '/images/main.jpg',
  title: 'Slider 4',
  description: "Lorem"
}
  ]

  return (
    <>
    <div className="body">

      <div className="slider">
        <div className="list">
          {slides.map((slide, index)=>(
            <div key={index} className={`item ${activeIndex === index ? 'active' : ''}`}>
              <img src={slide.image} alt={`Slide ${index + 1}`} />
              <div className='content'>
              <p>Design</p>
              <h2>{slide.title}</h2>
              <p>{slide.description}</p>
              </div>
              </div>
          ))}
        </div>
          {/* <div className="arrows">
            <button id='prev' onClick={goToPrevSlide}></button>
            <button id='next' onClick={goToNextSlide}><i class="fa-solid fa-greater-than"></i></button>
          </div> */}
      </div>

      <div className="card-cont">
        <div className="card">
            <Card />
        </div>
        <div className="card">
            <Card />
        </div>
        
      </div>
      <div className="card-cont">
        <div className="card">
            <Card />
        </div>
        <div className="card">
            <Card />
        </div>
        
      </div>

    <div className="map-wrapper">
    <iframe className='googlemap' width="100%" height="600" frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0" src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=2199%20Smith%20Road%20West%20Chicago,%20IL%2060185%20United%20States+(Nest)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"><a href="https://www.gps.ie/">gps systems</a></iframe>
    </div>


</div>
    </>
  );
}

export default Slider;
