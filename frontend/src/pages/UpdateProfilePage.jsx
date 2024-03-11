import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import axios from 'axios';

const UpdateProfilePage = () => {
  const { userInfo } = useSelector((state) => state.auth);
  const [userData, setUserData] = useState({
    first_name: '',
    last_name: '',
    email: '',
    // Add other fields as needed
  });

  useEffect(() => {
    // Fetch existing user data when the component mounts
    axios.get(`http://localhost:8000/user/${userInfo.id}/`)
      .then((response) => {
        const existingUserData = response.data;
        setUserData(existingUserData);
      })
      .catch((error) => {
        console.error('Error fetching user data:', error);
      });
  }, [userInfo.id]);

  const handleUsernameChange = (newUsername) => {
    // Update only the username in the local state
    setUserData((prevUserData) => ({
      ...prevUserData,
      first_name: newUsername,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Send the updated user data back to the server
    axios.put(`http://localhost:8000/user/${userInfo.id}/`, userData)
      .then((response) => {
        console.log('Profile updated successfully:', response.data);
      })
      .catch((error) => {
        console.error('Error updating profile:', error);
        // Handle errors as needed
      });
  };

  return (
    <div className="container auth__container">
      <h1 className='main__title'>Edit Your Profile</h1>
      <p>Hello {userInfo.first_name}, your ID is {userInfo.id}</p>

      <form className="auth__form" onSubmit={handleSubmit}>
        {/* Display existing user data in input fields */}
        <div>
          First Name:
          <input
            type="text"
            value={userData.first_name}
            onChange={(e) => handleUsernameChange(e.target.value)}
          />
        </div>
        <div>
          Last Name:
          <input
            type="text"
            value={userData.last_name}
            onChange={(e) => setUserData({ ...userData, last_name: e.target.value })}
          />
        </div>
        <div>
          Email:
          <input
            type="text"
            value={userData.email}
            onChange={(e) => setUserData({ ...userData, email: e.target.value })}
          />
        </div>
        {/* Add other fields as needed */}
        <button className="btn btn-primary" type="submit">
          Update Profile
        </button>
      </form>
    </div>
  );
};

export default UpdateProfilePage;
