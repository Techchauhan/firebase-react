// Login.jsx
import React, { useState } from 'react';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { app } from "../firebase";

const auth = getAuth(app);

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const loginUser = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then(() => {
        // Redirect to the home page after successful login
        // You can handle redirection using react-router-dom
      })
      .catch((error) => {
        alert(error.message); // Display error message to the user
      });
  }

  return (
    <div>
      <h1>Login</h1>
      <label htmlFor="email">Email</label>
      <input 
        type="text"
        id="email"
        placeholder="Enter the email" 
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <label htmlFor="password">Password</label>
      <input 
        type="password"
        id="password"
        placeholder="Enter the password" 
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />
      <button onClick={loginUser}>Login</button>
    </div>
  );
}
