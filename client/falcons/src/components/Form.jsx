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
    falconID: ''
  });
  const [showPopup, setShowPopup] = useState(false);
  const [falconID, setFalconID] = useState('');
  const [message, setMessage] = useState('');
  const [dataList, setDataList] = useState([]);
  const [editFalconID, setEditFalconID] = useState('');

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

  const handleSubmit = (e) => {
    e.preventDefault();
    const newFalconID = generateCustomID();
    setFalconID(newFalconID);
    setEditFalconID(newFalconID);
    setShowPopup(true);
  };

  const handleConfirmID = async () => {
    try {
      const newFormData = {
        ...formData,
        falconID: editFalconID
      };

      const response = await fetch('https://falcons-website-api.onrender.com/falcs', {
        method: 'POST',
        body: JSON.stringify(newFormData),
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.ok) {
        setMessage(`Hi ${formData.name}, your Falcon ID is ${editFalconID}`);
        setShowPopup(false);
        setFormData({
          name: '',
          age: '',
          gender: '',
          address: '',
          number: '',
          position: '',
          falconID: ''
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
                <label htmlFor="name" className="form-label">Name</label>
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
            {/* <h2>Edit Falcon ID</h2> */}
            <p>Generated ID: <strong>{falconID}</strong></p>
            <label htmlFor="editFalconID">Hi <strong className='tlt'>{formData.name}</strong>, your Falcon ID <strong>{falconID}</strong> was generated randomly. Feel free to edit it. <br></br> <br></br><small><strong>*Please ensure it includes both numbers and letters*</strong></small></label>
            <input
              type="text"
              id="editFalconID"
              value={editFalconID}
              onChange={(e) => setEditFalconID(e.target.value)}
            />
            <button onClick={handleConfirmID} className="btn btn-primary">Confirm</button>
            <button onClick={handleClosePopup} className="btn btn-secondary">Close</button>
          </div>
        </div>
      )}
    </>
  );
}

export default Form;
