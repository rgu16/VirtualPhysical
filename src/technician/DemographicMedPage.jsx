import React from "react";
import {  Img, List, Text, NavBar, TabNav, MedTechNotes } from "components";
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import dayjs from 'dayjs';
import { useState, useRef, useEffect } from 'react';
import axios from 'axios';
import { jwtDecode } from "jwt-decode";
import { Navigate } from 'react-router-dom';

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
    value: '',
    label: 'no selection',
  },

];

const DemographicMedPage = (props) => {
  const [navigate, setNavigate] = useState();
  const patient = jwtDecode(props.token).patient.split("/");
  const name = patient[1];
  const email= patient[0];
  const [genderValue, setGenderValue] = useState('');
  const [height, setHeightValue] = useState('');
  const [heightinches, setHeightInchesValue] = useState('');
  const [weight, setWeightValue] = useState('');
  const [DOB, setDOBValue] = useState(null);
  const [history, setHistoryValue] = useState('');
  const [profilePic, setProfilePic] = useState('');
  const fileInputRef = useRef(null);
  const [imageLoaded, setImageLoaded] = useState(false);
  const [note, setNotes] = useState('');
  const inputs = [name, email, genderValue, height, heightinches, weight, DOB, history];
  const [complete, setComplete] = useState(false);
  const [error, setError] = useState("");
  const [feetError, setFeetError] = useState('');
  const [inchesError, setInchesError] = useState('');
  const [dobError, setdobError] = useState('');
  const [weightError, setWeightError] = useState('');

  useEffect(() => {
    axios({
        method: "GET",
        url: props.proxy + "/download/demographic",
        headers: {
        Authorization: 'Bearer ' + props.token
        }
    })
    .then((response) => {
        const res = response.data
        console.log(res)

        setGenderValue(res.detail['gender'])
        setHeightValue(res.detail['height'])
        checkHeight(parseInt(res.detail['height'],10))
        setHeightInchesValue(res.detail['heightInches'])
        checkInches(parseInt(res.detail['heightInches'],10))
        setWeightValue(res.detail['weight'])
        checkWeight(parseInt(res.detail['weight'],10))
        setDOBValue(dayjs(res.detail['DOB'], "MM/DD/YYYY"))
        checkDOB(dayjs(res.detail['DOB'], "MM/DD/YYYY"))
        setHistoryValue(res.detail['history'])
      
        if(res.hasOwnProperty("profile_pic")){
          setProfilePic(res.profile_pic)
        }
        if (res.hasOwnProperty("med_note")){
          setNotes(res.med_note)
        }
    }).catch((error) => {
        if (error.response){
        console.log(error.response)
        console.log(error.response.status)
        console.log(error.response.headers)}
    })
  }, [props]);

  const handleGenderChange = (event) => {
    setGenderValue(event.target.value)
  }

  const checkHeight = (value) => {
    if (value===''){
      setFeetError('')
    } else if (value>8 | value <1) {
      setFeetError("Invalid height");
    } else {
      setFeetError('');
    }
  }
  const handleHeightChange = (e) => {
    const value = e.target.value.replace(/[^0-9]/g, '')
    setHeightValue(value);
    checkHeight(value)
  }

  const checkInches = (value) => {
    if (value===''){
      setInchesError('')
    } else if (value>12 | value <0) {
      setInchesError("Invalid height");
    } else {
      setInchesError('');
    }
  }
  const handleHeightInchesChange = (e) => {
    const value = e.target.value.replace(/[^0-9]/g, '')
    setHeightInchesValue(value);
    checkInches(value)
  }

  const checkWeight = (value) => {
    if (value===''){
      setWeightError('');
    } else if (value > 500 | value <2){
      setWeightError("Invalid weight");
    } else {
      setWeightError('');
    }
  }
  const handleWeightChange = (e) => {
    const value = e.target.value.replace(/[^0-9]/g, '')
    setWeightValue(value);
    checkWeight(value)
  }

  const checkDOB = (date) => {
    const currentDate = dayjs();
    const selectedDate = date;
    const isWithin100Years = selectedDate.isAfter(currentDate.subtract(100, 'year')) && 
                             selectedDate.isBefore(currentDate.add(1, 'year'));
    
    if (isWithin100Years) {
      setdobError('');
    } else {
      setdobError('Invalid age');
    }
  }
  const handleDOBChange = (date) => {
    setDOBValue(date)
    checkDOB(date)
  }

  const handleHistoryChange = (event) => {
    setHistoryValue(event.target.value)
  }
  
  const handleUploadClick = () => {
    fileInputRef.current.click();
  };

  const handleSave = (e) => {
     e.preventDefault();
      const filename = "/demographic/med_note";
      axios({
       method:"POST",
       url: props.proxy + "/upload_json",
       data: {data: note, filename: filename},
       headers: {
         Authorization: 'Bearer ' + props.token
         }
      }).then((response) => {
        const data = {}
        data['gender'] = genderValue;
        data['height'] = height;
        data['heightInches'] = heightinches;
        data['weight'] = weight;
        data['DOB'] = DOB.format("MM/DD/YYYY");
        data['history'] = history;
        axios({
          method:"POST",
          url: props.proxy + "/upload_json",
          data: {data: data, filename: '/demographic/detail'},
          headers: {
            Authorization: 'Bearer ' + props.token
            }
        }).then((response) => {
          setNavigate('/general');
      })
        .catch((error)=>{
          setError("Upload failed, please try again")
          if(error.response){
            console.log(error.response)
            console.log(error.response.status)
            console.log(error.response.headers)
          }
        })
      }).catch((error)=>{
          if(error.response){
            setError("Upload failed, please try again")
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
  ];
  
   const handleClick = () => {
     const nextInput = inputs.map((item, index)=> {
      if (item === null | item === ''){
        return index;
      }
      return null;
     }).filter(index => index !== null);
     if (nextInput.length > 0) {
      const currentRef = inputRefs[nextInput[0]]
      currentRef.current.focus();
      currentRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
     }else {
      setComplete(true);
     }
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
    formData.append('location', "/demographic/profile_pic")
    axios({
        method: "POST",
        url: props.proxy+"/upload_file",
        data: formData,
        headers: {
            Authorization: 'Bearer ' + props.token
        }
    }).then((response) => {
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
    <div className="h-screen">
    <NavBar proxy={props.proxy} token={props.token}/>
      <div
        className="bg-cover bg-no-repeat bg-gray-50 flex flex-col font-dmsans items-center justify-start mx-auto pb-28 w-full"
        style={{ backgroundImage: "url('images/img_demographicstab.svg')" }}>
        <div className="flex flex-col md:gap-10 gap-[50px] items-center justify-start w-full">
         <div></div>
          <div className="flex flex-col items-start justify-start max-w-[1700px] mx-auto md:px-5 w-full">
            <TabNav tab="demographic"></TabNav>
            <div className="bg-white-A700 flex flex-col font-cairo items-center justify-start p-10 sm:px-5 w-full"style={{paddingTop: '50px',}} >
              <div className="flex flex-col  justify-start w-[99%] md:w-full">
                <div className="flex md:flex-col flex-row md:gap-10 items-start justify-start w-full">
                  <div className="md:h-[560px]  relative w-[50%] md:w-full">
                      <div className="flex flex-col items-start justify-start w-full">
                        <List
                          className="flex flex-col gap-[10px] md:ml-[0] ml-[50px] w-[62%]"
                          orientation="vertical">      
                          <Text
                          className="sm:text-3xl md:text-[32px] text-[34px] text-gray-900_02"
                          size="txtCairoBold34">
                          Demographics 
                          </Text>
                          <div className="flex flex-row gap-[13px] ml-[50px] items-center justify-between w-full" >
                            <Text
                              className="text-2xl md:text-[22px] text-black-900 sm:text-xl"
                              size="txtCairoBold24">
                              Name:
                            </Text>
                            <Text className="text-xl w-[63%] md:text-[22px] text-black-900 sm:text-xl">{name}</Text>
                          </div>
                          <div className="flex flex-row gap-[13px] ml-[50px] items-center justify-between w-full">
                            <Text
                              className="text-2xl md:text-[22px] text-black-900 sm:text-xl"
                              size="txtCairoBold24">
                              Email:
                            </Text>     
                            <Text className="text-xl w-[63%] md:text-[22px] text-black-900 sm:text-xl">{email}</Text>                   
                          </div>
                          <div className="flex flex-row gap-[13px] ml-[50px] items-center justify-between w-full">
                            <Text
                              className="text-2xl md:text-[22px] text-black-900 sm:text-xl"
                              size="txtCairoBold24" >
                              Gender:
                            </Text>
                            <TextField
                              className = "w-[63%] text-xl"
                              inputRef={inputRefs[2]}
                              value = {genderValue} 
                              onChange={handleGenderChange}
                              id="outlined-select-currency-native"
                              select
                              label=""
                              SelectProps={{
                                native: true,
                              }}
                              helperText="">
                              {gender.map((option) => (
                                <option key={option.value} value={option.value}>
                                  {option.label}
                                </option>
                              ))}
                            </TextField>
                          </div>
                          <div className="flex flex-row gap-[13px] ml-[50px] items-center justify-between w-full">
                             <Text
                               className="text-2xl md:text-[22px] text-black-900 sm:text-xl"
                               size="txtCairoBold24">
                               Height:
                             </Text>
                             <div className ="flex flex-row w-[26%]"></div>
                            <TextField
                              className = "w-[63%]"
                              id="outlined-start-adornment"
                              InputProps={{
                                endAdornment: <InputAdornment position="end">ft</InputAdornment>,
                              }}
                              inputRef={inputRefs[3]}
                              value = {height} 
                              error={feetError !== ''}
                              label={feetError}
                              onChange={handleHeightChange}/>
                              <TextField
                              className = "w-[63%]"
                              id="outlined-start-adornment"
                              InputProps={{
                                endAdornment: <InputAdornment position="end">in</InputAdornment>,
                              }}
                              inputRef={inputRefs[4]}
                              value = {heightinches} 
                              error={inchesError !== ''}
                              label={inchesError}
                              onChange={handleHeightInchesChange}/>
                          </div>
                          <div className="flex flex-row gap-[13px] ml-[50px] items-center justify-between w-full">
                            <Text
                              className="text-2xl md:text-[22px] text-black-900 sm:text-xl"
                              size="txtCairoBold24">
                              Weight:
                            </Text>
                            <TextField
                              className = "w-[63%]"
                              id="outlined-start-adornment"
                              InputProps={{
                                endAdornment: <InputAdornment position="end">lbs</InputAdornment>,
                              }}
                              inputRef={inputRefs[5]}
                              value = {weight}
                              error={weightError !== ''}
                              label={weightError} 
                              onChange={handleWeightChange}/>
                          </div>
                           <div className="flex flex-row gap-[13px] ml-[50px] items-center justify-between w-full">
                            <Text
                              className="text-2xl md:text-[22px] text-black-900 sm:text-xl"
                              size="txtCairoBold24">
                              Birthday:{" "}
                            </Text>
                            <LocalizationProvider dateAdapter={AdapterDayjs}>
                              <DemoContainer  components={['DatePicker']}>
                                <DatePicker inputRef={inputRefs[6]} value={DOB} error={dobError !== ''} label={dobError} onChange={handleDOBChange} />
                              </DemoContainer>
                            </LocalizationProvider>
                          </div>
                        </List>
                      </div>
                  </div>
                  <div className="flex flex-col items-start justify-start w-[70%] mt-[80px]">  
                      {/* <Img
                        className="h-[200px] w-[200px] md:h-auto object-cover rounded-bl-[14px] rounded-[14px] w-full"
                        src= {imageLoaded? profilePic: "images/img_defaultprofile.jpg"}
                        alt=""
                        onLoad ={()=> setImageLoaded(true)}
                        style = {{display: imageLoaded? "block": "none"}}
                        /> */}
                        <Img
  className="h-[200px] w-[200px] md:h-auto object-cover rounded-bl-[14px] rounded-[14px] w-full"
  src={profilePic}
  alt=""
  onLoad={() => setImageLoaded(true)}
  style={{ display: imageLoaded ? "block" : "none" }}
  onError={(e) => {
    e.target.onerror = null; // Prevent infinite loop if the alt image also fails to load
    e.target.src = "images/img_defaultprofile.jpg"; // Set a default image
    e.target.alt = "Alternate Image"; // Set an alternate alt text
    setImageLoaded(true); // Mark as loaded
  }}
/>

                        {/* <Img
                        className="h-[200px] w-[200px] md:h-auto object-cover rounded-bl-[14px] rounded-[14px] w-full"
                        src= "images/img_defaultprofile.jpg"
                        alt="image"
                        style = {{display: imageLoaded? "none": "block"}}
                      /> */}
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
                <div className="absolute left-[1218px] top-[240px]">
                <MedTechNotes notes={note} token={props.token} proxy={props.proxy} tab="abdomen" setNotes={setNotes}/>
                </div>
                <div className="flex flex-col items-start justify-start mt-[25px] md:ml-[0] ml-[85px] w-[60%] md:w-full">
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
          // label="Multiline"
          multiline
          rows={4}
       
          inputRef={inputRefs[7]}
        />
                    <input
                      ref={fileInputRef}
                      type="file"
                      style={{ display: 'none' }}
                      accept="image/*" // Accept only image files
                      onChange={handleImageUpload}
                    />
                    <div style={{paddingTop: "2rem"}}>
   </div>
                    
                </div>
                <div className = 'flex flex-row items-center justify-start gap-[25px] ml-[90px] w-[41%]'>
                
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
      </div>
    </>
  );
};

export default DemographicMedPage;