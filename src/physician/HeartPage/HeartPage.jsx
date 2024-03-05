// import React, { useState } from "react";
// import Button from '@mui/material/Button';
// import "./style.css";
// import Typography from '@mui/material/Typography';
// import { NavBar } from 'components'

// import AtrialPopover from 'components/AtrialPopover/AtrialPopover.js'
// import MitralPopover from 'components/MitralPopover/MitralPopover.js'
// import TricuspidPopover from 'components/TricuspidPopover/TricuspidPopover.jsx'
// import PulmonaryPopover from 'components/PulmonaryPopover/PulmonaryPopover.jsx'

// import CheckandXButtons from "components/CheckandXButtons";
// import ECG from "./ECG.png"

// export const HeartPage = (props) => {
//   const [anchorEl, setAnchorEl] = React.useState(null);
//   const handleClick = (event) => {
//     setAnchorEl(event.currentTarget);
//   };
//   const handleClose = () => {
//     setAnchorEl(null);
//   };
//   const open = Boolean(anchorEl);
//   const id = open ? 'image-popover' : undefined;

//   const [saveVariant, setSaveVariant] = useState('outlined');

//   const handleSaveClick = () => {
//     setSaveVariant(saveVariant === 'outlined' ? 'contained' : 'outlined');
//   };

//   return (
//     <div className="heart-tab">
//       <div className="overlap-wrapper">
//         <div className="overlap">
//           <div className="overlap-group">
            
//             <div className="div">

//               <div className="atrialpopover">
//                 <AtrialPopover></AtrialPopover>
//               </div>

//               <div className="pulmonarypopover">
//                 <PulmonaryPopover></PulmonaryPopover>
//               </div>

//               <div className="tricuspidpopover">
//                 <TricuspidPopover></TricuspidPopover>
//               </div>

//               <div className="mitralpopover">
//                 <MitralPopover></MitralPopover>
//               </div>                            

//             </div>


//             <div className="heart-ausc">
//               <p className="heart-auscultation">
//                 <span className="text-wrapper">Heart Auscultation </span>
//                 <span className="span">(anterior only)</span>
//               </p>
//             </div>
//             <div className="thrill">
//               <p className="normal">
//                 {/* <span className="text-wrapper-2">normal</span> */}
//                 <input
//                   className="taylor"
//                   type="text"
//                   placeholder="Normal"
//               />
//               </p>
//               <p className="span-wrapper">
//                 <span className="text-wrapper-3">Aortic/pulmonary thrill:</span>
//               </p>
//             </div>
//             <div className="thrill-2">
//               <p className="abnormal">
//                 {/* <span className="text-wrapper-2">abnormal</span> */}
//                 <input
//                   className="taylor"
//                   type="text"
//                   placeholder="Abnormal"
//               />
//               </p>
//               <p className="span-wrapper">
//                 <span className="text-wrapper-3">Pulmonary/tricuspid thrill:</span>
//               </p>
//             </div>
//             <div className="thrill-3">
//               <p className="p">
//                 {/* <span className="text-wrapper-2">normal</span> */}
//                 <input
//                   className="taylor"
//                   type="text"
//                   placeholder="Normal"
//               />
//               </p>
//               <p className="span-wrapper">
//                 <span className="text-wrapper-3">Tricuspid/mitral thrill:</span>
//               </p>
//             </div>
//             <div className="parasternal-heave">
//               <p className="abnormal-2">
//                 {/* <span className="text-wrapper-2">abnormal</span> */}
//                 <input
//                   className="taylor"
//                   type="text"
//                   placeholder="Abnormal"
//               />
//               </p>
//               <p className="span-wrapper">
//                 <span className="text-wrapper-3">Parasternal heave:</span>
//               </p>

//             </div>
//             <div className="notes">

//               <div className="specialty-physician-wrapper">
//                 <p className="specialty-physician">
//                   <textarea className="specialty-physician-textarea" placeholder="specialty physician notes on heart measurements go here"></textarea>
//                 </p>
//               </div>

//               <p className="notes-2">
//                 <span className="text-wrapper-5">Notes:</span>
//               </p>

//               <button className="save-button">
//                 <div className="overlap-group-2">
//                   <div className="background" />
//                   <Button variant={saveVariant} onClick={handleSaveClick}>
//                     {saveVariant === 'outlined' ? 'Save' : 'Saved'}
//                   </Button>
//                 </div>
//               </button>

//             </div>



//             <p className="normal-2">
//               <span className="text-wrapper-7">Normal?</span>
//             </p>

//             <span className="tick-circle">
//               <div>
//                 <CheckandXButtons />
//               </div>            
//             </span>



//           </div>


//           {/* TABS */}
//           <div className="tabs">
//             <div className="frame">
//               {/* <p className="span-wrapper-2">
//                 <span className="text-wrapper-8">Demographics</span>
//               </p> */}
//               <a href="/demographics" className="span-wrapper-2" style={{ textDecoration: 'none' }}>
//                   <span className="text-wrapper-8">Demographics</span>
//               </a>
//             </div>
//             <div className="general-wrapper">
//               {/* <p className="span-wrapper-2">
//                 <span className="text-wrapper-8">General</span>
//               </p> */}
//               <a href="/general" className="span-wrapper-2" style={{ textDecoration: 'none' }}>
//                   <span className="text-wrapper-8">General</span>
//               </a>
//             </div>
//             <div className="lungs-wrapper">
//               {/* <p className="span-wrapper-2">
//                 <span className="text-wrapper-8">Lungs</span>
//               </p> */}
//               <a href="/lungs" className="span-wrapper-2" style={{ textDecoration: 'none' }}>
//                   <span className="text-wrapper-8">Lungs</span>
//               </a>
//             </div>
//             <div className="pulses-wrapper">
//               {/* <p className="span-wrapper-2">
//                 <span className="text-wrapper-8">Pulses</span>
//               </p> */}
//               <a href="/pulses" className="span-wrapper-2" style={{ textDecoration: 'none' }}>
//                   <span className="text-wrapper-8">Pulses</span>
//               </a>
//             </div>
//             <div className="abdomen-wrapper">
//               {/* <p className="span-wrapper-2">
//                 <span className="text-wrapper-8">Abdomen</span>
//               </p> */}
//               <a href="/abdomen" className="span-wrapper-2" style={{ textDecoration: 'none' }}>
//                   <span className="text-wrapper-8">Abdomen</span>
//               </a>
//             </div>
//             <div className="heart-wrapper">
//               {/* <p className="span-wrapper-2">
//                 <span className="text-wrapper-8">Heart</span>
//               </p> */}
//               <a href="/heart" className="span-wrapper-2" style={{ textDecoration: 'none' }}>
//                   <span className="text-wrapper-8">Heart</span>
//               </a>
//             </div>
//             <div className="legs-wrapper">
//               {/* <p className="span-wrapper-2">
//                 <span className="text-wrapper-8">Legs</span>
//               </p> */}
//               <a href="/legs" className="span-wrapper-2" style={{ textDecoration: 'none' }}>
//                   <span className="text-wrapper-8">Legs</span>
//               </a>
//             </div>
//             <div className="summary-wrapper">
//               {/* <p className="span-wrapper-2">
//                 <span className="text-wrapper-8">Summary</span>
//               </p> */}
//               <a href="/summary" className="span-wrapper-2" style={{ textDecoration: 'none' }}>
//                   <span className="text-wrapper-8">Summary</span>
//               </a>
//             </div>
//           </div>
          
//           <NavBar proxy={props.proxy} token={props.token} /> {/* Display NavBar at the top */}


//         </div>
//       </div>


//     <p className="single-lead-ECG">
//       <span className="text-wrapper">Single-Lead ECG Recording</span>
//     </p>

//     <div className="ecg-picture">
//       <img src={ECG} alt="ECG" />
//     </div>

//     </div>
//   );
// };
import React from "react";
import { useState, useRef, useEffect } from 'react';
import axios from 'axios';
import Button from '@mui/material/Button';
import "./style.css";
import Typography from '@mui/material/Typography';
import { NavBar, PhysicianNotes, Img, Text } from 'components'
import AtrialPopover from 'components/AtrialPopover/AtrialPopover.js'
import MitralPopover from 'components/MitralPopover/MitralPopover.js'
import TricuspidPopover from 'components/TricuspidPopover/TricuspidPopover.jsx'
import PulmonaryPopover from 'components/PulmonaryPopover/PulmonaryPopover.jsx'
import CheckandXButtons from "components/CheckandXButtons";
export const HeartPage = (props) => {
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
        
        console.log(res.atrialdiaphram)
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
                <AtrialPopover proxy={props.proxy} token={props.token} diaphragm={atrialdiaphragm} bell={atrialbell}></AtrialPopover>
              </div>
              <div className="pulmonarypopover">
                <PulmonaryPopover proxy={props.proxy} token={props.token} diaphragm={pulmonarydiaphragm} bell={pulmonarybell}></PulmonaryPopover>
              </div>
              <div className="tricuspidpopover">
                <TricuspidPopover proxy={props.proxy} token={props.token} diaphragm={tricuspiddiaphragm} bell={tricuspidbell}></TricuspidPopover>
              </div>
              <div className="mitralpopover">
                <MitralPopover proxy={props.proxy} token={props.token} diaphragm={mitraldiaphragm} bell={mitralbell}></MitralPopover>
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
                {/* <span className="text-wrapper-2">normal</span> */}
                <text
                  className="taylor"
                  type="text"
                  placeholder="Normal"
                  >{apthrill}</text>
              </p>
              <p className="span-wrapper">
                <span className="text-wrapper-3">Aortic/pulmonary thrill:</span>
              </p>
            </div>
            <div className="thrill-2">
              <p className="abnormal">
                {/* <span className="text-wrapper-2">abnormal</span> */}
                <text
                  className="taylor"
                  type="text"
                  placeholder="Abnormal"
                  >{ptthrill}</text>
              </p>
              <p className="span-wrapper">
                <span className="text-wrapper-3">Pulmonary/tricuspid thrill:</span>
              </p>
            </div>
            <div className="thrill-3">
              <p className="p">
                {/* <span className="text-wrapper-2">normal</span> */}
                <text
                  className="taylor"
                  type="text"
                  placeholder="Normal"
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
                  placeholder="Abnormal"
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
                <CheckandXButtons />
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