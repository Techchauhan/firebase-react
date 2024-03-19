import React, { useState } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { saveTeacherData } from './saveTeacherData'; // Import the function

export default function TeacherRegistration() {
  const [userData, setUserData] = useState({
    name: '',
    email: '',
    number: '',
    dob: '',
    gender: '',
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
        dob: '',
        gender: '',
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

      <div>
        <label htmlFor="dob">Date of Birth:</label>
        <input
          type="date"
          id="dob"
          name="dob"
          value={userData.dob}
          onChange={handleChange}
          required
        />
      </div>

      <div>
        <label htmlFor="gender">Gender:</label>
        <select
          id="gender"
          name="gender"
          value={userData.gender}
          onChange={handleChange}
          required
        >
          <option value="">Select Gender</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </select>
      </div>

      {/* Add other fields similarly */}
      <button type="submit">Submit</button>
    </form>
  );
}
