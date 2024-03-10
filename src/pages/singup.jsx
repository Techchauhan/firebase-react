import React, { useState } from "react";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { app } from "../firebase";

const auth = getAuth(app);

function SignupForm() {
    
    
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");


    // Here is the funciton to Create the user
    const createUser = () => {
        createUserWithEmailAndPassword(auth, email, password)
            .then(() => {
                alert('User created successfully!');
            })
            .catch((error) => {
                alert('Error creating user: ' + error.message);
            });
    };

    return (
        <div>
            <h1 className="title">Signup Form</h1>
            <label htmlFor="email">Email</label>
            <input
                id="email"
                type="text"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                required
                placeholder="Enter your email"
            />
            <label htmlFor="password">Password</label>
            <input
                id="password"
                type="password"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                required
                placeholder="Enter your password"
            />
            <button onClick={createUser}>Signup</button>
        </div>
    );
}

export default SignupForm;
