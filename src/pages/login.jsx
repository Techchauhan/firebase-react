// Login.jsx
import React, { useState, useEffect } from 'react';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { Link } from "react-router-dom";
import { app } from "../firebase";
import "./login.css"; // Import CSS file for styling
import lottie from 'lottie-web'; // Import lottie-web

const auth = getAuth(app);

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    // Load the Lottie animation
    const animation = lottie.loadAnimation({
      container: document.querySelector('.animation-container'),
      renderer: 'svg',
      loop: true,
      autoplay: true,
      animationData: require('../images/login.json') // Path to your Lottie animation JSON file
    });

    // Clean up the animation on component unmount
    return () => {
      animation.destroy();
    };
  }, []);

  const loginUser = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log("User logged in:", userCredential.user.email);
        alert("Login successful!");
        // Redirect to the home page after successful login
        // You can handle redirection using react-router-dom
      })
      .catch((error) => {
        alert(error.message); // Display error message to the user
      });
  }

  return (
    <div className="login-page">
      {/* Left side container for Lottie animation */}
      <div className="animation-container"></div>
      
      {/* Right side container for login form */}
      <div className="login-container">


      {/* <div className="avatar-container">
          <img src="../images/pulsezest.png" alt="Avatar" className="avatar" />
        </div> */}


        <h1>PulseZest Admin Login</h1>
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
        <p>Don't have an account? <Link to="/signup">Sign Up</Link></p>
      </div>
    </div>
  );
}
