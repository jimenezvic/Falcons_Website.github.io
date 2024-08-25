import React from 'react';
import {Link} from "react-router-dom"
import PropTypes from 'prop-types';
import './Cards.css'

function Card({title, imageSource , text, url}){
    return(
       <div className="card text-center bg-dark ">
       <div className="overflow"> <img src={imageSource} alt=""  className='card-img-top'/></div>
        <div className="card-body text-light">
            <h4 className='card-title'>{title}</h4>
            <p className='card-text text-secondary'>
                {
                    text ? text : 'Lorem'
                }
            </p>
            <Link to={url} target="_blank" rel="noopener noreferrer" className='btn btn-outline-primary rounded-0'>Click to Cone </Link>
        </div>
            
       </div> 
    );
}
Card.propTypes ={
    title: PropTypes.string.isRequired,
    url: PropTypes.string,
    imageSource: PropTypes.string,
    text: PropTypes.string
    
}
export default Card;