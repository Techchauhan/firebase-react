// Home.jsx
import React from 'react';
import { getAuth, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const auth = getAuth();

export default function Home() {
  const navigate = useNavigate();

  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        // Redirect to the login page after successful logout
        navigate("/login");
      })
      .catch((error) => {
        console.error("Error signing out:", error);
      });
  };

  return (
    <div>
      <h1>Welcome to the Home Page</h1>
      {/* Add any additional content for the home page */}
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}
