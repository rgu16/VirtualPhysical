import React from "react";


import { Img, Line, List, Text, NavBar, TabNav } from "components";
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import axios from 'axios';
import { useRef,  useState } from 'react';
import TextField from '@mui/material/TextField';
import "physician/HeartPage/style.css";

import AtrialPopover from 'components/AtrialPopover/AtrialUpload.js'
import MitralPopover from 'components/MitralPopover/MitralUpload.js'
import TricuspidPopover from 'components/TricuspidPopover/TricuspidUpload.js'
import PulmonaryPopover from 'components/PulmonaryPopover/PulmonaryUpload.js'

import InputAdornment from '@mui/material/InputAdornment';

import CheckandXButtons from "components/CheckandXButtons";
//import ECG from "./ECG.png"

// Checkbox component
function Checkbox({ name, value = false, updateValue = () => {}, children }) {
 // handle checkbox change
 const handleChange = () => {
   updateValue(!value, name);
 };

 //popup from speciality physician UI
 const [anchorEl, setAnchorEl] = React.useState(null);
 const handleClick = (event) => {
   setAnchorEl(event.currentTarget);
 };
 const handleClose = () => {
   setAnchorEl(null);
 };
 const open = Boolean(anchorEl);
 const id = open ? 'image-popover' : undefined;

 const [saveVariant, setSaveVariant] = useState('outlined');

 const handleSaveClick = () => {
   setSaveVariant(saveVariant === 'outlined' ? 'contained' : 'outlined');
 };


 // render the checkbox
 return (
   <div className="py-2">
     <input type="checkbox" id={`${name}-checkbox`} name={name} checked={value} onChange={handleChange} />
     <label htmlFor={`${name}-checkbox`} className="ml-1 capitalize">{children}</label>
   </div>
 );
}


// List of checkbox options
const listOptions = ["Tricuspid/mitral thrill", "Pulmonary/tricuspid thrill", "Aortic pulmonary thrill"];

const parasternalHeave = [
  {
    value: 'normal',
    label: 'normal (no heave)',
  },
  {
    value: 'abnormal',
    label: 'abnormal (heave)',
  },
  {
    value: 'none',
    label: 'no selection',
  },


];

const HeartMedPage = (props) => {
 const [profilePic, setProfilePic] = useState()
 const fileInputRef = useRef(null);
 const [imageLoaded, setImageLoaded] = useState(false);

 const [heave, setParasternalValue] = useState();

const handleparasternalHeave = (event) => {
  setParasternalValue(event.target.value)
}

 const handleUploadClick = () => {
   fileInputRef.current.click();
 };

 const handleImageUpload = (e) => {
   e.preventDefault();
   const file = e.target.files[0];
   console.log('UploadECGImage')
   setProfilePic(URL.createObjectURL(file))
   if (!file) {
       console.error('No file selected.');
       return;
   }
   const formData = new FormData();
   formData.append('file', file, file.name);
   formData.append('location', "/heart/EKGgraph")
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


 const [selected, setSelected] = React.useState([]);

 const handleSave = (e) => {
  e.preventDefault();
  const data = {}
  data['thrills'] = selected.join(" , ");
  data['heave'] = heave;
  console.log(data);
  axios({
   method:"POST",
   url: props.proxy + "/upload_json",
   data: {data: data, filename: '/heart/thrills'},
   headers: {
     Authorization: 'Bearer ' + props.token
     }
 }).then((response) => {
   const res =response.data;
   localStorage.setItem('general', data);
})
 .catch((error)=>{
   if(error.response){
     console.log(error.response)
     console.log(error.response.status)
     console.log(error.response.headers)
   }
 })
};
 // Function for updating state on checkbox change
 function handleSelect(value, name) {
   if (value) {
     setSelected([...selected, name]);
   } else {
     setSelected(selected.filter((item) => item !== name));
   }
 }
// Function for selecting/deselecting all checkboxes
function selectAll() {
 if (selected.length === listOptions.length) {
   // If all checkboxes are already selected, unselect all
   setSelected([]);
 } else {
   // Otherwise, select all checkboxes
   setSelected(listOptions);
 }
}

const [isHoveredOne, setIsHoveredOne] = useState(false);
const [isHoveredTwo, setIsHoveredTwo] = useState(false);
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
        <TabNav tab="heart"></TabNav>
          <div className="bg-white-A700 flex flex-col font-cairo items-center justify-start p-10 sm:px-5 w-full" >
                      
                 <div style={{paddingLeft: '150px', paddingTop: '50px'}} className="flex w-full min-h-screen p-5">
    <div className="w-full max-w-md">
    
    
    <div className="absolute bg-white-A700 bottom-[8%] flex flex-col font-cairo gap-6 h-[1000px] md:h-auto inset-x-[0] justify-start max-w-[1695px] mx-auto pb-6 pt-8 px-5 rounded-bl-[12px] rounded-br-[12px] w-full">


       <div className="md:h-[1277px] sm:h-[3072px] h-[370px] relative w-[84%] md:w-full">
         
         <div className="absolute md:h-[1277px] sm:h-[3072px] h-[925px] inset-[0] justify-center m-auto w-[98%] md:w-full">
        
         
          
                     <div style={{paddingLeft: '150px', }} className="flex w-full min-h-screen p-5">
    <div className="w-full max-w-md">
    <div className="w-full max-w-md">
     <Text
                       className="sm:text-3xl md:text-[32px] text-[34px] text-gray-900_02"
                       size="txtCairoBold34"
                     >
                      Heart Inspection
                     </Text>
        <div className="flex flex-row gap-[15px] items-center justify-between w-full">
                             <Text
                              className="mt-0.5 text-2xl md:text-[10px] text-black-900 sm:text-xl"
                              size="txtCairoBold24" 
                            >
                              Parasternal heave:
                            </Text>
                            <TextField
                              className = "w-[70%]"
                              value = {heave} 
                              onChange={handleparasternalHeave}
                              id="outlined-select-currency-native"
                              select
                              label=""
                              defaultValue="none"
                              SelectProps={{
                                native: true,
                              }}
                              helperText=""
                            >
                              {parasternalHeave.map((option) => (
                                <option key={option.value} value={option.value}>
                                  {option.label}
                                </option>
                              ))}
                            </TextField>
                          </div>
                          <h4  style={{paddingTop: '30px', paddingBottom: '15px', fontWeight: 'bold',fontSize: '22px'}}>
           {" "}
           Assess for thrills (palpable murmurs): {" "}
          
        </h4>
       {listOptions.map((item) => (
         <Checkbox key={item} name={item} value={selected.includes(item)} updateValue={handleSelect}>{item}</Checkbox>
       ))}
        <div className="-mx-5 px-5 py-0 rounded bg-gray-100 font-medium">
         <Checkbox name="all" value={selected.length === listOptions.length} updateValue={selectAll}>Select All</Checkbox>
       </div>
      {/* <div style={{paddingTop: "2rem"}}>The checked values are {selected.join(" , ")}</div>*/} 
     
    <div className="heart-tab">

            <div className="div" >

              <div className="atrialpopover">
                <AtrialPopover proxy={props.proxy} token={props.token}></AtrialPopover>
              </div>

              <div className="pulmonarypopover">
                <PulmonaryPopover proxy={props.proxy} token={props.token}></PulmonaryPopover>
              </div>

              <div className="tricuspidpopover">
                <TricuspidPopover proxy={props.proxy} token={props.token}></TricuspidPopover>
              </div>

              <div className="mitralpopover">
                <MitralPopover proxy={props.proxy} token={props.token}></MitralPopover>
              </div>                            

            </div>


            <div className="heart-ausc">
              <p className="heart-auscultation">
               {/* <span className="text-wrapper">Heart Auscultation </span>
                <span className="span">(anterior only)</span>*/} 
              </p>
            </div>
          
          <div style={{ paddingTop: "30rem" }}>
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
  <Text  style={{color: 'white' }} className="font-semibold ml-2.5 md:ml-[0] text-xl">Upload EKG Graph</Text>
</button>
                  <Img
                      className="h-[130px] md:h-auto rounded-[50%] w-[130px] md:h-auto object-cover  w-full"
                      src= {profilePic}
                      alt=""
                      onLoad ={()=> setImageLoaded(true)}
                      // style = {{display: imageLoaded? "none": "block"}}
                      />
   

    </div></div>
    <div >
     <Stack spacing={2} direction="row">
    <Link to="/hands"><Button variant="outlined" onClick={(e) => handleSave(e)}>Save</Button>   </Link>
  </Stack>
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
      </div>
    </div>
  </>
);
};



export default HeartMedPage;

