import React from "react";


import { Img, Line, List, Text, NavBar, TabNav, MedTechNotes, ToggleRadio } from "components";
import { Link, Navigate } from 'react-router-dom';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { useState, useRef } from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import axios from 'axios';


const AbdomenMedPage= (props) => {
//   const [hypochondriacL, setHypochonriacLValue] = useState("none");
//  const [epigastric, setEpigastricValue] = useState("none");
//  const [hypochondriacR, setHypochonriacRValue] = useState("none");

//  const [lumbarL, setLumbarLValue] = useState("none");
//  const [umbilical, setUmbilicalValue] = useState("none");
//  const [lumbarL, setLumbarLValue] = useState("none");
const [hypochondriacL, setHypochonriacLValue] = useState("none");
const [epigastric, setEpigastricValue] = useState("none");
const [hypochondriacR, setHypochonriacRValue] = useState("none");

const [lumbarL, setLumbarLValue] = useState("none");
const [umbilical, setUmbilicalValue] = useState("none");
const [lumbarR, setLumbarRValue] = useState("none");

const [iliacL, setIliacLValue] = useState("none");
const [hypogastric, setHypogastricValue] = useState("none");
const [iliacR, setIliacRValue] = useState("none");

const [isCheckedCRT, setIsCheckedCRT] = useState(false);
const [isCheckedPulseOx, setIsCheckedPulseOx] = useState(false);
const [isCheckedThrills, setIsCheckedThrills] = useState(false);

const inputs = [hypochondriacL,epigastric,hypochondriacR,lumbarL,umbilical,lumbarR,iliacL,hypogastric,iliacR];

const handleCheckboxCRTChange = () => {
  setIsCheckedCRT(!isCheckedCRT);
};
const handleCheckboxPulseOxChange = () => {
  setIsCheckedPulseOx(!isCheckedPulseOx);
};
const handleCheckboxThrillsChange = () => {
  setIsCheckedThrills(!isCheckedThrills);
};

 const handleHypochondriacLChange = (event) => {
  setHypochonriacLValue(event.target.value)
}

 const handleEpigastricChange = (event) => {
   setEpigastricValue(event.target.value)
 }

 const handleHypochondriacRChange = (event) => {
  setHypochonriacRValue(event.target.value)
}


const handleLumbarLChange = (event) => {
  setLumbarLValue(event.target.value)
}

const handleUmbilicalChange = (event) => {
  setUmbilicalValue(event.target.value)
}

const handleLumbarRChange = (event) => {
  setLumbarRValue(event.target.value)
}


const handleIliacLChange = (event) => {
  setIliacLValue(event.target.value)
}

const handleHypogastricChange = (event) => {
  setHypogastricValue(event.target.value)
}

const handleIliacRChange = (event) => {
  setIliacRValue(event.target.value)
}


 const handleSave = (e) => {
   e.preventDefault();
   const data = {}
   data['hypochondriacL'] = hypochondriacL;
   data['epigastric'] = epigastric;
   data['hypochondriacR'] = hypochondriacR;

   data['lumbarL'] = lumbarL;
   data['umbilical'] = umbilical;
   data['lumbarR'] = lumbarR;

   data['iliacL'] = iliacL;
   data['hypogastric'] = hypogastric;
   data['iliacR'] = iliacR;


   console.log(data);
   axios({
    method:"POST",
    url: props.proxy + "/upload_json",
    data: {data: data, filename: '/abdomen/detail'},
    headers: {
      Authorization: 'Bearer ' + props.token
      }
  }).then((response) => {
    const res =response.data;
    localStorage.setItem('abdomen', data);
})
  .catch((error)=>{
    if(error.response){
      console.log(error.response)
      console.log(error.response.status)
      console.log(error.response.headers)
    }
  })
};

const [navigate, setNavigate] = useState();
const [complete, setComplete] = useState(false);
const [error, setError] = useState("");
const [note, setNotes] = useState("");

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
        <TabNav tab="abdomen"></TabNav>
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
                    Abdomen
                    </Text>
                    <div className="flex flex-col ml-[80px] items-start justify-between w-full" >
                        <div className="flex flex-row items-center w-[65%] justify-between">
                        <div className="flex flex-row gap-[13px]">
                      <Text
                          className="text-2xl md:text-[22px] text-black-900 sm:text-xl"
                          size="txtCairoBold24">
                          Palpation
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
                          Show detailed steps
                        </span>
                      </div>
                      </div>
                      </div>
                    </div>
                    {isCheckedPulseOx &&
                    <div className="ml-[80px]">
                    <img
                          style={{
                            width: "80%", // Enlarge the width of the image
                            height: "auto", // Set height to auto to maintain aspect ratio
                            paddingTop: "5px",
                            marginRight: '80px',
                          }}
                          src="images/palpation.png"
                          alt="screenshot20231"
                        /></div>}
                    <div className="flex flex-col ml-[80px] items-start justify-between w-full" >
                        <div className="flex flex-row items-center w-[65%] justify-between">
                        <div className="flex flex-row gap-[13px]">
                      <Text
                          className="text-[22px] md:text-[22px] text-black-900 sm:text-xl"
                          size="txtCairoBold24">
                          Feel for tenderness and input grading for each region:
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
                          Show scale, detailed steps, and region locations
                        </span>
                      </div>
                      </div>
                      </div>
                    </div>

                    <div className = "flex flex-col justify-start items-start ml-[80px] gap-[10px] mt-[20px] w-[80%]">
                        {isCheckedPulse && <div className = "flex flex-row justify-between items-center gap-[5px] w-full">
                        <div className="w-[4%]"></div>
                        <Text
                            className=" text-[16px] text-black-900 sm:text-xl w-[15%] text-center">
                          No tenderness
                        </Text>
                        <Text
                            className=" text-[16px] text-black-900 sm:text-xl w-[15%] text-center">
                          The patient says the area is tender
                        </Text>
                        <Text
                            className=" text-[16px] text-black-900 sm:text-xl w-[15%] text-center">
                          Patient winces due to pain
                        </Text>
                        <Text
                            className=" text-[16px] text-black-900 sm:text-xl w-[15%] text-center">
                          Patient winces and withdraws the affected part
                        </Text>
                        <Text
                            className=" text-[16px] text-black-900 sm:text-xl w-[15%] text-center">
                          Patient doesn't allow touching the affected part
                        </Text>
                        <div className="w-[4%]"></div>
                        </div> }
                      </div>
                  
                  <div className= "flex flex-col w-[75%] ml-[100px]">
                          <ToggleRadio  value = {hypochondriacR} onChange={handleHypochondriacRChange} inputRef={inputRefs[0]} 
                                        title="i. Right hypochondriac region" expand={isCheckedPulse} ></ToggleRadio>
                          <ToggleRadio  value = {epigastric} onChange={handleEpigastricChange} inputRef={inputRefs[1]} 
                                        title="ii. Epigastric region" expand={isCheckedPulse} ></ToggleRadio>
                          <ToggleRadio   value = {hypochondriacL} onChange={handleHypochondriacLChange} inputRef={inputRefs[2]} 
                                        title="iii. Left hypochondriac region" expand={isCheckedPulse} ></ToggleRadio>
                          <ToggleRadio  value = {lumbarR} onChange={handleLumbarRChange} inputRef={inputRefs[3]} 
                                        title="iv. Right lumbar region" expand={isCheckedPulse} ></ToggleRadio>
                          <ToggleRadio  value = {umbilical} onChange={handleUmbilicalChange} inputRef={inputRefs[4]} 
                                        title="v. Umbilical region" expand={isCheckedPulse} ></ToggleRadio>
                          <ToggleRadio  value = {lumbarL} onChange={handleLumbarLChange} inputRef={inputRefs[5]} 
                                        title="vi. Left lumbar region" expand={isCheckedPulse} ></ToggleRadio>
                          <ToggleRadio  value = {iliacL} onChange={handleIliacLChange} inputRef={inputRefs[6]} 
                                        title="vii. Right iliac region" expand={isCheckedPulse} ></ToggleRadio>
                          <ToggleRadio  value = {hypogastric} onChange={handleHypogastricChange} inputRef={inputRefs[7]} 
                                        title="viii. Hypogastric region" expand={isCheckedPulse} ></ToggleRadio>
                          <ToggleRadio   value = {iliacR} onChange={handleIliacRChange} inputRef={inputRefs[8]} 
                                        title="ix. Left iliac region" expand={isCheckedPulse} ></ToggleRadio> 
                </div>
                  </List>
                  </div>
                  <div className="flex flex-col w-[40%] ml-[-250px] mt-[500px]">
                  {isCheckedPulseOx &&
                    <div className="ml-[80px] h-[40%]"></div>}
                    {isCheckedPulse &&
                        <img
                          style={{
                            width: "100%", // Enlarge the width of the image
                            height: "auto", // Set height to auto to maintain aspect ratio
                            paddingTop: "5px",
                            marginRight: '80px',
                          }}
                          src="images/labeledabdomen.png"
                          alt="screenshot20231"
                        />}
                    </div>
                  
              </div>
                
            </div>
          </div>

               <div className="absolute left-[1218px] top-[240px]">
               <MedTechNotes notes={note} token={props.token} proxy={props.proxy} tab="pulses" setNotes={setNotes}/>
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

export default AbdomenMedPage;