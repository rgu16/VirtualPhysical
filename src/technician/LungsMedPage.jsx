import React from "react";
import { List, Text, NavBar, TabNav, MedTechNotes, LungUpload } from "components";
import TextField from '@mui/material/TextField';
import { useRef, useState, useEffect } from 'react';
import axios from 'axios';
import InputAdornment from '@mui/material/InputAdornment';
import { Navigate } from "react-router-dom";

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
{
 value: 'no selection',
 label: 'no selection',
},


];


const LungsMedPage = (props) => {

  const [note, setNotes] = useState('');
  const [navigate, setNavigate] = useState();
  const [complete, setComplete] = useState(false);
  const [error, setError] = useState("");
  const [breathingrate, setBreathingRateValue] = useState("");
  const [breathinglabor, setBreathingLaborValue] = useState("no selection");
  const [breathingStatus, setBreathingStatus] = useState('');
  const [isCheckedCRT, setIsCheckedCRT] = useState(false);
  const [isCheckedPulseOx, setIsCheckedPulseOx] = useState(false);
  const [isCheckedThrills, setIsCheckedThrills] = useState(false);

  const [lt, setlt] = useState(null)
  const [lm, setlm] = useState(null)
  const [lb, setlb] = useState(null)
  const [rt, setrt] = useState(null)
  const [rm, setrm] = useState(null)
  const [rb, setrb] = useState(null)
  const [saveVariant, setSaveVariant] = useState('outlined');

  useEffect(() => {
    axios({
        method: "GET",
        url: props.proxy + "/download/lungs",
        headers: {
        Authorization: 'Bearer ' + props.token
        }
    })
    .then((response) => {
        const res = response.data
        // console.log(res)
        if (res.hasOwnProperty("med_note")){
          // console.log(res.med_note)
          setNotes(res.med_note)
        }
        setlt(res.topleftaudio)
        setlm(res.middleleftaudio)
        setlb(res.bottomleftaudio)
        setrt(res.toprightaudio)
        setrm(res.middlerightaudio)
        setrb(res.bottomrightaudio)
        const breathingValue = parseInt(res.detail['breathingrate'], 10);
        setBreathingRateValue( breathingValue )

        const LaboredBreathing = res.detail['breathinglabor']
        setBreathingLaborValue(LaboredBreathing)
    }).catch((error) => {
        if (error.response){
        console.log(error.response)
        console.log(error.response.status)
        console.log(error.response.headers)}
    })
  }, [props]);

  const handleCheckboxCRTChange = () => {
    setIsCheckedCRT(!isCheckedCRT);
  };
  const handleCheckboxPulseOxChange = () => {
    setIsCheckedPulseOx(!isCheckedPulseOx);
  };
  const handleCheckboxThrillsChange = () => {
    setIsCheckedThrills(!isCheckedThrills);
  };




const handleBreathingRateChange = (e) => {

 const value = e.target.value.replace(/[^0-9]/g, '')
 setBreathingRateValue(value)
 const numericValue = parseInt(value, 10);
  
 // Determine the breathing status based on the specified criteria
 let status = '';
 if (numericValue >= 12 && numericValue <= 18) {
   status = '';
 } else if (numericValue < 12 ) {
   status = 'Abnormal low';
 } else if (numericValue > 25) {
   status = "Abnormal high"
 } else {
  status = ''
 }

 setBreathingStatus(status);
}
const handleBreathingLaborChange = (event) => {
 setBreathingLaborValue(event.target.value)
}




 const handleSave = (e) => {
   e.preventDefault();
   const data = {}
   data['breathingrate'] = breathingrate;
   data['breathinglabor'] = breathinglabor;
   console.log(data);
   axios({
    method:"POST",
    url: props.proxy + "/upload_json",
    data: {data: data, filename: '/lungs/detail'},
    headers: {
      Authorization: 'Bearer ' + props.token
      }
  }).then((response) => {
    axios({
      method:"POST",
      url: props.proxy + "/upload_json",
      data: {data: note, filename: '/lungs/med_note'},
      headers: {
        Authorization: 'Bearer ' + props.token
        }
    }).then((response) => {
      setNavigate('/pulses');
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
  // Add more refs for additional text fields as needed
];
 const handleClick = () => {
  //  const nextInput = inputs.map((item, index)=> {
  //   if (item === null | item === ''){
  //     return index;
  //   }
  //  }).filter(index => index !== undefined);
  let nextInput;
   if (breathingrate === null | breathingrate === ""){
    nextInput = 0;
   } else if (breathinglabor === "no selection"){
    nextInput =1;
   } else {
    nextInput = -1;
   }
   if (nextInput >= 0) {
    const currentRef = inputRefs[nextInput]
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
          <TabNav tab="lungs"></TabNav>
          <div className="bg-white-A700 flex flex-col font-cairo items-center justify-start p-10 sm:px-5 w-full"style={{
  paddingTop: '50px',
}} >
            <div className="flex flex-col  justify-start w-[99%] md:w-full">
              <div className="flex md:flex-col flex-row md:gap-10 items-start justify-start ">
                <div className="md:h-[560px]  relative w-[70%] md:w-full">
                    <div className="flex flex-col items-start justify-start w-full">
                      <List
                        className="flex flex-col gap-[10px] md:ml-[0] ml-[50px] w-[80%]"
                        orientation="vertical">      
                        <Text
                        className="sm:text-3xl md:text-[32px] text-[34px] text-gray-900_02"
                        size="txtCairoBold34">
                        Lungs
                        </Text>
                        <div className="flex flex-col gap-[13px] ml-[50px] items-start justify-between w-full" >
                        <Text
                              className="text-2xl md:text-[22px] text-black-900 sm:text-xl"
                              size="txtCairoBold24">
                             Qualitative description on patient's breathing:
                          </Text>
                        </div>
                        <div className="flex flex-col gap-[13px] ml-[80px] items-start justify-between w-full" >
                            <div className="flex flex-row items-center gap-[10px] w-[50%] justify-between">
                            <div className="flex flex-row gap-[13px]">
                          <Text
                              className="text-[22px] md:text-[22px] text-black-900 sm:text-xl"
                              size="txtCairoBold24">
                             Breathing Rate:
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
                              Show how to measure breathing rate
                            </span>
                          </div>
                          </div>
                          <TextField
                              inputRef={inputRefs[0]}
                              id="outlined-start-adornment"
                              sx={{width: '25ch', paddingBottom: '10px' }}
                              InputProps={{
                                endAdornment: <InputAdornment position="end">breaths/min</InputAdornment>,
                              }}
                              error={breathingStatus !== ''}
                              label={breathingStatus}
                              value = {breathingrate}
                              onChange={handleBreathingRateChange }/>
                              
                          {/* <TextField  value = {breathingrate}
                              onChange={handleBreathingRateChange }
                                  inputRef={inputRefs[0]}
                                    variant="outlined"
                                    id="outlined-number"
                                    label="breaths/min"
                                    type="number"
                                    InputLabelProps={{
                                      shrink: true,
                                    }}
                                  /> */}
                          </div>
                        </div>
                        {isCheckedCRT && (
                            <div style={{ marginLeft: '10px' }}>
                              <img
                                style={{
                                  width: "40%", // Enlarge the width of the image
                                  height: "auto", // Set height to auto to maintain aspect ratio
                                  paddingTop: "5px",
                                  marginLeft: '80px',

                                }}
                                src="images/breathingrate.png"
                                alt="screenshot20231"
                              />
                            
                            
                            </div>
                          )}
                        <div className="flex flex-col gap-[13px] ml-[80px] items-start justify-between w-full" >
                        <div className="flex flex-row items-center gap-[10px] w-[50%] justify-between">
                          <div className="flex flex-row gap-[13px]">
                          <Text
                              className="text-[22px] md:text-[22px] text-black-900 sm:text-xl"
                              size="txtCairoBold24">
                             Is breathing labored?
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
                            Show scale for labored breathing
                            </span>
                          </div>
                          </div>
                          <TextField
                            className="w-[40%]"
                            inputRef={inputRefs[1]}
                            value = {breathinglabor}
                            onChange={handleBreathingLaborChange}
                            id="outlined-select-currency-native"
                            select
                            // defaultValue="no selection"
                            SelectProps={{
                              native: true,
                            }}
                          >
                            {gender.map((option) => (
                              <option key={option.value} value={option.value}>
                                {option.label}
                              </option>
                            ))}
                          </TextField>
                          </div>
                        </div>
                        {isCheckedPulseOx && (
                          <div style={{ marginLeft: '10px' }}>
                            <img
                              style={{
                                width: "75%", // Enlarge the width of the image
                                height: "auto", // Set height to auto to maintain aspect ratio
                                paddingTop: "50px",
                                marginLeft: '80px',

                              }}
                              src="images/breathinglabored.png"
                              alt="screenshot20231"
                            />
                          
                          
                          </div>

                        )}
                        <div className="flex flex-row gap-[13px] ml-[50px] items-start justify-start w-full" >
                          <Text
                              className="text-2xl md:text-[22px] text-black-900 sm:text-xl"
                              size="txtCairoBold24">
                             Record posterior auscultation of lung sounds using diaphragm of stethoscope
                          </Text>
                          <div className="relative group flex flex-row">
                            <button onClick={handleCheckboxThrillsChange}>
                              <img
                              className="h-[36px] w-[36px]"
                              src="images/img_profile_black_900.svg"
                              alt="profile_One"/>
                            </button>
                            <span style={{ whiteSpace: 'nowrap' }}
                            className="absolute transform -translate-x-1/2 top-[20px] left-full bg-gray-100 text-gray-700 px-2 py-1 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">
                            Show detailed steps on how to record lung sounds
                            </span>
                          </div>
                        </div>
                        <div className = "flex flex-row">
                        
                        <div className="flex flex-row ml-[80px] h-[478px] w-[100%]" 
                        style={{ backgroundImage: "url(https://cdn.animaapp.com/projects/65a945881c395bf52b1e3e78/releases/65a9e82814bc0dc531a973f2/img/lung-img-1@2x.png)" }}>
                          <div className= "flex flex-col h-full w-[37%]"></div>
                          <div className= "flex flex-col h-full">
                            <div className= "flex flex-col h-[60%]"></div>
                            
                          <LungUpload proxy={props.proxy} token={props.token} 
                                      title="Top Left Lung Upload" location ="/lungs/topleftaudio"
                                      position="left top" audio={lt}></LungUpload>
                          <LungUpload proxy={props.proxy} token={props.token} 
                                      title="Middle Left Lung Upload" location ="/lungs/middleleftaudio"
                                      position="left top" audio={lm}></LungUpload>
                          <LungUpload proxy={props.proxy} token={props.token} 
                                      title="Bottom Left Lung Upload" location ="/lungs/bottomleftaudio"
                                      position="left top" audio={lb}></LungUpload>
                          </div>
                          <div className= "flex flex-col w-[16%]"></div>
                          <div className= "flex flex-col h-full">
                            <div className= "flex flex-col h-[60%]"></div>
                          <LungUpload proxy={props.proxy} token={props.token} 
                                      title="Top Right Lung Upload" location ="/lungs/toprightaudio"
                                      position="right top" audio={rt}></LungUpload>
                          <LungUpload proxy={props.proxy} token={props.token} 
                                      title="Middle Right Lung Upload" location ="/lungs/middlerightaudio"
                                      position="right top" audio={rm}></LungUpload>
                          <LungUpload proxy={props.proxy} token={props.token} 
                                      title="Bottom Right Lung Upload" location ="/lungs/bottomrightaudio"
                                      position="right top" audio={rb}></LungUpload>
                          </div>

                        </div>
                        {isCheckedThrills? (
                          <div >
                            <img
                              style={{
                                width: "85%", // Enlarge the width of the image
                                height: "auto", // Set height to auto to maintain aspect ratio
                              }}
                              src="images/lungrecordingref.jpg"
                              alt="screenshot20231"
                            />
                          
                          
                          </div>
                        ): <div className= "flex flex-col w-[81%]"></div>}
                        </div>
                      </List>
                    </div>
                </div>

                
              </div>
              <div className="absolute left-[1218px] top-[240px]">
              <MedTechNotes notes={note} token={props.token} proxy={props.proxy} tab="abdomen" setNotes={setNotes}/>
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








export default LungsMedPage;