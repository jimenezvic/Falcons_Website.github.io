import React, { useState, useEffect } from 'react';
import './Form.css';

function Form() {
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    gender: '',
    address: '',
    number: '',
    position: '',
    falconID:  ''
  });
  const [showPopup, setShowPopup] = useState(false);
  const [falconID, setFalconID] = useState('');
  const [message, setMessage] = useState('');
  const [dataList, setDataList] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  
  const generateCustomID = () => {
    const { name, age, number } = formData;

    const namePart = name.slice(0, 3).toLowerCase();

    const agePart = age;

    
    const numberPart = number.slice(-2);

    return `${namePart}${agePart}${numberPart}`;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newFalconID = generateCustomID();
    
    
    console.log("Generated Falcon ID:", newFalconID);
    
    try {
     
      // setFalconID(newFalconID);

    const newFormData = {
    name: formData.name,
    age: formData.age,
    gender: formData.gender,
    address: formData.address,
    number: formData.number,
    position: formData.position,
    falconID: formData.falconID
      }
      
      const response = await fetch('https://falcons-website-api.onrender.com/falcs', {
        method: 'POST',
        body: JSON.stringify( newFormData ),
        headers: {
          'Content-Type': 'application/json',
        },
      });
      console.log(formData)
      const data = await response.json();

      console.log("API Response Data:", data);

      if (response.ok) {
        
        
        console.log("API Response Data:", data);
  
        setMessage(`Hi ${formData.name}, your Falcon ID is ${newFalconID}`);
        setShowPopup(true);
  
        setFormData({
          name: '',
          age: '',
          gender: '',
          address: '',
          number: '',
          position: '',
          falconID:''
        });
  
        
        fetchData(); 
      } else {
        console.error('Failed to submit form:', response.statusText);
      }
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  const fetchData = async () => {
    try {
      const response = await fetch('https://falcons-website-api.onrender.com/falcs');
      const data = await response.json();
      
      
      console.log("Fetched Data:", data);
      
      setDataList(data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  const style_bg = {
    background: 'url(images/match.jpg)',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    height: '100%',
    width: '100%',
  };

  return (
    <>
      <div className="bigDiv" style={style_bg}>
        <div className="mediumDiv">
          <div className="picDiv">
            <h1 className="text-center pt-3" id="ts">Registration Form</h1>

            <form onSubmit={handleSubmit}>
              <div className="mb-3 mt-3">
                <label htmlFor="name" className="form-label">Full Name</label>
                <input
                  type="text"
                  name="name"
                  className="form-control"
                  value={formData.name}
                  onChange={handleChange}
                />
              </div>

              <div className="mb-3">
                <label htmlFor="position" className="form-label">Position</label>
                <input
                  type="text"
                  name="position"
                  className="form-control"
                  value={formData.position}
                  onChange={handleChange}
                />
              </div>

              <div className="mb-3">
                <label htmlFor="age" className="form-label">Birth Date</label>
                <input
                  type="text"
                  name="age"
                  className="form-control"
                  value={formData.age}
                  onChange={handleChange}
                />
              </div>

              <div className="mb-3">
                <label htmlFor="gender" className="form-label">Gender</label>
                <input
                  type="text"
                  name="gender"
                  className="form-control"
                  value={formData.gender}
                  onChange={handleChange}
                />
              </div>

              <div className="mb-3">
                <label htmlFor="address" className="form-label">Address</label>
                <input
                  type="text"
                  name="address"
                  className="form-control"
                  value={formData.address}
                  onChange={handleChange}
                />
              </div>

              <div className="mb-3">
                <label htmlFor="number" className="form-label">Phone Number</label>
                <input
                  type="number"
                  name="number"
                  className="form-control"
                  value={formData.number}
                  onChange={handleChange}
                />
              </div>

              <button type="submit" className="btn btn-primary">Submit</button>
            </form>
          </div>
        </div>
      </div>

      {showPopup && (
        <div className="popup-overlay">
          <div className="popup-content">
            <h2>{message}</h2>
            <button onClick={handleClosePopup}>Close</button>
          </div>
        </div>
      )}
    </>
  );
}

export default Form;
