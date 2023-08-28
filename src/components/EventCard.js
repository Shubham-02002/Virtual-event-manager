import React from 'react';

const EventCard = ({ event, onRegister }) => {
  return (
    <div className="event-card">
      <h2>{event.title}</h2>
      <p>Date: {event.date}</p>
      <p>Time: {event.time}</p>
      <p>{event.description}</p>
      <button onClick={() => onRegister(event.id)}>Register</button>
    </div>
  );
};

export default EventCard;
