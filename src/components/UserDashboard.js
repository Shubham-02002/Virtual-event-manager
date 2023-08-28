import React from 'react';

const UserDashboard = ({ registeredEvents }) => {
  return (
    <div className="user-dashboard">
      <h2>Your Registered Events</h2>
      <ul>
        {registeredEvents.map((event) => (
          <li key={event.id}>{event.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default UserDashboard;
