import React from "react";


import { Img, Line, List, Text, NavBar, TabNav, MedTechNotes } from "components";
import { Navigate } from 'react-router-dom';
import TextField from '@mui/material/TextField';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { useState, useRef } from 'react';
import axios from 'axios';


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
const listOptions = ["Chest pain", "Discomfort", "Dyspnea", "Weakness", "Fatigue", "Palpitations", "Light-headedness", "Sense of impending faint", "Syncope"];


const GeneralMedPage = (props) => {
const [painsummary, setPainSummaryValue] = useState("");
const [note, setNotes] = useState('');
const [navigate, setNavigate] = useState();
const [complete, setComplete] = useState(false);
const [error, setError] = useState("");


const handlePainSummaryChange = (event) => {
 setPainSummaryValue(event.target.value)
}


 const handleSave = (e) => {
   e.preventDefault();
   const data = {}
   data['generalpain'] = selected.join(" , ");
   data['painsummary'] = painsummary;
   console.log(data);
   axios({
    method:"POST",
    url: props.proxy + "/upload_json",
    data: {data: data, filename: '/general/detail'},
    headers: {
      Authorization: 'Bearer ' + props.token
      }
  }).then((response) => {

    axios({
      method:"POST",
      url: props.proxy + "/upload_json",
      data: {data: note, filename: '/general/med_note'},
      headers: {
        Authorization: 'Bearer ' + props.token
        }
    }).then((response) => {
      setNavigate('/eyes');
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
            <TabNav tab="general"></TabNav>
            <div className="bg-white-A700 flex flex-col font-cairo items-start justify-start p-10 sm:px-5 w-full"style={{
    paddingTop: '50px',
  }} >
              <div className="flex flex-col  justify-start w-[99%] md:w-full">
                <div className="flex md:flex-col flex-row md:gap-10 items-start justify-start w-full">
                  <div className="md:h-[560px]  relative w-[50%] md:w-full">
                      <div className="flex flex-col items-start justify-start w-full">
                        <List
                          className="flex flex-col gap-[10px] md:ml-[0] ml-[50px] w-[100%]"
                          orientation="vertical">      
                          <Text
                          className="sm:text-3xl md:text-[32px] text-[34px] text-gray-900_02"
                          size="txtCairoBold34">
                          General
                          </Text>
                          <div className="flex flex-row gap-[13px] ml-[50px] items-center justify-between w-full" >
                          <Text
                              className="text-[22px] md:text-[22px] text-black-900 sm:text-xl"
                              size="txtCairoBold24">
                              Has the patient ever had any of these medical conditions?
                          </Text>
                          </div>
                          <div className="flex flex-col gap-[0px] ml-[100px] items-start justify-start w-full" >
                            {listOptions.map((item) => (
                              <Checkbox key={item} name={item} value={selected.includes(item)} 
                                        updateValue={handleSelect}>{item}</Checkbox>
                            ))}
                            <div className="flex flex-col -mx-5 px-5 py-0 rounded bg-gray-100 font-medium w-[50%] justify-start items-start"> 
                              <Checkbox name="all" value={selected.length === listOptions.length} updateValue={selectAll}>Select All</Checkbox>
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
                <div className="flex flex-col items-start justify-start mt-[25px] md:ml-[0] ml-[85px] w-[60%] md:w-full">
                            <Text
                                className="text-[22px]  md:text-[22px] text-black-900 sm:text-xl"
                                size="txtCairoBold24">
                                Adjust the head of the bed to a 45° angle, adequately expose the patient, ask if the patient has any pain before proceeding (if yes, input where)
                            </Text>
                            <TextField fullWidth
                              id="outlined-multiline-static"
                              value = {painsummary}
                              onChange={handlePainSummaryChange}
                              multiline
                              rows={4}
                              defaultValue=""
                              variant="outlined"
                            />
                </div>
                <div className = 'flex flex-row items-center justify-start gap-[25px] ml-[90px] w-[41%] mt-[20px]'>
                
                  <button className="bg-indigo-A200 flex md:flex-col flex-row md:gap-5 ml-5px items-center justify-center mt-2.5 w-[20%] md:w-full h-[50px] rounded-[20px] hover:bg-indigo-A700"
                      onClick={(e) => handleSave(e)}
                      >
                      <Text className="font-semibold md:ml-[0] text-white-A700 text-xl">Save</Text>
                  </button>
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


export default GeneralMedPage;
