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
    formData.append('location', "/lungs/image")
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

  return (
    <>
    <NavBar proxy={props.proxy} token={props.token}/>
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
                      <Text className="font-semibold ml-2.5 md:ml-[0] text-black-900 text-xl">Upload Phonocardiogram Image</Text>
                     
                    </button>
                    <Img
                        className="h-[130px] md:h-auto rounded-[50%] w-[130px] md:h-auto object-cover  w-full"
                        src= {profilePic}
                        alt=""
                        onLoad ={()=> setImageLoaded(true)}
                        // style = {{display: imageLoaded? "none": "block"}}
                        />
                        <Img
                        className="h-[150px]md:h-auto object-cover rounded-bl-[14px] rounded-[14px] w-[150px]"
                        src= "images/noimage.png"
                        alt="image"
                        style = {{display: imageLoaded? "none": "block"}}
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
    </>
  );
};

export default HeartMedPage;
