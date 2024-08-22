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
          <button id='prev' onClick={goToPrevSlide}>-</button>
          <button id='next' onClick={goToNextSlide}>-</button>
        </div>
      
      </div>

  <div className="myBody">  
    <div className='bd'>
      <div className="pd1"><img src="images/hommie.jpg" alt="First Image"  id='pd1'/></div>
        <div className="md"><img src="images/middle.jpg" alt="Middle Image" id='pd3' /></div>
           <div className="pd2"><img src="images/dude.jpg" alt="Second Image" id='pd2'/></div>
  </div>
    </div>
<div className="map">

<div className='mapholder'>
<iframe width="750" height="750" frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0" src="https://maps.google.com/maps?width=750&amp;height=750&amp;hl=en&amp;q=2199%20Smith%20Road%20West%20Chicago,%20IL%2060185%20United%20States+(Falcons%20Nest)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"><a href="https://www.gps.ie/">gps vehicle tracker</a></iframe></div>

<div className="infoholder">
<div className="titleholder"><span id='titleholder'>Location & Hours</span></div>
<div className="descriptionholder"><span id='text'>As part of our mission at Falcons Academy, quality is a must. All our locations are well planned to make every player feel like they are in the best place to play and develop. </span>
<span id='text'>Temporary we have decided to have our nest in the location shown but if we decide to change the location you will receive updates</span>
<div className='soxer' ><img src="images/favorite.png" alt="" id='soxer' /></div>
</div>

</div>
</div>

</div>

    </>
  );
}

export default Slider;
