import React, { useState } from 'react';
import { Link, Navigate } from 'react-router-dom';
import './pages.css';

const LoginPage = ({ registeredUsers }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [navigate, setNavigate] = useState();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (registeredUsers.some(user => user.email === email && user.password === password)){
            setNavigate('/home')
        } else {
            alert('Incorrect Login');
        }
        setEmail('');
        setPassword('');
    }
    return (
        <div className="auth-form-container">
            <h2>Login</h2>
            <form className="login-form" onSubmit={handleSubmit}>
                <label htmlFor="email">email</label>
                <input value={email} onChange={(e) => setEmail(e.target.value)}type="email" placeholder="youremail@gmail.com" id="email" name="email" />
                <label htmlFor="password">password</label>
                <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="********" id="password" name="password" />
                <button className='primary-button' id="reg_btn" type="submit"><span>Log In</span></button>
            </form>
            <Link to="/register"><button className='link-btn'>Don't have an account? Register here</button></Link>
            <Link to="/forgot-password"><button className='link-btn'>Forgot your password?</button></Link>
            {navigate ? (<Navigate replace to= {navigate} />) : null}
        </div>
    );
}

export default LoginPage
