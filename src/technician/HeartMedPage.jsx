import React from "react";


import { Img, List, Text, NavBar, TabNav, MedTechNotes, HeartUpload } from "components";
import {Navigate } from 'react-router-dom';
import axios from 'axios';
import { useRef,  useState, useEffect } from 'react';
import TextField from '@mui/material/TextField';
import "physician/HeartPage/style.css";

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
const listOptions = ["Tricuspid/mitral thrill", "Pulmonary/tricuspid thrill", "Aortic/pulmonary thrill"];

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
  const [navigate, setNavigate] = useState();
const [complete, setComplete] = useState(false);
const [error, setError] = useState("");
const [note, setNotes] = useState("");
 const [profilePic, setProfilePic] = useState()
 const fileInputRef = useRef(null);
 const [imageLoaded, setImageLoaded] = useState(false);
 const [isCheckedCRT, setIsCheckedCRT] = useState(false);
  const [isCheckedPulseOx, setIsCheckedPulseOx] = useState(false);

  const [atrialdiaphragm, setAtrialdiaphragmValue] = useState();
  const [atrialbell, setAtrialbellValue] = useState();
  const [pulmonarydiaphragm, setPulmonarydiaphragmValue] = useState();
  const [pulmonarybell, setPulmonarybellValue] = useState();
  const [tricuspiddiaphragm, setTricuspiddiaphragmValue] = useState();
  const [tricuspidbell, setTricuspidbellValue] = useState();
  const [mitraldiaphragm, setMitraldiaphragmValue] = useState();
  const [mitralbell, setMitralbellValue] = useState();
  const [selected, setSelected] = React.useState([]);

  const [heave, setParasternalValue] = useState('none');
  useEffect(() => {
    axios({
        method: "GET",
        url: props.proxy + "download/heart",
        headers: {
            Authorization: 'Bearer ' + props.token
        }
    })
    .then((response) => {
        const res = response.data;
        console.log(res);
        // Split the 'thrills' string into an array
        setSelected(res.thrills['thrills'].split(" , "));
        setParasternalValue(res.thrills['heave'])
        // Other state updates
        setProfilePic(res.EKGgraph);
        setAtrialdiaphragmValue(res.atrialdiaphram);
        setAtrialbellValue(res.atrialbell);
        setPulmonarydiaphragmValue(res.pulmonarydiaphram);
        setPulmonarybellValue(res.pulmonarybell);
        setTricuspiddiaphragmValue(res.tricuspiddiaphram);
        setTricuspidbellValue(res.tricuspidbell);
        setMitraldiaphragmValue(res.mitraldiaphram);
        setMitralbellValue(res.mitralbell);
        
        if(res.hasOwnProperty("med_note")){
            setNotes(res.med_note);
            // console.log(res.note);
        }
    })
    .catch((error) => {
        if (error.response){
            console.log(error.response);
            console.log(error.response.status);
            console.log(error.response.headers);
        }
    });
  }, [props]);
  const handleCheckboxCRTChange = () => {
    setIsCheckedCRT(!isCheckedCRT);
  };
  const handleCheckboxPulseOxChange = () => {
    setIsCheckedPulseOx(!isCheckedPulseOx);
  };



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
  axios({
    method:"POST",
    url: props.proxy + "/upload_json",
    data: {data: note, filename: '/heart/med_note'},
    headers: {
      Authorization: 'Bearer ' + props.token
      }
  }).then((response) => {
    setNavigate('/hands');
})
  .catch((error)=>{
    setError("Upload failed, please try again")
    if(error.response){
      console.log(error.response)
      console.log(error.response.status)
      console.log(error.response.headers)
    }
  })
})
 .catch((error)=>{
  setError("Upload failed, please try again")
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
const inputs = [heave, selected]

const inputRefs = [useRef(null),useRef(null)];
const handleClick = () => {
  console.log(inputs)
  const nextInput = inputs.map((item, index)=> {
    if (item === null | item=== 'none'){
      return index;
    }
    return null;
   }).filter(index => index !== null);
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
     {/* <NavBar proxy={props.proxy} token={props.token}/> */}
     <div className="h-screen">
    <NavBar proxy={props.proxy} token={props.token}/>
      <div
        className="bg-cover bg-no-repeat bg-gray-50 flex flex-col font-dmsans items-center justify-start mx-auto pb-28 w-full"
        style={{ backgroundImage: "url('images/img_demographicstab.svg')" }}
      >
        <div className="flex flex-col md:gap-10 gap-[50px] items-center justify-start w-full">
         <div></div>
          <div className="flex flex-col items-start justify-start max-w-[1700px] mx-auto md:px-5 w-full">
            <TabNav tab="heart"></TabNav>
            <div className="bg-white-A700 flex flex-col font-cairo items-start justify-start p-10 sm:px-5 w-full"style={{
    paddingTop: '50px',
  }} >
              <div className="flex flex-col  justify-start w-[99%] md:w-full">
                <div className="flex md:flex-col flex-row md:gap-10 items-start justify-start w-full">
                  <div className="md:h-[560px]  relative w-[65%] md:w-full">
                      <div className="flex flex-col items-start justify-start w-full">
                        <List
                          className="flex flex-col gap-[10px] md:ml-[0] ml-[50px] w-[100%]"
                          orientation="vertical">      
                          <Text
                          className="sm:text-3xl md:text-[32px] text-[34px] text-gray-900_02"
                          size="txtCairoBold34">
                          Heart
                          </Text>
                          <div className="flex flex-col ml-[50px] items-start justify-between w-full" >
                        <div className="flex flex-row items-center w-[65%] justify-between">
                        <div className="flex flex-row gap-[13px]">
                      <Text
                          className="text-[22px] md:text-[22px] text-black-900 sm:text-xl"
                          size="txtCairoBold24">
                         Parasternal heave:
                      </Text>
                      <div className="relative group flex flex-row">
                        <button onClick={handleCheckboxCRTChange}>
                          <img
                          className="h-[36px] w-[36px]"
                          src="images/img_profile_black_900.svg"
                          alt="profile_One"/>
                        </button>
                        <span style={{ whiteSpace: 'nowrap' }}
                        className=" absolute top-[20px] left-full bg-gray-100 text-gray-700 px-2 py-1 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">
                          Show how to assess for parasternal heave
                        </span>
                      </div>
                      </div>
                      <TextField
                              className = "w-[40%]"
                              value = {heave} 
                              inputRef= {inputRefs[0]}
                              onChange={handleparasternalHeave}
                              id="outlined-select-currency-native"
                              select
                              label=""
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
                      {isCheckedCRT && (
                          <div style={{ marginLeft: '10px' }}>
                            {/* Your images */}
                            <img
                              style={{
                                width: "80%", // Enlarge the width of the image
                                height: "auto", // Set height to auto to maintain aspect ratio
                                paddingTop: "5px",
                                marginRight: '80px',

                              }}
                              src="images/heave.png"
                              alt="screenshot20231"
                            />
                          
                          
                          </div>
                        )}
                    </div>
                          <div className="flex flex-row gap-[13px] ml-[50px] items-center justify-start w-full" >
                          <Text
                              className="text-[22px] md:text-[22px] text-black-900 sm:text-xl"
                              size="txtCairoBold24">
                              Assess for thrills (palpable murmurs):
                          </Text>
                          <div className="relative group flex flex-row">
                        <button onClick={handleCheckboxPulseOxChange}>
                          <img
                          className="h-[36px] w-[36px]"
                          src="images/img_profile_black_900.svg"
                          alt="profile_One"/>
                        </button>
                        <span style={{ whiteSpace: 'nowrap' }}
                        className=" absolute left-full bg-gray-100 text-gray-700 px-2 py-1 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">
                          Show how to assess for thrills
                        </span>
                      </div>
                          </div>
                          {isCheckedPulseOx && (
                              <div className="flex flex-row ml-[80px]">
                                <div className = "w-[50%]" >
                                  <img
                                    style={{
                                      width: "95%", // Enlarge the width of the image
                                      height: "auto", // Set height to auto to maintain aspect ratio
                                      paddingTop: "5px",
                                    }}
                                    src="images/thrill.png"
                                    alt="screenshot20231"
                                  />
                                </div>
                                <div className = "w-[50%]" >
                                  <img
                                    style={{
                                      width: "95%", // Enlarge the width of the image
                                      height: "auto", // Set height to auto to maintain aspect ratio
                                      paddingTop: "5px",
                                    }}
                                    src="images/thrills.png"
                                    alt="screenshot20231"
                                  />
                                </div>
                              </div>
                            )}
                            <div className="flex flex-row">
                          <div className="flex flex-col gap-[0px] ml-[100px] items-start justify-start w-full" >
                          {listOptions.map((item) => (
                              <Checkbox key={item} name={item} inputRef= {inputRefs[1]} value={selected.includes(item)} updateValue={handleSelect}>{item}</Checkbox>
                            ))}
                            <div className="flex flex-col -mx-5 px-5 py-0 rounded bg-gray-100 font-medium w-[70%] justify-start items-start"> 
                              <Checkbox name="all" inputRef= {inputRefs[1]} value={selected.length === listOptions.length} updateValue={selectAll}>Select All</Checkbox>
                            </div>
                          </div>
                          </div>
                          <div className="flex flex-row gap-[13px] ml-[50px]">
                      <Text
                          className="text-2xl mt-[20px] md:text-[22px] text-black-900 sm:text-xl"
                          size="txtCairoBold24">
                         Heart Ausculation:
                      </Text>
                          </div>
                          <div className="flex flex-row ml-[100px] h-[379px] w-[553px] justify-start items-start" 
                        style={{ backgroundImage: "url(https://cdn.animaapp.com/projects/65a945881c395bf52b1e3e78/releases/65a9e82814bc0dc531a973f2/img/tempimagefen4er-1-1@2x.png)" }}>
                                  <div className="flex flex-col ml-[234px] justify-start items-start h-full mt-[115px]  gap-[43px]">
                                  <HeartUpload proxy={props.proxy} token={props.token} 
                                      title="Atrial Upload" location ="/heart/atrial" letter="A"
                                      position="left top" audio={atrialdiaphragm} audiobell={atrialbell}></HeartUpload>
                                  <HeartUpload proxy={props.proxy} token={props.token} 
                                      title="Tricuspid Upload" location ="/heart/tricuspid" letter="T"
                                      position="left top" audio={tricuspiddiaphragm} audiobell={tricuspidbell}></HeartUpload>
                                      {/* <AtrialPopover proxy={props.proxy} token={props.token} 
                                                  diaphragm={atrialdiaphragm} bell={atrialbell}
                                                  
                                                  tab={'heart'} name={'Atrial'}></AtrialPopover> */}
                                      {/* <TricuspidPopover proxy={props.proxy} token={props.token} 
                                                        diaphragm={tricuspiddiaphragm} bell={tricuspidbell}
                                                        
                                                        tab={'heart'} name={'Tricuspid'}></TricuspidPopover> */}
                                </div>
                                <div className="flex flex-col ml-[37px] mt-[115px]">
                                <HeartUpload proxy={props.proxy} token={props.token} 
                                      title="Pulmonary Upload" location ="/heart/pulmonary" letter="P"
                                      position="left top" audio={pulmonarydiaphragm} audiobell={pulmonarybell}></HeartUpload>
                                
                                  {/* <PulmonaryPopover proxy={props.proxy} token={props.token} 
                                                    diaphragm={pulmonarydiaphragm} bell={pulmonarybell}
                                                   
                                                    tab={'heart'} name={'Pulmonary'}></PulmonaryPopover> */}
                                </div>
                                <div className="flex flex-col ml-[40px] mt-[240px]">
                                <HeartUpload proxy={props.proxy} token={props.token} 
                                      title="Mitral Upload" location ="/heart/mitral" letter="M"
                                      position="left top" audio={mitraldiaphragm} audiobell={mitralbell}></HeartUpload>
                                  {/* <MitralPopover proxy={props.proxy} token={props.token} 
                                                  diaphragm={mitraldiaphragm} bell={mitralbell}
                                                  
                                                  tab={'heart'} name={'Mitral'}></MitralPopover> */}
                                </div>
                          </div>
                          </List>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="absolute left-[1218px] top-[240px]">
                <MedTechNotes notes={note} token={props.token} proxy={props.proxy} tab="abdomen" setNotes={setNotes}/>
                </div>
                <div className ='flex flex-col ml-[100px] w-full'>
                <Text
                          className="text-2xl mt-[20px] md:text-[22px] text-black-900 sm:text-xl"
                          size="txtCairoBold24">
                         Single Lead EKG:
                      </Text>
                <div className ="flex flex-row w-full gap-[10px] ml-[50px] mb-[50px] mr-[50px]">
                      
                  <input 
                          ref={fileInputRef}
                          type="file"
                          style={{ display: 'none'}}
                          accept="image/*" // Accept only image files
                          onChange={handleImageUpload}
                        />
                  <button className="bg-indigo-A200 flex md:flex-col flex-row gap-[5px] md:gap-5 ml-5px items-center justify-center mt-2.5 w-[15%] md:w-full h-[50px] rounded-[20px] hover:bg-indigo-A700"
                      onClick={handleUploadClick}
                      >
                        <Img
                          className="h-6 md:ml-[0] ml-[0] md:mt-0 mt-1 w-6"
                          src="images/img_television_white.svg"
                          alt="television"
                        />
                      <Text className="font-semibold md:ml-[0] text-white-A700 text-xl">Upload EKG Graph</Text>
                  </button>
                 
                </div>
                <Img
                      className="h-auto md:h-auto md:h-auto object-cover w-[85%]"
                      src= {profilePic}
                      alt=""
                      onLoad ={()=> setImageLoaded(true)}
                      style = {{display: imageLoaded? "block": "none"}}
                      />
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



export default HeartMedPage;

