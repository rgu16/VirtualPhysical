import React from "react";


import { Img, Line, List, Text, NavBar, TabNav } from "components";
import { Link } from 'react-router-dom';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { useState } from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import axios from 'axios';


const AbdomenMedPage= (props) => {
  const [hypochonriacL, setHypochonriacLValue] = useState("none");
 const [epigastric, setEpigastricValue] = useState("none");
 const [hypochonriacR, setHypochonriacRValue] = useState("none");

 const [lumbarL, setLumbarLValue] = useState("none");
 const [umbilical, setUmbilicalValue] = useState("none");
 const [lumbarR, setLumbarRValue] = useState("none");
 
 const [iliacL, setIliacLValue] = useState("none");
 const [hypogastric, setHypogastricValue] = useState("none");
 const [iliacR, setIliacRValue] = useState("none");


 const handleHypochonriacLChange = (event) => {
  setHypochonriacLValue(event.target.value)
}

 const handleEpigastricChange = (event) => {
   setEpigastricValue(event.target.value)
 }

 const handleHypochonriacRChange = (event) => {
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
   data['hypochonriacL'] = hypochonriacL;
   data['epigastric'] = epigastric;
   data['hypochonriacR'] = hypochonriacR;

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


 return (
   <>
   <NavBar proxy={props.proxy} token={props.token} />
     <div
       className="bg-cover bg-no-repeat bg-white-A700 flex flex-col font-dmsans h-[1561px] items-center justify-start mx-auto pb-28 w-full"
       style={{ backgroundImage: "url('images/img_demographicstab.svg')" }}
     >
       <div className="flex flex-col md:gap-10 gap-[50px] items-center justify-start w-full">
         <div></div>
         <div className="flex flex-col items-start justify-start max-w-[1700px] mx-auto md:px-5 w-full">
           <TabNav tab="abdomen"></TabNav>
           <div className="bg-white-A700 flex flex-col font-cairo items-center justify-start p-10 sm:px-5 w-full" >
                      
                  <div style={{paddingLeft: '150px', paddingTop: '50px'}} className="flex w-full min-h-screen p-5">
     <div className="w-full max-w-md">
    
    
     <div className="absolute bg-white-A700 bottom-[8%] flex flex-col font-cairo gap-6 h-[1000px] md:h-auto inset-x-[0] justify-start max-w-[1695px] mx-auto pb-6 pt-8 px-5 rounded-bl-[12px] rounded-br-[12px] w-full">




        <div className="md:h-[1277px] sm:h-[3072px] h-[370px] relative w-[84%] md:w-full">
          <div className="absolute bottom-[3%] h-[38px] right-[0] w-[10%]">
   
          </div>
          <div className="absolute md:h-[1277px] sm:h-[3072px] h-[925px] inset-[0] justify-center m-auto w-[98%] md:w-full">
            <div className="absolute flex flex-col items-center justify-start left-[1%] top-[0] w-[92%]">
              <div className="flex md:flex-col flex-row gap-[23px] items-center justify-between w-full">
                <div className="flex md:flex-1 flex-col md:gap-10 gap-[292px] items-end justify-start w-[79%] md:w-full">
                  <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between w-full">
                    <div className="flex flex-col items-center justify-start md:mt-0 mt-[9px]">
                      {/*<Text
                        className="text-2xl md:text-[22px] text-black-900 sm:text-xl"
                        size="txtCairoBold24"
                      >
                        Feel for tenderness and input grading for each region:{" "}
 </Text>*/}
                     


                    </div>
            
                    <Img
                      className="h-[43px] w-[43px]"
                      src="images/img_profile_black_900.svg"
                      alt="profile"
                    />
                  </div>
                  <Img
                    className="h-[43px] w-[43px]"
                    src="images/img_profile_black_900.svg"
                    alt="profile_One"
                  />
                </div>
                <div className="flex flex-col md:gap-10 gap-[301px] justify-start">
                  <Text
                    className="md:ml-[0] ml-[18px] text-2xl md:text-[22px] text-black-900 sm:text-xl"
                    size="txtCairoBold24"
                  >
                    {" "}
                    How to score{" "}
                  </Text>
                  <Text
                    className="text-2xl md:text-[22px] text-black-900 sm:text-xl"
                    size="txtCairoBold24"
                  >
                    {" "}
                    Location of each region{" "}
                  </Text>
                </div>
              </div>
            </div>
            <Img
              className="absolute h-[199px] object-cover right-[3%] top-[6%] w-[27%]"
              src="images/img_screenshot20231206_199x360.png"
              alt="screenshot20231"
            />
            <Img
              className="absolute bottom-[17%] h-[364px] object-cover right-[0] w-[31%]"
              src="images/img_screenshot20231206_364x409.png"
              alt="screenshot20231_One"
            />
            {/*  <div className="absolute bottom-[0] flex flex-col items-center justify-start left-[0] w-[47%]">*/}
             {/*   <div className="flex flex-col items-center justify-start w-full">*/}
                 {/* <div className="flex flex-col items-center justify-end w-full">*/}
                  {/* <div className="flex flex-col items-end justify-end pb-[38px] sm:pl-5 pl-[38px] w-full">*/}
                   {/* <div className="flex sm:flex-col flex-row sm:gap-10 gap-[85px] items-start justify-end w-[99%] md:w-full">*/}
                      {/*<div className="flex flex-col gap-[47px] items-center justify-start sm:mt-0 mt-10 w-4/5 sm:w-full">*/}
                      
                      <div style={{paddingLeft: '150px', }} className="flex w-full min-h-screen p-5">
     <div className="w-full max-w-md">
     <Text
                       className="sm:text-3xl md:text-[32px] text-[34px] text-gray-900_02"
                       size="txtCairoBold34"
                     >
                      Abdomen Palpation
                     </Text>
       <h4  style={{paddingTop: '30px', paddingBottom: '15px', fontWeight: 'bold',fontSize: '19px'}}>
           {" "}
           Feel for tenderness and input grading for each region: {" "}
          
        </h4>
        {/*i. Right hypochondriac region */}
        <FormControl value = {hypochonriacR}
   onChange={handleHypochonriacRChange}>
        <FormLabel style={{paddingBottom: '10px', paddingTop: '15px', color: 'black' }} id="demo-row-radio-buttons-group-label">i. Right hypochondriac region</FormLabel>
     <RadioGroup
       row
       aria-labelledby="demo-row-radio-buttons-group-label"
       name="row-radio-buttons-group"
     >
       <FormLabel style={{paddingTop: '10px' , fontSize: '14px'}} id="demo-row-radio-buttons-group-label">None</FormLabel>
       <FormControlLabel value="0" labelPlacement="bottom" control={<Radio />} label="0" />
       <FormControlLabel value="1" labelPlacement="bottom" control={<Radio />} label="1" />
       <FormControlLabel value="2" labelPlacement="bottom" control={<Radio />} label="2" />
       <FormControlLabel value="3" labelPlacement="bottom" control={<Radio />} label="3" />
       <FormControlLabel value="4" labelPlacement="bottom" control={<Radio />} label="4" />
      
 <FormLabel style={{paddingTop: '10px', fontSize: '14px' }} id="demo-row-radio-buttons-group-label">Severe</FormLabel>
     </RadioGroup>
   </FormControl>
    
      {/*ii. Epigastric hypochondriac region */}
      <FormControl value = {epigastric}
   onChange={handleEpigastricChange}>
        <FormLabel style={{paddingBottom: '10px', paddingTop: '45px', color: 'black' }} id="demo-row-radio-buttons-group-label">ii. Epigastric region</FormLabel>
     <RadioGroup
       row
       aria-labelledby="demo-row-radio-buttons-group-label"
       name="row-radio-buttons-group"
     >
       <FormLabel style={{paddingTop: '10px' , fontSize: '14px'}} id="demo-row-radio-buttons-group-label">None</FormLabel>
       <FormControlLabel value="0" labelPlacement="bottom" control={<Radio />} label="0" />
       <FormControlLabel value="1" labelPlacement="bottom" control={<Radio />} label="1" />
       <FormControlLabel value="2" labelPlacement="bottom" control={<Radio />} label="2" />
       <FormControlLabel value="3" labelPlacement="bottom" control={<Radio />} label="3" />
       <FormControlLabel value="4" labelPlacement="bottom" control={<Radio />} label="4" />
      
 <FormLabel style={{paddingTop: '10px', fontSize: '14px' }} id="demo-row-radio-buttons-group-label">Severe</FormLabel>
     </RadioGroup>
   </FormControl>


    {/*iii. Left hypochondriac region */}
    <FormControl value = {hypochonriacL}
   onChange={handleHypochonriacLChange}>
        <FormLabel style={{paddingBottom: '10px', paddingTop: '45px', color: 'black' }} id="demo-row-radio-buttons-group-label">iii. Left hypochondriac region</FormLabel>
     <RadioGroup
       row
       aria-labelledby="demo-row-radio-buttons-group-label"
       name="row-radio-buttons-group"
     >
       <FormLabel style={{paddingTop: '10px' , fontSize: '14px'}} id="demo-row-radio-buttons-group-label">None</FormLabel>
       <FormControlLabel value="0" labelPlacement="bottom" control={<Radio />} label="0" />
       <FormControlLabel value="1" labelPlacement="bottom" control={<Radio />} label="1" />
       <FormControlLabel value="2" labelPlacement="bottom" control={<Radio />} label="2" />
       <FormControlLabel value="3" labelPlacement="bottom" control={<Radio />} label="3" />
       <FormControlLabel value="4" labelPlacement="bottom" control={<Radio />} label="4" />
      
 <FormLabel style={{paddingTop: '10px', fontSize: '14px' }} id="demo-row-radio-buttons-group-label">Severe</FormLabel>
     </RadioGroup>
   </FormControl>


   {/*iv. Right lumbar region */}
   <FormControl value = {lumbarR}
   onChange={handleLumbarRChange}>
        <FormLabel style={{paddingBottom: '10px', paddingTop: '45px', color: 'black' }} id="demo-row-radio-buttons-group-label">iv. Right lumbar region</FormLabel>
     <RadioGroup
       row
       aria-labelledby="demo-row-radio-buttons-group-label"
       name="row-radio-buttons-group"
     >
       <FormLabel style={{paddingTop: '10px' , fontSize: '14px'}} id="demo-row-radio-buttons-group-label">None</FormLabel>
       <FormControlLabel value="0" labelPlacement="bottom" control={<Radio />} label="0" />
       <FormControlLabel value="1" labelPlacement="bottom" control={<Radio />} label="1" />
       <FormControlLabel value="2" labelPlacement="bottom" control={<Radio />} label="2" />
       <FormControlLabel value="3" labelPlacement="bottom" control={<Radio />} label="3" />
       <FormControlLabel value="4" labelPlacement="bottom" control={<Radio />} label="4" />
      
 <FormLabel style={{paddingTop: '10px', fontSize: '14px' }} id="demo-row-radio-buttons-group-label">Severe</FormLabel>
     </RadioGroup>
   </FormControl>


   {/*v. Umbilical region */}
   <FormControl value = {umbilical}
   onChange={handleUmbilicalChange}>
        <FormLabel style={{paddingBottom: '10px', paddingTop: '45px', color: 'black' }} id="demo-row-radio-buttons-group-label">v. Umbilical region</FormLabel>
     <RadioGroup
       row
       aria-labelledby="demo-row-radio-buttons-group-label"
       name="row-radio-buttons-group"
     >
       <FormLabel style={{paddingTop: '10px' , fontSize: '14px'}} id="demo-row-radio-buttons-group-label">None</FormLabel>
       <FormControlLabel value="0" labelPlacement="bottom" control={<Radio />} label="0" />
       <FormControlLabel value="1" labelPlacement="bottom" control={<Radio />} label="1" />
       <FormControlLabel value="2" labelPlacement="bottom" control={<Radio />} label="2" />
       <FormControlLabel value="3" labelPlacement="bottom" control={<Radio />} label="3" />
       <FormControlLabel value="4" labelPlacement="bottom" control={<Radio />} label="4" />
      
 <FormLabel style={{paddingTop: '10px', fontSize: '14px' }} id="demo-row-radio-buttons-group-label">Severe</FormLabel>
     </RadioGroup>
   </FormControl>


   {/*vi. Left lumbar region */}
   <FormControl value = {lumbarL}
   onChange={handleLumbarLChange}>
        <FormLabel style={{paddingBottom: '10px', paddingTop: '45px', color: 'black' }} id="demo-row-radio-buttons-group-label">v. Left lumbar region </FormLabel>
     <RadioGroup
       row
       aria-labelledby="demo-row-radio-buttons-group-label"
       name="row-radio-buttons-group"
     >
       <FormLabel style={{paddingTop: '10px' , fontSize: '14px'}} id="demo-row-radio-buttons-group-label">None</FormLabel>
       <FormControlLabel value="0" labelPlacement="bottom" control={<Radio />} label="0" />
       <FormControlLabel value="1" labelPlacement="bottom" control={<Radio />} label="1" />
       <FormControlLabel value="2" labelPlacement="bottom" control={<Radio />} label="2" />
       <FormControlLabel value="3" labelPlacement="bottom" control={<Radio />} label="3" />
       <FormControlLabel value="4" labelPlacement="bottom" control={<Radio />} label="4" />
      
 <FormLabel style={{paddingTop: '10px', fontSize: '14px' }} id="demo-row-radio-buttons-group-label">Severe</FormLabel>
     </RadioGroup>
   </FormControl>


   {/*vii. Iliac L region */}
   <FormControl value = {iliacL}
   onChange={handleIliacLChange}>
        <FormLabel style={{paddingBottom: '10px', paddingTop: '45px', color: 'black' }} id="demo-row-radio-buttons-group-label">v. Umbilical region</FormLabel>
     <RadioGroup
       row
       aria-labelledby="demo-row-radio-buttons-group-label"
       name="row-radio-buttons-group"
     >
       <FormLabel style={{paddingTop: '10px' , fontSize: '14px'}} id="demo-row-radio-buttons-group-label">None</FormLabel>
       <FormControlLabel value="0" labelPlacement="bottom" control={<Radio />} label="0" />
       <FormControlLabel value="1" labelPlacement="bottom" control={<Radio />} label="1" />
       <FormControlLabel value="2" labelPlacement="bottom" control={<Radio />} label="2" />
       <FormControlLabel value="3" labelPlacement="bottom" control={<Radio />} label="3" />
       <FormControlLabel value="4" labelPlacement="bottom" control={<Radio />} label="4" />
      
 <FormLabel style={{paddingTop: '10px', fontSize: '14px' }} id="demo-row-radio-buttons-group-label">Severe</FormLabel>
     </RadioGroup>
   </FormControl>


   {/*viii. Hypogastric region */}
   <FormControl value = {hypogastric}
   onChange={handleHypogastricChange}>
        <FormLabel style={{paddingBottom: '10px', paddingTop: '45px', color: 'black' }} id="demo-row-radio-buttons-group-label">v. Umbilical region</FormLabel>
     <RadioGroup
       row
       aria-labelledby="demo-row-radio-buttons-group-label"
       name="row-radio-buttons-group"
     >
       <FormLabel style={{paddingTop: '10px' , fontSize: '14px'}} id="demo-row-radio-buttons-group-label">None</FormLabel>
       <FormControlLabel value="0" labelPlacement="bottom" control={<Radio />} label="0" />
       <FormControlLabel value="1" labelPlacement="bottom" control={<Radio />} label="1" />
       <FormControlLabel value="2" labelPlacement="bottom" control={<Radio />} label="2" />
       <FormControlLabel value="3" labelPlacement="bottom" control={<Radio />} label="3" />
       <FormControlLabel value="4" labelPlacement="bottom" control={<Radio />} label="4" />
      
 <FormLabel style={{paddingTop: '10px', fontSize: '14px' }} id="demo-row-radio-buttons-group-label">Severe</FormLabel>
     </RadioGroup>
   </FormControl>


   {/*ix. Iliac R region */}
   <FormControl value = {iliacR}
   onChange={handleIliacRChange}>
        <FormLabel style={{paddingBottom: '10px', paddingTop: '45px', color: 'black' }} id="demo-row-radio-buttons-group-label">v. Umbilical region</FormLabel>
     <RadioGroup
       row
       aria-labelledby="demo-row-radio-buttons-group-label"
       name="row-radio-buttons-group"
     >
       <FormLabel style={{paddingTop: '10px' , fontSize: '14px'}} id="demo-row-radio-buttons-group-label">None</FormLabel>
       <FormControlLabel value="0" labelPlacement="bottom" control={<Radio />} label="0" />
       <FormControlLabel value="1" labelPlacement="bottom" control={<Radio />} label="1" />
       <FormControlLabel value="2" labelPlacement="bottom" control={<Radio />} label="2" />
       <FormControlLabel value="3" labelPlacement="bottom" control={<Radio />} label="3" />
       <FormControlLabel value="4" labelPlacement="bottom" control={<Radio />} label="4" />
      
 <FormLabel style={{paddingTop: '10px', fontSize: '14px' }} id="demo-row-radio-buttons-group-label">Severe</FormLabel>
     </RadioGroup>
   </FormControl>



   {/*<div style={{paddingTop: "2rem"}}>The values is {hypochonriacR} {epigastric} {hypochonriacL} {lumbarR} {umbilical} {lumbarL}</div>  */}
   <div style={{paddingTop: "2rem"}}>
     <Stack spacing={2} direction="row">
     <Button variant="contained" >Next Input</Button>
   <Button variant="outlined" onClick={(e) => handleSave(e)}>Save</Button>
  </Stack>
  </div>   
   {/* </div>*/}     
                       {/* </div>*/}
                    {/* </div>*/}
                   {/*</div>*/}
               {/*</div>*/}
              </div>
            </div>
          </div>
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

export default AbdomenMedPage;