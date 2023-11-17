import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

import './pages.css';

const ForgotPasswordPage = () => {
    const [email, setEmail] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
    }

    return (
        <div className="auth-form-container">
            <h2>Reset Password</h2>
            <form className="login-form" onSubmit={handleSubmit}>
                <label htmlFor="email">Email</label>
                <input value={email} onChange={(e) => setEmail(e.target.value)}type="email" placeholder="youremail@gmail.com" id="email" name="email" required/>
                <button className='primary-button' id="reg_btn" type="submit"><span>Reset</span></button>
            </form>
            <Link to="/"><button className='link-btn'>Return to login</button></Link>
        </div>
    );
}

export default ForgotPasswordPage
