import React from "react";

import { Img, Line, List, Text, NavBar, TabNav } from "components";
import { Link } from 'react-router-dom';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { useRef, useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import axios from 'axios';
import InputAdornment from '@mui/material/InputAdornment';

const HandsMedPage = (props) => {
  const [note, setNotes] = useState();
  const [imageLoaded, setImageLoaded] = useState(false);
  const fileInputRef = useRef(null);
  const [profilePic, setProfilePic] = useState()

  const [cyanosis, setCyanosisValue] = useState("none");
  const [pallor, setPallorValue] = useState("none");
  const [capillaryrefill, setCRTValue] = useState("0");
  const [pulseox, setPulseOxValue] = useState();
  const [isChecked, setIsChecked] = useState(false);
  const [isCheckedScale, setIsCheckedScale] = useState(false);
  const [isCheckedCRT, setIsCheckedCRT] = useState(false);
  const [isCheckedPulseOx, setIsCheckedPulseOx] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };
  const handleCheckboxScaleChange = () => {
    setIsCheckedScale(!isCheckedScale);
  };
  const handleCheckboxCRTChange = () => {
    setIsCheckedCRT(!isCheckedCRT);
  };
  const handleCheckboxPulseOxChange = () => {
    setIsCheckedPulseOx(!isCheckedPulseOx);
  };
  const handleNotes = (event) => {
    setNotes(event.target.value);
}
  
  const handleCyanosisChange = (event) => {
    setCyanosisValue(event.target.value)
  }

  const handlePallorChange = (event) => {
    setPallorValue(event.target.value)
  }

  const handleCRTChange = (event) => {
    setCRTValue(event.target.value)
  }

  const handlePulseOxChange = (event) => {
    setPulseOxValue(event.target.value)
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
    formData.append('location', "/eyes/Image")
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
    data['cyanosis'] = cyanosis; 
    data['pallor'] = pallor; 
    data['capillaryrefill'] = capillaryrefill; 
    data['pulseox'] = pulseox; 
    data['hands_notes'] = note;

    console.log(data);
    axios({
     method:"POST",
     url: props.proxy + "/upload_json",
     data: {data: data, filename: '/hands/detail'},
     headers: {
       Authorization: 'Bearer ' + props.token
       }
   }).then((response) => {
     const res =response.data;
     localStorage.setItem('hands', data);
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
        className="bg-cover bg-no-repeat bg-white-A700 flex flex-col font-dmsans h-[1761px] items-center justify-start mx-auto pb-28 w-full"
        style={{ backgroundImage: "url('images/img_demographicstab.svg')" }}
      >
        <div className="flex flex-col md:gap-10 gap-[50px] items-center justify-start w-full">
        <div></div>
          <div className="flex flex-col items-start justify-start max-w-[1700px] mx-auto md:px-5 w-full">
          <TabNav tab="hands"></TabNav>
            <div className="bg-white-A700 flex flex-col font-cairo items-center justify-start p-10 sm:px-5 w-full" >
                        
                   <div style={{paddingLeft: '150px', paddingTop: '50px'}} className="flex w-full min-h-screen p-5">
      <div className="w-full max-w-md">
      
      
      <div className="absolute bg-white-A700 bottom-[8%] flex flex-col font-cairo gap-6 h-[1200px] md:h-auto inset-x-[0] justify-start max-w-[1695px] mx-auto pb-6 pt-8 px-5 rounded-bl-[12px] rounded-br-[12px] w-full">


         <div className="md:h-[1277px] sm:h-[3072px] h-[370px] relative w-[84%] md:w-full">
          {/* <div className="absolute bottom-[3%] h-[38px] right-[0] w-[10%]">
             <div className="absolute bg-black-900 h-[35px] inset-[0] justify-center m-auto shadow-bs w-full"></div>
             <Text
               className="absolute h-full inset-[0] justify-center m-auto text-white-A700 text-xl w-max"
               size="txtCairoRegular20WhiteA700"
             >
               Save
             </Text>

             
           </div>*/}
           <div className="absolute md:h-[1277px] sm:h-[3072px] h-[925px] inset-[0] justify-center m-auto w-[98%] md:w-full">
             <div className="absolute flex flex-col items-center justify-start left-[1%] top-[0] w-[92%]">
               <div className="flex md:flex-col flex-row gap-[23px] items-center justify-between w-full">
                 <div className="flex md:flex-1 flex-col md:gap-10 gap-[292px] items-end justify-start w-[79%] md:w-full">
                 <div className="flex md:flex-1 flex-col md:gap-10 gap-[292px] items-end justify-start w-[79%] md:w-full">
                   <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between w-full">
                     <div className="flex flex-col items-center justify-start md:mt-0 mt-[9px]">
                      
                     <div className="absolute top-30 right-20 w-1/2" style={{paddingLeft: '390px'}}>
 
 <div className= "flex flex-col items-start justify-start w-[400px] h-full m-[50px] mt-[80px]">

        <Text className="font-bold text-2xl text-black-900" style={{ paddingTop: "2rem" }}>Notes: </Text>
        <textarea className="w-full h-[200px] border border-gray-400 border-2 rounded-[14px] p-[10px]" 
                  placeholder="Medical Technician notes"
                  value={note}
                  onChange={(e) => setNotes(e.target.value)}></textarea>
                
                  {/*Upload Image */}
        <div style={{ paddingTop: "2rem" }}>
            <input 
                    ref={fileInputRef}
                    type="file"
                    style={{ display: 'none'}}
                    accept="image/*" // Accept only image files
                    onChange={handleImageUpload}
                  />
                  <button
  className="flex md:flex-col flex-row md:gap-5 items-center mt-2.5 w-[96%] md:w-full border-0 roundedButton"
  style={{ background: '#5974F6',  borderRadius: '20px', width: '250px'}}
  onClick={handleUploadClick}
>
  <Img
    className="h-7 md:ml-[0] ml-[0] md:mt-0 mt-1 w-7 "
    src="images/audioupload.png"
    alt="television"
  />
  <Text  style={{color: 'white' }} className="font-semibold ml-2.5 md:ml-[0] text-xl">Upload Image of Hands</Text>
</button>
                  <Img
                      className="h-[130px] md:h-auto rounded-[50%] w-[130px] md:h-auto object-cover  w-full"
                      src= {profilePic}
                      alt=""
                      onLoad ={()=> setImageLoaded(true)}
                      // style = {{display: imageLoaded? "none": "block"}}
                      />
                      
   
                      </div>  
    </div>
    <div className="absolute top-20 left-25 w-1/2" style={{paddingTop: '450px',paddingLeft: '50px'}}>
    <div className= "flex flex-col items-start justify-start w-[600px] h-full ">
    <Text className="font-bold text-2xl text-black-900">CRT and Pulse Ox References: </Text>
 <div>
 </div>
   {isCheckedCRT && (
        <div style={{ marginLeft: '10px' }}>
          {/* Your images */}
          <img
            style={{
              width: "100%", // Enlarge the width of the image
              height: "auto", // Set height to auto to maintain aspect ratio
              paddingTop: "5px",
              marginRight: '80px',

            }}
            src="images/capillaryrefill.png"
            alt="screenshot20231"
          />
         
         
        </div>
      )}
      <div style={{ marginTop: '20px' }}>
       <label>
        <input
          type="checkbox"
          className="cboxes"
          checked={isCheckedCRT}
          onChange={handleCheckboxCRTChange}
        />
        Show how to take the capillary refill time
      </label>
      </div>

      {isCheckedPulseOx && (
        <div style={{ marginLeft: '10px' }}>
          {/* Your images */}
          <img
            style={{
              width: "100%", // Enlarge the width of the image
              height: "auto", // Set height to auto to maintain aspect ratio
              paddingTop: "5px",
              marginRight: '80px',

            }}
            src="images/pulseox.png"
            alt="screenshot20231"
          />
         
         
        </div>
      )}
      <div style={{ marginTop: '60px' }}>
       <label>
        <input
          type="checkbox"
          className="cboxes"
          checked={isCheckedPulseOx}
          onChange={handleCheckboxPulseOxChange}
        />
        Show how to take the pulse ox measurement
      </label>
      </div>
    </div>
    </div>

        </div>
               
           
               {/*end */}
                       

                     </div>
                     
                   </div>
                   
                 </div>
                   </div>
                 <div className="flex flex-col md:gap-10 gap-[301px] justify-start">
                 
       
                 </div>
               </div>
             </div>
             
                        
                       <div style={{paddingLeft: '150px', }} className="flex w-full min-h-screen p-5">
      <div className="w-full max-w-md">
      <Text
                        className="sm:text-3xl md:text-[32px] text-[34px] text-gray-900_02"
                        size="txtCairoBold34"
                      >
                       Hands Inspection
                      </Text>
        <h4  style={{paddingTop: '30px', paddingBottom: '15px', fontWeight: 'bold',fontSize: '20px'}}>
            {" "}
            Check for cyanosis and pallor and classify severity: {" "}
            
         </h4>
         {/*i. Cyanosis*/}
         <FormControl value = {cyanosis}
    onChange={handleCyanosisChange}>
         <FormLabel style={{paddingBottom: '10px', paddingTop: '15px', color: 'black' , fontSize: '20px'}} id="demo-row-radio-buttons-group-label">i. Cyanosis (Bluish-purple skin color)</FormLabel>
      <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
        style={{ flexWrap: 'nowrap' }}
      >
        <FormLabel style={{paddingTop: '10px' , fontSize: '20px'}} id="demo-row-radio-buttons-group-label">None</FormLabel>
        <FormControlLabel value="0" labelPlacement="bottom" control={<Radio />} style={{ marginLeft: '15px', marginRight: '100px' }} label="0" />
        <FormControlLabel value="1" labelPlacement="bottom" control={<Radio />} style={{ marginLeft: '50px', marginRight: '100px' }} label="1" />
        <FormControlLabel value="2" labelPlacement="bottom" control={<Radio />} style={{ marginLeft: '50px', marginRight: '15px' }} label="2" />
        
  <FormLabel style={{paddingTop: '9px', fontSize: '20px' }} id="demo-row-radio-buttons-group-label">Severe</FormLabel>
      </RadioGroup>
    </FormControl>
    <div style={{
            marginLeft: '-200px',
            marginTop: '10px'
          }}>
      {isChecked && (
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px', marginLeft: '200px' }}>
          {/* Your images */}
          <img
            style={{
              width: "43%", // Set width to 100% to occupy the whole width
              height: "60%", // Set height to auto to maintain aspect ratio
              paddingTop: "0px",
              paddingBottom: "20px",
              marginLeft: '75px',
              marginRight: '3px'
           

            }}
            src="images/cyanosis1.png"
            alt="screenshot20231"
          />
          <img
            style={{
              width: "47%", // Set width to 100% to occupy the whole width
              height: "auto", // Set height to auto to maintain aspect ratio
       
              paddingBottom: "20px",
              marginRight: '3px'
            }}
            src="images/cyanosis2.png"
            alt="screenshot20231_One"
          />
          <img
            style={{
              width: "41%", // Set width to 100% to occupy the whole width
              height: "60%", // Set height to auto to maintain aspect ratio
              paddingBottom: "20px"
            }}
            src="images/cyanosis3.png"
            alt="screenshot20231_One"
          />
        </div>
      )}
       <label>
        <input
          type="checkbox"
          className="cboxes"
          checked={isChecked}
          onChange={handleCheckboxChange}
        />
        Show Reference Images for Cyanosis
      </label>
    </div>
      
       {/*ii. Pallor */}
       <FormControl value = {pallor}
    onChange={handlePallorChange}>
         <FormLabel style={{paddingBottom: '10px', paddingTop: '45px', color: 'black' , fontSize: '20px'}} id="demo-row-radio-buttons-group-label">ii. Pallor (Skin Paleness)</FormLabel>
      <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
        style={{ flexWrap: 'nowrap' }}
      >
        <FormLabel style={{paddingTop: '10px' , fontSize: '20px'}} id="demo-row-radio-buttons-group-label">None</FormLabel>
        <FormControlLabel value="0" labelPlacement="bottom" control={<Radio />} style={{ marginLeft: '15px', marginRight: '100px' }} label="0" />
        <FormControlLabel value="1" labelPlacement="bottom" control={<Radio />} style={{ marginLeft: '50px', marginRight: '100px' }} label="1" />
        <FormControlLabel value="2" labelPlacement="bottom" control={<Radio />} style={{ marginLeft: '50px', marginRight: '15px' }} label="2" />
        
  <FormLabel style={{paddingTop: '9px', fontSize: '20px' }} id="demo-row-radio-buttons-group-label">Severe</FormLabel>
      </RadioGroup>
    </FormControl>
    <div  style={{
            marginLeft: '-200px',
            marginTop: '10px'
          }}>
      {isCheckedScale && (
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px', marginLeft: '200px' }}>
          {/* Your images */}
          <img
            style={{
              width: "35%", // Set width to 100% to occupy the whole width
              height: "60%", // Set height to auto to maintain aspect ratio
              paddingTop: "15px",
              paddingBottom: "20px",
              marginLeft: '90px',
              marginRight: '55px'
           

            }}
            src="images/nopallor.png"
            alt="screenshot20231"
          />
          <img
            style={{
              width: "35%", // Set width to 100% to occupy the whole width
              height: "60%", // Set height to auto to maintain aspect ratio
       
              paddingBottom: "20px",
              marginRight: '35px'
            }}
            src="images/mildpallor.png"
            alt="screenshot20231_One"
          />
          <img
            style={{
              width: "39%", // Set width to 100% to occupy the whole width
              height: "60%", // Set height to auto to maintain aspect ratio
   
            }}
            src="images/severepallor.png"
            alt="screenshot20231_One"
          />
        </div>
      )}
       <label>
        <input
          type="checkbox"
          className="cboxes"
          checked={isCheckedScale}
          onChange={handleCheckboxScaleChange}
         
        />
        Show Reference Images for Pallor 
      </label>
    </div>

    <div style={{paddingTop: '60px'}} className="flex flex-row gap-[13px] items-center justify-between w-full" >
                    
                    <Text
                      className="text-2xl md:text-[22px] text-black-900 sm:text-xl"
                      size="txtCairoBold24"
                    >
                      Enter capillary refill time (CRT):
                    </Text>
 <TextField value = {capillaryrefill}
    onChange={handleCRTChange}
    sx={{ m: 1, width: '15ch' }}
  id="outlined-number"
  label="sec"
  type="number"
  InputLabelProps={{
    shrink: true,
  }}
/>
</div>
<div className="flex flex-row gap-[15px] items-center justify-between w-full">
<Text
   className="mt-[5px] text-2xl md:text-[22px] text-black-900 sm:text-xl"
   size="txtCairoBold24">
   Pulse Ox Measurement:
  </Text>
  <TextField
   id="outlined-start-adornment"
    sx={{ m: 1, width: '14ch' }}
   InputProps={{
   endAdornment: <InputAdornment position="end">%</InputAdornment>,
  }}
  value = {pulseox} 
  onChange={handlePulseOxChange}/>
        </div>

{/*<div style={{paddingTop: "2rem"}}>The values is {cyanosis} {pallor} {capillaryrefill}</div>*/}
<div style={{paddingTop: "2rem"}}>
      <Stack spacing={2} direction="row">
      <Button variant="contained" >Next Input</Button>
     <Link to="/legs"><Button variant="outlined" onClick={(e) => handleSave(e)} >Save</Button>   </Link>
   </Stack>
   </div>   
   
         {/* </div>*/}
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

export default HandsMedPage;