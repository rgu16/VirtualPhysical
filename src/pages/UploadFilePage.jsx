import React from 'react'
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {Document, Page} from 'react-pdf';
import { PDFViewer } from '../components';
import axios from 'axios';
// import pdf from "./EkoRecordingPDFExport.pdf"
const UploadFilePage = (props) => {
    const [file, setFile] = useState();
    const [fileList, setFileList] = useState([]);
    const [success, setSuccess] = useState(false);
    const [imageList, setImageList] = useState([]);
    const [pdfList, setPdfList] = useState([]);
    const [error, setError] = useState();
  
    function handleChange(event) {
      setFile(event.target.files[0]);
      setSuccess(false)
    }

    const handleFileSubmit = (event) => {
        event.preventDefault();

        if (!file) {
            console.error('No file selected.');
            return;
        }

        const formData = new FormData();
        formData.append('file', file, file.name);
        axios({
            method: "POST",
            url: props.proxy+"/upload",
            data: formData,
            headers: {
                Authorization: 'Bearer ' + props.token
            }
        }).then((response)=>{
            setSuccess(true)
        }).catch((error)=>{
            if(error.response){
                console.log(error.response)
                console.log(error.response.status)
                console.log(error.response.headers)
                setError(error.response)
            }
        })
    }
    
    useEffect(() => {
        const fetchFiles = async () => {
            axios({
                method: "GET",
                url: props.proxy+'/uploaded_filelist',
                headers: {
                    Authorization: 'Bearer ' + props.token
                }
            })
            .then(response => {
              setFileList(response.data.files);
              setImageList(response.data.files.filter(file => /\.(jpg|jpeg|png|gif)$/i.test(file)))
              setPdfList(response.data.files.filter(file => /\.pdf$/i.test(file)))
            })
            .catch(error => {
              console.error('Error fetching uploaded files:', error);
            });
          };
        fetchFiles();
    }, [props.proxy, props.token]);

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
                {fileList.map((fileName, index) => (
                <li key={index}>{fileName}</li>
                ))}
            </ul>
            <h1>Image List</h1>
            {imageList? imageList.map((imageName)=> (
                    <img
                    key={imageName}
                    src={props.proxy+`/download/${encodeURIComponent(imageName)}`}
                    alt={imageName}
                    style={{ width: 'auto', height: 'auto' }}/>
                )): null}
            <h1>PDF List</h1> 
            {pdfList? pdfList.map((pdfName) => (
                <iframe
                key={pdfName}
                src={props.proxy+`/download/${encodeURIComponent(pdfName)}`}
                title={pdfName}
                alt={pdfName}
                style={{ width: '200%', height: '400%' }}/>
            )):null}
            {/* <PDFViewer/> */}
            <Link to="/"><button className='link-btn'>Go back to Home</button></Link>
         </div> 
    )
}

export default UploadFilePage


