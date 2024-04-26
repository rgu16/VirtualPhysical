import React from "react";

import { Img, List, Text, NavBar, TabNav, MedTechNotes } from "components";
import {Navigate } from 'react-router-dom';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { useRef, useState, useEffect } from 'react';
import TextField from '@mui/material/TextField';
import axios from 'axios';
import InputAdornment from '@mui/material/InputAdornment';

const HandsMedPage = (props) => {
  const [note, setNotes] = useState();
  const [imageLoaded, setImageLoaded] = useState(false);
  const fileInputRef = useRef(null);
  const [profilePic, setProfilePic] = useState()

  const [cyanosis, setCyanosisValue] = useState("none");
  const [pallor, setPallorValue] = useState("none");
  const [capillaryrefill, setCRTValue] = useState("");
  const [pulseox, setPulseOxValue] = useState("");
  const [isCheckedScale, setIsCheckedScale] = useState(false);
  const [isCheckedCRT, setIsCheckedCRT] = useState(false);
  const [isCheckedPulseOx, setIsCheckedPulseOx] = useState(false);

  const [navigate, setNavigate] = useState();
  const [complete, setComplete] = useState(false);
  const [error, setError] = useState("");
  const [crtError, setCRTError] = useState('')
  const [poError, setPoError] = useState('')
  useEffect(() => {
    axios({
        method: "GET",
        url: props.proxy + "download/hands",
        headers: {
            Authorization: 'Bearer ' + props.token
        }
    })
    .then((response) => {
        const res = response.data;
        console.log(res);
        setCyanosisValue(res.detail["cyanosis"]);
        setPallorValue(res.detail["pallor"]);
        setCRTValue(res.detail["capillaryrefill"]);
        checkCRT(parseInt(res.detail["capillaryrefill"], 10))
        setPulseOxValue(res.detail["pulseox"]);
        checkPO(parseInt(res.detail["pulseox"], 10))
        setProfilePic(res.Image)
        if(res.hasOwnProperty("med_note")){
            setNotes(res.med_note);
            // console.log(res.note);
        }
    })
    .catch((error) => {
        if (error.response){
            console.log(error.response);
            console.log(error.response.status);
            console.log(error.response.headers);
        }
    });
  }, [props]);
  const inputs = [cyanosis, pallor, capillaryrefill, pulseox];
  const handleCheckboxScaleChange = () => {
    setIsCheckedScale(!isCheckedScale);
  };
  const handleCheckboxCRTChange = () => {
    setIsCheckedCRT(!isCheckedCRT);
  };
  const handleCheckboxPulseOxChange = () => {
    setIsCheckedPulseOx(!isCheckedPulseOx);
  };
  
  const handleCyanosisChange = (event) => {
    setCyanosisValue(event.target.value)
  }

  const handlePallorChange = (event) => {
    setPallorValue(event.target.value)
  }
  const checkCRT = value =>{
    if (value === ''){
      setCRTError('');
    }
    else if (value > 3) {
      setCRTError("Highly Abnormal");
    } else if (value > 2){
      setCRTError('Abnormal (due to dehydration)');
    } else {
      setCRTError('');
    }
  }
  const handleCRTChange = (e) => {
    const value = e.target.value.replace(/[^0-9]/g, '')
    setCRTValue(value);
    checkCRT(value)

  }

  const checkPO = (value) =>{
    if (value === ''){
      setPoError('');
    }
    else if (value < 90) {
      setPoError("Highly Abnormal");
    } else if (value < 94){
      setPoError('Abnormal');
    } else if (value >100){
      setPoError('Invalid');
    }else{
      setPoError('');
    }
  }
  const handlePulseOxChange = (e) => {
    const value = e.target.value.replace(/[^0-9]/g, '')
    setPulseOxValue(value);
    checkPO(value)
  }

  const handleUploadClick = () => {
    fileInputRef.current.click();
  };

  const handleImageUpload = (e) => {
    e.preventDefault();
    const file = e.target.files[0];
    console.log('UploadEyesImage')
    setProfilePic(URL.createObjectURL(file))
    if (!file) {
        console.error('No file selected.');
        return;
    }
    const formData = new FormData();
    formData.append('file', file, file.name);
    formData.append('location', "/hands/Image")
    console.log(formData)
    axios({
        method: "POST",
        url: props.proxy+"/upload_file",
        data: formData,
        headers: {
            Authorization: 'Bearer ' + props.token
        }
    }).then((response) => {

     
    }).catch((error)=>{
      setError("Upload failed, please try again")
        if(error.response){
            console.log(error.response)
            console.log(error.response.status)
            console.log(error.response.headers)
        }
    })
  };

  const handleSave = (e) => {
    e.preventDefault();
    const data = {}
    data['cyanosis'] = cyanosis; 
    data['pallor'] = pallor; 
    data['capillaryrefill'] = capillaryrefill; 
    data['pulseox'] = pulseox; 
    data['hands_notes'] = note;

    console.log(data);
    axios({
     method:"POST",
     url: props.proxy + "/upload_json",
     data: {data: data, filename: '/hands/detail'},
     headers: {
       Authorization: 'Bearer ' + props.token
       }
   }).then((response) => {
    axios({
      method:"POST",
      url: props.proxy + "/upload_json",
      data: {data: note, filename: '/hands/med_note'},
      headers: {
        Authorization: 'Bearer ' + props.token
        }
    }).then((response) => {
      setNavigate('/legs');
  })
    .catch((error)=>{
      setError("Upload failed, please try again")
      if(error.response){
        console.log(error.response)
        console.log(error.response.status)
        console.log(error.response.headers)
      }
    })
  })
   .catch((error)=>{
    setError("Upload failed, please try again")
     if(error.response){
       console.log(error.response)
       console.log(error.response.status)
       console.log(error.response.headers)
     }
   })
  };
  const [isCheckedPulse, setCheckboxPulse] = useState(false);
  const inputRefs = [useRef(null),useRef(null),useRef(null),useRef(null)]
  const handleClick = () => {
   console.log(inputs)
   const nextInput = inputs.map((item, index)=> {
     if (item === null | item === '' | item=== 'none'){
       return index;
     }
     return null;
    }).filter(index => index !== null);
    console.log(nextInput)
    if (nextInput.length > 0) {
     const currentRef = inputRefs[nextInput[0]]
     currentRef.current.focus();
     currentRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }else {
     setComplete(true);
    }
  };
  return (
    <>
    <div className="h-screen">
       <NavBar proxy={props.proxy} token={props.token}/>
         <div
           className="bg-cover bg-no-repeat bg-gray-50 flex flex-col font-dmsans items-center justify-start mx-auto pb-28 w-full"
           style={{ backgroundImage: "url('images/img_demographicstab.svg')" }}
         >
           <div className="flex flex-col md:gap-10 gap-[50px] items-center justify-start w-full">
            <div></div>
             <div className="flex flex-col items-start justify-start max-w-[1700px] mx-auto md:px-5 w-full">
               <TabNav tab="hands"></TabNav>
               <div className="min-h-screen bg-white-A700 flex flex-col font-cairo items-start justify-start p-10 sm:px-5 w-full"style={{
       paddingTop: '50px',
     }} >
                 <div className="flex flex-col  justify-start w-[99%] md:w-full">
                   <div className="flex md:flex-col flex-row md:gap-10 items-start justify-start w-full">
                     <div className="md:h-[560px]  relative w-[80%] md:w-full">
                         <div className="flex flex-col items-start justify-start w-full">
                         <List
                             className="flex flex-col gap-[10px] md:ml-[0] ml-[50px] w-[100%]"
                             orientation="vertical">      
                             <Text
                             className="sm:text-3xl md:text-[32px] text-[34px] text-gray-900_02"
                             size="txtCairoBold34">
                             Hands
                             </Text>
                             <div className="flex flex-col gap-[13px] ml-[50px] items-start justify-between w-full" >
                               <div className="flex flex-row gap-[10px]">
                             <Text
                                 className="text-[22px] md:text-[22px] text-black-900 sm:text-xl"
                                 size="txtCairoBold24">
                                Cyanosis:
                             </Text>
                             <div className="relative group flex flex-row">
                               <button onClick={() => setCheckboxPulse(!isCheckedPulse)}>
                                 <img
                                 className="h-[36px] w-[36px]"
                                 src="images/img_profile_black_900.svg"
                                 alt="profile_One"/>
                               </button>
                               <span className=" bg-gray-100 text-gray-700 px-2 py-1 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">
                                 Show cyanosis (bluish-purple skin color) scale 
                               </span>
                             </div>
                             
                             </div>
                             
                             </div>
                             <div className="flex flex-col gap-[0px] ml-[80px] items-start justify-start w-[50%]" >
                             <FormControl   
                          error = {Boolean((cyanosis !== '0') & (cyanosis !== "none"))}
                            className = "flex flex-col justify-start items-start w-full" 
                            >
                          <RadioGroup className = "flex flex-row justify-between w-full" value = {cyanosis}
                            onChange={handleCyanosisChange}>
                          <div className = {isCheckedPulse?"flex flex-row justify-between w-full ml-[-60px]":"flex flex-row justify-start"}>
                          {isCheckedPulse? <div></div> :
                          <FormLabel style={{paddingTop: '10px' , fontSize: '20px'}} id="demo-row-radio-buttons-group-label">None</FormLabel>}
                            <FormControlLabel inputRef={inputRefs[0]} value="0" labelPlacement="bottom" control={<Radio />} label="0" />
                            <FormControlLabel inputRef={inputRefs[0]} value="1" labelPlacement="bottom" control={<Radio />} label="1" />
                            <FormControlLabel inputRef={inputRefs[0]} value="2" labelPlacement="bottom" control={<Radio />} label="2" />
                            {isCheckedPulse? <div></div> :
                          <FormLabel style={{paddingTop: '9px', fontSize: '20px' }} id="demo-row-radio-buttons-group-label">Severe</FormLabel>}
                          </div>
                           </RadioGroup>
                          </FormControl>
   
                             </div>
                             {isCheckedPulse && (
                                          <div className = "flex flex-row justify-between items-start w-[40%] ml-[80px] mr-[80px]">
                                            <div className ="flex flex-col items-center justify-center w-[33%] m-[2px] text-center">
                                            <img
                                                style={{
                                                  height: "60%"
                                                }} 
                                              src="images/cyanosis1.png"
                                              alt="screenshot20231"
                                            />
                                            <Text
                                                className="text-[22px] md:text-[22px] text-black-900 sm:text-xl"
                                                size="txtCairoBold24">
                                              None
                                            </Text>
                                            <Text
                                                className="text-[15px] md:text-[22px] text-black-900 sm:text-xl text-center">
                                              No sign of bluish discoloration of skin
                                            </Text>
                                            </div>
                                            <div className ="flex flex-col items-center justify-center w-[33%]  m-[2px] text-center">
                                            <img
                                                style={{
                                                  height: "60%"
                                                }}
                                              src="images/cyanosis2.png"
                                              alt="screenshot20231"
                                            />
                                            <Text
                                                className="text-[22px] md:text-[22px] text-black-900 sm:text-xl"
                                                size="txtCairoBold24">
                                              Mild
                                            </Text>
                                            <Text
                                                className="text-[15px] md:text-[22px] text-black-900 sm:text-xl text-center">
                                              Showing signs of bluish discoloration of skin, especially at fingernails
                                            </Text>
                                            </div>
                                            <div className ="flex flex-col items-center justify-center w-[33%] m-[2px] text-center">
                                            <img
                                                style={{
                                                  height: "60%"
                                                }}
                                              src="images/cyanosis3.png"
                                              alt="screenshot20231"
                                            />
                                            <Text
                                                className="text-[22px] md:text-[22px] text-black-900 sm:text-xl"
                                                size="txtCairoBold24">
                                              Severe
                                            </Text>
                                            <Text
                                                className="text-[15px] md:text-[22px] text-black-900 sm:text-xl text-center">
                                              Profound bluish discoloration of skin
                                            </Text>
                                            </div>
                                          </div>
                                      )}
                              <div className="flex flex-col gap-[13px] ml-[50px] items-start justify-between w-full" >
                               <div className="flex flex-row gap-[10px]">
                             <Text
                                 className="text-[22px] md:text-[22px] text-black-900 sm:text-xl"
                                 size="txtCairoBold24">
                                Pallor:
                             </Text>
                             <div className="relative group flex flex-row">
                               <button onClick={handleCheckboxScaleChange}>
                                 <img
                                 className="h-[36px] w-[36px]"
                                 src="images/img_profile_black_900.svg"
                                 alt="profile_One"/>
                               </button>
                               <span className=" bg-gray-100 text-gray-700 px-2 py-1 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">
                                 Show pallor (skin paleness) scale
                               </span>
                             </div>
                             
                             </div>
                             
                             </div>
                             <div className="flex flex-col gap-[0px] ml-[80px] items-start justify-start w-[50%]" >
                             <FormControl   
                          error = {Boolean((pallor !== '0') & (pallor !== "none"))}
                            className = "flex flex-col justify-start items-start w-full" 
                            >
                          <RadioGroup className = "flex flex-row justify-between w-full" value = {pallor}
                            onChange={handlePallorChange} >
                          <div className = {isCheckedScale?"flex flex-row justify-between w-full ml-[-60px]":"flex flex-row justify-start"}>
                          {isCheckedScale? <div></div> :
                          <FormLabel style={{paddingTop: '10px' , fontSize: '20px'}} id="demo-row-radio-buttons-group-label">None</FormLabel>}
                            <FormControlLabel inputRef={inputRefs[1]} value="0" labelPlacement="bottom" control={<Radio />} label="0" />
                            <FormControlLabel inputRef={inputRefs[1]} value="1" labelPlacement="bottom" control={<Radio />} label="1" />
                            <FormControlLabel inputRef={inputRefs[1]} value="2" labelPlacement="bottom" control={<Radio />} label="2" />
                            {isCheckedScale? <div></div> :
                          <FormLabel style={{paddingTop: '9px', fontSize: '20px' }} id="demo-row-radio-buttons-group-label">Severe</FormLabel>}
                          </div>
                           </RadioGroup>
                          </FormControl>
   
                             </div>
                             {isCheckedScale && (
                                          <div className = "flex flex-row justify-between items-start w-[40%] ml-[80px] mr-[80px]">
                                            <div className ="flex flex-col items-center justify-center w-[33%] m-[2px] text-center">
                                            <img
                                                style={{
                                                  height: "60%"
                                                }} 
                                              src="images/nopallor.png"
                                              alt="screenshot20231"
                                            />
                                            <Text
                                                className="text-[22px] md:text-[22px] text-black-900 sm:text-xl"
                                                size="txtCairoBold24">
                                              None
                                            </Text>
                                            <Text
                                                className="text-[15px] md:text-[22px] text-black-900 sm:text-xl text-center">
                                              No palmer pallor
                                            </Text>
                                            </div>
                                            <div className ="flex flex-col items-center justify-center w-[33%]  m-[2px] text-center">
                                            <img
                                                style={{
                                                  height: "60%"
                                                }}
                                              src="images/mildpallor.png"
                                              alt="screenshot20231"
                                            />
                                            <Text
                                                className="text-[22px] md:text-[22px] text-black-900 sm:text-xl"
                                                size="txtCairoBold24">
                                              Mild
                                            </Text>
                                            <Text
                                                className="text-[15px] md:text-[22px] text-black-900 sm:text-xl text-center">
                                              Palmer pallor
                                            </Text>
                                            </div>
                                            <div className ="flex flex-col items-center justify-center w-[33%] m-[2px] text-center">
                                            <img
                                                style={{
                                                  height: "60%"
                                                }}
                                              src="images/severepallor.png"
                                              alt="screenshot20231"
                                            />
                                            <Text
                                                className="text-[22px] md:text-[22px] text-black-900 sm:text-xl"
                                                size="txtCairoBold24">
                                              Severe
                                            </Text>
                                            <Text
                                                className="text-[15px] md:text-[22px] text-black-900 sm:text-xl text-center">
                                              Severe palmer pallor
                                            </Text>
                                            </div>
                                          </div>
                                      )}
                             <div className="flex flex-col gap-[13px] ml-[50px] items-start justify-between w-full" >
                            <div className="flex flex-row items-center gap-[10px] w-[40%] justify-between">
                            <div className="flex flex-row gap-[13px]">
                          <Text
                              className="text-[22px] md:text-[22px] text-black-900 sm:text-xl"
                              size="txtCairoBold24">
                             Capillary Refill Time (CRT):
                          </Text>
                          <div className="relative group flex flex-row">
                            <button onClick={handleCheckboxCRTChange}>
                              <img
                              className="h-[36px] w-[36px]"
                              src="images/img_profile_black_900.svg"
                              alt="profile_One"/>
                            </button>
                            <span style={{ whiteSpace: 'nowrap' }}
                            className=" absolute top-[20px] left-full bg-gray-100 text-gray-700 px-2 py-1 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">
                              Show how to take the capillary refill time
                            </span>
                          </div>
                          </div>
                          <TextField
                            inputRef = {inputRefs[2]}
                            id="outlined-start-adornment"
                              sx={{ m: 1, width: '14ch' }}
                            InputProps={{
                            endAdornment: <InputAdornment position="end">sec</InputAdornment>,
                            }}
                            value = {capillaryrefill}
                                      onChange={handleCRTChange}
                                      label={crtError}
                                      error ={crtError !== ""}/>
                          </div>
                        </div>
                        {isCheckedCRT && (
                            <div style={{ marginLeft: '10px' }}>
                            {/* Your images */}
                            <img
                              style={{
                                width: "40%", // Enlarge the width of the image
                                height: "auto", // Set height to auto to maintain aspect ratio
                                paddingTop: "5px",
                                marginLeft: '80px',
                  
                              }}
                              src="images/capillaryrefill.png"
                              alt="screenshot20231"
                            />
                           
                           
                          </div>
                          )}
                          <div className="flex flex-col gap-[13px] ml-[50px] items-start justify-between w-full" >
                            <div className="flex flex-row items-center gap-[10px] w-[40%] justify-between">
                            <div className="flex flex-row gap-[13px]">
                          <Text
                              className="text-[22px] md:text-[22px] text-black-900 sm:text-xl"
                              size="txtCairoBold24">
                             SpO2 Measurement:
                          </Text>
                          <div className="relative group flex flex-row">
                            <button onClick={handleCheckboxPulseOxChange}>
                              <img
                              className="h-[36px] w-[36px]"
                              src="images/img_profile_black_900.svg"
                              alt="profile_One"/>
                            </button>
                            <span style={{ whiteSpace: 'nowrap' }}
                            className=" absolute top-[20px] left-full bg-gray-100 text-gray-700 px-2 py-1 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">
                              Show how to take pulse ox measurement
                            </span>
                          </div>
                          </div>
                          <TextField
                            inputRef = {inputRefs[3]}
                            id="outlined-start-adornment"
                              sx={{ m: 1, width: '14ch' }}
                            InputProps={{
                            endAdornment: <InputAdornment position="end">%</InputAdornment>,
                            }}
                            value = {pulseox} 
                            onChange={handlePulseOxChange}
                            label={poError}
                                      error ={poError !== ""}/>
                          </div>
                        </div>
                        {isCheckedPulseOx && (
                            <div style={{ marginLeft: '10px' }}>
                            {/* Your images */}
                            <img
                              style={{
                                width: "40%", // Enlarge the width of the image
                                height: "auto", // Set height to auto to maintain aspect ratio
                                paddingTop: "5px",
                                marginLeft: '80px',
                  
                              }}
                              src="images/pulseox.png"
                              alt="screenshot20231"
                            />
                           
                           
                          </div>
                          )}
                             </List>
                               </div>
                           </div>
                       </div>
                   </div>
                   <div className="absolute left-[1218px] top-[240px]">
                   <MedTechNotes notes={note} token={props.token} proxy={props.proxy} tab="abdomen" setNotes={setNotes}/>
                   <div className ="flex flex-row gap-[10px] ml-[50px] mb-[50px] mr-[50px]">
                     <input 
                             ref={fileInputRef}
                             type="file"
                             style={{ display: 'none'}}
                             accept="image/*" // Accept only image files
                             onChange={handleImageUpload}
                           />
                     <button className="bg-indigo-A200 flex md:flex-col flex-row gap-[5px] md:gap-5 ml-5px items-center justify-center mt-2.5 w-[60%] md:w-full h-[50px] rounded-[20px] hover:bg-indigo-A700"
                         onClick={handleUploadClick}
                         >
                           <Img
                             className="h-6 md:ml-[0] ml-[0] md:mt-0 mt-1 w-6"
                             src="images/img_television_white.svg"
                             alt="television"
                           />
                         <Text className="font-semibold md:ml-[0] text-white-A700 text-xl">Upload Image of Hands</Text>
                     </button>
                     <Img
                         className="h-[130px] md:h-auto w-[130px] md:h-auto object-cover  w-full"
                         src= {profilePic}
                         alt=""
                         onLoad ={()=> setImageLoaded(true)}
                         style={{ display: imageLoaded ? "block" : "none" }}
  onError={(e) => {
    e.target.onerror = null; // Prevent infinite loop if the alt image also fails to load
    e.target.src = "images/white.png"; // Set a default image
    e.target.alt = "Alternate Image"; // Set an alternate alt text
    setImageLoaded(true); // Mark as loaded
  }}
                        //  style = {{display: imageLoaded? "block": "none"}}
                         />
      
   
                   </div>
                   </div>
                   <div className = 'flex flex-row items-start justify-start gap-[25px] ml-[120px] w-[41%] mt-[20px]'>
              
                      {complete? <button className="bg-indigo-A200 flex md:flex-col flex-row md:gap-5 ml-5px items-center justify-center mt-2.5 w-[20%] md:w-full h-[50px] rounded-[20px] hover:bg-indigo-A700"
                          onClick={(e) => handleSave(e)}
                          >
                          <Text className="font-semibold md:ml-[0] text-white-A700 text-xl">Save</Text>
                      </button>:
                      <button className="bg-indigo-A200 flex md:flex-col flex-row md:gap-5 ml-5px items-center justify-center mt-2.5 w-[20%] md:w-full h-[50px] rounded-[20px] hover:bg-indigo-A700"
                      onClick={handleClick}
                      >
                      <Text className="font-semibold md:ml-[0] text-white-A700 text-xl">Next Input</Text>
                  </button>}
                  <Text className="font-semibold md:ml-[0] text-red-700 text-xl">{error}</Text>
                  {navigate ? (<Navigate replace to= {navigate} />) : null}
                      
                  </div>
               </div>
               </div>
               </div>
               
              
             
           </div>
           </div>
           </>
  );
};

export default HandsMedPage;