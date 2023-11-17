import React from 'react';
import { Link } from 'react-router-dom';
import './pages.css';

const HomePage = ({handleLogout, handleDelete, currentUser}) => {
    return (
        <div className="text-center">
            <h1 className="main-title home-page-title">Welcome {currentUser.name}</h1>
            <Link to="/">
                <button className="primary-button" onClick={handleLogout}>Log out</button>
                <button className="primary-button" onClick={handleDelete}>Delete account</button>
            </Link>
        </div>
    );
}

export default HomePage

