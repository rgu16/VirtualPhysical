
import React from 'react'
import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import {LoginPage, RegisterPage, ForgotPasswordPage, HomePage} from "./pages"

export default function App() {
    const [registeredUsers, setRegisteredUsers] = useState([{email: 'virtualphysical23@gmail.com', password :'senior design', name: "Name"},]);
    console.log(registeredUsers)

    const handleRegister = (newUser) => {
      setRegisteredUsers([...registeredUsers, newUser]);
    };

    return (
        <Router>
            <div className = 'App'>
                <Routes>
                    <Route exact path="/" element={ <LoginPage registeredUsers={registeredUsers}/> } />
                    <Route path="/register" element={ <RegisterPage onRegister={handleRegister} registeredUsers={registeredUsers} /> } />
                    <Route path="/forgot-password" element={ <ForgotPasswordPage registeredUsers={registeredUsers}/> } />
                    <Route path="/home" element={ <HomePage/> } />
                </Routes>
            </div>
        </Router>
    )
}