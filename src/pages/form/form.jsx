import React, { useState } from 'react';
import { getFirestore, collection, addDoc,   } from 'firebase/firestore';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function UserForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

//   Save the data randomly 
  const handleSubmit = async (e) => {
    e.preventDefault();
  
    const db = getFirestore();
    const usersCollection = collection(db, "student");
  
    try {
      await addDoc(usersCollection, {
        name: name,
        email: email
      });
      // Clear the input fields after successful submission
      setName('');
      setEmail('');
      toast.success('Data saved successfully!');
    } catch (error) {
      console.error('Error adding document: ', error);
      toast.error('Error saving data. ', error);
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
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}
