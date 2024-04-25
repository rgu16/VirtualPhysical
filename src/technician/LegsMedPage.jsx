import React from "react";


import { Img, Line, List, Text, NavBar, TabNav, MedTechNotes, ToggleRadio } from "components";
import { Link, Navigate } from 'react-router-dom';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { useRef, useState, useEffect } from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import axios from 'axios';


const LegsMedPage = (props) => {
 const [isHoveredOne, setIsHoveredOne] = useState(false);
 const [isHoveredTwo, setIsHoveredTwo] = useState(false);
 const [rightcalve, setRightCalfValue] = useState("none");
 const [leftcalve, setLeftCalfValue] = useState("none");
 const [note, setNotes] = useState();
    const [imageLoaded, setImageLoaded] = useState(false);
    const fileInputRef = useRef(null);
    const [profilePic, setProfilePic] = useState()

 const [isChecked, setIsChecked] = useState(false);
 const [isCheckedScale, setIsCheckedScale] = useState(false);
 const [isCheckedLeg, setIsCheckedLeg] = useState(false);

 const inputs =[rightcalve, leftcalve]
 useEffect(() => {
  axios({
      method: "GET",
      url: props.proxy + "download/legs",
      headers: {
          Authorization: 'Bearer ' + props.token
      }
  })
  .then((response) => {
      const res = response.data;
      console.log(res);
      setRightCalfValue(res.detail['rightcalve'])
      setLeftCalfValue(res.detail['leftcalve'])
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
  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  const handleCheckboxScaleChange = () => {
    setIsCheckedScale(!isCheckedScale);
  };

  const handleCheckboxLegChange = () => {
    setIsCheckedLeg(!isCheckedLeg);
  };


 const handleRightCalfChange = (event) => {
   setRightCalfValue(event.target.value)
 }


 const handleLeftCalfChange = (event) => {
   setLeftCalfValue(event.target.value)
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
  formData.append('location', "/legs/Image")
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

 const handleSave = (e) => {
   e.preventDefault();
   const data = {}
   data['rightcalve'] = rightcalve;
   data['leftcalve'] = leftcalve;
   data['legs_notes'] = note;
   console.log(data);
   axios({
    method:"POST",
    url: props.proxy + "/upload_json",
    data: {data: data, filename: '/legs/detail'},
    headers: {
      Authorization: 'Bearer ' + props.token
      }
  }).then((response) => {
    axios({
      method:"POST",
      url: props.proxy + "/upload_json",
      data: {data: note, filename: '/legs/med_note'},
      headers: {
        Authorization: 'Bearer ' + props.token
        }
    }).then((response) => {
      setNavigate('/summary');
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
{/*test */}
const [navigate, setNavigate] = useState();
const [complete, setComplete] = useState(false);
const [error, setError] = useState("");

const [isCheckedPulse, setCheckboxPulse] = useState(false);
const inputRefs = [useRef(null),useRef(null),useRef(null),useRef(null), useRef(null),useRef(null),useRef(null),useRef(null),useRef(null)];

const handleClick = () => {
  console.log(inputs)
  const nextInput = inputs.map((item, index)=> {
    if (item === null | item === '' | item=== 'none'){
      return index;
    }
   }).filter(index => index !== undefined);
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
        <TabNav tab="legs"></TabNav>
        <div className="bg-white-A700 flex flex-col font-cairo items-start justify-start p-10 sm:px-5 w-full"style={{
paddingTop: '50px',
}} >
          <div className="flex flex-col  justify-start w-[99%] md:w-full">
            <div className="flex md:flex-col flex-col md:gap-10 items-start justify-start ">
              <div className="flex flex-row md:h-[560px]  relative w-full md:w-full">
                  <div className="flex flex-col items-start w-[70%] justify-start">
                     <List
                    className="flex flex-col md:ml-[0] ml-[50px] w-[80%]"
                    orientation="vertical">      
                    <Text
                    className="sm:text-3xl md:text-[32px] text-[34px] text-gray-900_02"
                    size="txtCairoBold34">
                    Legs
                    </Text>
                    <div className="flex flex-col ml-[80px] items-start justify-between w-full" >
                        <div className="flex flex-row items-center w-[65%] justify-between">
                        <div className="flex flex-row gap-[13px]">
                      <Text
                          className="text-2xl md:text-[22px] text-black-900 sm:text-xl"
                          size="txtCairoBold24">
                          Pitting Edema:
                      </Text>
                      <div className="relative group flex flex-row">
                        <button onClick={() => setCheckboxPulse(!isCheckedPulse)}>
                          <img
                          className="h-[36px] w-[36px]"
                          src="images/img_profile_black_900.svg"
                          alt="profile_One"/>
                        </button>
                        <span style={{ whiteSpace: 'nowrap' }}
                        className=" absolute top-[20px] left-full bg-gray-100 text-gray-700 px-2 py-1 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">
                          Show detailed steps
                        </span>
                      </div>
                      </div>
                      </div>
                    </div>
                    {/* {isCheckedPulse &&
                    <div className="ml-[80px]">
                    <img
                          style={{
                            width: "80%", // Enlarge the width of the image
                            height: "auto", // Set height to auto to maintain aspect ratio
                            paddingTop: "5px",
                            marginLeft: '20px',
                          }}
                          src="images/pittingedema.png"
                          alt="screenshot20231"
                        /></div>} */}
                  <div className = "flex flex-col justify-start items-start ml-[80px] gap-[10px] mt-[20px] w-[80%]">
                        {isCheckedPulse && <div className = "flex flex-row justify-between items-start text-center gap-[5px] w-full">
                        <div className="w-[4%]"></div>
                        <div className ="flex flex-col items-center justify-center w-[15%] m-[2px]">
                                            <img
                                                style={{
                                                  width: "100%"
                                                }}
                                              src="images/pitting1.png"
                                              alt="screenshot20231"
                                            />
                                            <Text
                                                className="text-[22px] md:text-[22px] text-black-900 sm:text-xl text-center"
                                                size="txtCairoBold24">
                                              None
                                            </Text>
                                            <Text
                                                className="text-[15px] md:text-[22px] text-black-900 sm:text-xl text-center">
                                              No pitting edema
                                            </Text>
                                            </div>
                                            <div className ="flex flex-col items-center justify-center w-[15%] m-[2px]">
                                            <img
                                                style={{
                                                  width: "100%"
                                                }}
                                              src="images/pitting2.png"
                                              alt="screenshot20231"
                                            />
                                            <Text
                                                className="text-[22px] md:text-[22px] text-black-900 sm:text-xl text-center"
                                                size="txtCairoBold24">
                                              Mild
                                            </Text>
                                            <Text
                                                className="text-[15px] md:text-[22px] text-black-900 sm:text-xl text-center">
                                              2mm despression disappears rapidly
                                            </Text>
                                            </div>
                                            <div className ="flex flex-col items-center justify-center w-[15%] m-[2px]">
                                            <img
                                                style={{
                                                  width: "100%"
                                                }}
                                              src="images/pitting3.png"
                                              alt="screenshot20231"
                                            />
                                            <Text
                                                className="text-[22px] md:text-[22px] text-black-900 sm:text-xl text-center"
                                                size="txtCairoBold24">
                                              Moderate
                                            </Text>
                                            <Text
                                                className="text-[15px] md:text-[22px] text-black-900 sm:text-xl text-center">
                                              4mm depression disappears in 10-15 seconds
                                            </Text>
                                            </div>
                                            <div className ="flex flex-col items-center justify-center w-[15%] m-[2px]">
                                            <img
                                                style={{
                                                  width: "100%"
                                                }}
                                              src="images/pitting4.png"
                                              alt="screenshot20231"
                                            />
                                            <Text
                                                className="text-[22px] md:text-[22px] text-black-900 sm:text-xl text-center"
                                                size="txtCairoBold24">
                                              Moderately Severe
                                            </Text>
                                            <Text
                                                className="text-[15px] md:text-[22px] text-black-900 sm:text-xl text-center">
                                             6mm depression may last more than 1 minute
                                            </Text>
                                            </div>
                                            <div className ="flex flex-col items-center justify-center w-[15%] m-[2px]">
                                            <img
                                                style={{
                                                  width: "100%"
                                                }}
                                              src="images/pitting5.png"
                                              alt="screenshot20231"
                                            />
                                            <Text
                                                className="text-[22px] md:text-[22px] text-black-900 sm:text-xl text-center"
                                                size="txtCairoBold24">
                                              Severe
                                            </Text>
                                            <Text
                                                className="text-[15px] md:text-[22px] text-black-900 sm:text-xl text-center">
                                              8mm depression that can last more than 2 minutes
                                            </Text>
                                            </div>
                      
                        <div className="w-[4%]"></div>
                        </div> }
                      </div>
                  
                  <div className= "flex flex-col w-[75%] ml-[100px]">
                          <ToggleRadio  value= {rightcalve} onChange={handleRightCalfChange} inputRef={inputRefs[0]} 
                                        title="i. Right calf" expand={isCheckedPulse} ></ToggleRadio>
                          <ToggleRadio  value = {leftcalve} onChange={handleLeftCalfChange} inputRef={inputRefs[1]} 
                                        title="ii. Left calf" expand={isCheckedPulse} ></ToggleRadio>
                </div>
                  </List>
                  </div>
                  
              </div>
                
            </div>
          </div>

               <div className="absolute left-[1218px] top-[240px]">
               <MedTechNotes notes={note} token={props.token} proxy={props.proxy} tab="pulses" setNotes={setNotes}/>
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
                         <Text className="font-semibold md:ml-[0] text-white-A700 text-xl">Upload Image of Legs</Text>
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


export default LegsMedPage;
