import React from "react";

import {Img, Line, List, Text, NavBar, TabNav } from "components";
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

const PulsesMedPage = (props) => {
  const [isHoveredOne, setIsHoveredOne] = useState(false);
  const [isHoveredTwo, setIsHoveredTwo] = useState(false);
  const [isHoveredThree, setIsHoveredThree] = useState(false);
  const [radial, setRadialValue] = useState();
  const [brachial, setBrachialValue] = useState();
  const [carotid, setCarotidValue] = useState();
  const [pedis, setPedisValue] = useState();

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
        className="bg-cover bg-no-repeat bg-white-A700 flex flex-col font-dmsans h-[1561px] items-center justify-start mx-auto pb-28 w-full"
        style={{ backgroundImage: "url('images/img_demographicstab.svg')" }}
      >
        <div className="flex flex-col md:gap-10 gap-[50px] items-center justify-start w-full">
        <div></div>
          <div className="flex flex-col items-start justify-start max-w-[1700px] mx-auto md:px-5 w-full">
          <TabNav tab="pulses"></TabNav>
            <div className="bg-white-A700 flex flex-col font-cairo items-center justify-start p-10 sm:px-5 w-full" >
                        
                   <div style={{paddingLeft: '150px', paddingTop: '50px'}} className="flex w-full min-h-screen p-5">
      <div className="w-full max-w-md">
      
      
      <div className="absolute bg-white-A700 bottom-[8%] flex flex-col font-cairo gap-6 h-[1000px] md:h-auto inset-x-[0] justify-start max-w-[1695px] mx-auto pb-6 pt-8 px-5 rounded-bl-[12px] rounded-br-[12px] w-full">


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
                       {/*<Text
                         className="text-2xl md:text-[22px] text-black-900 sm:text-xl"
                         size="txtCairoBold24"
                       >
                         Feel for tenderness and input grading for each region:{" "}
  </Text>*/}
                       

                     </div>
              
                     <Img onMouseEnter={() => setIsHoveredOne(true)}
                      onMouseLeave={() => setIsHoveredOne(false)}
                       className="h-[43px] w-[43px]"
                       src="images/img_profile_black_900.svg"
                       alt="profile"
                     />
                     
                   </div>
                   
                   <Img onMouseEnter={() => setIsHoveredTwo(true)}
                    onMouseLeave={() => setIsHoveredTwo(false)}
                     className="h-[43px] w-[43px]"
                     src="images/img_profile_black_900.svg"
                     alt="profile_One"
                   />
                 </div>
                 <Img onMouseEnter={() => setIsHoveredThree(true)}
                     onMouseLeave={() => setIsHoveredThree(false)}
                     className="h-[43px] w-[43px]"
                     src="images/img_profile_black_900.svg"
                     alt="profile_One"
                   />
                   </div>
                 <div className="flex flex-col md:gap-10 gap-[301px] justify-start">
                  
                 </div>
               </div>
             </div>
             <Img 
              style = {{ opacity: isHoveredOne ? 1 : 0, // Show the image if hovered, otherwise hide
              transition: 'opacity 0.3s ease', }} // Add a smooth transition effect
               className="absolute h-[300px] object-cover left-[75%] w-[27%]"
               src="images/radial.png"
               alt="screenshot20231"
             />
             <Img  style = {{width: '370px', height: '320px', opacity: isHoveredTwo ? 1 : 0, // Show the image if hovered, otherwise hide
              transition: 'opacity 0.3s ease', }} 
               className="absolute bottom-[17%] h-[364px] object-cover bottom-[28%] left-[74%] w-[35%]"
               src="images/brachialpulse.png"
               alt="screenshot20231_One"
             
             />
            
             <Img style = {{width: '380px', height: '280px', opacity: isHoveredThree ? 1 : 0, // Show the image if hovered, otherwise hide
              transition: 'opacity 0.3s ease', }} 
               className="absolute bottom-[17%] h-[364px] object-cover top-[76%] left-[76%] w-[31%]"
               src="images/carotidpulse.png"
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
                       Pulses and Blood Pressure
                      </Text>
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
        <FormControlLabel onChange={() => handleRadioChange(0) }
        control={<Radio inputRef={inputRefs[0]} checked={selectedOptionIndex === 0} />}
        label="0"  value={'zero'} labelPlacement="bottom"  />
        <FormControlLabel value="one" labelPlacement="bottom" control={<Radio />} label="1" />
        <FormControlLabel value="two" labelPlacement="bottom" control={<Radio />} label="2" />
        
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
        <FormControlLabel value={`zero-1`}
            labelPlacement="bottom"
            control={<Radio inputRef={inputRefs[1]} checked={selectedOptionIndex === 1} />}
            label="0"
            onChange={() => handleRadioChange(1)} />
        <FormControlLabel value="one" labelPlacement="bottom" control={<Radio />} label="1" />
        <FormControlLabel value="two" labelPlacement="bottom" control={<Radio />} label="2" />
        
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
        <FormControlLabel value="zero" labelPlacement="bottom" control={<Radio />} label="0" />
        <FormControlLabel value="one" labelPlacement="bottom" control={<Radio />} label="1" />
        <FormControlLabel value="two" labelPlacement="bottom" control={<Radio />} label="2" />
        
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
        <FormControlLabel value="zero" labelPlacement="bottom" control={<Radio />} label="0" />
        <FormControlLabel value="one" labelPlacement="bottom" control={<Radio />} label="1" />
        <FormControlLabel value="two" labelPlacement="bottom" control={<Radio />} label="2" />
        
  <FormLabel style={{paddingTop: '9px', fontSize: '20px' }} id="demo-row-radio-buttons-group-label">Severe</FormLabel>
      </RadioGroup>
    </FormControl>
    {/*<div style={{paddingTop: "2rem"}}>The values is {radial} {brachial} {carotid} {pedis}</div>*/}
   {/*  <Button onClick={handleClick}>Focus next radio button</Button>*/}
   <h4  style={{paddingTop: '30px', paddingBottom: '15px', fontWeight: 'bold',fontSize: '20px'}}>
            {" "}
            Auscultate the carotid pulse using the bell of the stethoscope {" "}
            
         </h4>
   <input
                      ref={fileInputRef}
                      type="file"
                      style={{ display: 'none' }}
                      accept="image/*" // Accept only image files
                      onChange={handleImageUpload}
                    />
                    <button className="flex md:flex-col flex-row md:gap-5 items-center mt-2.5 w-[96%] md:w-full border-0"
                            onClick = {handleUploadClick}>
                      <Img
                        className="h-6 md:ml-[0] ml-[0] md:mt-0 mt-1 w-6"
                        src="images/img_television.svg"
                        alt="television"
                      />
                      <Text className="font-semibold ml-2.5 md:ml-[0] text-black-900 text-xl">Upload audio file of the carotid file</Text>
                     
                    </button>
                    <Img
                        className="h-[130px] md:h-auto rounded-[50%] w-[130px] md:h-auto object-cover  w-full"
                        src= {profilePic}
                        alt=""
                        onLoad ={()=> setImageLoaded(true)}
                        // style = {{display: imageLoaded? "none": "block"}}
                        />

    <div style={{paddingTop: "2rem"}}>
      <Stack spacing={2} direction="row">
      <Button variant="contained" >Next Input</Button>
     <Link to="/abdomen"><Button variant="outlined" >Save</Button>   </Link>
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
