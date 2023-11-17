import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import './pages.css';

const HomePage = ({handleLogout, handleDelete, updatePassword, currentUser}) => {
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        updatePassword(password);
        setPassword('');
    };

    return (
        <div className="home">
            <h1 className="main-title home-page-title">Welcome {currentUser.name}</h1>
            <Link to="/">
                <button className="primary-button" onClick={handleLogout}><span>Log out</span></button>
            </Link>
            <Link to="/">
                <button className="primary-button" onClick={handleDelete}><span>Delete account</span></button>
            </Link>
            <form className="login-form" onSubmit={(e) => handleSubmit(e)}>
                <label htmlFor="password"> New Password</label>
                <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="********" id="password" name="password" required/>
                <button className='primary-button' id="reg_btn" type="submit"><span>Update password</span></button>
            </form>
        </div>
        
    );
}

export default HomePage

