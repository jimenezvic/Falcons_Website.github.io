import React, { useState, useEffect } from "react";
import './Form.css';

function Form() {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('');
  const [address, setAddress] = useState('');
  const [number, setNumber] = useState('');
  const [position, setPosition] = useState('');
  const [showPopup, setShowPopup] = useState(false);

  // Show popup when the component mounts
  useEffect(() => {
    setShowPopup(true);
  }, []);

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  const collectData = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:3001/falcs', {
        method: 'POST',
        body: JSON.stringify({ name, age, gender, address, number, position }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const data = await response.json(); 
      console.log(data); 
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <div className="bigDiv">
        <div className="mediumDiv">
          <div className="picDiv">
            <h1 className="text-center pt-3" id="ts">Registration Form</h1>

            <div className="mb-3 mt-3">
              <label htmlFor="username" className="form-label">Full Name</label>
              <input
                type="text"
                className="form-control"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>

            <div className="mb-3">
              <label htmlFor="email" className="form-label">Position</label>
              <input
                type="text"
                className="form-control"
                value={position}
                onChange={(e) => setPosition(e.target.value)} 
              />
            </div>

            <div className="mb-3">
              <label htmlFor="age" className="form-label">Birth Date</label>
              <input
                type="text"
                className="form-control"
                value={age}
                onChange={(e) => setAge(e.target.value)} 
              />
            </div>

            <div className="mb-3">
              <label htmlFor="gender" className="form-label">Gender</label>
              <input
                type="text"
                className="form-control"
                value={gender}
                onChange={(e) => setGender(e.target.value)} 
              />
            </div>

            <div className="mb-3">
              <label htmlFor="address" className="form-label">Address</label>
              <input
                type="text"
                className="form-control"
                value={address}
                onChange={(e) => setAddress(e.target.value)} 
              />
            </div>

            <div className="mb-3">
              <label htmlFor="number" className="form-label">Phone Number</label>
              <input
                type="number"
                className="form-control"
                value={number}
                onChange={(e) => setNumber(e.target.value)} 
              />
            </div>

            <button type="submit">Submit</button>
          </div>
        </div>

        <div className="formDiv">
          <h2 className="lett co">Letter from the Coach</h2>
          
          <h4 className="lett co">We’re so excited to have you with us. First off, I want to thank you for putting your trust in this project. Falcons Academy was born with a strong belief and purpose: every player has potential, and we're here to help you discover and reach it. Together, we’ll work hard to bring out the best in each of you.

          Looking forward to this journey with you!</h4>

          <h5 className="lett">Best,</h5>
          <h5>Ivan Jimenez</h5>
        </div>
      </div>

      {/* Pop-up Modal */}
      {showPopup && (
        <div className="popup-overlay">
          <div className="popup-content">
            <h2>Welcome to Falcons Academy!</h2>
            <p>We're excited to have you on board. Let's make this journey amazing together!</p>
            <button onClick={handleClosePopup}>Close</button>
          </div>
        </div>
      )}
    </>
  );
}

export default Form;

