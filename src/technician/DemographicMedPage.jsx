import React from "react";

import {  Img, Line, List, Text, NavBar, TabNav } from "components";
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import Box from '@mui/material/Box';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputAdornment from '@mui/material/InputAdornment';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import dayjs, { Dayjs } from 'dayjs';
import { Link } from 'react-router-dom';
import { useState, useRef } from 'react';
import axios from 'axios';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { jwtDecode } from "jwt-decode";

const gender = [
  {
    value: 'female',
    label: 'female',
  },
  {
    value: 'male',
    label: 'male',
  },
  {
    value: 'other',
    label: 'other',
  },
  {
    value: 'no selection',
    label: 'no selection',
  },

];

const VisuallyHiddenInput = styled('input')({
  clip: 'rect(0 0 0 0)',
  clipPath: 'inset(50%)',
  height: 1,
  overflow: 'hidden',
  position: 'absolute',
  bottom: 0,
  left: 0,
  whiteSpace: 'nowrap',
  width: 1,
});

const DemographicMedPage = (props) => {
  const patient = jwtDecode(props.token).patient.split("/");
  const [firstname, setFirstNameValue] = useState(patient[1]);
  const [lastname, setLastNameValue] = useState(patient[0]);
  const [genderValue, setGenderValue] = useState();
  const [height, setHeightValue] = useState();
  const [weight, setWeightValue] = useState();
  const [DOB, setDOBValue] = useState(dayjs());
  const [age, setAgeValue] = useState();
  const [history, setHistoryValue] = useState();
  const [profilePic, setProfilePic] = useState()
  const fileInputRef = useRef(null);
  const [imageLoaded, setImageLoaded] = useState(false);

  const handleFirstNameChange = (event) => {
    setFirstNameValue(event.target.value)
  }

  const handleLastNameChange = (event) => {
    setLastNameValue(event.target.value)
  }

  const handleGenderChange = (event) => {
    setGenderValue(event.target.value)
  }

  const handleHeightChange = (event) => {
    setHeightValue(event.target.value)
  }

  const handleWeightChange = (event) => {
    setWeightValue(event.target.value)
  }

  const handleDOBChange = (date) => {
    setDOBValue(date)
  }
  const handleAgeChange = (event) => {
    setAgeValue(event.target.value)
  }

  const handleHistoryChange = (event) => {
    setHistoryValue(event.target.value)
  }
  
  const handleUploadClick = () => {
    fileInputRef.current.click();
  };

  const handleSave = (e) => {
     e.preventDefault();
     const data = {}
     data['gender'] = genderValue;
     data['height'] = height;
     data['weight'] = weight;
     data['DOB'] = DOB.format("MM/DD/YYYY");
     data['history'] = history;
     console.log(data);
     axios({
      method:"POST",
      url: props.proxy + "/upload_json",
      data: {data: data, filename: '/demographic'},
      headers: {
        Authorization: 'Bearer ' + props.token
        }
    }).then((response) => {
      const res =response.data;
      localStorage.setItem('demographic', data);
  })
    .catch((error)=>{
      if(error.response){
        console.log(error.response)
        console.log(error.response.status)
        console.log(error.response.headers)
      }
    })
  };

  const inputRefs = [
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
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

  const handleImageUpload = (e) => {
    e.preventDefault();
    const file = e.target.files[0];
    setProfilePic(URL.createObjectURL(file))
    if (!file) {
        console.error('No file selected.');
        return;
    }
    const formData = new FormData();
    formData.append('file', file, file.name);
    formData.append('location', "/profile_pic")
    console.log(formData)
    axios({
        method: "POST",
        url: props.proxy+"/upload_file",
        data: formData,
        headers: {
            Authorization: 'Bearer ' + props.token
        }
    }).then((response) => {
      const res = response.data
      console.log(res)
    
      console.log('Server response:', response);
      console.log('Image uploaded:', imageUrl);

    // Assuming the URL is nested within a 'data' property, modify this accordingly
    const imageUrl = response.data && response.data.url;
      
    }).catch((error)=>{
        if(error.response){
            console.log(error.response)
            console.log(error.response.status)
            console.log(error.response.headers)
        }
    })
  };

 
  return (
    <>
    <NavBar proxy={props.proxy} token={props.token}/>
      <div
        className="bg-cover bg-no-repeat bg-gray-50 flex flex-col font-dmsans h-[1561px] items-center justify-start mx-auto pb-28 w-full"
        style={{ backgroundImage: "url('images/img_demographicstab.svg')" }}
      >
        <div className="flex flex-col md:gap-10 gap-[50px] items-center justify-start w-full">
         <div></div>
          <div className="flex flex-col items-start justify-start max-w-[1700px] mx-auto md:px-5 w-full">
            <TabNav tab="demographic"></TabNav>
            <div className="bg-white-A700 flex flex-col font-cairo items-center justify-start p-10 sm:px-5 w-full"style={{
    paddingTop: '50px',
  }} >
              <div className="flex flex-col gap-[41px] justify-start mb-60 w-[99%] md:w-full">
                <div className="flex md:flex-col flex-row md:gap-10 items-start justify-start w-full">
                  <div className="md:h-[560px] h-[580px] relative w-[50%] md:w-full">
                      <div className="flex flex-col items-start justify-start w-full">
                        <List
                          className="flex flex-col gap-[20px] md:ml-[0] ml-[50px] w-[49%]"
                          orientation="vertical">      
                          <Text
                          className="sm:text-3xl md:text-[32px] text-[34px] text-gray-900_02"
                          size="txtCairoBold34">
                          Demographics 
                          </Text>
                          <div className="flex flex-row gap-[13px] items-center justify-between w-full" >
                            <Text
                              className="text-2xl md:text-[22px] text-black-900 sm:text-xl"
                              size="txtCairoBold24">
                              Name:
                            </Text>
                            <TextField  inputRef={inputRefs[0]} value = {firstname} onChange={handleFirstNameChange} required id="outlined-basic" label="required" variant="outlined" /> 
                          </div>
                          <div className="flex flex-row gap-[15px] items-start justify-between w-full">
                            <Text
                              className="mt-0.5 text-2xl md:text-[22px] text-black-900 sm:text-xl"
                              size="txtCairoBold24">
                              Email:
                            </Text>                        
                            <TextField  inputRef={inputRefs[1]} value = {lastname} onChange={handleLastNameChange} required id="outlined-basic" label="required" variant="outlined" />
                          </div>
                          <div className="flex flex-row gap-[15px] items-center justify-between w-full">
                             <Text
                              className="mt-0.5 text-2xl md:text-[22px] text-black-900 sm:text-xl"
                              size="txtCairoBold24" 
                            >
                              Gender:
                            </Text>
                            <TextField
                              className = "w-[70%]"
                              inputRef={inputRefs[2]}
                              value = {genderValue} 
                              onChange={handleGenderChange}
                              id="outlined-select-currency-native"
                              select
                              label=""
                              defaultValue="no selection"
                              SelectProps={{
                                native: true,
                              }}
                              helperText=""
                            >
                              {gender.map((option) => (
                                <option key={option.value} value={option.value}>
                                  {option.label}
                                </option>
                              ))}
                            </TextField>
                          </div>
                          <div className="flex flex-row gap-[15px] items-center justify-between w-full">
                             <Text
                               className="mt-[5px] text-2xl md:text-[22px] text-black-900 sm:text-xl"
                               size="txtCairoBold24">
                               Height:
                             </Text>
                            <TextField
                              id="outlined-start-adornment"
                              sx={{ m: 1, width: '25ch' }}
                              InputProps={{
                                endAdornment: <InputAdornment position="end">ft</InputAdornment>,
                              }}
                              inputRef={inputRefs[3]}
                              value = {height} 
                              onChange={handleHeightChange}/>
                          </div>
                          <div className="flex flex-row gap-[15px] items-center justify-between w-full">  
                          <Text
                              className="mt-0.5 text-2xl md:text-[22px] text-black-900 sm:text-xl"
                              size="txtCairoBold24"
                            >
                              Weight:
                            </Text>          
                          <OutlinedInput 
                            id="outlined-adornment-weight"
                            endAdornment={<InputAdornment position="end">kg</InputAdornment>}
                            aria-describedby="outlined-weight-helper-text"
                            inputProps={{
                              'aria-label': 'weight',
                            }}
                            inputRef={inputRefs[4]}
                            value = {weight} 
                            onChange={handleWeightChange}
                          />                      
                          </div>
                           <div className="flex flex-row gap-[15px] items-center justify-between w-full">
                            <Text
                              className="text-2xl md:text-[22px] text-black-900 sm:text-xl"
                              size="txtCairoBold24"
                            >
                              Date of Birth:{" "}
                            </Text>
                            
                            <LocalizationProvider dateAdapter={AdapterDayjs}>
                              <DemoContainer components={['DatePicker']}>
                                <DatePicker  inputRef={inputRefs[5]} label="" defaultValue={dayjs('1989-04-17')} onChange={handleDOBChange} />
                              </DemoContainer>
                            </LocalizationProvider>
                          </div>
                         {/*  <div className="flex flex-row gap-[15px] items-center justify-between w-full">
                            <Text
                              className="mt-0.5 text-2xl md:text-[22px] text-black-900 sm:text-xl"
                              size="txtCairoBold24"
                            >
                              Age:
                            </Text>
                            <TextField value = {age} onChange={handleAgeChange} inputRef={inputRefs[6]} required id="outlined-basic" label="required" variant="outlined" />
                            
                          </div>*/}
                        </List>
                      </div>
                    {/* </div> */}
                  </div>
                  <div className="flex flex-col h-full items-start justify-start w-[70%] mt-[80px]">  
                      <Img
                        className="h-[200px] w-[200px] md:h-auto object-cover rounded-bl-[14px] rounded-[14px] w-full"
                        src= {profilePic}
                        alt=""
                        onLoad ={()=> setImageLoaded(true)}
                        style = {{display: imageLoaded? "block": "none"}}
                        />
                        <Img
                        className="h-[200px] w-[200px] md:h-auto object-cover rounded-bl-[14px] rounded-[14px] w-full"
                        src= "images/img_defaultprofile.jpg"
                        alt="image"
                        style = {{display: imageLoaded? "none": "block"}}
                      />
                      <button className="flex md:flex-col flex-row md:gap-5 items-center mt-2.5 w-[96%] md:w-full border-0"
                              onClick = {handleUploadClick}>
                        <div className = "flex flex-row">
                        <Img
                          className="h-6 md:ml-[0] ml-[0] md:mt-0 mt-1 w-6"
                          src="images/img_television.svg"
                          alt="television"
                        />
                        <Text className="font-semibold ml-2.5 md:ml-[0] text-black-900 text-xl">Upload Profile Picture</Text>
                        </div>
                    </button>
                    </div>
                </div>
                <div className="flex flex-col items-start justify-start md:ml-[0] ml-[35px] w-[41%] md:w-full">
                  <Text style={{
    paddingBottom: '20px',  paddingLeft: '15px', 
  }}
                    className="text-2xl md:text-[22px] text-black-900 sm:text-xl"
                    size="txtCairoBold24"
                  >
                    Patient History:
                  </Text>
                  <TextField  value = {history} onChange={handleHistoryChange} fullWidth sx={{ m: 1 }}
          id="outlined-multiline-static"
          label="Multiline"
          multiline
          rows={4}
       
          inputRef={inputRefs[6]}
        />
         
           {/* <div style={{paddingTop: "2rem"}}>The values is {genderValue} {DOB}</div>  */}
                    <input
                      ref={fileInputRef}
                      type="file"
                      style={{ display: 'none' }}
                      accept="image/*" // Accept only image files
                      onChange={handleImageUpload}
                    />
                    <div style={{paddingTop: "2rem"}}>
      <Stack spacing={2} direction="row">
     <Button variant="contained" onClick={handleClick}>Next Input</Button>
     <Link to="/general"><Button variant="outlined" onClick={(e) => handleSave(e)} >Save</Button>   </Link>
   </Stack>
   </div>
                    
               
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DemographicMedPage;