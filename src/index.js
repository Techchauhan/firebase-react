import React from 'react';
import ReactDOM from 'react-dom/client';

import SingUp from './pages/singup';
import Login from './pages/login';

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
      
      <h4>Singup Form Below</h4>
      <SingUp />
        <h4>Login Form Below</h4>
        <Login/>

  </React.StrictMode>
);
