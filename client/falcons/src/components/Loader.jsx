import React from 'react';
import './Loader.css';

function Loader() {
  return (
    <div className='loader'>
      <div className="svgwrapper">
        <img src="images/soccer.webp" alt="LogoPic" className='rotating-image' />
      </div>
    </div>
  );
}

export default Loader;
