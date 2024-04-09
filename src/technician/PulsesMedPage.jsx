import React from "react";


import {Img, Line, List, Text, NavBar, TabNav } from "components";
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import { Link } from 'react-router-dom';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { useRef,  useState } from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import axios from 'axios';
import CarotidPopover from "components/CarotidPopover/CarotidUpload.js"

const PulsesMedPage = (props) => {
 const [isHoveredOne, setIsHoveredOne] = useState(false);
 const [isHoveredTwo, setIsHoveredTwo] = useState(false);
 const [isHoveredThree, setIsHoveredThree] = useState(false);
 const [radial, setRadialValue] = useState("none");
 const [brachial, setBrachialValue] = useState("none");
 const [carotid, setCarotidValue] = useState("none");
 const [pedis, setPedisValue] = useState("none");
 const [systolic, setSystolicValue] = useState();
 const [diastolic, setDiastolicValue] = useState();
 const [jvp, setJVPValue] = useState();
 const [heartrate, setHeartRateValue] = useState();
 const [isCheckedCRT, setIsCheckedCRT] = useState(false);
 const [isCheckedPulseOx, setIsCheckedPulseOx] = useState(false);
 const [isCheckedThrills, setIsCheckedThrills] = useState(false);

 const handleRadialChange = (event) => {
   setRadialValue(event.target.value)
 }


 const handleBrachialChange = (event) => {
   setBrachialValue(event.target.value)
 }


 const handleCarotidChange = (event) => {
   setCarotidValue(event.target.value)
 }


 const handlePedisChange = (event) => {
   setPedisValue(event.target.value)
 }

 const handleSystolicChange = (event) => {
  setSystolicValue(event.target.value)
}

const handleDiastolicChange = (event) => {
  setDiastolicValue(event.target.value)
}

const handleJVPChange = (event) => {
  setJVPValue(event.target.value)
}

const handleHeartRateChange = (event) => {
  setHeartRateValue(event.target.value)
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

   console.log(data);
   axios({
    method:"POST",
    url: props.proxy + "/upload_json",
    data: {data: data, filename: '/pulses/detail'},
    headers: {
      Authorization: 'Bearer ' + props.token
      }
  }).then((response) => {
    const res =response.data;
    localStorage.setItem('pulses', data);
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
   useRef(null),
   // Add more refs for additional radio buttons as needed
 ];


 const [selectedOptionIndex, setSelectedOptionIndex] = useState(0);


 const handleRadioChange = (index) => {
   setSelectedOptionIndex(index);
 };


 const handleClick = () => {
   // Check the next FormControlLabel and uncheck the previous one
   const nextIndex = (selectedOptionIndex + 1) % inputRefs.length;


   // Uncheck the previous FormControlLabel
   if (selectedOptionIndex !== null && inputRefs[selectedOptionIndex]?.current) {
     inputRefs[selectedOptionIndex].current.checked = false;
   }


   // Check the next FormControlLabel
   if (inputRefs[nextIndex]?.current) {
     inputRefs[nextIndex].current.checked = true;
     setSelectedOptionIndex(nextIndex);
   }
 };


 const [profilePic, setProfilePic] = useState()
 const fileInputRef = useRef(null);
 const [imageLoaded, setImageLoaded] = useState(false);
 const handleUploadClick = () => {
   fileInputRef.current.click();
 };
  const handleImageUpload = (e) => {
   e.preventDefault();
   const file = e.target.files[0];
   setProfilePic(URL.createObjectURL(file))
   if (!file) {
       console.error('No file selected.');
       return;
   }
   const formData = new FormData();
   formData.append('file', file, file.name);
   formData.append('location', "/pulses/image")
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
  return (
   <>
   <NavBar proxy={props.proxy} token={props.token} />
     <div
       className="bg-cover bg-no-repeat bg-white-A700 flex flex-col font-dmsans h-[2180px] items-center justify-start mx-auto pb-28 w-full"
       style={{ backgroundImage: "url('images/img_demographicstab.svg')" }}
     >
       <div className="flex flex-col md:gap-10 gap-[50px] items-center justify-start w-full">
       <div></div>
         <div className="flex flex-col items-start justify-start max-w-[1700px] mx-auto md:px-5 w-full">
         <TabNav tab="pulses"></TabNav>
           <div className="bg-white-A700 flex flex-col font-cairo items-center justify-start p-10 sm:px-5 w-full" >
                      
                  <div style={{paddingLeft: '150px', paddingTop: '50px'}} className="flex w-full min-h-screen p-5">
     <div className="w-full max-w-md">
    
    
     <div className="absolute bg-white-A700 bottom-[8%] flex flex-col font-cairo gap-6 h-[1580px] md:h-auto inset-x-[0] justify-start max-w-[1695px] mx-auto pb-6 pt-8 px-5 rounded-bl-[12px] rounded-br-[12px] w-full">




        <div className="md:h-[1277px] sm:h-[3072px] h-[390px] relative w-[84%] md:w-full">
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
                    <div className="absolute top-0 left-20 w-1/2" style={{paddingTop: '50px',paddingLeft: '900px'}}>
    <div className= "flex flex-col items-start justify-start w-[600px] h-full ">
    <Text className="font-bold text-2xl text-black-900">References: </Text>
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
            src="images/bloodpressure.png"
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
        Show how to measure systolic and diastolic blood pressure
      </label>
      </div>

      {isCheckedPulseOx && (
        <div style={{ marginLeft: '10px' }}>
          {/* Your images */}
          <img
            style={{
              width: "75%", // Enlarge the width of the image
              height: "auto", // Set height to auto to maintain aspect ratio
              paddingTop: "30px",
              marginRight: '80px',

            }}
            src="images/jvp.png"
            alt="screenshot20231"
          />
         
         
        </div>
      )}
      <div style={{ marginTop: '150px' }}>
       <label>
        <input
          type="checkbox"
          className="cboxes"
          checked={isCheckedPulseOx}
          onChange={handleCheckboxPulseOxChange}
        />
        Show how to measure jugular venous pressure (JVP)
      </label>
      </div>

      {isCheckedThrills && (
        <div style={{ marginLeft: '10px' }}>
          {/* Your images */}
          <img
            style={{
              width: "70%", // Enlarge the width of the image
              height: "auto", // Set height to auto to maintain aspect ratio
              paddingTop: "30px",
              marginRight: '80px',

            }}
            src="images/bpm.png"
            alt="screenshot20231"
          />
         
         
        </div>
      )}
      <div style={{ marginTop: '50px' }}>
       <label>
        <input
          type="checkbox"
          className="cboxes"
          checked={isCheckedThrills}
          onChange={handleCheckboxThrillsChange}
        />
        Show how to measure heart rate using pulse ox
      </label>
      </div>

    </div>
    </div>
                     


                    </div> 
                  </div>
                </div>
                  </div>
                <div className="flex flex-col md:gap-10 gap-[301px] justify-start">
                
                </div>
              </div>
            </div>
          
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
                      Pulses and Blood Pressure
                     </Text>
                     <div className="flex flex-row gap-[15px] items-center justify-between w-full">
                             <Text
                               className="mt-[5px] text-2xl md:text-[22px] text-black-900 sm:text-xl"
                               size="txtCairoBold24">
                               Systolic Blood Pressure:
                             </Text>
                            <TextField
                              id="outlined-start-adornment"
                              sx={{ m: 1, width: '20ch', paddingBottom: '10px' }}
                              InputProps={{
                                endAdornment: <InputAdornment position="end">mmHg</InputAdornment>,
                              }}
                              value = {systolic} 
                              onChange={handleSystolicChange}/>
                          </div>
                          <div className="flex flex-row gap-[15px] items-center justify-between w-full">
                             <Text
                               className="mt-[5px] text-2xl md:text-[22px] text-black-900 sm:text-xl"
                               size="txtCairoBold24">
                               Diastolic Blood Pressure:
                             </Text>
                            <TextField
                              id="outlined-start-adornment"
                              sx={{ m: 1, width: '20ch' , paddingBottom: '10px'}}
                              InputProps={{
                                endAdornment: <InputAdornment position="end">mmHg</InputAdornment>,
                              }}
                              value = {diastolic} 
                              onChange={handleDiastolicChange}/>
                          </div>
                          <div className="flex flex-row gap-[15px] items-center justify-between w-full">
                             <Text
                               className="mt-[5px] text-2xl md:text-[22px] text-black-900 sm:text-xl"
                               size="txtCairoBold24">
                               Jugular venous pressure (JVP):
                             </Text>
                            <TextField
                              id="outlined-start-adornment"
                              sx={{ m: 1, width: '25ch' , paddingBottom: '10px'}}
                              InputProps={{
                                endAdornment: <InputAdornment position="end">mmHg</InputAdornment>,
                              }}
                              value = {jvp} 
                              onChange={handleJVPChange}/>
                          </div>
                          <div className="flex flex-row gap-[15px] items-center justify-between w-full">
                             <Text
                               className="mt-[5px] text-2xl md:text-[22px] text-black-900 sm:text-xl"
                               size="txtCairoBold24">
                               Heart Rate:
                             </Text>
                            <TextField
                              id="outlined-start-adornment"
                              sx={{ m: 1, width: '20ch' }}
                              InputProps={{
                                endAdornment: <InputAdornment position="end">BPM</InputAdornment>,
                              }}
                              value = {heartrate} 
                              onChange={handleHeartRateChange}/>
                          </div>
      
      
      
       <h4  style={{paddingTop: '30px', paddingBottom: '15px', fontWeight: 'bold',fontSize: '20px'}}>
           {" "}
           Check pulses at extremities and classify strength on 0-2 scale: {" "}
          
        </h4>
        {/*i. Radial pulse (wrist) */}
        <FormControl  value = {radial}
       onChange={handleRadialChange}
       >
        <FormLabel style={{paddingBottom: '10px', paddingTop: '15px', color: 'black' , fontSize: '20px'}} id="demo-row-radio-buttons-group-label">i. Radial pulse (wrist)</FormLabel>
     <RadioGroup
       row
       aria-labelledby="demo-row-radio-buttons-group-label"
       name="row-radio-buttons-group"
     >
       <FormLabel style={{paddingTop: '10px' , fontSize: '20px'}} id="demo-row-radio-buttons-group-label">None</FormLabel>
       <FormControlLabel value="0" labelPlacement="bottom" control={<Radio />} label="0" />
       <FormControlLabel value="1" labelPlacement="bottom" control={<Radio />} label="1" />
       <FormControlLabel value="2" labelPlacement="bottom" control={<Radio />} label="2" />
      
 <FormLabel style={{paddingTop: '9px', fontSize: '20px' }} id="demo-row-radio-buttons-group-label">Severe</FormLabel>
     </RadioGroup>
   </FormControl>
    
      {/*ii. Brachial */}
      <FormControl value = {brachial}
       onChange={handleBrachialChange} >
        <FormLabel style={{paddingBottom: '10px', paddingTop: '45px', color: 'black' , fontSize: '20px'}} id="demo-row-radio-buttons-group-label">ii. Brachial</FormLabel>
     <RadioGroup
       row
       aria-labelledby="demo-row-radio-buttons-group-label"
       name="row-radio-buttons-group"
     >
       <FormLabel style={{paddingTop: '10px' , fontSize: '20px'}} id="demo-row-radio-buttons-group-label">None</FormLabel>
       <FormControlLabel value="0" labelPlacement="bottom" control={<Radio />} label="0" />
       <FormControlLabel value="1" labelPlacement="bottom" control={<Radio />} label="1" />
       <FormControlLabel value="2" labelPlacement="bottom" control={<Radio />} label="2" />
      
 <FormLabel style={{paddingTop: '9px', fontSize: '20px' }} id="demo-row-radio-buttons-group-label">Severe</FormLabel>
     </RadioGroup>
   </FormControl>


    {/*iii. Carotid */}
    <FormControl value = {carotid}
     onChange={handleCarotidChange} >
        <FormLabel style={{paddingBottom: '10px', paddingTop: '45px', color: 'black', fontSize: '20px'}} id="demo-row-radio-buttons-group-label">iii. Carotid</FormLabel>
     <RadioGroup
       row
       aria-labelledby="demo-row-radio-buttons-group-label"
       name="row-radio-buttons-group"
     >
       <FormLabel style={{paddingTop: '10px' , fontSize: '20px'}} id="demo-row-radio-buttons-group-label">None</FormLabel>
       <FormControlLabel value="0" labelPlacement="bottom" control={<Radio />} label="0" />
       <FormControlLabel value="1" labelPlacement="bottom" control={<Radio />} label="1" />
       <FormControlLabel value="2" labelPlacement="bottom" control={<Radio />} label="2" />
      
 <FormLabel style={{paddingTop: '9px', fontSize: '20px' }} id="demo-row-radio-buttons-group-label">Severe</FormLabel>
     </RadioGroup>
   </FormControl>


   {/*iv. Right lumbar region */}
   <FormControl  value = {pedis}
   onChange={handlePedisChange} >
        <FormLabel style={{paddingBottom: '10px', paddingTop: '45px', color: 'black', fontSize: '20px' }} id="demo-row-radio-buttons-group-label">iv. Dorsalis pedis pulse (foot) </FormLabel>
     <RadioGroup
       row
       aria-labelledby="demo-row-radio-buttons-group-label"
       name="row-radio-buttons-group"
     >
       <FormLabel style={{paddingTop: '10px' , fontSize: '20px'}} id="demo-row-radio-buttons-group-label">None</FormLabel>
       <FormControlLabel value="0" labelPlacement="bottom" control={<Radio />} label="0" />
       <FormControlLabel value="1" labelPlacement="bottom" control={<Radio />} label="1" />
       <FormControlLabel value="2" labelPlacement="bottom" control={<Radio />} label="2" />
      
 <FormLabel style={{paddingTop: '9px', fontSize: '20px' }} id="demo-row-radio-buttons-group-label">Severe</FormLabel>
     </RadioGroup>
   </FormControl>
   {/*<div style={{paddingTop: "2rem"}}>The values is {radial} {brachial} {carotid} {pedis}</div>*/}
  {/*  <Button onClick={handleClick}>Focus next radio button</Button>*/}
  <h4  style={{paddingTop: '30px', paddingBottom: '15px', fontWeight: 'bold',fontSize: '20px'}}>
           {" "}
           Auscultate the carotid pulse using the bell of the stethoscope {" "}
          
        </h4>
       
 <div className="pulses-tab"  >
        {/*<div className="overlap">*/}
          {/*<div className="overlap-group">*/}
           
            <div className="popover" >

              <div className="carotidpopover">
                <CarotidPopover proxy={props.proxy} token={props.token}></CarotidPopover>
              </div>                      

            </div>
            <img  
              className="carotid-img"
              alt="carotidimg"
              src="https://cdn.animaapp.com/projects/65a945881c395bf52b1e3e78/releases/65a9e82814bc0dc531a973f2/img/carotid-img-1@2x.png"
            />
            <p className="carotid-auscultation">
              <span className="text-wrapper-2">Carotid Auscultation</span>
            </p>
            <div className="pulse">
            </div>
   
           {/*</div>*/}

       {/* </div>*/}

    </div>

   <div style={{paddingTop: "28rem"}}>
     <Stack spacing={2} direction="row">
     <Button variant="contained" >Next Input</Button>
    <Link to="/abdomen"><Button variant="outlined" onClick={(e) => handleSave(e)}>Save</Button>   </Link>
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


export default PulsesMedPage;
