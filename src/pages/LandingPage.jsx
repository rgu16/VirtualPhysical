import React from 'react';
import { Link } from 'react-router-dom';

import './pages.css';

const LandingPage = () => {
    return (
        <header>
            <h1 className="main-title text-center">Login/Register</h1>
            <div className="buttons text-center">
                <Link to="/login">
                    <button className="primary-button">log in</button>
                </Link>
                <Link to="/register">
                    <button className="primary-button" id="reg_btn"><span>register </span></button>
                </Link>
            </div>
        </header>
    );
}

export default LandingPage