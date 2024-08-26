import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import video from '/images/uniformVideo.mp4';

function Policies() {
  const [buttonEnabled, setButtonEnabled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const policyDiv = document.querySelector('.policy-div');
      if (policyDiv) {
        const { scrollTop, scrollHeight, clientHeight } = policyDiv;
        if (scrollTop + clientHeight >= scrollHeight) {
          setButtonEnabled(true);
        }
      }
    };

    const policyDiv = document.querySelector('.policy-div');
    if (policyDiv) {
      policyDiv.addEventListener('scroll', handleScroll);
    }

    return () => {
      if (policyDiv) {
        policyDiv.removeEventListener('scroll', handleScroll);
      }
    };
  }, []);

  return (
    <div className="main-div">
      <div className="holder-div">
        <div className="policy-div" style={{ maxHeight: '400px', overflowY: 'auto' }}>
          <h2>Falcons Academy Policies</h2>
          <div className="plot">
            <strong>Code of Conduct:</strong>
            <p>Respect: All players, coaches, and parents must demonstrate respect for others.</p>
            <p>Sportsmanship: Encourage fair play and a positive attitude.</p>
            <p>Attendance: Players must attend all scheduled practices and games unless excused.</p>
            <strong>Safety and Wellness:</strong>
            <p>Emergency Protocols: Follow established procedures for injuries and emergencies.</p>
            <p>Equipment: Ensure all equipment is in good condition and used properly.</p>
            <p>Health Screening: Regular health checks and adherence to wellness guidelines.</p>
            <strong>Environmental Responsibility:</strong>
            <p>Recycling: Promote recycling and waste reduction during practices and events.</p>
            <p>Energy Use: Conserve energy by turning off lights and equipment when not in use.</p>
            <strong>Training and Development:</strong>
            <p>Continuous Improvement: Commit to ongoing development and skill enhancement.</p>
            <p>Feedback: Provide constructive feedback to support player growth.</p>
          </div>
        </div>

        <div className="register-div">
          <div className="video-container">
            <video src={video} autoPlay loop muted style={{ width: '100%', borderRadius: '10px' }}></video>
          </div>
          <h3 className="tlt">READY TO JOIN US?</h3>
          
          {!buttonEnabled && (
            <p style={{ color: 'red', marginBottom: '1rem' }}>
              Please scroll through all the policies before registering.
            </p>
          )}

          <div className="btn">
            <button className="button-85" role="button">
              {buttonEnabled ? (
                <Link to="/form" className="theFormLink">Click to Continue</Link>
              ) : (
                'Click to Continue'
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Policies;
