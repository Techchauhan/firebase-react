  import React, { useState, useEffect } from 'react';
  import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
  import Login from "./pages/login";
  import Home from "./pages/home/home"
  import UserList from './pages/details/userList';
  import UserDetails from './pages/details/userDetails'
  import Form from "./pages/form/form"
  import SeprateForm from "./pages/form/seprate-form"
  import TeacherRegistration from './pages/mutipleDataForm/teacherRegistration';
  import AdmissionForm from './pages/admissionForm/admissionForm';
  import FetchSpecificDocument from './pages/fetchData/fetchSpecificDocument';
  import FetchDocumentIds from './pages/fetchData/fetchDocumentIds';
  import { getAuth, onAuthStateChanged } from "firebase/auth";
  import { app } from "./firebase";

  const auth = getAuth(app);

  function App() {
    const [user, setUser] = useState(null);
    const [isLoading, setIsLoading] = useState(true); // Add loading state

    useEffect(() => {
      const unsubscribe = onAuthStateChanged(auth, (user) => {
        setUser(user);
        setIsLoading(false); // Update loading state once authentication state is determined
      });

      return () => unsubscribe(); // Unsubscribe from the auth state listener when component unmounts
    }, []);

    // Show loading indicator while checking authentication state
    if (isLoading) {
      return <div>Loading...</div>;
    }

    return (
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={user ? <Home /> : <Navigate to="/login" />} />
          <Route
            path="/user-list"
            element={user ? <UserList /> : <Navigate to="/login" />}
          />

          <Route
            path="/form"
            element={user ? <Form /> : <Navigate to="/login" />}
          />  

          <Route
            path="/seprate-form"
            element={user ? <SeprateForm /> : <Navigate to="/login" />}
          /> 

          <Route
            path="/teacher-registration"
            element={user ? <TeacherRegistration /> : <Navigate to="/login" />}
          />

          <Route
            path="/user-details"
            element={user ? <UserDetails /> : <Navigate to="/login" />}
          />
          <Route
            path="/admission-form"
            element={user ? <AdmissionForm/> : <Navigate to="/login" />}
          />

            <Route
            path="/fetch-specifcData"
            element={user ? <FetchSpecificDocument/> : <Navigate to="/login" />}
          />

          <Route
            path="/fetch-documentIds"
            element={user ? <FetchDocumentIds/> : <Navigate to="/login" />}
          />

           


          
        </Routes>
      </BrowserRouter>
    );
  }

  export default App;
