import React from "react";


import { List, Text, NavBar, TabNav, MedTechNotes} from "components";
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import { Navigate} from 'react-router-dom';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { useRef,  useState, useEffect } from 'react';
import axios from 'axios';
import CarotidUpload from "components/CarotidPopover/CarotidUpload"

const PulsesMedPage = (props) => {
 const [radial, setRadialValue] = useState("none");
 const [brachial, setBrachialValue] = useState("none");
 const [carotid, setCarotidValue] = useState("none");
 const [pedis, setPedisValue] = useState("none");
 const [systolic, setSystolicValue] = useState('');
 const [diastolic, setDiastolicValue] = useState('');
 const [jvp, setJVPValue] = useState('');
 const [heartrate, setHeartRateValue] = useState('');
 const [isCheckedCRT, setIsCheckedCRT] = useState(false);
 const [isCheckedPulseOx, setIsCheckedPulseOx] = useState(false);
 const [isCheckedThrills, setIsCheckedThrills] = useState(false);
 const [isCheckedDiastolic, setCheckedDiastolic] = useState(false);
 const inputs = [systolic, diastolic, heartrate, jvp, radial, brachial, carotid, pedis];
 const [lt, setlt] = useState(null);
 useEffect(() => {
  axios({
      method: "GET",
      url: props.proxy + "/download/pulses",
      headers: {
      Authorization: 'Bearer ' + props.token
      }
  })
  .then((response) => {
      const res = response.data
      console.log(res)
      if (res.hasOwnProperty("med_note")){
        // console.log(res.med_note)
        setNotes(res.med_note)
      }
      setRadialValue(res.detail['radial'])
      setBrachialValue(res.detail['brachial'])
      setCarotidValue(res.detail['carotid'])
      setPedisValue(res.detail['pedis'])
      setSystolicValue(res.detail['systolic'])
      setDiastolicValue(res.detail['diastolic'])
      setJVPValue(res.detail['jvp'])
      setHeartRateValue(res.detail['heartrate'])
      setlt(res.carotidaudio)
  }).catch((error) => {
      if (error.response){
      console.log(error.response)
      console.log(error.response.status)
      console.log(error.response.headers)}
  })
}, [props]);
 const [radialError, setRadialError] = useState(false)
 const handleRadialChange = (e) => {
   setRadialValue(e.target.value)
   console.log(e.target.value)
   setRadialError(!(e.target.value === '2'))
 }
 const [brachialError, setBrachialError] = useState(false)
 const handleBrachialChange = (e) => {
   setBrachialValue(e.target.value)
   setBrachialError(!(e.target.value === '2'))
 }
 const [carotidError, setCarotidError] = useState(false)
 const handleCarotidChange = (e) => {
   setCarotidValue(e.target.value)
   setCarotidError(!(e.target.value === '2'))
 }
 const [pedisError, setPedisError] = useState(false)
 const handlePedisChange = (e) => {
   setPedisValue(e.target.value)
   setPedisError(!(e.target.value === '2'))
 }

const [sysError, setSysError] = useState('');
 const handleSystolicChange = (e) => {
  const value = e.target.value.replace(/[^0-9]/g, '')
  setSystolicValue(value);
  if (value === ''){
    setSysError('');
  }
  else if (value < 89) {
    setSysError("Abnormal Low");
  } else if (value > 140){
    setSysError('Abnormal High');
  } else {
    setSysError('');
  }
}

const [diaError, setDiaError] = useState('');
const handleDiastolicChange = (e) => {
  const value = e.target.value.replace(/[^0-9]/g, '')
  setDiastolicValue(value);
  if (value === ''){
    setDiaError('');
  }
  else if (value < 59) {
    setDiaError("Abnormal Low");
  } else if (value > 90){
    setDiaError('Abnormal High');
  } else {
    setDiaError('');
  }
}

const [jvpError, setJVPError] = useState('');
const handleJVPChange = (e) => {
  const value = e.target.value.replace(/[^0-9]/g, '')
  setJVPValue(value);
  if (value === ''){
    setJVPError('');
  }
  else if (value < 7) {
    setJVPError("Abnormal Low");
  } else if (value > 9){
    setJVPError('Abnormal High');
  } else {
    setJVPError('');
  }
}

const [hrError, setHRError] = useState('');
const handleHeartRateChange = (e) => {
  const value = e.target.value.replace(/[^0-9]/g, '')
  setHeartRateValue(value);
  if (value === ''){
    setHRError('');
  }
  else if (value < 50) {
    setHRError("Abnormal Low");
  } else if (value > 110){
    setHRError('Abnormal High');
  } else {
    setHRError('');
  }
}

const handleCheckboxCRTChange = () => {
  setIsCheckedCRT(!isCheckedCRT);
};
const handleCheckboxPulseOxChange = () => {
  setIsCheckedPulseOx(!isCheckedPulseOx);
};
const handleCheckboxThrillsChange = () => {
  setIsCheckedThrills(!isCheckedThrills);
};
const [navigate, setNavigate] = useState();
const [complete, setComplete] = useState(false);
const [error, setError] = useState("");
const [note, setNotes] = useState("");

 const handleSave = (e) => {
   e.preventDefault();
   const data = {}
   data['radial'] = radial;
   data['brachial'] = brachial;
   data['carotid'] = carotid;
   data['pedis'] = pedis;
   data['systolic'] = systolic;
   data['diastolic'] = diastolic;
   data['jvp'] = jvp;
   data['heartrate'] = heartrate;

  //  console.log(data);
   axios({
    method:"POST",
    url: props.proxy + "/upload_json",
    data: {data: data, filename: '/pulses/detail'},
    headers: {
      Authorization: 'Bearer ' + props.token
      }
  }).then((response) => {
    axios({
      method:"POST",
      url: props.proxy + "/upload_json",
      data: {data: note, filename: '/pulses/med_note'},
      headers: {
        Authorization: 'Bearer ' + props.token
        }
    }).then((response) => {
      setNavigate('/abdomen');
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


 const inputRefs = [useRef(null),useRef(null),useRef(null),useRef(null), useRef(null),useRef(null),useRef(null),useRef(null)];

 const handleClick = () => {
  // console.log(inputs)
  const nextInput = inputs.map((item, index)=> {
    if (item === null | item === '' | item=== 'none'){
      return index;
    }
    return null;
   }).filter(index => index !== null);
  //  console.log(nextInput)
   if (nextInput.length > 0) {
    const currentRef = inputRefs[nextInput[0]]
    currentRef.current.focus();
    currentRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
   }else {
    setComplete(true);
   }
 };


 const [isCheckedPulse, setCheckboxPulse] = useState(false);
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
        <TabNav tab="pulses"></TabNav>
        <div className="bg-white-A700 flex flex-col font-cairo items-center justify-start p-10 sm:px-5 w-full"style={{
paddingTop: '50px',
}} >
          <div className="flex flex-col  justify-start w-[99%] md:w-full">
            <div className="flex md:flex-col flex-col md:gap-10 items-start justify-start ">
              <div className="md:h-[560px]  relative w-[70%] md:w-full">
                  <div className="flex flex-col items-start justify-start w-full">
                     <List
                    className="flex flex-col md:ml-[0] ml-[50px] w-[80%]"
                    orientation="vertical">      
                    <Text
                    className="sm:text-3xl md:text-[32px] text-[34px] text-gray-900_02"
                    size="txtCairoBold34">
                    Pulses
                    </Text>
                    <div className="flex flex-col ml-[50px] items-start justify-between w-full" >
                        <div className="flex flex-row items-center w-[65%] justify-between">
                        <div className="flex flex-row gap-[13px]">
                      <Text
                          className="text-[22px] md:text-[22px] text-black-900 sm:text-xl"
                          size="txtCairoBold24">
                         Systolic Blood Pressure:
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
                          Show how to measure systolic and diastolic blood pressure
                        </span>
                      </div>
                      </div>
                      <TextField
                       inputRef={inputRefs[0]}
                       id="outlined-start-adornment"
                       sx={{ m: 1, width: '25ch', paddingBottom: '10px' }}
                       InputProps={{
                         endAdornment: <InputAdornment position="end">mmHg</InputAdornment>,
                       }}
                       error={sysError !== ''}
                       label={sysError}
                       value = {systolic} 
                       onChange={handleSystolicChange}/>
                      </div>
                    </div>
                    {isCheckedCRT && (
                      <div style={{ marginLeft: '10px' }}>
                        {/* Your images */}
                        <img
                          style={{
                            width: "70%", // Enlarge the width of the image
                            height: "auto", // Set height to auto to maintain aspect ratio
                            paddingTop: "5px",
                            marginLeft: '80px',

                          }}
                          src="images/bloodpressure.png"
                          alt="screenshot20231"
                        />
                      </div>
                    )}
                    <div className="flex flex-col gap-[13px] ml-[50px] items-start justify-between w-full" >
                    <div className="flex flex-row items-center gap-[10px] w-[65%] justify-between">
                      <div className="flex flex-row gap-[13px]">
                      <Text
                          className="text-[22px] md:text-[22px] text-black-900 sm:text-xl"
                          size="txtCairoBold24">
                         Diastolic Blood Pressure
                      </Text>
                      <div className="relative group flex flex-row">
                        <button onClick={() => setCheckedDiastolic(!isCheckedDiastolic)}>
                          <img
                          className="h-[36px] w-[36px]"
                          src="images/img_profile_black_900.svg"
                          alt="profile_One"/>
                        </button>
                        <span style={{ whiteSpace: 'nowrap' }}
                        className="absolute top-[20px] left-full bg-gray-100 text-gray-700 px-2 py-1 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">
                        Show how to measure diastolic blood pressure
                        </span>
                      </div>
                      </div>
                      <TextField
                       inputRef={inputRefs[1]}
                       id="outlined-start-adornment"
                       sx={{ m: 1, width: '25ch' , paddingBottom: '10px'}}
                       InputProps={{
                         endAdornment: <InputAdornment position="end">mmHg</InputAdornment>,
                       }}
                       error={diaError !== ''}
                       label={diaError}
                       value = {diastolic} 
                       onChange={handleDiastolicChange}/>
                    </div>
                    </div>
                    {isCheckedDiastolic && (
                      <div style={{ marginLeft: '10px' }}>
                        {/* Your images */}
                        <img
                          style={{
                            width: "70%", // Enlarge the width of the image
                            height: "auto", // Set height to auto to maintain aspect ratio
                            paddingTop: "5px",
                            marginLeft: '80px',

                          }}
                          src="images/bloodpressure.png"
                          alt="screenshot20231"
                        />
                      </div>
                    )}
                    <div className="flex flex-col gap-[13px] ml-[50px] items-start justify-between w-full" >
                    <div className="flex flex-row items-center gap-[10px] w-[65%] justify-between">
                      <div className="flex flex-row gap-[13px]">
                      <Text
                          className="text-[22px] md:text-[22px] text-black-900 sm:text-xl"
                          size="txtCairoBold24">
                         Heart Rate:
                      </Text>
                      <div className="relative group flex flex-row">
                        <button onClick={handleCheckboxThrillsChange}>
                          <img
                          className="h-[36px] w-[36px]"
                          src="images/img_profile_black_900.svg"
                          alt="profile_One"/>
                        </button>
                        <span style={{ whiteSpace: 'nowrap' }}
                        className="absolute top-[20px] left-full bg-gray-100 text-gray-700 px-2 py-1 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">
                        Show how to measure heart rate using pulse ox
                        </span>
                      </div>
                      </div>
                      <TextField
                       inputRef={inputRefs[2]}
                       id="outlined-start-adornment"
                       sx={{ m: 1, width: '25ch' }}
                       InputProps={{
                         endAdornment: <InputAdornment position="end">BPM</InputAdornment>,
                       }}
                       error={hrError !== ''}
                       label={hrError}
                       value = {heartrate} 
                       onChange={handleHeartRateChange}/>
                    </div>
                    </div>
                    {isCheckedThrills && (
                      <div style={{ marginLeft: '10px' }}>
                        {/* Your images */}
                        <img
                          style={{
                            width: "70%", // Enlarge the width of the image
                            height: "auto", // Set height to auto to maintain aspect ratio
                            paddingTop: "30px",
                            marginLeft: '80px',

                          }}
                          src="images/bpm.png"
                          alt="screenshot20231"
                        />
                        
                        
                      </div>
                    )}
                    <div className="flex flex-col gap-[13px] ml-[50px] items-start justify-between w-full" >
                    <div className="flex flex-row items-center gap-[10px] w-[65%] justify-between">
                      <div className="flex flex-row gap-[13px]">
                      <Text
                          className="text-[22px] md:text-[22px] text-black-900 sm:text-xl"
                          size="txtCairoBold24">
                         Jugular venous pressure (JVP):
                      </Text>
                      <div className="relative group flex flex-row">
                        <button onClick={handleCheckboxPulseOxChange}>
                          <img
                          className="h-[36px] w-[36px]"
                          src="images/img_profile_black_900.svg"
                          alt="profile_One"/>
                        </button>
                        <span style={{ whiteSpace: 'nowrap' }}
                        className="absolute top-[20px] left-full bg-gray-100 text-gray-700 px-2 py-1 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">
                        Show how to measure jugular venous pressure (JVP)
                        </span>
                      </div>
                      </div>
                      <TextField
                       inputRef={inputRefs[3]}
                       id="outlined-start-adornment"
                       sx={{ m: 1, width: '25ch' , paddingBottom: '10px'}}
                       InputProps={{
                         endAdornment: <InputAdornment position="end">cm H2O</InputAdornment>,
                       }}
                       value = {jvp} 
                       error={jvpError !== ''}
                       label={jvpError}
                       onChange={handleJVPChange}/>
                    </div>
                    </div>
                    {isCheckedPulseOx && (
                      <div style={{ marginLeft: '10px' }}>
                        {/* Your images */}
                        <img
                          style={{
                            width: "75%", // Enlarge the width of the image
                            height: "auto", // Set height to auto to maintain aspect ratio
                            paddingTop: "30px",
                            marginLeft: '80px',

                          }}
                          src="images/jvp.png"
                          alt="screenshot20231"
                        />
                      </div>
                    )}
                  
                     
                  </List>
                  </div>
              </div>
              
                <div className= "flex flex-col w-full ml-[50px]">
                <div className="flex flex-row gap-[13px] ml-[50px] items-start justify-start w-full mt-[40px] mb-[20px]" >
                          <Text
                              className="text-2xl md:text-[22px] text-black-900 sm:text-xl"
                              size="txtCairoBold24">
                            Carotid Auscultation 
                          </Text>
                          <div className="relative group flex flex-row">
                            <button disable = {"true" }>
                              <img
                              className="h-[36px] w-[36px]"
                              src="images/img_profile_black_900.svg"
                              alt="profile_One"/>
                            </button>
                            <span style={{ whiteSpace: 'nowrap' }}
                            className="absolute transform left-full bg-gray-100 text-gray-700 px-2 py-1 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">
                            Auscultate the carotid pulse using the bell of the stethoscope
                            </span>
                          </div>
                          
                      </div>
                      <div className="flex flex-row ml-[80px] h-[260px] w-[322px]" 
                               style={{ backgroundImage: "url(https://cdn.animaapp.com/projects/65a945881c395bf52b1e3e78/releases/65a9e82814bc0dc531a973f2/img/carotid-img-1@2x.png)" }}>
                          <div className= "flex flex-col h-full mt-[150px] ml-[170px]">
                          <CarotidUpload proxy={props.proxy} token={props.token} 
                                      title="Carotid" location ="/pulses/carotid"
                                      position="right top" audio={lt}></CarotidUpload>
                          </div>
                      </div>
                  <div className="flex flex-row gap-[13px] ml-[50px] items-start justify-start w-full mt-[30px]" >
                          <Text
                              className="text-2xl md:text-[22px] text-black-900 sm:text-xl"
                              size="txtCairoBold24">
                            Palpate pulses with fingertips and classify intensity on 0-4+ scale:
                          </Text>
                          <div className="relative group flex flex-row">
                            <button onClick={() => setCheckboxPulse(!isCheckedPulse)}>
                              <img
                              className="h-[36px] w-[36px]"
                              src="images/img_profile_black_900.svg"
                              alt="profile_One"/>
                            </button>
                            <span style={{ whiteSpace: 'nowrap' }}
                            className="absolute transform -translate-x-1/2 top-[20px] left-full bg-gray-100 text-gray-700 px-2 py-1 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">
                            Show scale for pulse intensity
                            </span>
                          </div>
                    </div>
                      <div className = "flex flex-col justify-start items-start ml-[80px] gap-[10px] mt-[20px] w-[80%]">
                        {isCheckedPulse && <div className = "flex flex-row justify-between items-center gap-[5px] w-[65%]">
                        <div className="w-[4%]"></div>
                        <Text
                            className=" text-[16px] text-black-900 sm:text-xl w-[15%] text-center">
                          No pulse
                        </Text>
                        <Text
                            className=" text-[16px] text-black-900 sm:text-xl w-[15%] text-center">
                          A faint, but detectable pulse
                        </Text>
                        <Text
                            className=" text-[16px] text-black-900 sm:text-xl w-[15%] text-center">
                          A slightly more diminished pulse than normal
                        </Text>
                        <Text
                            className=" text-[16px] text-black-900 sm:text-xl w-[15%] text-center">
                          Normal pulse
                        </Text>
                        <Text
                            className=" text-[16px] text-black-900 sm:text-xl w-[15%] text-center">
                          Bounding pulse
                        </Text>
                        <div className="w-[4%]"></div>
                        </div> }
                        <div className = "flex flex-row w-full">
                        <div className="flex flex-col w-[80%]">
                          <FormControl   
                          error = {radial && radial !== "2"}
                            className = "flex flex-col justify-start items-start w-full" 
                            >
                              <div className="flex flex-row gap-[13px] items-start justify-start w-full mt-[30px]" >
                              <FormLabel style={{paddingBottom: '10px', color: 'black' , fontSize: '20px', fontWeight: 'bold'}} id="demo-row-radio-buttons-group-label">i. Radial pulse</FormLabel>
                            <div className="relative group flex flex-row">
                              <button onClick={() => setCheckboxPulse(!isCheckedPulse)}>
                                <img
                                className="h-[32px] w-[32px]"
                                src="images/img_profile_black_900.svg"
                                alt="profile_One"/>
                              </button>
                              <span style={{ whiteSpace: 'nowrap' }}
                              className="absolute transform left-full bg-gray-100 text-gray-700 px-2 py-1 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">
                              On the wrist, just below the thumb
                              </span>
                            </div>
                              </div>
                          <RadioGroup value = {radial}
                            onChange={handleRadialChange}
                            className = "flex flex-row justify-between w-full" >
                          <div className = {isCheckedPulse?"flex flex-row justify-between w-full":"flex flex-row justify-start"}>
                          {isCheckedPulse? <div></div> :
                          <FormLabel style={{paddingTop: '10px' , fontSize: '20px'}} id="demo-row-radio-buttons-group-label">None</FormLabel>}
                            <FormControlLabel inputRef={inputRefs[4]} value="0" labelPlacement="bottom" control={<Radio />} label="0" />
                            <FormControlLabel inputRef={inputRefs[4]} value="1" labelPlacement="bottom" control={<Radio />} label="1+" />
                            <FormControlLabel inputRef={inputRefs[4]} value="2" labelPlacement="bottom" control={<Radio />} label="2+" />
                            <FormControlLabel inputRef={inputRefs[4]} value="3" labelPlacement="bottom" control={<Radio />} label="3+" />
                            <FormControlLabel inputRef={inputRefs[4]} value="4" labelPlacement="bottom" control={<Radio />} label="4+" />
                            {isCheckedPulse? <div></div> :
                          <FormLabel style={{paddingTop: '9px', fontSize: '20px' }} id="demo-row-radio-buttons-group-label">Bounding</FormLabel>}
                          </div>
                           </RadioGroup>
                          </FormControl>
                          {/*ii. Brachial */}
                          <FormControl  
                          error = {brachial && brachial !== '2'}
                          className = "flex flex-col justify-start items-start w-full" >
                              <div className="flex flex-row gap-[13px] items-start justify-start w-full mt-[30px]" >
                              <FormLabel style={{paddingBottom: '10px',color: 'black' , fontSize: '20px', fontWeight: 'bold'}} id="demo-row-radio-buttons-group-label">ii. Brachial</FormLabel>
                            <div className="relative group flex flex-row">
                              <button onClick={() => setCheckboxPulse(!isCheckedPulse)}>
                                <img
                                className="h-[32px] w-[32px]"
                                src="images/img_profile_black_900.svg"
                                alt="profile_One"/>
                              </button>
                              <span style={{ whiteSpace: 'nowrap' }}
                              className="absolute transform left-full bg-gray-100 text-gray-700 px-2 py-1 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">
                              Just above the angle of the elbow
                              </span>
                            </div>
                              </div>

                              <RadioGroup className = "flex flex-row justify-between w-full" value = {brachial}
                            onChange={handleBrachialChange} >
                          <div className = {isCheckedPulse?"flex flex-row justify-between w-full":"flex flex-row justify-start"}>
                          {isCheckedPulse? <div></div> :
                          <FormLabel style={{paddingTop: '10px' , fontSize: '20px'}} id="demo-row-radio-buttons-group-label">None</FormLabel>}
                            <FormControlLabel inputRef={inputRefs[5]} value="0" labelPlacement="bottom" control={<Radio />} label="0" />
                            <FormControlLabel inputRef={inputRefs[5]} value="1" labelPlacement="bottom" control={<Radio />} label="1+" />
                            <FormControlLabel inputRef={inputRefs[5]} value="2" labelPlacement="bottom" control={<Radio />} label="2+" />
                            <FormControlLabel inputRef={inputRefs[5]} value="3" labelPlacement="bottom" control={<Radio />} label="3+" />
                            <FormControlLabel inputRef={inputRefs[5]} value="4" labelPlacement="bottom" control={<Radio />} label="4+" />
                            {isCheckedPulse? <div></div> :
                          <FormLabel style={{paddingTop: '9px', fontSize: '20px' }} id="demo-row-radio-buttons-group-label">Bounding</FormLabel>}
                          </div>
                           </RadioGroup>
                          </FormControl>
                          {/*iii. Carotid */}
                          <FormControl 
                          error = {carotid && carotid !== "2"}
                          className = "flex flex-col justify-start items-start w-full"  >
                              <div className="flex flex-row gap-[13px] items-start justify-start w-full mt-[30px]" >
                              <FormLabel style={{paddingBottom: '10px', color: 'black', fontSize: '20px', fontWeight: 'bold'}} id="demo-row-radio-buttons-group-label">iii. Carotid</FormLabel>
                              <div className="relative group flex flex-row">
                                <button onClick={() => setCheckboxPulse(!isCheckedPulse)}>
                                  <img
                                  className="h-[32px] w-[32px]"
                                  src="images/img_profile_black_900.svg"
                                  alt="profile_One"/>
                                </button>
                                <span style={{ whiteSpace: 'nowrap' }}
                                className="absolute transform left-full bg-gray-100 text-gray-700 px-2 py-1 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">
                                On the side of the neck
                                </span>
                              </div>
                                </div>
                                <RadioGroup className = "flex flex-row justify-between w-full" value = {carotid}
                            onChange={handleCarotidChange}>
                          <div className = {isCheckedPulse?"flex flex-row justify-between w-full":"flex flex-row justify-start"}>
                          {isCheckedPulse? <div></div> :
                          <FormLabel style={{paddingTop: '10px' , fontSize: '20px'}} id="demo-row-radio-buttons-group-label">None</FormLabel>}
                            <FormControlLabel inputRef={inputRefs[6]} value="0" labelPlacement="bottom" control={<Radio />} label="0" />
                            <FormControlLabel inputRef={inputRefs[6]} value="1" labelPlacement="bottom" control={<Radio />} label="1+" />
                            <FormControlLabel inputRef={inputRefs[6]} value="2" labelPlacement="bottom" control={<Radio />} label="2+" />
                            <FormControlLabel inputRef={inputRefs[6]} value="3" labelPlacement="bottom" control={<Radio />} label="3+" />
                            <FormControlLabel inputRef={inputRefs[6]} value="4" labelPlacement="bottom" control={<Radio />} label="4+" />
                            {isCheckedPulse? <div></div> :
                          <FormLabel style={{paddingTop: '9px', fontSize: '20px' }} id="demo-row-radio-buttons-group-label">Bounding</FormLabel>}
                          </div>
                           </RadioGroup>
                          </FormControl>
                          {/*iv. Right lumbar region */}
                          <FormControl   
                          error = {pedis && pedis !== '2'}
                          className = "flex flex-col justify-start items-start w-full"  >
                            <div className="flex flex-row gap-[13px] items-start justify-start w-full mt-[30px]" >
                            <FormLabel style={{paddingBottom: '10px', color: 'black', fontSize: '20px', fontWeight: 'bold' }} id="demo-row-radio-buttons-group-label">iv. Dorsalis pedis pulse </FormLabel>
                              <div className="relative group flex flex-row">
                                <button onClick={() => setCheckboxPulse(!isCheckedPulse)}>
                                  <img
                                  className="h-[32px] w-[32px]"
                                  src="images/img_profile_black_900.svg"
                                  alt="profile_One"/>
                                </button>
                                <span style={{ whiteSpace: 'nowrap' }}
                                className="absolute transform left-full bg-gray-100 text-gray-700 px-2 py-1 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">
                                On the top of the foot
                                </span>
                              </div>
                                </div>
                          <RadioGroup className = "flex flex-row justify-between w-full" value = {pedis}
                          onChange={handlePedisChange}>
                          <div className = {isCheckedPulse?"flex flex-row justify-between w-full":"flex flex-row justify-start"}>
                          {isCheckedPulse? <div></div> :
                          <FormLabel style={{paddingTop: '10px' , fontSize: '20px'}} id="demo-row-radio-buttons-group-label">None</FormLabel>}
                            <FormControlLabel inputRef={inputRefs[7]} value="0" labelPlacement="bottom" control={<Radio />} label="0" />
                            <FormControlLabel inputRef={inputRefs[7]} value="1" labelPlacement="bottom" control={<Radio />} label="1+" />
                            <FormControlLabel inputRef={inputRefs[7]} value="2" labelPlacement="bottom" control={<Radio />} label="2+" />
                            <FormControlLabel inputRef={inputRefs[7]} value="3" labelPlacement="bottom" control={<Radio />} label="3+" />
                            <FormControlLabel inputRef={inputRefs[7]} value="4" labelPlacement="bottom" control={<Radio />} label="4+" />
                            {isCheckedPulse? <div></div> :
                          <FormLabel style={{paddingTop: '9px', fontSize: '20px' }} id="demo-row-radio-buttons-group-label">Bounding</FormLabel>}
                          </div>
                           </RadioGroup>
                          </FormControl>
                        </div>
                        {isCheckedPulse &&
                        <div className="flex flex-col gap-[10px]">
                        <img
                            style={{
                              width: "45%", // Enlarge the width of the image
                              height: "auto", // Set height to auto to maintain aspect ratio
                            }}
                            src="images/radial.png"
                            alt="screenshot20231"
                          />
                          <img
                            style={{
                              width: "45%", // Enlarge the width of the image
                              height: "auto", // Set height to auto to maintain aspect ratio
                            }}
                            src="images/brachial.png"
                            alt="screenshot20231"
                          />
                          <img
                            style={{
                              width: "45%", // Enlarge the width of the image
                              height: "auto", // Set height to auto to maintain aspect ratio
                            }}
                            src="images/cartoid.png"
                            alt="screenshot20231"
                          />
                          <img
                            style={{
                              width: "45%", // Enlarge the width of the image
                              height: "auto", // Set height to auto to maintain aspect ratio
                            }}
                            src="images/footpulse.jpg"
                            alt="screenshot20231"
                          />

                        </div>
                          }
                        </div>
                      </div>

                      <div className = 'flex flex-row items-center justify-start gap-[25px] ml-[90px] w-[41%] mt-[20px]'>
              
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
               <div className="absolute left-[1218px] top-[240px]">
               <MedTechNotes notes={note} token={props.token} proxy={props.proxy} tab="pulses" setNotes={setNotes}/>
               </div>
           </div>
           </div>
           </div>
       </div>
       </div>
       </>
       
 );
};


export default PulsesMedPage;
