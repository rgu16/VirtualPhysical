import React from 'react';
import { Link } from 'react-router-dom';
import './pages.css';

const HomePage = () => {
    return (
        <div className="text-center">
            <h1 className="main-title home-page-title">Welcome</h1>
            <Link to="/">
                <button className="primary-button">Log out</button>
            </Link>
            <button className="primary-button">Delete account</button>
        </div>
    );
}

export default HomePage

