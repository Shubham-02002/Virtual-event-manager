import React from 'react';
import RegistrationForm from './RegistrationForm';

const EventDetails = ({ event, onRegister }) => {
  return (
    <div className="event-details">
      <h1>{event.title}</h1>
      <p>Date: {event.date}</p>
      <p>Time: {event.time}</p>
      <p>Location: {event.location}</p>
      <p>{event.description}</p>
      <RegistrationForm event={event} onRegister={onRegister} />
    </div>
  );
};

export default EventDetails;
