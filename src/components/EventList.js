import React from 'react';
import EventCard from './EventCard';

const EventList = ({ events, onRegister }) => {
  return (
    <div className="event-list">
      <h1>Upcoming Events</h1>
      {events.map((event) => (
        <EventCard key={event.id} event={event} onRegister={onRegister} />
      ))}
    </div>
  );
};

export default EventList;
