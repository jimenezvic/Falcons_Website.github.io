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

  return (
    <div className="body">
      <header className='header'>
        <div className='logo'></div>
        {/* <ul className='menu'>
          <li>Home</li>
          <li>Blog</li>
          <li>Info</li>
        </ul> */}
        {/* <div className="search">
          <i className="bi bi-search">Search</i>
        </div> */}
      </header>

      <div className="slider">
        <div className="list">
          {[...Array(itemCount)].map((_, index) => (
            <div key={index} className={`item ${activeIndex === index ? 'active' : ''}`}>
              <img src={`/images/home.jpg`} alt={`Slide ${index + 1}`} />
              <div className='content'>
                <p>design</p>
                <h2>Slider {index + 1}</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque esse debitis voluptate libero harum rerum eos ipsam, accusamus neque vel dicta vitae possimus ducimus explicabo aut dolores eveniet obcaecati nesciunt.
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="arrows">
          <button id='prev' onClick={goToPrevSlide}>-</button>
          <button id='next' onClick={goToNextSlide}>-</button>
        </div>
        {/* Thumbnail Section */}
        {/* <div className="thumbnail">
          {[...Array(itemCount)].map((_, index) => (
            <div key={index} className={`item ${activeIndex === index ? 'active' : ''}`} onClick={() => handleThumbnailClick(index)}>
              <img src={`/images/players.jpg`} className='content' alt={`Thumbnail ${index + 1}`} />
              Slider {index + 1}
            </div>
          ))}
        </div> */}
      </div>
    </div>
  );
}

export default Slider;
