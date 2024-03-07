// pages/CreateTeamPage.jsx
import React, { useState } from 'react';
import axios from 'axios';

const CreateTeamPage = () => {
  const [name, setName] = useState('');
  const [captainName, setCaptainName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    axios.post('http://localhost:8000/team/', { name, captain_name: captainName }, {
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => {
        console.log('Team created successfully:', response.data);
      })
      .catch((error) => {
        console.error('Error creating team:', error);
        if (error.response) {
          console.error('Response data:', error.response.data);
          console.error('Response status:', error.response.status);
          console.error('Response headers:', error.response.headers);
        } else if (error.request) {
          console.error('No response received:', error.request);
        } else {
          console.error('Request setup error:', error.message);
        }
      });
  };

  return (
    <div>
      <h1 className="main__title" >Create Team</h1>
      <form className="auth__form" 
      onSubmit={handleSubmit}>

          Team Name:
          <input type="text" 
            value={name} 
            placeholder="Team Name"
            required
            onChange={(e) => setName(e.target.value)}
          />
          Captain Name:
          <input type="text" 
          value={captainName} 
          placeholder="Captain Name"
          onChange={(e) => setCaptainName(e.target.value)} 
          required
          />
        <button className="btn btn-primary" type="submit">Create Team</button>
      </form>
    </div>
  );
};

export default CreateTeamPage;
