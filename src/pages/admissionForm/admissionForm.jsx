import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { saveAdmissionData } from './saveAdmissionData'; // Import the function to save admission data
import { getLatestAdmissionNumber } from './getAdmissionNumber'; // Import the function to get the latest admission number

export default function AdmissionForm() {
  const [admissionNumber, setAdmissionNumber] = useState('');
  const [name, setName] = useState('');
  const [grade, setGrade] = useState('');

  useEffect(() => {
    // Fetch the latest admission number when the component mounts
    getLatestAdmissionNumber().then((latestNumber) => {
      // Increment the latest admission number by 1 to generate the new admission number
      const newAdmissionNumber = latestNumber ? latestNumber + 1 : 1;
      setAdmissionNumber(newAdmissionNumber.toString()); // Convert to string if needed
    }).catch((error) => {
      console.error('Error fetching latest admission number:', error);
      toast.error('Error fetching latest admission number. Please try again later.');
    });
  }, []);
  

  const handleSubmit = async (e) => {
    e.preventDefault();

    const success = await saveAdmissionData({
      admissionNumber: admissionNumber,
      name: name,
      grade: grade,
      // Add other form fields as needed
    });

    if (success) {
      // Clear the input fields after successful submission
      setName('');
      setGrade('');
      // Fetch the latest admission number again to update the admission number field
      getLatestAdmissionNumber().then((latestNumber) => {
        const newAdmissionNumber = latestNumber + 1;
        setAdmissionNumber(newAdmissionNumber.toString());
      }).catch((error) => {
        console.error('Error fetching latest admission number:', error);
        toast.error('Error fetching latest admission number. Please try again later.');
      });
      toast.success('Admission form submitted successfully!');
    } else {
      toast.error('Error saving admission data. Please try again later.');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Admission Form</h2>
      <div>
        <label htmlFor="admissionNumber">Admission Number:</label>
        <input
          type="text"
          id="admissionNumber"
          value={admissionNumber}
          disabled // Disable editing of admission number field
          required
        />
      </div>
      <div>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="grade">Grade:</label>
        <input
          type="text"
          id="grade"
          value={grade}
          onChange={(e) => setGrade(e.target.value)}
          required
        />
      </div>
      {/* Add other form fields as needed */}
      <button type="submit">Submit</button>
    </form>
  );
}
