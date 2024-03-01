import React from "react";


import { Img, Line, List, Text, NavBar, TabNav } from "components";
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import axios from 'axios';
import { useRef,  useState } from 'react';


// Checkbox component
function Checkbox({ name, value = false, updateValue = () => {}, children }) {
 // handle checkbox change
 const handleChange = () => {
   updateValue(!value, name);
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




const HeartMedPage = (props) => {
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
   formData.append('location', "/heart/audio")
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
           <Img style = {{ opacity: isHoveredOne ? 1 : 0, // Show the image if hovered, otherwise hide
            transition: 'opacity 0.3s ease', }} // Add a smooth transition effect
             className="absolute h-[270px] object-cover right-[3%] top-[6%] w-[25%]"
             src="images/stethoscope.png"
             alt="screenshot20231"
           />
           <Img style = {{ opacity: isHoveredTwo ? 1 : 0, // Show the image if hovered, otherwise hide
            transition: 'opacity 0.3s ease', }} // Add a smooth transition effect
             className="absolute bottom-[10%] h-[465px] object-cover left-[73.5%] w-[31%]"
             src="images/heartregions.png"
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
    <div className="w-full max-w-md">
     <Text
                       className="sm:text-3xl md:text-[32px] text-[34px] text-gray-900_02"
                       size="txtCairoBold34"
                     >
                      Heart Inspection
                     </Text>
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
       <div style={{paddingTop: "2rem"}}>The checked values are {selected.join(" , ")}</div>
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
                     <Text className="font-semibold ml-2.5 md:ml-[0] text-black-900 text-xl">Measure the aortic, tricuspid, pulmonic and mitral area from the diaphram of the stethoscope</Text>
                   
                   </button>
                   <Img
                       className="h-[130px] md:h-auto rounded-[50%] w-[130px] md:h-auto object-cover  w-full"
                       src= {profilePic}
                       alt=""
                       onLoad ={()=> setImageLoaded(true)}
                       // style = {{display: imageLoaded? "none": "block"}}
                       />


               <input
                     ref={fileInputRef}
                     type="file"
                     style={{ display: 'none' }}
                     accept="audio/*" // Accept only image files
                     onChange={handleImageUpload}
                   />
                   <button className="flex md:flex-col flex-row md:gap-5 items-center mt-2.5 w-[96%] md:w-full border-0"
                           onClick = {handleUploadClick}>
                     <Img
                       className="h-6 md:ml-[0] ml-[0] md:mt-0 mt-1 w-6"
                       src="images/img_television.svg"
                       alt="television"
                     />
                     <Text className="font-semibold ml-2.5 md:ml-[0] text-black-900 text-xl">Measure the aortic, tricuspid, pulmonic and mitral area from the bell of the stethoscope</Text>
                   
                   </button>
                   <Img
                       className="h-[130px] md:h-auto rounded-[50%] w-[130px] md:h-auto object-cover  w-full"
                       src= {profilePic}
                       alt=""
                       onLoad ={()=> setImageLoaded(true)}
                       // style = {{display: imageLoaded? "none": "block"}}
                       />


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
                     <Text className="font-semibold ml-2.5 md:ml-[0] text-black-900 text-xl">Upload an image of the ECG recording</Text>
                   
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
    <Link to="/hands"><Button variant="outlined" >Save</Button>   </Link>
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

