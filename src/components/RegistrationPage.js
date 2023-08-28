import React, { useState } from 'react';
import './css/RegistrationPage.css'; 

const RegistrationPage = ({ onRegister }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleRegister = () => {

    onRegister(name, email);
  };

  return (
    <div className="registration-page">
      <h1>Event Registration</h1>
      <div className="registration-form">
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
    </div>
  );
};

export default RegistrationPage;
