import React from 'react';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './pages.css';

const HomePage = ({handleLogout, handleDelete, updatePassword, currentUser}) => {
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        updatePassword(password);
        setPassword('');
    };
    const [files, setFiles] = useState([]);
    useEffect(() => {
        const fetchFiles = async () => {
          try {
            const response = await fetch('http://localhost:3001/files');
            const data = await response.json();
            setFiles(data.files);
          } catch (error) {
            console.error('Error fetching files:', error);
          }
        };
        fetchFiles();
    }, []);

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
            <h1>File List</h1>
            <ul>
                {files.map((fileName, index) => (
                <li key={index}>{fileName}</li>
                ))}
            </ul>
        </div>
        
    );
}

export default HomePage

