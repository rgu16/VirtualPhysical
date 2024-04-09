import React from "react";
import "./style.css";
import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Grade from "./Grade.png"

import { Img, Line, List, Text, TabNav, NavBar } from "components";
import { Link } from 'react-router-dom';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import Stack from '@mui/material/Stack';
import { useState, useRef, useEffect } from 'react';
import { PhysicianNotes } from "components";
import axios from 'axios';
import { styled } from '@mui/material/styles';
// import Button from '@mui/material/Button';
// import Stack from '@mui/material/Stack';
import { jwtDecode } from "jwt-decode";



export const LegsPage = (props) => {
  const patient = jwtDecode(props.token).patient.split("/");
  const [L_pittingValue, setL_pittingValue] = useState('');
  const [L_pittingStatus, setL_pittingStatus] = useState('');
  const [R_pittingValue, setR_pittingValue] = useState('');
  const [R_pittingStatus, setR_pittingStatus] = useState('');

  
  const [note, setNotes] = useState();
  const [saveVariant, setSaveVariant] = useState('outlined');

  const handleSaveClick = () => {
    setSaveVariant(saveVariant === 'outlined' ? 'contained' : 'outlined');
  };


  useEffect(() => {
    axios({
        method: "GET",
        url: props.proxy + "download/legs",
        headers: {
        Authorization: 'Bearer ' + props.token
        }
    })
    .then((response) => {
        const res = response.data
        console.log(res)

        // setL_pittingValue(res.detail[ 'leftcalve' ])
        const L_pittingValue = parseInt(res.detail['leftcalve'], 10);
        setL_pittingValue(L_pittingValue)
        let L_pittingStatus = '';
        if (L_pittingValue >= 0 && L_pittingValue <= 1) {
          L_pittingStatus = 'normal';
        } else if (L_pittingValue >= 2) {
          L_pittingStatus = 'abnormal';
        }
        setL_pittingStatus(L_pittingStatus);

        const R_pittingValue = parseInt(res.detail['rightcalve'], 10);
        setR_pittingValue(R_pittingValue)
        let R_pittingStatus = '';
        if (R_pittingValue >= 0 && R_pittingValue <= 1) {
          R_pittingStatus = 'normal';
        } else if (R_pittingValue >= 2) {
          R_pittingStatus = 'abnormal';
        }
        setR_pittingStatus(R_pittingStatus)



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




  // For Image Popover
  const [imageAnchorEl, setImageAnchorEl] = React.useState(null);
  const handleImageClick = (event) => {
    setImageAnchorEl(event.currentTarget);
  };
  const handleImageClose = () => {
    setImageAnchorEl(null);
  };
  const imagePopoverOpen = Boolean(imageAnchorEl);
  const imageId = imagePopoverOpen ? 'image-popover' : undefined;

  // For Question Mark Popover
  const [questionMarkAnchorEl, setQuestionMarkAnchorEl] = useState(null);

  const handleQuestionMarkPopoverOpen = (event) => {
    setQuestionMarkAnchorEl(event.currentTarget);
  };

  const handleQuestionMarkPopoverClose = () => {
    setQuestionMarkAnchorEl(null);
  };

  const questionMarkOpen = Boolean(questionMarkAnchorEl);


  const handleL_pittingChange = (e) => {
    const value = e.target.value;
    setL_pittingValue(value);

  
    // Convert the value to a number for comparison
    const numericValue = parseInt(value, 10);
  
    // Determine the pitting edema status based on the specified criteria
    let status = '';
    if (numericValue >= 0 && numericValue <= 1) {
      status = 'normal';
    } else if (numericValue >= 2) {
      status = 'abnormal';
    }
  
    setL_pittingStatus(status);
  };

  const handleR_pittingChange = (e) => {
    const value = e.target.value;
    setR_pittingValue(value);
  
    // Convert the value to a number for comparison
    const numericValue = parseInt(value, 10);
  
    // Determine the pitting edema status based on the specified criteria
    let status = '';
    if (numericValue >= 0 && numericValue <= 1) {
      status = 'normal';
    } else if (numericValue >= 2) {
      status = 'abnormal';
    }
  
    setR_pittingStatus(status);
  };


  return (
    <div className="legs-tab">
      <div className="overlap-wrapper-3">
        <div className="overlap-15">
        
          <div className="overlap-16">

            <div className="notes-5">
                <PhysicianNotes notes={note} token={props.token} proxy={props.proxy} tab="legs"></PhysicianNotes>
            </div>

            <p className="pitting-edema-3">
              <span className="text-wrapper-41">Pitting Edema</span>
            </p>
            <p className="right-calve-3">
              <span className="text-wrapper-39">Right calve:</span>
            </p>
            <p className="left-calve-3">
              <span className="text-wrapper-39">Left calve:</span>
            </p>


            <div className="overlap-18">
              <img className="textbox-42" alt="Rectangle" src="https://cdn.animaapp.com/projects/65a945881c395bf52b1e3e78/releases/65a9e82814bc0dc531a973f2/img/rectangle-8-13@2x.png" />
              {/* <p className="element-13">
                <span className="text-wrapper-42">+3</span>
              </p> */}
              {/* <input type="text" className="textbox-42" defaultValue="+3" /> */}
              <input
                    type="text"
                    className={`textbox-42 ${R_pittingStatus && R_pittingStatus !== 'normal' ? 'input-error' : ''}`}
                    value={R_pittingValue}
                    onChange={handleR_pittingChange}
                    placeholder="0" //CHANGE THIS LATER
                  />
                  {R_pittingStatus && R_pittingStatus !== 'normal' && (
                    <div className="error-popup">Abnormal pitting edema value: {R_pittingStatus}</div>
                  )}

            </div>

            <div className="overlap-19">
              <img className="textbox-42" alt="Rectangle" src="https://cdn.animaapp.com/projects/65a945881c395bf52b1e3e78/releases/65a9e82814bc0dc531a973f2/img/rectangle-8-13@2x.png" />
              <input
                    type="text"
                    className={`textbox-42 ${L_pittingStatus && L_pittingStatus !== 'normal' ? 'input-error' : ''}`}
                    value={L_pittingValue}
                    onChange={handleL_pittingChange}
                    placeholder="0" //CHANGE THIS LATER
                  />
                  {L_pittingStatus && L_pittingStatus !== 'normal' && (
                    <div className="error-popup">Abnormal pitting edema value: {L_pittingStatus}</div>
                  )}
            </div>



            <div>
            <img
              className="mdi-question-mark-3"
              alt="Mdi question mark"
              src="https://cdn.animaapp.com/projects/65a945881c395bf52b1e3e78/releases/65a9e82814bc0dc531a973f2/img/mdi-question-mark-circle-outline-1@2x.png"
              onMouseEnter={handleQuestionMarkPopoverOpen}
              onMouseLeave={handleQuestionMarkPopoverClose}
            />
            <Popover
              id="mouse-over-popover"
              sx={{
                pointerEvents: 'none',
              }}
              open={questionMarkOpen}
              anchorEl={questionMarkAnchorEl}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              onClose={handleQuestionMarkPopoverClose}
              disableRestoreFocus
            >
              <img
                src={Grade}
                alt="Grade"
                style={{ width: '50%', height: '50%' }}
              />
            </Popover>
          </div>




          </div>



          <div className="tabs-5">
            <div className="frame-40">
              {/* <p className="span-wrapper-9">
                <span className="text-wrapper-43">Demographics</span>
              </p> */}
              <a href="/demographics" className="span-wrapper-9" style={{ textDecoration: 'none' }}>
                  <span className="text-wrapper-43">Demographics</span>
              </a>
            </div>
            <div className="frame-41">
              {/* <p className="span-wrapper-9">
                <span className="text-wrapper-43">General</span>
              </p> */}
              <a href="/general" className="span-wrapper-9" style={{ textDecoration: 'none' }}>
                  <span className="text-wrapper-43">General</span>
              </a>
            </div>
            <div className="frame-42">
              {/* <p className="span-wrapper-9">
                <span className="text-wrapper-43">Lungs</span>
              </p> */}
              <a href="/lungs" className="span-wrapper-9" style={{ textDecoration: 'none' }}>
                  <span className="text-wrapper-43">Lungs</span>
              </a>
            </div>
            <div className="frame-43">
              {/* <p className="span-wrapper-9">
                <span className="text-wrapper-43">Pulses</span>
              </p> */}
              <a href="/pulses" className="span-wrapper-9" style={{ textDecoration: 'none' }}>
                  <span className="text-wrapper-43">Pulses</span>
              </a>
            </div>
            <div className="frame-44">
              {/* <p className="span-wrapper-9">
                <span className="text-wrapper-43">Abdomen</span>
              </p> */}
              <a href="/abdomen" className="span-wrapper-9" style={{ textDecoration: 'none' }}>
                  <span className="text-wrapper-43">Abdomen</span>
              </a>
            </div>
            <div className="frame-45">
              {/* <p className="span-wrapper-9">
                <span className="text-wrapper-43">Heart</span>
              </p> */}
              <a href="/heart" className="span-wrapper-9" style={{ textDecoration: 'none' }}>
                  <span className="text-wrapper-43">Heart</span>
              </a>
            </div>
            <div className="frame-46">
              {/* <p className="span-wrapper-9">
                <span className="text-wrapper-43">Legs</span>
              </p> */}
              <a href="/legs" className="span-wrapper-9" style={{ textDecoration: 'none' }}>
                  <span className="text-wrapper-43">Legs</span>
              </a>
            </div>
            <div className="frame-47">
              {/* <p className="span-wrapper-9">
                <span className="text-wrapper-43">Summary</span>
              </p> */}
              <a href="/summary" className="span-wrapper-9" style={{ textDecoration: 'none' }}>
                  <span className="text-wrapper-43">Summary</span>
              </a>
            </div>
          </div>
          
          <NavBar proxy={props.proxy} token={props.token} /> {/* Display NavBar at the top */}


        </div>
      </div>
    </div>
  );
};
