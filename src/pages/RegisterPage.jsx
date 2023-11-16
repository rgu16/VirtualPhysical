import React from 'react'
import { useState } from 'react'
import { Link, Navigate } from 'react-router-dom'

import './pages.css'

const RegisterPage = ({ onRegister, registeredUsers }) => {
    const [newUser, setNewUser] = useState({email: '', password: '', name:''});
    const [navigate, setNavigate] = useState();
    // const bcrypt = require('bcrypt');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (registeredUsers.some(user => user.email === newUser.email)){
            alert('There is already account with that email');
        } else {
            onRegister(newUser);
            setNavigate('/home')
        }
        setNewUser({email: '', password: '', name:''});
    }

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewUser({
          ...newUser,
          [name]: value,
        });
      };

    return (
        <div className="auth-form-container">
            <h2>Register</h2>
        <form className="register-form" onSubmit={handleSubmit}>
            <label htmlFor="name">Full name</label>
            <input value={newUser.name} name="name" onChange={handleInputChange} id="name" placeholder="Full Name" />
            <label htmlFor="email">email</label>
            <input value={newUser.email} onChange={handleInputChange}type="email" placeholder="youremail@gmail.com" id="email" name="email" />
            <label htmlFor="password">password</label>
            <input value={newUser.password} onChange={handleInputChange} type="password" placeholder="********" id="password" name="password" />
            <button className='primary-button' id="reg_btn" type="submit"><span>Register</span></button>
        </form>
        <Link to="/"><button className='link-btn'>Already have an account? Login here.</button></Link>
        {navigate ? (<Navigate replace to= {navigate} />) : null}
    </div>
    )
}

export default RegisterPage

