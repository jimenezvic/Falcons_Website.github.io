import React, { useState, useEffect, useRef } from 'react';
import Cards from './Cards';
import Card from './Card';
import Players from "./Players";
import Footer from './Footer';
import MatchesTable from './MatchesTable';
import '../components/Slider.css';

function Slider() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isFormOpen, setIsFormOpen] = useState(false); 
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

  const toggleForm = () => {
    setIsFormOpen(!isFormOpen); // Toggle the form visibility
  };

  const slides = [
    {
      image: '/images/home.jpg',
      title: '',
      description: ''
    },
    {
      image: '/images/dude2.jpg',
      title: 'GET YOUR FALCON ID',
      description: 'Unlock your potential. Your Falcon ID is more than just a number—it is your key to a community that believes in your success and future.'
    },
    {
      image: '/images/players.jpg',
      title: 'YOUR SUCCESS STARTS HERE',
      description: 'Every dream needs a starting point. At Falcons Academy, we provide the foundation for your success. Take the first step and make it count.'
    },
    {
      image: '/images/main.jpg',
      title: 'FIND YOUR PLACE HERE',
      description: 'Belong, grow, and thrive. Falcons Academy is where you find your purpose, passion, and people. Your journey starts with us.'
    }
  ];

  return (
    <>
      <div className="slider-container">
        <div className="slider">
          {slides.map((slide, index) => (
            <div key={index} className={`slide ${activeIndex === index ? 'active' : ''}`}>
              <img src={slide.image} alt={`Slide ${index + 1}`} />
              <div className="footer">
                <h2>{slide.title}</h2>
                <p>{slide.description}</p>
              </div>
            </div>
          ))}
          <div className="arrows">
            <button id="prev" onClick={goToPrevSlide}>&lt;</button>
            <button id="next" onClick={goToNextSlide}>&gt;</button>
          </div>
        </div>
        <div className="thumbnails">
          {slides.map((slide, index) => (
            <img 
              key={index} 
              src={slide.image} 
              alt={`Thumbnail ${index + 1}`} 
              className={`thumbnail ${activeIndex === index ? 'active' : ''}`} 
              onClick={() => handleThumbnailClick(index)} 
            />
          ))}
        </div>
      </div>

      <div>
        <MatchesTable />
      </div>
      <div className="card-holder">
        <Cards />
      </div>

      <div className="contact-in">
        <div className="contact-map">
          <iframe
            className='googlemap'
            width="100%"
            height="600"
            frameBorder="0"
            scrolling="no"
            marginHeight="0"
            marginWidth="0"
            src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=2199%20Smith%20Road%20West%20Chicago,%20IL%2060185%20United%20States+(Nest)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed">
          </iframe>
        </div>

        <div className="contact-form">
          <h1>CornerStone West Chicago</h1>
          <div className="contact-info">
            <p>2199 Smith Road</p>
            <p>West Chicago, IL 60185</p>
            <p>United States</p>
          </div>
          <button className="contact-button" onClick={toggleForm}>
            {isFormOpen ? 'Close Form' : 'Contact Us'}
          </button>

          {isFormOpen && (
            <form className="contact-us-form">
              <input type="text" placeholder="Your Name" required />
              <input type="email" placeholder="Your Email" required />
              <textarea placeholder="Your Message" rows="4" required></textarea>
              <button type="submit" className="contact-button">Send Message</button>
            </form>
          )}
        </div>
      </div>

    </>
  );
}

export default Slider;
