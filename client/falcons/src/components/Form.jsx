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
  });
  const [showPopup, setShowPopup] = useState(false);
  const [dataList, setDataList] = useState([]);

  useEffect(() => {
    fetchData();
    setShowPopup(true);
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('https://falcons-website-api.onrender.com/falcs', {
        method: 'POST',
        body: JSON.stringify(formData),
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const data = await response.json();
      console.log(data);
      fetchData(); 
    } catch (error) {
      console.error(error);
    }
  };

  const fetchData = async () => {
    try {
      const response = await fetch('https://falcons-website-api.onrender.com/falcs');
      const data = await response.json();
      setDataList(data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await fetch(`https://falcons-website-api.onrender.com/falcs/${id}`, {
        method: 'DELETE',
      });
      fetchData(); 
    } catch (error) {
      console.error(error);
    }
  };

  const handleUpdate = async (id) => {
    const updatedData = { ...formData, name: 'Updated Name' }; 
    try {
      await fetch(`https://falcons-website-api.onrender.com/falcs/${id}`, {
        method: 'PUT',
        body: JSON.stringify(updatedData),
        headers: {
          'Content-Type': 'application/json',
        },
      });
      fetchData(); 
    } catch (error) {
      console.error(error);
    }
  };

  const handleClosePopup = () => {
    setShowPopup(false);
  };


  const style_bg ={
    background : 'url(images/match.jpg)',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    height:'100%',
    width:'100%'
  }
  return (
    <>
      <div className="bigDiv" style={style_bg}>
        <div className="mediumDiv">
          <div className="picDiv">
            <h1 className="text-center pt-3" id="ts" >Registration Form</h1>

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

        {/* <div className="formDiv">
          <h2 className="lett co"><mark>Letter from the Coach</mark></h2>
          <h4 className="lett co"> */}
            {/* <mark>
              We’re so excited to have you with us. First off, I want to thank you for putting your trust in this project. Falcons Academy was born with a strong belief and purpose: every player has potential, and we are here to help you discover and reach it. Together, we’ll work hard to bring out the best in each of you.
              Looking forward to this journey with you!
            </mark> */}
          {/* </h4>
          <h5 className="lett"><mark>Best,</mark></h5>
          <h5><mark>Ivan Jimenez</mark></h5>
        </div> */}
      </div>

      {showPopup && (
        <div className="popup-overlay">
          <div className="popup-content">
            <h2>Welcome to Falcons Academy!</h2>
            <p>We are excited to have you on board. Let's make this journey amazing together!</p>
            <button onClick={handleClosePopup}>Close</button>
          </div>
        </div>
      )}

      {/* <div className="dataList">
        <h2>Data List</h2>
        <ul>
          {dataList.map(item => (
            <li key={item.id}>
              {item.name} - {item.position}
              <button onClick={() => handleUpdate(item.id)} className="btn btn-warning">Update</button>
              <button onClick={() => handleDelete(item.id)} className="btn btn-danger">Delete</button>
            </li>
          ))}
        </ul>
      </div> */}
    </>
  );
}

export default Form;
