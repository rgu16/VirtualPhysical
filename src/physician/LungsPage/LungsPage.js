import React from "react";
import "./style.css";
// import { useState } from 'react';
import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import LungPopover from "components/LungPopover/LungPopover.jsx"

import { Img, Line, List, Text, TabNav, NavBar } from "components";
import { Link } from 'react-router-dom';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import Stack from '@mui/material/Stack';
import { useState, useRef, useEffect } from 'react';
import {  PhysicianNotes } from "components";
import axios from 'axios';
import { styled } from '@mui/material/styles';
// import Button from '@mui/material/Button';
// import Stack from '@mui/material/Stack';
import { jwtDecode } from "jwt-decode";
// import { SettingsRemoteSharp } from "@mui/icons-material";




export const LungsPage = (props) => {
  const [breathingValue, setBreathingValue] = useState('');
  const [breathingStatus, setBreathingStatus] = useState('');

  const [saveVariant, setSaveVariant] = useState('outlined');

  const handleSaveClick = () => {
    setSaveVariant(saveVariant === 'outlined' ? 'contained' : 'outlined');
  };

  const [anchorEl, setAnchorEl] = React.useState(null);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const open = Boolean(anchorEl);
  const id = open ? 'image-popover' : undefined;



  const patient = jwtDecode(props.token).patient.split("/");
  // const firstname = useState(patient[1]);
  // const lastname = useState(patient[0]);
  // const [BreathingRate, setBreathingRate] = useState();
  const [LaboredBreathing, setLaboredBreathing] = useState('');

  const [L1Value, setL1Value] = useState();
  const [L2Value, setL2Value] = useState();
  const [L3Value, setL3Value] = useState();
  const [L4Value, setL4Value] = useState();
  const [L5Value, setL5Value] = useState();
  const [L6Value, setL6Value] = useState()
  // const fileInputRef = useRef(null);
  // const [imageLoaded, setImageLoaded] = useState(false);
  const [note, setNotes] = useState();

  
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
          console.log(res)

          const breathingValue = parseInt(res.detail['breathingrate'], 10);
          setBreathingValue( breathingValue )

          const LaboredBreathing = res.detail['breathinglabor']
          setLaboredBreathing(LaboredBreathing)

          setL1Value(res.detail[''])
          setL2Value(res.detail[''])
          setL3Value(res.detail[''])
          setL4Value(res.detail[''])
          setL5Value(res.detail[''])
          setL6Value(res.detail[''])

          // let breathingStatus = '';
          // if (BreatingRate >= 12 && BreatingRate <= 18) {
          //   breathingStatus = 'normal';
          // } else if (BreatingRate < 12 || BreatingRate > 25) {
          //   breathingStatus = 'abnormal';
          // }
        
          // setBreathingStatus(breathingStatus)

          let breathingStatus = '';
          // Ensure BreathingRate is a number and not empty
          // const numericBreathingRate = Number(BreathingRate);
          if (breathingValue >= 12 && breathingValue <= 18) {
            breathingStatus = 'normal';
          } else if (breathingValue < 12 || breathingValue > 25) {
            breathingStatus = 'abnormal';
          }
          else if (breathingValue == '') {
            // Handle the case for an empty input
            breathingStatus = ''; // or any other default status you want to set for no input
          } else {
            // Handle the case for non-numeric input
            breathingStatus = ''; // or any other status for invalid input
          }
          setBreathingStatus(breathingStatus);


          if(res.hasOwnProperty("note")){
            setNotes(res.note)
            console.log(res.note)
          }
          // if(res.hasOwnProperty("profile_pic")){
          //   setProfilePic(res.profile_pic)
          // }
      }).catch((error) => {
          if (error.response){
          console.log(error.response)
          console.log(error.response.status)
          console.log(error.response.headers)}
      })
    }, [props]);


    const handleBreathingChange = (e) => {
      const value = e.target.value;
      setBreathingValue(value);
    
      // Convert the value to a number for comparison
      const numericValue = parseInt(value, 10);
    
      // Determine the breathing status based on the specified criteria
      let status = '';
      if (numericValue >= 12 && numericValue <= 18) {
        status = 'normal';
      } else if (numericValue < 12 || numericValue > 25) {
        status = 'abnormal';
      }
      // else if (numericValue == '') {
      //   // Handle the case for an empty input
      //   status = 'normal'; // or any other default status you want to set for no input
      // } 
      else {
        // Handle the case for non-numeric input
        status = 'normal'; // or any other status for invalid input
      }
    
      setBreathingStatus(status);
    };


  return (
    // <NavBar proxy={props.proxy} token={props.token}/>



    <div className="lungs-tab">
      <div className="overlap-wrapper">
        <div className="overlap">
          <div className="overlap-group">
            <div className="labored-breathing">
            {/* <p className="moderate">
              no
            </p> */}
            <input
                    type="text"
                    className="moderate"
                    value={LaboredBreathing}
                    // onChange={handleRadialChange}
                    placeholder="No"
              />
              <p className="span-wrapper">
                <span className="span">Labored breathing?</span>
              </p>
            </div>
            <div className="brething-rate">
              <div className="div">
                {/* <img
                  className="rectangle"
                  alt="Rectangle"
                  src="https://cdn.animaapp.com/projects/65a945881c395bf52b1e3e78/releases/65a9e82814bc0dc531a973f2/img/rectangle-8-13@2x.png"
                />
                <p className="element">
                  <span className="text-wrapper">30</span>
                </p> */}

                {/* <input
                type="text"
                className="rectangle"
                defaultValue=""
                style={{
                    width: 'same width as the image',
                    height: 'same height as the image',
                    // Additional styling to make it look like a rectangle
                }}
                /> */}
                <input
                    type="text"
                    className={`rectangle ${breathingStatus && breathingStatus !== 'normal' ? 'input-error' : ''}`}
                    value={breathingValue}
                    onChange={handleBreathingChange}
                    placeholder="13"
                    style={{
                      width: 'same width as the image',
                      height: 'same height as the image',
                      // Additional styling to make it look like a rectangle
                  }}
                  />
                  {breathingStatus && breathingStatus !== 'normal' && (
                    <div className="error-popup">Abnormal breathing value: {breathingStatus}</div>
                  )}
                {/* </div> */}
              </div>

              <p className="breaths-min">
                <span className="span">breaths/min</span>
              </p>
              <p className="breathing-rate">
                <span className="span">Breathing rate:</span>
              </p>

            </div>


            <div className="notes">

            <div className="specialty-physician-wrapper">
            <div className="specialty-physician">
              <textarea className="specialty-physician-textarea" placeholder="specialty physician notes on lungs go here"></textarea>
            </div>
            </div>
      
            <p className="p">
                <span className="span">Notes:</span>
            </p>

            <button className="save-button">
                <div className="overlap-group-2">
                  <div className="background" />
                  <Button variant={saveVariant} onClick={handleSaveClick}>
                    {saveVariant === 'outlined' ? 'Save' : 'Saved'}
                  </Button>
                </div>
              </button>

            </div>

            <div className="overlap-2">

              <div className="left-lung">

                <div className="popover">
                  <div className="lungpopover-1">
                    <LungPopover></LungPopover>
                  </div>                      
                </div>

                <div className="popover">
                  <div className="lungpopover-2">
                    <LungPopover></LungPopover>
                  </div>                      
                </div>


                <div className="popover">
                  <div className="lungpopover-3">
                    <LungPopover></LungPopover>
                  </div>                      
                </div>


              </div>



              <div className="right-lung">
               
              <div className="popover">
                  <div className="lungpopover-4">
                    <LungPopover></LungPopover>
                  </div>                      
                </div>

                <div className="popover">
                  <div className="lungpopover-5">
                    <LungPopover></LungPopover>
                  </div>                      
                </div>


                <div className="popover">
                  <div className="lungpopover-6">
                    <LungPopover></LungPopover>
                  </div>                      
                </div>

              </div>

            </div>

            <p className="lung-auscultation">
              <span className="text-wrapper-4">Lung Auscultation </span>
              <span className="text-wrapper-5">(posterior analysis only)</span>
            </p>
          </div>
          <div className="tabs">
            <div className="frame">
              {/* <p className="span-wrapper-2">
                <span className="text-wrapper-6">Demographics</span>
              </p> */}
              <a href="/demographics" className="span-wrapper-2" style={{ textDecoration: 'none' }}>
                  <span className="text-wrapper-6">Demographics</span>
              </a>
            </div>
            <div className="general-wrapper">
              {/* <p className="span-wrapper-2">
                <span className="text-wrapper-6">General</span>
              </p> */}
              <a href="/general" className="span-wrapper-2" style={{ textDecoration: 'none' }}>
                  <span className="text-wrapper-6">General</span>
              </a>
            </div>
            <div className="lungs-wrapper">
              {/* <p className="span-wrapper-2">
                <span className="text-wrapper-6">Lungs</span>
              </p> */}
              <a href="/lungs" className="span-wrapper-2" style={{ textDecoration: 'none' }}>
                  <span className="text-wrapper-6">Lungs</span>
              </a>
            </div>
            <div className="pulses-wrapper">
              {/* <p className="span-wrapper-2">
                <span className="text-wrapper-6">Pulses</span>
              </p> */}
              <a href="/pulses" className="span-wrapper-2" style={{ textDecoration: 'none' }}>
                  <span className="text-wrapper-6">Pulses</span>
              </a>
            </div>
            <div className="abdomen-wrapper">
              {/* <p className="span-wrapper-2">
                <span className="text-wrapper-6">Abdomen</span>
              </p> */}
              <a href="/abdomen" className="span-wrapper-2" style={{ textDecoration: 'none' }}>
                  <span className="text-wrapper-6">Abdomen</span>
              </a>
            </div>
            <div className="heart-wrapper">
              {/* <p className="span-wrapper-2">
                <span className="text-wrapper-6">Heart</span>
              </p> */}
              <a href="/heart" className="span-wrapper-2" style={{ textDecoration: 'none' }}>
                  <span className="text-wrapper-6">Heart</span>
              </a>
            </div>
            <div className="legs-wrapper">
              {/* <p className="span-wrapper-2">
                <span className="text-wrapper-6">Legs</span>
              </p> */}
              <a href="/legs" className="span-wrapper-2" style={{ textDecoration: 'none' }}>
                  <span className="text-wrapper-6">Legs</span>
              </a>
            </div>
            <div className="summary-wrapper">
              {/* <p className="span-wrapper-2">
                <span className="text-wrapper-6">Summary</span>
              </p> */}
              <a href="/summary" className="span-wrapper-2" style={{ textDecoration: 'none' }}>
                  <span className="text-wrapper-6">Summary</span>
              </a>
            </div>
          </div>
          
          <NavBar proxy={props.proxy} token={props.token} /> {/* Display NavBar at the top */}

        </div>
      </div>
    </div>
  );
};



// import React, { useState } from "react";
// import { Link } from 'react-router-dom';
// import Button from '@mui/material/Button';

// import { Img, Line, List, Text, TabNav, NavBar } from "components";
// import Radio from '@mui/material/Radio';
// import RadioGroup from '@mui/material/RadioGroup';
// import FormControlLabel from '@mui/material/FormControlLabel';
// import FormControl from '@mui/material/FormControl';
// import FormLabel from '@mui/material/FormLabel';
// import Stack from '@mui/material/Stack';

// export const LungsPage = (props) => {
//   const [breathingValue, setBreathingValue] = useState('');
//   const [breathingStatus, setBreathingStatus] = useState('');

//   const handleBreathingChange = (e) => {
//     const value = e.target.value;
//     setBreathingValue(value);
  
//     const numericValue = parseInt(value, 10);
//     let status = '';
//     if (numericValue >= 12 && numericValue <= 18) {
//       status = 'normal';
//     } else if (numericValue < 12 || numericValue > 25) {
//       status = 'abnormal';
//     }
//     setBreathingStatus(status);
//   };


//   //   const [breathingValue, setBreathingValue] = useState('');
// //   const [breathingStatus, setBreathingStatus] = useState('');

//   const [saveVariant, setSaveVariant] = useState('outlined');

//   const handleSaveClick = () => {
//     setSaveVariant(saveVariant === 'outlined' ? 'contained' : 'outlined');
//   };

//   const [anchorEl, setAnchorEl] = React.useState(null);
//   const handleClick = (event) => {
//     setAnchorEl(event.currentTarget);
//   };
//   const handleClose = () => {
//     setAnchorEl(null);
//   };
//   const open = Boolean(anchorEl);
//   const id = open ? 'image-popover' : undefined;


//   return (
//     <>
//       <NavBar proxy={props.proxy} token={props.token} />
//       <div
//         className="bg-cover bg-no-repeat bg-white-A700 flex flex-col font-dmsans h-[1561px] items-center justify-start mx-auto pb-28 w-full"
//         style={{ backgroundImage: "url('images/lungs_background.svg')" }}
//       >
//         <div className="flex flex-col md:gap-10 gap-[50px] items-center justify-start w-full">
//         <div></div>
//           <div className="flex flex-col items-start justify-start max-w-[1700px] mx-auto md:px-5 w-full">
//             <TabNav tab="lungs"></TabNav>
//             <div className="bg-white-A700 flex flex-col font-cairo items-center justify-start p-10 sm:px-5 w-full">
//               {/* Lungs inspection content goes here */}
            

             


//               <div className="flex w-full min-h-screen p-5">
//                 <div className="w-full max-w-md">
//                   <Text
//                     className="sm:text-3xl md:text-[32px] text-[34px] text-gray-900_02"
//                     size="txtCairoBold34"
//                   >
//                     Lungs Inspection
//                   </Text>
//                   {/* <div className={`rectangle ${breathingStatus && breathingStatus !== 'normal' ? 'input-error' : ''}`}>
//                     <input
//                       type="text"
//                       className="moderate"
//                       value={breathingValue}
//                       onChange={handleBreathingChange}
//                       placeholder="Enter breathing rate"
//                     />
//                     {breathingStatus && breathingStatus !== 'normal' && (
//                       <div className="error-popup">Abnormal breathing value: {breathingStatus}</div>
//                     )}
//                   </div> */}

//                   {/* <div style={{ paddingTop: "2rem" }}>
//                     <Stack spacing={2} direction="row">
//                       <Link to="/summary"><Button variant="outlined">Save</Button></Link>
//                     </Stack>
//                   </div> */}

// <div className="lungs-tab">
//       <div className="overlap-wrapper">
//         <div className="overlap">
//           <div className="overlap-group">
//             <div className="labored-breathing">
//             {/* <p className="moderate">
//               no
//             </p> */}
//             <input
//                     type="text"
//                     className="moderate"
//                     // value={radialPulseValue}
//                     // onChange={handleRadialChange}
//                     placeholder="No"
//               />
//               <p className="span-wrapper">
//                 <span className="span">Labored breathing?</span>
//               </p>
//             </div>
//             <div className="brething-rate">
//               <div className="div">
//                 {/* <img
//                   className="rectangle"
//                   alt="Rectangle"
//                   src="https://cdn.animaapp.com/projects/65a945881c395bf52b1e3e78/releases/65a9e82814bc0dc531a973f2/img/rectangle-8-13@2x.png"
//                 />
//                 <p className="element">
//                   <span className="text-wrapper">30</span>
//                 </p> */}


//                 {/* <input
//                 type="text"
//                 className="rectangle"
//                 defaultValue=""
//                 style={{
//                     width: 'same width as the image',
//                     height: 'same height as the image',
//                     // Additional styling to make it look like a rectangle
//                 }}
//                 /> */}
//                 <input
//                     type="text"
//                     className={`rectangle ${breathingStatus && breathingStatus !== 'normal' ? 'input-error' : ''}`}
//                     value={breathingValue}
//                     onChange={handleBreathingChange}
//                     placeholder="13"
//                     style={{
//                       width: 'same width as the image',
//                       height: 'same height as the image',
//                       // Additional styling to make it look like a rectangle
//                   }}
//                   />
//                   {breathingStatus && breathingStatus !== 'normal' && (
//                     <div className="error-popup">Abnormal breathing value: {breathingStatus}</div>
//                   )}
//                 {/* </div> */}
//               </div>

//               <p className="breaths-min">
//                 <span className="span">breaths/min</span>
//               </p>
//               <p className="breathing-rate">
//                 <span className="span">Breathing rate:</span>
//               </p>

//             </div>


//             <div className="notes">

//             <div className="specialty-physician-wrapper">
//             <div className="specialty-physician">
//               <textarea className="specialty-physician-textarea" placeholder="specialty physician notes on lungs go here"></textarea>
//             </div>
//             </div>
      
//             <p className="p">
//                 <span className="span">Notes:</span>
//             </p>

//             <button className="save-button">
//                 <div className="overlap-group-2">
//                   <div className="background" />
//                   <Button variant={saveVariant} onClick={handleSaveClick}>
//                     {saveVariant === 'outlined' ? 'Save' : 'Saved'}
//                   </Button>
//                 </div>
//               </button>

//             </div>

//             <div className="overlap-2">

//               <div className="left-lung">

//                 <div className="popover">
//                   <div className="lungpopover-1">
//                     <LungPopover></LungPopover>
//                   </div>                      
//                 </div>

//                 <div className="popover">
//                   <div className="lungpopover-2">
//                     <LungPopover></LungPopover>
//                   </div>                      
//                 </div>


//                 <div className="popover">
//                   <div className="lungpopover-3">
//                     <LungPopover></LungPopover>
//                   </div>                      
//                 </div>


//               </div>



//               <div className="right-lung">
               
//               <div className="popover">
//                   <div className="lungpopover-4">
//                     <LungPopover></LungPopover>
//                   </div>                      
//                 </div>

//                 <div className="popover">
//                   <div className="lungpopover-5">
//                     <LungPopover></LungPopover>
//                   </div>                      
//                 </div>


//                 <div className="popover">
//                   <div className="lungpopover-6">
//                     <LungPopover></LungPopover>
//                   </div>                      
//                 </div>

//               </div>

//             </div>

//             <p className="lung-auscultation">
//               <span className="text-wrapper-4">Lung Auscultation </span>
//               <span className="text-wrapper-5">(posterior analysis only)</span>
//             </p>
//           </div>
//           <div className="tabs">
//             <div className="frame">
//               {/* <p className="span-wrapper-2">
//                 <span className="text-wrapper-6">Demographics</span>
//               </p> */}
//               <a href="/demographics" className="span-wrapper-2" style={{ textDecoration: 'none' }}>
//                   <span className="text-wrapper-6">Demographics</span>
//               </a>
//             </div>
//             <div className="general-wrapper">
//               {/* <p className="span-wrapper-2">
//                 <span className="text-wrapper-6">General</span>
//               </p> */}
//               <a href="/general" className="span-wrapper-2" style={{ textDecoration: 'none' }}>
//                   <span className="text-wrapper-6">General</span>
//               </a>
//             </div>
//             <div className="lungs-wrapper">
//               {/* <p className="span-wrapper-2">
//                 <span className="text-wrapper-6">Lungs</span>
//               </p> */}
//               <a href="/lungs" className="span-wrapper-2" style={{ textDecoration: 'none' }}>
//                   <span className="text-wrapper-6">Lungs</span>
//               </a>
//             </div>
//             <div className="pulses-wrapper">
//               {/* <p className="span-wrapper-2">
//                 <span className="text-wrapper-6">Pulses</span>
//               </p> */}
//               <a href="/pulses" className="span-wrapper-2" style={{ textDecoration: 'none' }}>
//                   <span className="text-wrapper-6">Pulses</span>
//               </a>
//             </div>
//             <div className="abdomen-wrapper">
//               {/* <p className="span-wrapper-2">
//                 <span className="text-wrapper-6">Abdomen</span>
//               </p> */}
//               <a href="/abdomen" className="span-wrapper-2" style={{ textDecoration: 'none' }}>
//                   <span className="text-wrapper-6">Abdomen</span>
//               </a>
//             </div>
//             <div className="heart-wrapper">
//               {/* <p className="span-wrapper-2">
//                 <span className="text-wrapper-6">Heart</span>
//               </p> */}
//               <a href="/heart" className="span-wrapper-2" style={{ textDecoration: 'none' }}>
//                   <span className="text-wrapper-6">Heart</span>
//               </a>
//             </div>
//             <div className="legs-wrapper">
//               {/* <p className="span-wrapper-2">
//                 <span className="text-wrapper-6">Legs</span>
//               </p> */}
//               <a href="/legs" className="span-wrapper-2" style={{ textDecoration: 'none' }}>
//                   <span className="text-wrapper-6">Legs</span>
//               </a>
//             </div>
//             <div className="summary-wrapper">
//               {/* <p className="span-wrapper-2">
//                 <span className="text-wrapper-6">Summary</span>
//               </p> */}
//               <a href="/summary" className="span-wrapper-2" style={{ textDecoration: 'none' }}>
//                   <span className="text-wrapper-6">Summary</span>
//               </a>
//             </div>
//           </div>
          
//           <NavBar proxy={props.proxy} token={props.token} /> {/* Display NavBar at the top */}

//         </div>
//       </div>
//     </div>


//                 </div>
//               </div>
//             </div>
//           </div>
//         </div> 
//       </div>
//     </>
//   );
// };


