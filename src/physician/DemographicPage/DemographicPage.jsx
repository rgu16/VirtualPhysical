import React from "react";

import {  Img, Line, List, Text, NavBar, TabNav, PhysicianNotes } from "components";
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
import { useState, useRef, useEffect } from 'react';
import axios from 'axios';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { jwtDecode } from "jwt-decode";
import { SettingsRemoteSharp } from "@mui/icons-material";

export const DemographicPage = (props) => {
  const patient = jwtDecode(props.token).patient.split("/");
  const firstname = useState(patient[1]);
  const lastname = useState(patient[0]);
  const [genderValue, setGenderValue] = useState();
  const [height, setHeightValue] = useState();
  const [weight, setWeightValue] = useState();
  const [DOB, setDOBValue] = useState();
  const [age, setAgeValue] = useState();
  const [history, setHistoryValue] = useState();
  const [profilePic, setProfilePic] = useState()
  // const fileInputRef = useRef(null);
  const [imageLoaded, setImageLoaded] = useState(false);
  const [note, setNotes] = useState();

    const [saveVariant, setSaveVariant] = useState('outlined');

    const handleSaveClick = () => {
      setSaveVariant(saveVariant === 'outlined' ? 'contained' : 'outlined');
    };

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
          setWeightValue(res.detail['weight'])
          setDOBValue(res.detail['DOB'])
          // setDOBValue(dayjs(res.detail['DOB']).format("MM/DD/YYYY"))
          setHistoryValue(res.detail['history'])
          if(res.hasOwnProperty("note")){
            setNotes(res.note)
            console.log(res.note)
          }
          if(res.hasOwnProperty("profile_pic")){
            setProfilePic(res.profile_pic)
          }
      }).catch((error) => {
          if (error.response){
          console.log(error.response)
          console.log(error.response.status)
          console.log(error.response.headers)}
      })
    }, [props]);

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
                <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between w-full">
                  <div className="md:h-[560px] h-[580px] w-[30%] md:w-full">
                      <div className="flex flex-col items-start justify-start w-full">
                        <List
                          className="flex flex-col gap-[20px] md:ml-[0] ml-[50px] w-full"
                          orientation="vertical">      
                          <Text
                          className="sm:text-3xl md:text-[32px] text-[34px] text-gray-900_02"
                          size="txtCairoBold34">
                          Demographics 
                          </Text>
                          <div className="flex flex-row gap-[13px] items-center justify-start w-full" >
                            <Text
                              className="text-2xl md:text-[22px] text-black-900 sm:text-xl"
                              size="txtCairoBold24">
                              Name:
                            </Text>
                            <Text className="text-2xl md:text-[22px] text-black-900 sm:text-xl" variant="outlined">{firstname}</Text>
                          </div>
                          <div className="flex flex-row gap-[15px] items-start justify-start w-full">
                            <Text
                              className="mt-0.5 text-2xl md:text-[22px] text-black-900 sm:text-xl"
                              size="txtCairoBold24">
                              Email:
                            </Text>                        
                            <Text className="text-2xl md:text-[22px] text-black-900 sm:text-xl" variant="outlined">{lastname}</Text>
                          </div>
                          <div className="flex flex-row gap-[15px] items-center justify-start w-full">
                             <Text
                              className="mt-0.5 text-2xl md:text-[22px] text-black-900 sm:text-xl"
                              size="txtCairoBold24" 
                            >
                              Gender:
                            </Text>
                            <Text
                              className="text-2xl md:text-[22px] text-black-900 sm:text-xl"
                              value = {genderValue} 
                              id="outlined-select-currency-native"
                              select
                              label=""
                              defaultValue="no selection"
                              SelectProps={{
                                native: true,
                              }}
                              helperText=""
                            >
                            {genderValue} </Text>
                          </div>
                          <div className="flex flex-row gap-[15px] items-center justify-start w-full">
                             <Text
                               className="mt-[5px] text-2xl md:text-[22px] text-black-900 sm:text-xl"
                               size="txtCairoBold24">
                               Height:
                             </Text>
                            <Text
                              className="text-2xl md:text-[22px] text-black-900 sm:text-xl"
                              id="outlined-start-adornment"
                              sx={{ m: 1, width: '25ch' }}
                              // InputProps={{
                              //   endAdornment: <InputAdornment position="end">ft</InputAdornment>,
                              // }}
                              value = {height} 
                              >{height}</Text>
                          </div>
                          <div className="flex flex-row gap-[15px] items-center justify-start w-full">  
                          <Text
                              className="mt-0.5 text-2xl md:text-[22px] text-black-900 sm:text-xl"
                              size="txtCairoBold24"
                            >
                              Weight:
                            </Text>          
                            <Text
                              className="text-2xl md:text-[22px] text-black-900 sm:text-xl"
                              id="outlined-start-adornment"
                              sx={{ m: 1, width: '25ch' }}
                              InputProps={{
                                endAdornment: <InputAdornment position="end">ft</InputAdornment>,
                              }}
                              value = {height} 
                              >{weight} kg</Text>                
                          </div>
                           <div className="flex flex-row gap-[15px] items-center justify-start w-full">
                            <Text
                              className="text-2xl md:text-[22px] text-black-900 sm:text-xl"
                              size="txtCairoBold24"
                            >
                              Date of Birth:{" "}
                            </Text>
                            <Text className="text-2xl md:text-[22px] text-black-900 sm:text-xl" variant="outlined">{DOB}</Text>
                          </div>
                          <div className="flex flex-row gap-[15px] items-center justify-between w-full">
                            <Text
                              className="mt-0.5 text-2xl md:text-[22px] text-black-900 sm:text-xl"
                              size="txtCairoBold24"
                            >
                              Age:
                            </Text>
                            <Text value = {age} required id="outlined-basic" label="required" variant="outlined" />
                            
                          </div>
                        </List>
                      </div>
                  </div>
                  <div className="flex flex-col h-full items-start justify-start w-[20%] mt-[80px]">  
                  <Img
              className="h-[200px] w-[200px] md:h-auto object-cover rounded-bl-[14px] rounded-[14px] w-full"
              src= {profilePic}
              alt=""
              onLoad ={()=> setImageLoaded(true)}
              style={{ display: imageLoaded ? "block" : "none" }}
              />
              <Img
              className="h-[200px] w-[200px] md:h-auto object-cover rounded-bl-[14px] rounded-[14px] w-full"
              src= "images/img_defaultprofile.jpg"
              alt="image"
              style = {{display: imageLoaded? "none": "block"}}
            />
                    </div>
                    <PhysicianNotes notes={note} token={props.token} proxy={props.proxy} tab="/demographic"></PhysicianNotes>
                </div>
                <div className="flex flex-col items-start justify-start md:ml-[0] ml-[35px] w-[41%] md:w-full mt-[-285px]">
                  <Text style={{
    paddingBottom: '20px', paddingTop: '80px',  paddingLeft: '15px', 
  }}
                    className="text-2xl md:text-[22px] text-black-900 sm:text-xl"
                    size="txtCairoBold24"
                  >
                    Patient History:
                  </Text>
                  <Text  
                  className="text-2xl md:text-[22px] text-black-900 sm:text-xl ml-[20px]"
                    id="outlined-multiline-static"
                    label="Multiline"
                    multiline
                    rows={4}
                  >{history}</Text>
         
                    <div style={{paddingTop: "2rem"}}>
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
