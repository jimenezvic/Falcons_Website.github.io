// Calendar.js
import React from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

function EventCalendar({ isVisible, onClose }) {
  return (
    isVisible && (
      <div className="calendar-container">
        <button onClick={onClose} className="close-button">Close</button>
        <Calendar
        
        />
      </div>
    )
  );
}

export default EventCalendar;
