import React, { useState } from 'react';

const RegistrationForm = ({ event, onRegister }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleRegister = () => {
    // Perform registration logic
    onRegister(event.id, name, email);
  };

  return (
    <div className="registration-form">
      <h3>Register for this Event</h3>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button onClick={handleRegister}>Register</button>
    </div>
  );
};

export default RegistrationForm;
