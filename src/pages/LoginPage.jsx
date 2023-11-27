import React, { useState } from 'react';
import { Link, Navigate } from 'react-router-dom';
import './pages.css';

const LoginPage = ({ handleLogin, registeredUsers }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [navigate, setNavigate] = useState();
    
    const handleSubmit = (e) => {
        e.preventDefault();
        const currentUser = registeredUsers.find(user => user.email === email && user.password === password)
        if (currentUser){
            handleLogin(currentUser)
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
                <label htmlFor="email">Email</label>
                <input value={email} onChange={(e) => setEmail(e.target.value)}type="email" placeholder="youremail@gmail.com" id="email" name="email" autoComplete="off" required/>
                <label htmlFor="password">Password</label>
                <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="********" id="password" name="password" required/>
                <button className='primary-button' id="reg_btn" type="submit"><span>Log In</span></button>
            </form>
            <Link to="/register"><button className='link-btn'>Don't have an account? Register here</button></Link>
            <Link to="/forgot-password"><button className='link-btn'>Forgot your password?</button></Link>
            <Link to="/upload-files"><button className='link-btn'>Upload files</button></Link>
            {navigate ? (<Navigate replace to= {navigate} />) : null}
        </div>
    );
}

export default LoginPage
