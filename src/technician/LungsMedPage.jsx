import React from "react";




import { Img, Line, List, Text, NavBar, TabNav } from "components";
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import { useRef, useState } from 'react';
import axios from 'axios';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import {Link } from "react-router-dom";
const gender = [
{
  value: 'mild',
  label: 'mild',
},
{
  value: 'moderate',
  label: 'moderate',
},
{
  value: 'severe',
  label: 'severe',
},




];




const LungsMedPage = (props) => {
 const inputRefs = [
   useRef(null),
   useRef(null),
   // Add more refs for additional text fields as needed
 ];
  const [currentInputIndex, setCurrentInputIndex] = useState(0);
 
  const handleClick = () => {
    const currentRef = inputRefs[currentInputIndex];
 
    if (currentRef && currentRef.current) {
      currentRef.current.focus();
    }
 
    setCurrentInputIndex((prevIndex) => (prevIndex + 1) % inputRefs.length);
  };
 const [file, setFile] = useState()
const [uploadedFileURL, setUploadedFileURL] = useState(null)




function handleChange(event) {
  setFile(event.target.files[0])
}
function handleSubmit(event) {
  event.preventDefault()
  const url = '/upload_file';
  const formData = new FormData();
  formData.append('file', file);
  formData.append('fileName', file.name);
  const config = {
    headers: {
      'content-type': 'multipart/form-data',
    },
  };
  axios.post(url, formData, config).then((response) => {
    console.log(response.data);
  });








 }
const [breatingrate, setBreathingRateValue] = useState();
const [breathinglabor, setBreathingLaborValue] = useState();
 const handleBreathingRateChange = (event) => {
  setBreathingRateValue(event.target.value)
}
 const handleBreathingLaborChange = (event) => {
  setBreathingLaborValue(event.target.value)
}
return (
  <>
  <NavBar proxy={props.proxy} token={props.token}/>
    <div
      className="bg-cover bg-no-repeat bg-white-A700 flex flex-col font-dmsans h-[1561px] items-center justify-start mx-auto pb-28 w-full"
      style={{ backgroundImage: "url('images/img_demographicstab.svg')" }}
    >
      <div className="flex flex-col md:gap-10 gap-[50px] items-center justify-start w-full">
        <div></div>
        <div className="flex flex-col items-start justify-start max-w-[1700px] mx-auto md:px-5 w-full">
        <TabNav tab="lungs"></TabNav>
          <div className="bg-white-A700 flex flex-col font-cairo items-center justify-start p-10 sm:px-5 w-full" >
                    
                 <div style={{paddingLeft: '150px', paddingTop: '50px'}} className="flex w-full min-h-screen p-5">
    <div className="w-full max-w-md">
    <Text
                      className="sm:text-3xl md:text-[32px] text-[34px] text-gray-900_02"
                      size="txtCairoBold34"
                    >
                     Lungs Inspection
                    </Text>
      <h4  style={{paddingTop: '30px', paddingBottom: '15px', fontWeight: 'bold',fontSize: '22px'}}>
          {" "}
          Qualitative description on patient's breathing: {" "}
        
       </h4>
       <div style={{paddingTop: '20px' }}  className="flex flex-row gap-[13px] items-center justify-between w-full" >
              
                          <Text
                            className="text-2xl md:text-[22px] text-black-900 sm:text-xl"
                            size="txtCairoBold24"
                          >
                            Breathing Rate:
                          </Text>
                     
       <TextField  value = {breatingrate}
  onChange={handleBreathingRateChange }
       inputRef={inputRefs[0]}


        variant="outlined"


        id="outlined-number"
        label="breaths/min"
        type="number"
        InputLabelProps={{
          shrink: true,
        }}
      />
     </div>
    <div  style={{paddingTop: '45px'}} className="flex flex-row gap-[12px] items-center justify-between w-full" >
                           <Text
                            className="mt-0.5 text-2xl md:text-[22px] text-black-900 sm:text-xl"
                            size="txtCairoBold24"
                          >
                            Is breathing labored?
                          </Text>
                  
                        <TextField
        id="outlined-select-currency"
        select
        label="Select"
        defaultValue="EUR"
        helperText="Please select one of the options"
        value = {breathinglabor}
        onChange={handleBreathingLaborChange}
        inputRef={inputRefs[1]}
      
        variant="outlined"


      >
     
        {gender.map((option) => (
          <MenuItem  key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </TextField>
  
      </div>
      {/*<div style={{paddingTop: "2rem"}}>The values is {breatingrate} {breathinglabor}</div>*/}
     {/* <button onClick={handleClick} >Focus next input</button>*/}
     
      <div style={{paddingTop: "2rem"}}>
      <Stack spacing={2} direction="row">
     {/*  <Link to="/eyes"> <Button variant="text">Previous Section</Button></Link>*/}
     <Button variant="contained" onClick={handleClick}>Next Input</Button>
     <Link to="/pulses"><Button variant="outlined" >Next Section</Button>   </Link>
   </Stack>
   </div>
      <div className="App">
      <form onSubmit={handleSubmit}>
        <h1>React File Upload</h1>
        <input type="file" onChange={handleChange}/>
        <button type="submit">Upload</button>
      </form>
      {uploadedFileURL && <img src={uploadedFileURL} alt="Uploaded content"/>}
  </div>
    </div>
    <Img
                        className="common-pointer h-[43px] w-[43px]"
                        src="images/img_profile_black_900.svg"
                        alt="profile"
             
                      />
                     
                
  </div>
           </div>
        </div>
      </div>
    </div>
  </>
);
};




export default LungsMedPage;


