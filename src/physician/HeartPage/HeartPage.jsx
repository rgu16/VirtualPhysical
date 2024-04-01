import React from "react";
import { useState, useRef, useEffect } from 'react';
import axios from 'axios';
import Button from '@mui/material/Button';
import FormControl from '@mui/material/FormControl';
import "./style.css";
import Typography from '@mui/material/Typography';
import { NavBar, PhysicianNotes, Img, Text } from 'components'
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
  // Popup values
  const [atrialdiaphragm, setAtrialdiaphragmValue] = useState();
  const [atrialbell, setAtrialbellValue] = useState();
  const [pulmonarydiaphragm, setPulmonarydiaphragmValue] = useState();
  const [pulmonarybell, setPulmonarybellValue] = useState();
  const [tricuspiddiaphragm, setTricuspiddiaphragmValue] = useState();
  const [tricuspidbell, setTricuspidbellValue] = useState();
  const [mitraldiaphragm, setMitraldiaphragmValue] = useState();
  const [mitralbell, setMitralbellValue] = useState();

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
    <div className="heart-tab">
      <div className="overlap-wrapper">
        <div className="overlap">
          <div className="overlap-group">
            
            <div className="div">
              <div className="atrialpopover">
                <AtrialPopover proxy={props.proxy} token={props.token} 
                               diaphragm={atrialdiaphragm} bell={atrialbell}
                               setStatus={setStatusAtrial} status={statusAtrial}
                               tab={'heart'} name={'Atrial'}></AtrialPopover>
              </div>
              <div className="pulmonarypopover">
                <PulmonaryPopover proxy={props.proxy} token={props.token} 
                                  diaphragm={pulmonarydiaphragm} bell={pulmonarybell}
                                  setStatus={setStatusPulmonary} status={statusPulmonary}
                                  tab={'heart'} name={'Pulmonary'}></PulmonaryPopover>
              </div>
              <div className="tricuspidpopover">
                <TricuspidPopover proxy={props.proxy} token={props.token} 
                                  diaphragm={tricuspiddiaphragm} bell={tricuspidbell}
                                  setStatus={setStatusTricuspid} status={statusTricuspid}
                                  tab={'heart'} name={'Tricuspid'}></TricuspidPopover>
              </div>
              <div className="mitralpopover">
                <MitralPopover proxy={props.proxy} token={props.token} 
                               diaphragm={mitraldiaphragm} bell={mitralbell}
                               setStatus={setStatusMitral} status={statusMitral}
                               tab={'heart'} name={'Mitral'}></MitralPopover>
              </div>                            
            </div>




            <div className="heart-ausc">
              <p className="heart-auscultation">
                <span className="text-wrapper">Heart Auscultation </span>
                <span className="span">(anterior only)</span>
              </p>
            </div>




            <div className="thrill">
              <p className="normal">
                <text
                  className="taylor"
                  type="text"
                  placeholder="no data available"
                  >{apthrill}</text>
              </p>
              <p className="span-wrapper">
                <span className="text-wrapper-3">Aortic/pulmonary thrill:</span>
              </p>
            </div>



            <div className="thrill-2">
              <p className="abnormal">
                <text
                  className="taylor"
                  type="text"
                  placeholder="no data available"
                  >{ptthrill}</text>
              </p>
              <p className="span-wrapper">
                <span className="text-wrapper-3">Pulmonary/tricuspid thrill:</span>
              </p>
            </div>


            <div className="thrill-3">
              <p className="p">
                <text
                  className="taylor"
                  type="text"
                  placeholder="no data available"
              >{tmthrill}</text>
              </p>
              <p className="span-wrapper">
                <span className="text-wrapper-3">Tricuspid/mitral thrill:</span>
              </p>
            </div>

            {/* Pulmonary Tricuspid Thrill */}
            <div className="parasternal-heave">
              <p className="abnormal-2">
                <text
                  className="taylor"
                  type="text"
                  placeholder="no data available"
              >{paraheave}</text>
              </p>
              <p className="span-wrapper">
                <span className="text-wrapper-3">Parasternal heave:</span>
              </p>

            </div>



            {/* Notes section */}
            <div className="notes">
              <PhysicianNotes notes={note} token={props.token} proxy={props.proxy} tab="heart"></PhysicianNotes>
            </div>




            {/* Interpreting ECG */}
            <p className="normal-2">
              <span className="text-wrapper-7">Normal?</span>
            </p>
            <span className="tick-circle">
              <div>
                <CheckandXButtons setStatus={setStatus} status={status}
                                  proxy ={props.proxy} token={props.token} 
                                  tab={'heart'} name={'EKG'}/>
              </div>            
            </span>

          </div>



          {/* TABS */}
          <div className="tabs">
            <div className="frame">
              <a href="/demographics" className="span-wrapper-2" style={{ textDecoration: 'none' }}>
                  <span className="text-wrapper-8">Demographics</span>
              </a>
            </div>
            <div className="general-wrapper">
              <a href="/general" className="span-wrapper-2" style={{ textDecoration: 'none' }}>
                  <span className="text-wrapper-8">General</span>
              </a>
            </div>
            <div className="lungs-wrapper">
              <a href="/lungs" className="span-wrapper-2" style={{ textDecoration: 'none' }}>
                  <span className="text-wrapper-8">Lungs</span>
              </a>
            </div>
            <div className="pulses-wrapper">
              <a href="/pulses" className="span-wrapper-2" style={{ textDecoration: 'none' }}>
                  <span className="text-wrapper-8">Pulses</span>
              </a>
            </div>
            <div className="abdomen-wrapper">
              <a href="/abdomen" className="span-wrapper-2" style={{ textDecoration: 'none' }}>
                  <span className="text-wrapper-8">Abdomen</span>
              </a>
            </div>
            <div className="heart-wrapper">
              <a href="/heart" className="span-wrapper-2" style={{ textDecoration: 'none' }}>
                  <span className="text-wrapper-8">Heart</span>
              </a>
            </div>
            <div className="legs-wrapper">
              <a href="/legs" className="span-wrapper-2" style={{ textDecoration: 'none' }}>
                  <span className="text-wrapper-8">Legs</span>
              </a>
            </div>
            <div className="summary-wrapper">
              <a href="/summary" className="span-wrapper-2" style={{ textDecoration: 'none' }}>
                  <span className="text-wrapper-8">Summary</span>
              </a>
            </div>
          </div>
          
          <NavBar proxy={props.proxy} token={props.token} /> {/* Display NavBar at the top */}


        </div>
      </div>




      <p className="single-lead-ECG">
      <span className="text-wrapper">Single-Lead ECG Recording</span>
      </p>

      <div className="ecg-picture">
        <Img
          src= {ecgimg}
        />
      </div>




    </div>
  );
};