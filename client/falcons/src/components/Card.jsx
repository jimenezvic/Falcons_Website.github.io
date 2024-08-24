import React from 'react';
import './Card.css'

function Card(){
const pic = './images/logo.jpg'

    return(
       <div className="card">
            <img className="card-image" src={pic} alt="profile picture"></img>
            <h2 className="card-title">Bro Code</h2>
            <p className="card-text">I make Youtube videos and play video games</p>
       </div> 
    );
}
export default Card;