import React, { useState } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { saveTeacherData } from './saveTeacherData'; // Import the function

export default function TeacherRegistration() {
  const [userData, setUserData] = useState({
    name: '',
    email: '',
    number: '',
    // Add other fields here
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData((prevUserData) => ({
      ...prevUserData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const success = await saveTeacherData('wtLvQbg2ltSHhmoPjXcl', userData);

    if (success) {
      // Clear the input fields after successful submission
      setUserData({
        name: '',
        email: '',
        number: '',
        // Clear other fields here
      });
      toast.success('Data saved successfully!');
    } else {
      toast.error('Error saving data. Please try again later.');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add User</h2>
      <div>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={userData.name}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={userData.email}
          onChange={handleChange}
          required
        />
      </div>

      <div>
        <label htmlFor="number">Number:</label>
        <input
          type="number"
          id="number"
          name="number"
          value={userData.number}
          onChange={handleChange}
          required
        />
      </div>
      {/* Add other fields similarly */}
      <button type="submit">Submit</button>
    </form>
  );
}
