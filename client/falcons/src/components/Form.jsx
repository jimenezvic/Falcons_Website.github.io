import React, { useState } from "react";
import './Form.css'
function Form() {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('');
  const [address, setAddress] = useState('');
  const [number, setNumber] = useState('');
  const [position, setPosition] = useState('');
  

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
      <h1 className="text-center pt-3">Sign Up Form</h1>

<div className="mb-3 mt-3">
  <label htmlFor="username" className="form-label">Name</label>
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

<button type="submit" className="btn btn-success">Submit</button>


</div>
      </div>

      <div className="formDiv">
      <img src="images/ivan.jpg" alt="" className="registrationpic"/>
      </div>
     
    </div>
   
   
   
   
   
   
   
   </>
  );
}

export default Form;
