import React from 'react';
import {Link} from "react-router-dom"
import PropTypes from 'prop-types';
import './Cards.css'

function Card({ title, imageSource, text, url, onButtonClick, showButton }) {
    return (
      <div className="card text-center bg-success">
        <div className="overflow">
          <img src={imageSource} alt="" className='card-img-top' />
        </div>
        <div className="card-body text-light">
          <h4 className='card-title'>{title}</h4>
          <p className='card-text text-dark'>
            {text ? text : 'Falcons'}
          </p>
          {showButton ? (
            <button onClick={onButtonClick} className="show-calendar-button">
              Calendar
            </button>
          ) : (
            <Link to={url} target="_blank" rel="noopener noreferrer" className='botton'>
              Learn More
            </Link>
          )}
        </div>
      </div>
    );
  }
  
  Card.propTypes = {
    title: PropTypes.string.isRequired,
    url: PropTypes.string,
    imageSource: PropTypes.string,
    text: PropTypes.string,
    onButtonClick: PropTypes.func,
    showButton: PropTypes.bool,
  };
  
  export default Card;