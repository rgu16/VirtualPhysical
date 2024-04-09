import React from "react";
import { useState, useRef, useEffect } from 'react';
import axios from 'axios';
import Button from '@mui/material/Button';
import FormControl from '@mui/material/FormControl';
import "./style.css";
import Typography from '@mui/material/Typography';
import { NavBar, PhysicianNotes, Img, Text, List, TabNav } from 'components';
import { Navigate } from 'react-router-dom';
import AtrialPopover from 'components/AtrialPopover/AtrialPopover.js'
import MitralPopover from 'components/MitralPopover/MitralPopover.js'
import TricuspidPopover from 'components/TricuspidPopover/TricuspidPopover.jsx'
import PulmonaryPopover from 'components/PulmonaryPopover/PulmonaryPopover.jsx'
import CheckandXButtons from "components/CheckandXButtons";


export const HeartPage = (props) => {
  const [status, setStatus] = useState();
  const [statusAtrial, setStatusAtrial] = useState();
  const [statusMitral, setStatusMitral] = useState();
  const [statusPulmonary, setStatusPulmonary] = useState();
  const [statusTricuspid, setStatusTricuspid] = useState();
  const [paraheave, setParaheaveValue] = useState();
  const [tmthrill, setTmthrillValue] = useState();
  const [ptthrill, setPtthrillValue] = useState();
  const [apthrill, setApthrillValue] = useState();
  const [ecgimg, setEcgimgValue] = useState();
  const [note, setNotes] = useState();
  const [medNote, setMedNotes] = useState("");
  // Popup values
  const [atrialdiaphragm, setAtrialdiaphragmValue] = useState();
  const [atrialbell, setAtrialbellValue] = useState();
  const [pulmonarydiaphragm, setPulmonarydiaphragmValue] = useState();
  const [pulmonarybell, setPulmonarybellValue] = useState();
  const [tricuspiddiaphragm, setTricuspiddiaphragmValue] = useState();
  const [tricuspidbell, setTricuspidbellValue] = useState();
  const [mitraldiaphragm, setMitraldiaphragmValue] = useState();
  const [mitralbell, setMitralbellValue] = useState();

  // const [navigate, setNavigate] = useState();
  // const [complete, setComplete] = useState(false);
  // const [error, setError] = useState("");

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
        if(res.hasOwnProperty("statusEKG")){
          setStatus(res.statusEKG['status']);
        }
        if(res.hasOwnProperty("statusAtrial")){
        setStatusAtrial(res.statusAtrial['status']);
        }
        if(res.hasOwnProperty("statusMitral")){
        setStatusMitral(res.statusMitral['status']);
        }
        if(res.hasOwnProperty("statusPulmonary")){
        setStatusPulmonary(res.statusPulmonary['status']);
        }
        if(res.hasOwnProperty("statusTricuspid")){
        setStatusTricuspid(res.statusTricuspid['status']);
        }
        // Split the 'thrills' string into an array
        const thrills = res.thrills['thrills'];
        // Assign values to variables using indexes
        setParaheaveValue(res.thrills['heave']); // Index 0 for setParaheaveValue
        // console.log(paraheave)
        setTmthrillValue(thrills.includes("Tricuspid/mitral")? "Yes" : "No"); // Index 1 for setTmthrillValue
        // console.log(tmthrill)
        setPtthrillValue(thrills.includes("Pulmonary/tricuspid")? "Yes" : "No"); // Index 2 for setPtthrillValue
        // console.log(ptthrill)
        setApthrillValue(thrills.includes("Aortic/pulmonary")? "Yes" : "No");// Index 3 for setApthrillValue
        // console.log(apthrill)
        // Other state updates
        setEcgimgValue(res.EKGgraph);
        setAtrialdiaphragmValue(res.atrialdiaphram);
        setAtrialbellValue(res.atrialbell);
        setPulmonarydiaphragmValue(res.pulmonarydiaphram);
        setPulmonarybellValue(res.pulmonarybell);
        setTricuspiddiaphragmValue(res.tricuspiddiaphram);
        setTricuspidbellValue(res.tricuspidbell);
        setMitraldiaphragmValue(res.mitraldiaphram);
        setMitralbellValue(res.mitralbell);
        
        if(res.hasOwnProperty("note")){
            setNotes(res.note);
            console.log(res.note);
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

  
  // for popover buttons
  const [anchorEl, setAnchorEl] = React.useState(null);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const open = Boolean(anchorEl);
  const id = open ? 'image-popover' : undefined;


  return (
<>
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
            <div className="bg-white-A700 flex flex-col font-cairo items-center justify-start p-10 sm:px-5 w-full"style={{
    paddingTop: '50px',
  }} >
              <div className="flex flex-col  justify-start w-[99%] md:w-full">
                <div className="flex md:flex-col flex-row md:gap-10 items-start justify-start w-full">
                  <div className="md:h-[560px]  relative w-[100%] md:w-full">
                      <div className="flex flex-col items-start justify-start w-full">
                        <List
                          className="flex flex-col gap-[10px] md:ml-[0] ml-[50px] w-[62%]"
                          orientation="vertical">      
                          <Text
                          className="sm:text-3xl md:text-[32px] text-[34px] text-gray-900_02"
                          size="txtCairoBold34">
                          Heart
                          </Text>
                          <div className="flex flex-row gap-[13px] ml-[50px] items-center justify-start w-full" >
                            <Text
                              className="text-2xl md:text-[22px] text-black-900 sm:text-xl"
                              size="txtCairoBold24">
                              Parasternal heave:
                            </Text>
                            <Text className="text-2xl md:text-[22px] text-black-900 sm:text-xl">{paraheave}</Text>
                          </div>
                          <div className="flex flex-row gap-[13px] ml-[50px] items-center justify-start w-full">
                            <Text
                              className="text-2xl md:text-[22px] text-black-900 sm:text-xl"
                              size="txtCairoBold24">
                              Tricuspid/mitral thrill:
                            </Text>                        
                            <Text className="text-2xl md:text-[22px] text-black-900 sm:text-xl" variant="outlined">{tmthrill}</Text>
                          </div>
                          <div className="flex flex-row gap-[13px] ml-[50px] items-center justify-start w-full">
                             <Text
                              className="text-2xl md:text-[22px] text-black-900 sm:text-xl"
                              size="txtCairoBold24" 
                            >
                              Pulmonary/tricuspid thrill:
                            </Text>
                            <Text className="text-2xl md:text-[22px] text-black-900 sm:text-xl">{ptthrill}</Text>
                          </div>
                          <div className="flex flex-row gap-[13px] ml-[50px] items-center justify-start w-full">
                             <Text
                               className="text-2xl md:text-[22px] text-black-900 sm:text-xl"
                               size="txtCairoBold24">
                               Aortic/pulmonary thrill:
                             </Text>
                             <Text className="text-2xl md:text-[22px] text-black-900 sm:text-xl">{apthrill}</Text>
                          </div>
                          <div className="flex flex-row ml-[50px] gap-[5px] mt-[20px]">
                          <Text
                               className="text-3xl md:text-[22px] text-black-900 sm:text-xl"
                               size="txtCairoBold24">
                               Heart Auscultation
                             </Text>
                             <Text
                               className="text-3xl md:text-[22px] text-black-900 sm:text-xl"
                               >
                               (anterior only):
                             </Text>
                          </div>

                          <div className="flex flex-row ml-[100px] h-[379px] w-[553px] justify-start items-start" 
                        style={{ backgroundImage: "url(https://cdn.animaapp.com/projects/65a945881c395bf52b1e3e78/releases/65a9e82814bc0dc531a973f2/img/tempimagefen4er-1-1@2x.png)" }}>
                                  <div className="flex flex-col ml-[234px] justify-start items-start h-full mt-[115px]  gap-[43px]">
                                      <AtrialPopover proxy={props.proxy} token={props.token} 
                                                  diaphragm={atrialdiaphragm} bell={atrialbell}
                                                  setStatus={setStatusAtrial} status={statusAtrial}
                                                  tab={'heart'} name={'Atrial'}></AtrialPopover>
                                      <TricuspidPopover proxy={props.proxy} token={props.token} 
                                                        diaphragm={tricuspiddiaphragm} bell={tricuspidbell}
                                                        setStatus={setStatusTricuspid} status={statusTricuspid}
                                                        tab={'heart'} name={'Tricuspid'}></TricuspidPopover>
                                </div>
                                <div className="flex flex-col ml-[37px] mt-[115px]">
                                  <PulmonaryPopover proxy={props.proxy} token={props.token} 
                                                    diaphragm={pulmonarydiaphragm} bell={pulmonarybell}
                                                    setStatus={setStatusPulmonary} status={statusPulmonary}
                                                    tab={'heart'} name={'Pulmonary'}></PulmonaryPopover>
                                </div>
                                <div className="flex flex-col ml-[40px] mt-[240px]">
                                  <MitralPopover proxy={props.proxy} token={props.token} 
                                                  diaphragm={mitraldiaphragm} bell={mitralbell}
                                                  setStatus={setStatusMitral} status={statusMitral}
                                                  tab={'heart'} name={'Mitral'}></MitralPopover>
                                </div>
                          </div>
                          <div className="flex flex-col gap-[5px] mt-[20px] ml-[50px] items-start justify-start w-full">
                          <Text
                               className="text-3xl md:text-[22px] text-black-900 sm:text-xl"
                               size="txtCairoBold24">
                               Single-Lead ECG Recording:
                             </Text>
                          <Img
                              src= {ecgimg}
                            />
                          </div>
                          <div className="flex flex-row gap-[13px] ml-[50px] items-center justify-start w-full">
                          <Text
                               className="text-2xl md:text-[22px] text-black-900 sm:text-xl"
                               >
                               Normal?
                             </Text>
                              {/* <span className="text-wrapper-7">Normal?</span> */}
                            
                            <span className="flex flex-row">
                              <div>
                                <CheckandXButtons setStatus={setStatus} status={status}
                                                  proxy ={props.proxy} token={props.token} 
                                                  tab={'heart'} name={'EKG'}/>
                              </div>   
                                     
                            </span>
                            </div>
                        </List>
                      </div>
                  </div>
                  <div className="absolute left-[1218px] top-[320px]">
                    {(medNote !== "") && 
                      <div className="flex flex-col items-start justify-start w-[400px] ml-[50px] mr-[50px] mb-[20px]">
                      <Text
                        className="text-2xl md:text-[22px] text-black-900 sm:text-xl"
                        size="txtCairoBold24"
                      >
                        Med Tech Notes:{" "}
                      </Text>
                      
                      <Text className="text-2xl md:text-[22px] text-black-900 sm:text-xl">{medNote}</Text>
                      </div>}
                    <PhysicianNotes notes={note} token={props.token} proxy={props.proxy} tab="/heart"></PhysicianNotes>
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