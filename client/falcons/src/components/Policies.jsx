import React from 'react'
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Form from './Form';

function Policies() {


        const openNewWindow = () =>{
            window.open(<Form /> , '_blank', "width=800,height=600")
        }
    

  return (
    
<>
<div className="main-div">
  <div className="holder-div">
    <div className="policy-div">
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
      <h3 className='tlt'>READY TO JOIN US?</h3>
      <p className='messg'>Click the button below and fill out the form</p>
      <span className='btn'><button className="button-85" role="button">Button 85</button></span>

    </div>
  </div>
</div>
</>


    
  )
}

export default Policies
