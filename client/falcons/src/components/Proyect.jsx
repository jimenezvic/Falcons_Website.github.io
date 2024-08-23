import React, {useEffect, useState} from 'react'
import axios from 'axios'
import './Proyect.css'
import Swal from 'sweetalert2'
import Players from './Players'
function Proyect() {
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "5df3dc85-e503-49f9-8739-a66faa3fddd8");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      Swal.fire({
        title: "Success",
        text: "Message sent successfully!",
        icon: "success"
      });
    }
  };


  return (
    <div className='contactDiv'>
      <Players />
    <section className="contact">
      <form onSubmit={onSubmit}>
        <h2>Contact Form Falcs</h2>
        <div className="input-box">
          <label>Full Name</label>
          <input type="text" className='field' placeholder='Enter your name' required name='name' />
        </div>
        <div className="input-box">
          <label>Email Address</label>
          <input type="email" className='field' placeholder='Enter your email address' required name='email' />
        </div>
        <div className="input-box">
          <label>Your Message</label>
          <textarea name="message" id="" placeholder='Enter your message' required className='field mess'></textarea>
        </div>
        <button type="submit">Send Message</button>
      </form>
    </section>
    </div>
    
  )
}

export default Proyect
