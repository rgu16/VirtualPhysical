import React from 'react'
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './pages.css';
import axios from 'axios';

const UploadFilePage = () => {
    const [file, setFile] = useState();
    const [files, setFiles] = useState([]);
    const [success, setSuccess] = useState(false);
    const [imageList, setImageList] = useState();
    const [error, setError] = useState();
  
    function handleChange(event) {
      setFile(event.target.files[0]);
      setSuccess(false)
    }
    
    const handleFileSubmit = async (event) => {
        event.preventDefault();

        if (!file) {
            console.error('No file selected.');
            return;
        }

        const formData = new FormData();
        formData.append('file', file);

        try {
        const response = await axios.post('http://localhost:3001/upload', formData);
            console.log('File uploaded successfully:', response.data);
            setSuccess(true);
            fetchFiles();
        } catch (error) {
            console.error('Error uploading file:', error);
            setError(error);
        }
    }
    const fetchFiles = async () => {
        try {
          const response = await fetch('http://localhost:3001/files');
          const data = await response.json();
          setFiles(data.files);
          console.log(data.files.filter(file => /\.(jpg|jpeg|png|gif)$/i.test(file)))
          setImageList(data.files.filter(file => /\.(jpg|jpeg|png|gif)$/i.test(file)))
        } catch (error) {
          console.error('Error fetching files:', error);
        }
      };
    useEffect(() => {
        fetchFiles();
    }, []);

    return (
        <div>
            <form onSubmit={handleFileSubmit}>
                <h1>React File Upload</h1>
                <input type="file" onChange={handleChange}/>
                <button type="submit">Upload</button>
            </form>
            {success? <p>File uploaded successfully</p>: null}
            {error && <p>Error uploading file: {error.message}</p>}
            <h1>File List</h1>
            <ul>
                {files.map((fileName, index) => (
                <li key={index}>{fileName}</li>
                ))}
            </ul>
            <h1>Image List</h1>
            {imageList? imageList.map((imageName)=> (
                    <img
                    key={imageName}
                    src={`http://localhost:3001/image/${encodeURIComponent(imageName)}`}
                    alt={imageName}
                    style={{ width: '100%', height: 'auto' }}/>
                )): null}
            <Link to="/"><button className='link-btn'>Go back to login</button></Link>
        </div>
    )
}

export default UploadFilePage
