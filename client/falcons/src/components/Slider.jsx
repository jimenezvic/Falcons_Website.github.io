import React, { useState, useEffect, useRef } from 'react';
import Cards from './Cards';
import Card from './Card'
import Players from "./Players"
import Footer from './Footer';
import MatchesTable from './MatchesTable';
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
  title: 'WELCOME TO FALCONS ACADEMY',
  description: "Lorem",
  footer: 'Join a legacy of excellence. At Falcons Academy, every step you take brings you closer to greatness. Embrace the journey and soar to new heights with us.'

},
{
  image: '/images/dude2.jpg',
  title: 'GET YOUR FALCON ID',
  description: "Lorem",
  footer: 'Unlock your potential. Your Falcon ID is more than just a number—it is your key to a community that believes in your success and future.'
},
{
  image: '/images/players.jpg',
  title: 'YOUR SUCCESS STARTS HERE',
  description: "Lorem",
  footer: 'Every dream needs a starting point. At Falcons Academy, we provide the foundation for your success. Take the first step and make it count.'

},
{
  image: '/images/main.jpg',
  title: 'FIND YOUR PLACE HERE',
  description: "Lorem",
  footer: 'Belong, grow, and thrive. Falcons Academy is where you find your purpose, passion, and people. Your journey starts with us'

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
      <div>
        <MatchesTable />
      </div>
            <div className="card-holder">
            <Cards />
            </div>
      

   <div className="contact-in">
    <div className="contact-map">
    <iframe className='googlemap' width="100%" height="600" frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0" src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=2199%20Smith%20Road%20West%20Chicago,%20IL%2060185%20United%20States+(Nest)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"><a href="https://www.gps.ie/">gps systems</a></iframe>
    </div>
    <div className="contact-form">
      <h1>CornerStone West Chicago</h1>
      
    </div>
   </div>

<Footer />

</div>
    </>
  );
}

export default Slider;
