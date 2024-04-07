import React from "react";


import { Img, Line, List, Text, NavBar, TabNav } from "components";
import { Link } from 'react-router-dom';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { useRef, useState } from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import axios from 'axios';


const LegsMedPage = (props) => {
 const [isHoveredOne, setIsHoveredOne] = useState(false);
 const [isHoveredTwo, setIsHoveredTwo] = useState(false);
 const [rightcalve, setRightCalfValue] = useState();
 const [leftcalve, setLeftCalfValue] = useState();
 const [note, setNotes] = useState();
    const [imageLoaded, setImageLoaded] = useState(false);
    const fileInputRef = useRef(null);
    const [profilePic, setProfilePic] = useState()

 const [isChecked, setIsChecked] = useState(false);
 const [isCheckedScale, setIsCheckedScale] = useState(false);
 const [isCheckedLeg, setIsCheckedLeg] = useState(false);

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
   data['rightcalve'] = rightcalve;
   data['leftcalve'] = leftcalve;
   console.log(data);
   axios({
    method:"POST",
    url: props.proxy + "/upload_json",
    data: {data: data, filename: '/legs/detail'},
    headers: {
      Authorization: 'Bearer ' + props.token
      }
  }).then((response) => {
    const res =response.data;
    localStorage.setItem('legs', data);
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
         <TabNav tab="legs"></TabNav>
           <div className="bg-white-A700 flex flex-col font-cairo items-center justify-start p-10 sm:px-5 w-full" >
           
                  <div style={{paddingLeft: '150px', paddingTop: '50px'}} className="flex w-full min-h-screen p-5">
     <div className="w-full max-w-md">
    
     <div className="absolute bg-white-A700 bottom-[8%] flex flex-col font-cairo gap-6 h-[1000px] md:h-auto inset-x-[0] justify-start max-w-[1695px] mx-auto pb-6 pt-8 px-5 rounded-bl-[12px] rounded-br-[12px] w-full">




        <div className="md:h-[1277px] sm:h-[3072px] h-[370px] relative w-[84%] md:w-full">
         
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
            
                   
                  </div>
                 
                </div>
                <div className="flex flex-col md:gap-10 gap-[301px] justify-start">
                  <Text
                    className="md:ml-[0] ml-[18px] text-2xl md:text-[22px] text-black-900 sm:text-xl"
                    size="txtCairoBold24"
                  >
                    {" "}
                    {" "}
                  </Text>
                  <Text
                    className="text-2xl md:text-[22px] text-black-900 sm:text-xl"
                    size="txtCairoBold24"
                  >
                    {" "}
                    {" "}
                  </Text>
                </div>
              </div>
            </div>
            
            <div className="absolute top-30 right-20 w-1/2" style={{paddingLeft: '300px'}}>
 
 <div className= "flex flex-col items-start justify-start w-[400px] h-full m-[50px] mt-[80px]">
 <div>
   {isCheckedScale && (
        <div style={{ marginLeft: '50px' }}>
          {/* Your images */}
          <img
            style={{
              width: "300px", // Enlarge the width of the image
              height: "280px", // Set height to auto to maintain aspect ratio
              paddingTop: "5px",
              marginRight: '15px'

            }}
            src="images/pedemascore.png"
            alt="screenshot20231"
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
        Show Detailed Scale
      </label>
    </div>

    <div>
   {isCheckedLeg && (
        <div style={{ marginLeft: '50px' }}>
          {/* Your images */}
          <img
            style={{
              width: "300px", // Enlarge the width of the image
              height: "350px", // Set height to auto to maintain aspect ratio
              paddingTop: "5px",
              marginRight: '15px'

            }}
            src="images/edemaleg.png"
            alt="screenshot20231"
          />
         
         
        </div>
      )}
       <label>
        <input
          type="checkbox"
          className="cboxes"
          checked={isCheckedLeg}
          onChange={handleCheckboxLegChange}
        />
        Show Example of normal vs edema leg
      </label>
    </div>
       
       
        <Text className="font-bold text-2xl text-black-900">Notes: </Text>
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
  <Text  style={{color: 'white' }} className="font-semibold ml-2.5 md:ml-[0] text-xl">Upload Image of Legs</Text>
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
               
               </div>   
               
               
            {/* 
            <Img style = {{ opacity: isHoveredOne ? 1 : 0, // Show the image if hovered, otherwise hide
             transition: 'opacity 0.3s ease', }} // Add a smooth transition effect
              className="absolute h-[270px] object-cover right-[3%] top-[6%] w-[25%]"
              src="images/pedemascore.png"
              alt="screenshot20231"
            />
            <Img style = {{ opacity: isHoveredTwo ? 1 : 0, // Show the image if hovered, otherwise hide
             transition: 'opacity 0.3s ease', }} // Add a smooth transition effect
              className="absolute bottom-[10%] h-[465px] object-cover left-[73.5%] w-[31%]"
              src="images/edema.png"
              alt="screenshot20231_One"
            />*/}
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
                      Legs Inspection
                     </Text>
       <h4  style={{paddingTop: '30px', paddingBottom: '15px', fontWeight: 'bold', fontSize: '19px'}}>
           {" "}
           Check for pitting edema and classify severity for each region: {" "}
          
        </h4>
        <FormLabel style={{ paddingBottom: '25px', paddingTop: '5px', fontSize: '17px', color: 'black' }} id="demo-row-radio-buttons-group-label">Hint: Check the severity of swelling in the calves, caused by excess fluid, by applying pressure to the swollen area</FormLabel>
        {/*i. Right calve */}
        <FormControl value = {rightcalve}
     onChange={handleRightCalfChange}>
        <FormLabel style={{paddingBottom: '10px', paddingTop: '15px', color: 'black', fontSize: '20px'}} id="demo-row-radio-buttons-group-label">i. Right calve</FormLabel>
     <RadioGroup
       row
       aria-labelledby="demo-row-radio-buttons-group-label"
       name="row-radio-buttons-group"
     >
       <FormLabel style={{paddingTop: '10px' , fontSize: '20px'}} id="demo-row-radio-buttons-group-label">None</FormLabel>
       <FormControlLabel value="0" labelPlacement="bottom" control={<Radio />} label="0" />
       <FormControlLabel value="1" labelPlacement="bottom" control={<Radio />} label="1" />
       <FormControlLabel value="2" labelPlacement="bottom" control={<Radio />} label="2" />
       <FormControlLabel value="3" labelPlacement="bottom" control={<Radio />} label="3" />
      
 <FormLabel style={{paddingTop: '9px', fontSize: '20px' }} id="demo-row-radio-buttons-group-label">Severe</FormLabel>
     </RadioGroup>
   </FormControl>
    
      {/*ii. Left calve */}
      <FormControl  value = {leftcalve}
     onChange={handleLeftCalfChange}>
        <FormLabel style={{paddingBottom: '10px', paddingTop: '45px', color: 'black', fontSize: '20px'}} id="demo-row-radio-buttons-group-label">ii. Left calve</FormLabel>
     <RadioGroup
       row
       aria-labelledby="demo-row-radio-buttons-group-label"
       name="row-radio-buttons-group"
     >
       <FormLabel style={{paddingTop: '10px' , fontSize: '20px'}} id="demo-row-radio-buttons-group-label">None</FormLabel>
       <FormControlLabel value="0" labelPlacement="bottom" control={<Radio />} label="0" />
       <FormControlLabel value="1" labelPlacement="bottom" control={<Radio />} label="1" />
       <FormControlLabel value="2" labelPlacement="bottom" control={<Radio />} label="2" />
       <FormControlLabel value="3" labelPlacement="bottom" control={<Radio />} label="3" />
      
 <FormLabel style={{paddingTop: '9px', fontSize: '20px' }} id="demo-row-radio-buttons-group-label">Severe</FormLabel>
     </RadioGroup>
   </FormControl>

   <div>
   {isChecked && (
        <div style={{ marginLeft: '50px' }}>
          {/* Your images */}
          <img
            style={{
              width: "350px", // Enlarge the width of the image
              height: "220px", // Set height to auto to maintain aspect ratio
              paddingTop: "5px",
              marginRight: '15px'

            }}
            src="images/pittingedema.png"
            alt="screenshot20231"
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
        Show Reference Images
      </label>
    </div>
  
    <div style={{paddingTop: "2rem"}}>
     <Stack spacing={2} direction="row">
    {/*  <Link to="/eyes"> <Button variant="text">Previous Section</Button></Link>*/}
    <Button variant="contained" >Next Input</Button>
    <Button variant="outlined" onClick={(e) => handleSave(e)}>Save</Button> 
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


export default LegsMedPage;
