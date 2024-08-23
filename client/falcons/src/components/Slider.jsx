import React, { useState, useEffect, useRef } from 'react';
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
          <div className="arrows">
            <button id='prev' onClick={goToPrevSlide}></button>
            <button id='next' onClick={goToNextSlide}>=</button>
          </div>
      </div>

      


</div>
    </>
  );
}

export default Slider;
