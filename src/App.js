import React, { useState } from 'react';
import './styles.css'; // Import your styles

import EventList from './components/EventList';
import EventDetails from './components/EventDetails';
import UserDashboard from './components/UserDashboard';
import RegistrationPage from './components/RegistrationPage';


const App = () => {
  const [events, setEvents] = useState([
    {
      id: 1,
      title: 'Virtual Coding Workshop',
      date: '2023-09-15',
      time: '14:00',
      location: 'Online',
      description: 'Learn coding best practices from experts.',
      registered: false,
    },
  ]);

  const [selectedEvent, setSelectedEvent] = useState(null);
  const [registeredEvents, setRegisteredEvents] = useState([]);

  const handleEventClick = (eventId) => {
    const selected = events.find((event) => event.id === eventId);
    setSelectedEvent(selected);
  };

  const handleRegister = (eventId, name, email) => {
    const updatedEvents = events.map((event) =>
      event.id === eventId ? { ...event, registered: true } : event
    );
    setEvents(updatedEvents);

    const registeredEvent = events.find((event) => event.id === eventId);
    setRegisteredEvents([...registeredEvents, registeredEvent]);

    setSelectedEvent(null);
  };
  const [currentPage, setCurrentPage] = useState('events');

  const handlePageChange = (page) => {
    setCurrentPage(page);
    setSelectedEvent(null);
  };

  return (
    <div className="app">
      <nav className="navbar">
        <h1>Virtual Event Manager</h1>
        <div className="nav-buttons">
          <button onClick={() => handlePageChange('events')}>Events</button>
          <button onClick={() => handlePageChange('dashboard')}>Dashboard</button>
          <button onClick={() => handlePageChange('register')}>Register</button> {/* Add this button */}
        </div>

      </nav>
      <div className="content">
        {currentPage === 'events' && (
          <EventList events={events} onRegister={handleEventClick} />
        )}
        {currentPage === 'details' && selectedEvent && (
          <EventDetails event={selectedEvent} onRegister={handleRegister} />
        )}
        {currentPage === 'dashboard' && (
          <UserDashboard registeredEvents={registeredEvents} />
        )}
        {currentPage === 'register' && (
          <RegistrationPage onRegister={handleRegister} />
        )}

      </div>
    </div>
  );
};

export default App;
