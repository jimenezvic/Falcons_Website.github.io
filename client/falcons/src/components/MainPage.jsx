import React, { useState } from 'react';
import './MainPage.css';

function MainPage() {
  const [popup, setPopup] = useState({ isVisible: false, content: '' });

  const handleButtonClick = (content) => {
    setPopup({ isVisible: true, content });
  };

  const closePopup = () => {
    setPopup({ isVisible: false, content: '' });
  };

  return (
    <div className="main-container">
      
    
      <section className="intro-section">
        <div className="intro-content">
          <div className="image-div">
            <img src="/images/myLogo.png" alt="Falcons Academy" />
          </div>
          <div className="text-div">
            <h2>The Falcons Academy Project</h2>
            <p>Welcome to Falcons Academy, where we inspire young athletes to reach their potential through teamwork, respect, and dedication.</p>
          </div>
        </div>
      </section>

      <section className="coach-section">
        <div className="coach-card">
          <img src="/images/bro.jpg" alt="Coach" />
          <blockquote>
            "At Falcons Academy, we believe in hard work, respect, and relentless pursuit of excellence. Every player is special, with the power to succeed." 
            <cite>— Coach Jimenez</cite>
          </blockquote>
        </div>
      </section>

      <section className="services-section">
        <div className="services-container">
          <div className="service-div" onClick={() => handleButtonClick("We provide top-notch physiotherapy services to ensure that all players remain in peak physical condition.")}>
            <img src="/images/phy.jpg" alt="Physiotherapy" />
            <div className="service-footer">
              <h3>Physiotherapy</h3>
              <button>Learn More</button>
            </div>
          </div>
          <div className="service-div" onClick={() => handleButtonClick("Our club takes pride in offering unique uniforms and high-quality materials for our players.")}>
            <img src="/images/un.jpg" alt="Uniform and Material" />
            <div className="service-footer">
              <h3>Uniform & Material</h3>
              <button>Learn More</button>
            </div>
          </div>
          <div className="service-div" onClick={() => handleButtonClick("Our soccer field meets the highest standards, offering a great place for our players to train and excel.")}>
            <img src="/images/field.jpg" alt="Soccer Field" />
            <div className="service-footer">
              <h3>Soccer Field</h3>
              <button>Learn More</button>
            </div>
          </div>
          <div className="service-div" onClick={() => handleButtonClick("We have exciting future projects, including expanded training facilities and a new stadium.")}>
            <img src="/images/pl.jpg" alt="Future Projects" />
            <div className="service-footer">
              <h3>Future Projects</h3>
              <button>Learn More</button>
            </div>
          </div>
        </div>
      </section>

      
      {popup.isVisible && (
        <div className="popup">
          <div className="popup-content">
            <p>{popup.content}</p>
            <button className="close-btn" onClick={closePopup}>Close</button>
          </div>
        </div>
      )}
      
    </div>
  );
}

export default MainPage;
