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
                alert("User login successfully");
            })
            .catch((error) => {
                alert(error.message);
            });
    }

    return (
        <div>
            <label htmlFor="email">Email</label>
            <input 
                type="text"
                id="email"
                placeholder="Enter the email" 
                onChange={(e) => setEmail(e.target.value)}
                value={email}
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
