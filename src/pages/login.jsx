import React, { useState, useEffect } from 'react';
import { getAuth, onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import { Link, useNavigate } from "react-router-dom"; // Import useNavigate
import { app } from "../firebase";
import "./login.css"; // Import CSS file for styling
import lottie from 'lottie-web'; // Import lottie-web

const auth = getAuth(app);

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginError, setLoginError] = useState(null);
  const navigate = useNavigate(); // Get navigate function

  useEffect(() => {
    // Check if user is already logged in
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is already logged in, navigate to home page
        navigate("/");
      }
    });

    // Clean up the subscription when the component unmounts
    return () => unsubscribe();
  }, [navigate]);

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
        navigate("/"); // Navigate to the home page
      })
      .catch((error) => {
        setLoginError(error.message); // Set login error message
      });
  }

  return (
    <div className="login-page">
      {/* Left side container for Lottie animation */}
      <div className="animation-container"></div>
      
      {/* Right side container for login form */}
      <div className="login-container">

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
        {loginError && <p className="error-message">{loginError}</p>}
        <p>Don't have an account? <Link to="/signup">Sign Up</Link></p>
      </div>
    </div>
  );
}
