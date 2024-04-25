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
  const [handPic, setHandPic] = useState('');

  const [medNote, setMedNote] = useState();

  
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
        setHandPic(res.Image)
        setMedNote(res.med_note)
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
            <div className="bg-white-A700 flex flex-col font-cairo items-center justify-start p-10 sm:px-5 w-full"style={{
    paddingTop: '50px',
  }} >
              <div className="flex flex-col  justify-start w-[99%] md:w-full">
                <div className="flex md:flex-col flex-row md:gap-10 items-start justify-start w-full">
                  <div className="md:h-[560px] shrink relative w-[100%] md:w-full">
                      <div className="flex flex-col items-start justify-start w-full">
                        <List
                          className="flex flex-col gap-[10px] md:ml-[0] ml-[50px] w-[62%]"
                          orientation="vertical">      
                          <Text
                          className="sm:text-3xl md:text-[32px] text-[34px] text-gray-900_02"
                          size="txtCairoBold34">
                          Legs
                          </Text>
                          
                          <div className="flex flex-row gap-[13px] ml-[50px] items-center justify-start w-full" >
                            <Text
                              className="text-2xl md:text-[22px] text-black-900 sm:text-xl"
                              size="txtCairoBold24">
                              Pitting Edema:
                            </Text>
                            <div className="relative group flex flex-row">
                            <button >
                              <img
                              className="h-[36px] w-[36px]"
                              src="images/img_profile_black_900.svg"
                              alt="profile_One"/>
                            </button>
                            <div  className="z-10 absolute top-[20px] left-full bg-gray-100 text-gray-700 px-2 py-1 rounded-md opacity-0 group-hover:opacity-100 w-[250px] transition-all duration-300 ease-in-out">
                            <Img
                      src= {handPic}
                      alt=""
                      />
                            </div> 
                          </div>  
                          </div>
                          <div className="flex flex-row gap-[13px] ml-[80px] items-center justify-start w-full">
                            <Text
                              className="text-2xl md:text-[22px] text-black-900 sm:text-xl"
                              size="txtCairoBold24">
                              Right:
                            </Text>                        
                            <Text className={R_pittingValue==0||R_pittingValue==1?"text-2xl md:text-[22px] text-black-900 sm:text-xl":
                             "text-2xl md:text-[22px] text-red-A700 sm:text-xl"} variant="outlined">+{R_pittingValue}</Text>
                          </div>
                          <div className="flex flex-row gap-[13px] ml-[80px] items-center justify-start w-full">
                            <Text
                              className="text-2xl md:text-[22px] text-black-900 sm:text-xl"
                              size="txtCairoBold24">
                              Left:
                            </Text>                        
                            <Text className={L_pittingValue==0||L_pittingValue==1?"text-2xl md:text-[22px] text-black-900 sm:text-xl":
                             "text-2xl md:text-[22px] text-red-A700 sm:text-xl"} variant="outlined">+{L_pittingValue}</Text>
                          </div>
                        </List>
                      </div>
                      
                  </div>
                  <div className="relative mt-[50px]">
                    {medNote !== "" && 
                      <div className="flex flex-col items-start justify-start w-[400px] ml-[50px] mr-[50px] mb-[20px]">
                      <Text
                        className="text-2xl md:text-[22px] text-black-900 sm:text-xl"
                        size="txtCairoBold24"
                      >
                        Med Tech Notes:{" "}
                      </Text>
                      
                      <Text className="text-2xl md:text-[22px] text-black-900 sm:text-xl">{medNote}</Text>
                      </div>}
                    <PhysicianNotes notes={note} token={props.token} proxy={props.proxy} tab="general"></PhysicianNotes>
                  </div>
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
