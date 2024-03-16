import React from 'react';
import { getAuth, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { AppBar, Toolbar, Typography, Button } from '@mui/material';

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
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Firebase Learning
          </Typography>
          <Button color="inherit" onClick={handleLogout}>Logout</Button>
        </Toolbar>
      </AppBar>
      <div>
        <h1>Welcome to the Home Page</h1>
        {/* Add any additional content for the home page */}
      </div>
    </div>
  );
}
