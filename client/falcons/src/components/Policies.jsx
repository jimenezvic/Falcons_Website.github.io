import React from 'react'
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Form from './Form';

function Policies() {


        const openNewWindow = () =>{
            window.open(<Form /> , '_blank', "width=800,height=600")
        }
    

  return (
    


    <div className="container">
        <header>
            <h4>Welcome to Falcons Academy!</h4>
        </header>
        
        {/*Project section*/}
    <div className=''>
    <p>
    Before you start your journey, I’d like to share our core principles. At Falcons Academy, we believe that every player is special and has the power to succeed. We accept all types of players, and our staff is committed to helping each one realize their full potential.

    </p>
    <p>
    Our academy offers professional training from coaches with extensive experience in the professional realm, eager to share their knowledge and unlock every player’s potential. Respect, inclusivity, and teamwork define us as a team, and we pride ourselves on delivering something that sets us apart: <h3>quality.</h3>
    </p>

    <p>This project was born from the dream of turning an idea into reality. We are determined to find a way to overcome challenges and succeed in this tough but fulfilling field.

    </p>
    </div>
    <h1>Yes, we do have Policies</h1>
    <h4>
    You the undersigned parent/guardian, do hereby grant permission for your child, to participate in all activities of the Falcons Academy. I understand that soccer is a physically demanding sport and that my child will be involved in activities that may result in physical injury.

    In the event of an emergency where medical treatment is required, I give my consent for any Falcons Academy staff member to obtain the necessary medical care for my child. This care may include first aid, CPR, emergency transportation, and treatment by medical personnel.

    Assumption of Risk: I acknowledge and understand that participation in soccer involves inherent risks, including but not limited to falls, contact with other players, and being struck by the ball, which could result in injury or even death. I assume all risks associated with my child’s participation in Falcons Academy activities
    </h4>
    <h4>Release of Liability: In consideration for being allowed to participate in Falcons Academy activities, I, on behalf of myself, my heirs, executors, and administrators, hereby waive and release any and all rights, claims, and causes of action I may have against Falcons Academy, its officers, directors, employees, volunteers, and agents for any injuries or damages of any kind arising out of or in connection with my child’s participation in Falcons Academy activities.

    Indemnification: I agree to indemnify and hold harmless Falcons Academy, its officers, directors, employees, volunteers, and agents from and against any and all claims, damages, losses, and expenses, including attorney’s fees, arising out of or in connection with my child’s participation in Falcons Academy activities.

    Acknowledgment: I acknowledge that I have read and understood this Medical and Liability Waiver, and I agree to its terms and conditions. I understand that this waiver is intended to be as broad and inclusive as permitted by the laws of the state in which the Falcons Academy operates.</h4>


    <div className=''>
        <h1>Ready to start this joruney? </h1>
        <h2>Please, click the button and fill out the form</h2>
        {/* <button className='btn btn-info' onClick={openNewWindow} >Register</button> */}
        <Link to="/form" target="_blank" rel="noopener noreferrer">REGISTER </Link>
    </div>
    <Routes>
        <Route path="/form" element={<Form />} />
      </Routes>
    
    </div>

    
  )
}

export default Policies
