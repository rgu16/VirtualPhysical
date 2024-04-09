import React from "react";
import "./style.css";
import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import CarotidPopover from "components/CarotidPopover/CarotidPopover.jsx"

import { Img, Line, List, Text, TabNav, NavBar } from "components";
import { Link } from 'react-router-dom';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import Stack from '@mui/material/Stack';
import { useState, useRef, useEffect } from 'react';
import {  PhysicianNotes } from "components";
import axios from 'axios';
import { styled } from '@mui/material/styles';
// import Button from '@mui/material/Button';
// import Stack from '@mui/material/Stack';
import { jwtDecode } from "jwt-decode";


export const PulsesPage = (props) => {
  // State for the radial pulse value and whether it's out of range
  // const [radialPulseValue, setRadialPulseValue] = useState('');
  // const [isRadialOutOfRange, setIsRadialOutOfRange] = useState('');

  const [radialPulseValue, setRadialPulseValue] = useState('');
  const [radialStatus, setRadialStatus] = useState('');
  const [brachialPulseValue, setBrachialPulseValue] = useState('');
  const [brachialStatus, setBrachialStatus] = useState('');
  const [carotidPulseValue, setCarotidPulseValue] = useState('');
  const [carotidStatus, setCarotidStatus] = useState('');
  const [dorsalisPulseValue, setDorsalisPulseValue] = useState('');
  const [dorsalisStatus, setDorsalisStatus] = useState('');

  const [systolicPulseValue, setSystolicPulseValue] = useState('');
  const [systolicStatus, setSystolicStatus] = useState('');
  const [diastolicPulseValue, setDiastolicPulseValue] = useState('');
  const [diastolicStatus, setDiastolicStatus] = useState('');

  const [heartRateValue, setheartRateValue] = useState('')
  const [heartRateStatus, setheartRateStatus] = useState('')

  const [JugularValue, setJugularValue] = useState('');
  const [JugularStatus, setJugularStatus] = useState('');


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


  const patient = jwtDecode(props.token).patient.split("/");
  // const firstname = useState(patient[1]);
  // const lastname = useState(patient[0]);
  // const fileInputRef = useRef(null);
  // const [imageLoaded, setImageLoaded] = useState(false);
  const [note, setNotes] = useState();

  
    useEffect(() => {
      axios({
          method: "GET",
          url: props.proxy + "download/pulses",
          headers: {
          Authorization: 'Bearer ' + props.token
          }
      })
      .then((response) => {
          const res = response.data
          console.log(res)

          const RadialPulseValue = parseInt(res.detail['radial'], 10);
          setRadialPulseValue(RadialPulseValue)
          const brachialValue = parseInt(res.detail['brachial'], 10);
          setBrachialPulseValue(brachialValue);
          const CarotidPulseValue = parseInt(res.detail['carotid'], 10);
          setCarotidPulseValue(CarotidPulseValue)
          const DorsalisPulseValue = parseInt(res.detail['pedis'], 10);
          setDorsalisPulseValue(DorsalisPulseValue)
          const SystolicPulseValue = parseInt(res.detail['systolic'], 10);
          setSystolicPulseValue(SystolicPulseValue)
          const DiastolicPulseValue = parseInt(res.detail['diastolic'], 10);
          setDiastolicPulseValue(DiastolicPulseValue)

          const heartRateValue = parseInt(res.detail['heartrate'], 10);
          setheartRateValue(heartRateValue)

          const JugularValue = res.detail['jvp']
          setJugularValue(JugularValue)

          let JugularStatus = '';
          // Check if the value is numeric
          if (!isNaN(JugularValue)) {
            if (JugularValue > 9) {
              JugularStatus = 'Abnormally high jugular venous pressure (JVP) ';
            // } else if (numericValue >= 60 && numericValue <= 80) {
            //   status = 'Normal';
            } else {
              JugularStatus = '';
            }
            setJugularStatus(JugularStatus);
          }

          let heartRateStatus = '';
          // Check if the value is numeric
          if (!isNaN(heartRateValue)) {
            if (heartRateValue <= 59) {
              heartRateStatus = 'Abnormally slow heart rate';
            // } else if (numericValue >= 60 && numericValue <= 80) {
            //   status = 'Normal';
            } else if (heartRateValue >= 60 && heartRateValue <= 100) {
              heartRateStatus = 'Normal';
            } else if (heartRateValue >= 101) {
              heartRateStatus = 'Abnormally fast heart rate';
            }
            setheartRateStatus(heartRateStatus);
          } else {
            // The input is non-numeric
            setheartRateStatus('');
          }


          let systolicStatus = '';
          // Check if the input value is not empty
          // if (value.trim() !== '') {
          //   // Convert the value to a number for comparison
          //   const numericValue = parseInt(value, 10);

          // Ensure the conversion to a number was successful (i.e., the result is not NaN)
          if (!isNaN(SystolicPulseValue)) {
            if (SystolicPulseValue <= 89) {
              systolicStatus = 'Abnormal (low blood pressure)';
            // } else if (numericValue >= 90 && numericValue <= 120) {
            //   status = 'Normal';
            } else if (SystolicPulseValue >= 121 && SystolicPulseValue <= 140) {
              systolicStatus = 'Slightly abnormal';
            } else if (SystolicPulseValue > 140) {
              systolicStatus = 'Abnormal (high blood pressure)';
            }
          } else {
            // Handle non-numeric input gracefully
            systolicStatus = 'Invalid input';
          }
          setSystolicStatus(systolicStatus)


          let diastolicStatus = '';
          // Check if the value is numeric
          if (!isNaN(DiastolicPulseValue)) {
            if (DiastolicPulseValue <= 59) {
              diastolicStatus = 'Abnormal (low blood pressure)';
            // } else if (numericValue >= 60 && numericValue <= 80) {
            //   status = 'Normal';
            } else if (DiastolicPulseValue >= 81 && DiastolicPulseValue <= 89) {
              diastolicStatus = 'Slightly abnormal';
            } else if (DiastolicPulseValue >= 90) {
              diastolicStatus = 'Abnormal (high blood pressure)';
            }
            setDiastolicStatus(diastolicStatus);
          } 
          else {
            // The input is non-numeric
            setDiastolicStatus('Invalid input');
          }
        // else {
        //   // The textbox is blank, reset the status or take no action
        //   setDiastolicStatus('')
        // }
          setDiastolicStatus(diastolicStatus)


          // Determine the brachial status based on the value
          let brachialStatus = '';
          switch (brachialValue) {
            case 0:
              brachialStatus = 'absent';
              break;
            case 1:
              brachialStatus = 'weak';
              break;
            case 2:
              brachialStatus = 'normal';
              break;
            case 3:
              brachialStatus = 'increased';
              break;
            case 4:
              brachialStatus = 'bounding';
              break;
            default:
              brachialStatus = ''; // Adjust as needed for other values
          }
          // Update the brachial status state
          setBrachialStatus(brachialStatus);

        
          // Determine the radial pulse status
          let RadialStatus = '';
          switch (RadialPulseValue) {
            case 0:
              RadialStatus = 'absent';
              break;
            case 1:
              RadialStatus = 'weak';
              break;
            case 2:
              RadialStatus = 'normal';
              break;
            case 3:
              RadialStatus = 'increased';
              break;
            case 4:
              RadialStatus = 'bounding';
              break;
            default:
              RadialStatus = ''; // For values not in the 0-4 range or non-numeric values
          }
          setRadialStatus(RadialStatus);

        
          // Determine the carotid pulse status
          let CarotidStatus = '';
          switch (CarotidPulseValue) {
            case 0:
              CarotidStatus = 'absent';
              break;
            case 1:
              CarotidStatus = 'weak';
              break;
            case 2:
              CarotidStatus = 'normal';
              break;
            case 3:
              CarotidStatus = 'increased';
              break;
            case 4:
              CarotidStatus = 'bounding';
              break;
            default:
              CarotidStatus = ''; // For values not in the 0-4 range or non-numeric values
          }
          setCarotidStatus(CarotidStatus);
          

          // Determine the dorsalis pulse status
          let DorsalisStatus = '';
          switch (DorsalisPulseValue) {
            case 0:
              DorsalisStatus = 'absent';
              break;
            case 1:
              DorsalisStatus = 'weak';
              break;
            case 2:
              DorsalisStatus = 'normal';
              break;
            case 3:
              DorsalisStatus = 'increased';
              break;
            case 4:
              DorsalisStatus = 'bounding';
              break;
            default:
              DorsalisStatus = ''; // For values not in the 0-4 range or non-numeric values
          }
          setDorsalisStatus(DorsalisStatus);
          

          if(res.hasOwnProperty("note")){
            setNotes(res.note)
            console.log(res.note)
          }
          // if(res.hasOwnProperty("profile_pic")){
          //   setProfilePic(res.profile_pic)
          // }
          }).catch((error) => {
          if (error.response){
          console.log(error.response)
          console.log(error.response.status)
          console.log(error.response.headers)}
          })
          
    }, [props]);



  // const [carotidPulseValue, setcarotidPulseValue] = useState('');
  // const [iscarotidOutOfRange, setIscarotidOutOfRange] = useState(false);

  // // Handler for radial pulse input changes
  // const handlecarotidChange = (e) => {
  //   const value = e.target.value;
  //   setcarotidPulseValue(value);

  //   // Check if the numeric value is out of the -3 to +3 range
  //   const numericValue = parseInt(value, 10);
  //   if (numericValue < 0 || numericValue > 4) {
  //     setIscarotidOutOfRange(true);
  //   } else {
  //     setIscarotidOutOfRange(false);
  //   }
  // }
  const handleRadialChange = (e) => {
    const value = e.target.value;
    setRadialPulseValue(value);

    // Convert the value to a number for comparison
    const numericValue = parseInt(value, 10);

    // Determine the carotid pulse status
    let status = '';
    switch (numericValue) {
      case 0:
        status = 'absent';
        break;
      case 1:
        status = 'weak';
        break;
      case 2:
        status = 'normal';
        break;
      case 3:
        status = 'increased';
        break;
      case 4:
        status = 'bounding';
        break;
      default:
        status = ''; // For values not in the 0-4 range or non-numeric values
    }

    setRadialStatus(status);
  };

  const handleCarotidChange = (e) => {
    const value = e.target.value;
    setCarotidPulseValue(value);

    // Convert the value to a number for comparison
    const numericValue = parseInt(value, 10);

    // Determine the carotid pulse status
    let status = '';
    switch (numericValue) {
      case 0:
        status = 'absent';
        break;
      case 1:
        status = 'weak';
        break;
      case 2:
        status = 'normal';
        break;
      case 3:
        status = 'increased';
        break;
      case 4:
        status = 'bounding';
        break;
      default:
        status = ''; // For values not in the 0-4 range or non-numeric values
    }

    setCarotidStatus(status);
  };


  const handleBrachialChange = (e) => {
    const value = e.target.value;
    setBrachialPulseValue(value);

    // Convert the value to a number for comparison
    const numericValue = parseInt(value, 10);

    // Determine the carotid pulse status
    let status = '';
    switch (numericValue) {
      case 0:
        status = 'absent';
        break;
      case 1:
        status = 'weak';
        break;
      case 2:
        status = 'normal';
        break;
      case 3:
        status = 'increased';
        break;
      case 4:
        status = 'bounding';
        break;
      default:
        status = ''; // For values not in the 0-4 range or non-numeric values
    }
    setBrachialStatus(status);
  };


  const handleDorsalisChange = (e) => {
    const value = e.target.value;
    setDorsalisPulseValue(value);

    // Convert the value to a number for comparison
    const numericValue = parseInt(value, 10);

    // Determine the carotid pulse status
    let status = '';
    switch (numericValue) {
      case 0:
        status = 'absent';
        break;
      case 1:
        status = 'weak';
        break;
      case 2:
        status = 'normal';
        break;
      case 3:
        status = 'increased';
        break;
      case 4:
        status = 'bounding';
        break;
      default:
        status = ''; // For values not in the 0-4 range or non-numeric values
    }

    setDorsalisStatus(status);
  };


  const handleSystolicChange = (e) => {
    const value = e.target.value;
    setSystolicPulseValue(value);

    // Convert the value to a number for comparison
    const numericValue = parseInt(value, 10);

    let status = '';
    // Check if the input value is not empty
    if (value.trim() !== '') {
      // Convert the value to a number for comparison
      const numericValue = parseInt(value, 10);

    // Ensure the conversion to a number was successful (i.e., the result is not NaN)
    if (!isNaN(numericValue)) {
      if (numericValue <= 89) {
        status = 'Abnormal (low blood pressure)';
      // } else if (numericValue >= 90 && numericValue <= 120) {
      //   status = 'Normal';
      } else if (numericValue >= 121 && numericValue <= 140) {
        status = 'Slightly abnormal';
      } else if (numericValue > 140) {
        status = 'Abnormal (high blood pressure)';
      }
    } else {
      // Handle non-numeric input gracefully
      status = 'Invalid input';
    }
  }
    setSystolicStatus(status);
  };


  const handleDiastolicChange = (e) => {
    const value = e.target.value;
    setDiastolicPulseValue(value);

    // Convert the value to a number for comparison
    const numericValue = parseInt(value, 10);

    if (value.trim() !== '') {
      let status = '';
      // Check if the value is numeric
      if (!isNaN(numericValue)) {
        if (numericValue <= 59) {
          status = 'Abnormal (low blood pressure)';
        // } else if (numericValue >= 60 && numericValue <= 80) {
        //   status = 'Normal';
        } else if (numericValue >= 81 && numericValue <= 89) {
          status = 'Slightly abnormal';
        } else if (numericValue >= 90) {
          status = 'Abnormal (high blood pressure)';
        }
        setDiastolicStatus(status);
      } else {
        // The input is non-numeric
        setDiastolicStatus('Invalid input');
      }
    } else {
      // The textbox is blank, reset the status or take no action
      setDiastolicStatus(''); // Resetting the status for blank input
    }
  };


  const handleHeartRateChange = (e) => {
    const value = e.target.value;
    setheartRateValue(value);

    // Convert the value to a number for comparison
    const numericValue = parseInt(value, 10);

    if (value.trim() !== '') {
      let status = '';
      // Check if the value is numeric
      if (!isNaN(numericValue)) {
        if (numericValue <= 59) {
          status = 'Abnormally slow heart rate';
        // } else if (numericValue >= 60 && numericValue <= 80) {
        //   status = 'Normal';
        } else if (numericValue >= 60 && numericValue <= 100) {
          status = 'Normal';
        } else if (numericValue >= 101) {
          status = 'Abnormally fast heart rate';
        }
        setheartRateStatus(status);
      }
    } else {
      // The textbox is blank, reset the status or take no action
      setheartRateStatus(''); // Resetting the status for blank input
    }
  }


  const handleJugularChange = (e) => {
    const value = e.target.value
    setJugularValue(value)

    const numericValue = parseInt(value, 10);

    // JugularStatus, setJugularStatus
    if (value.trim() !== '') {
      let status = '';
      // Check if the value is numeric
      if (!isNaN(numericValue)) {
        if (numericValue > 9) {
          status = 'Abnormally high jugular venous pressure (JVP) ';
        // } else if (numericValue >= 60 && numericValue <= 80) {
        //   status = 'Normal';
        } else {
          status = '';
        }
        setJugularStatus(status);
      }
    }
  }


  return (
    <div className = "bg-white flex flex-row justify-center w-full relative top-[550px]">
    <div className="pulses-tab">
      <div className="overlap-wrapper">
        <div className="overlap">
          <div className="overlap-group">
            <div className="blood-pressure">
              
              <div className="systolic">
                <p className="span-wrapper">
                  <span className="text-wrapper">Systolic:</span>
                </p>
                <div className="div">

                <input
                    type="text"
                    className={`textbox-43 ${systolicStatus && systolicStatus !== 'normal' ? 'input-error' : ''}`}
                    value={systolicPulseValue}
                    onChange={handleSystolicChange}
                    placeholder="no data found"
                  />
                  {systolicStatus && systolicStatus !== 'normal' && (
                    <div className="error-popup">Abnormal systolic value: {systolicStatus} </div>
                  )}
                </div>
          
                <p className="mm-hg">
                  <span className="span">mmHg</span>
                </p>
              </div>
              
              <div className="diastolic">
                <p className="span-wrapper">
                  <span className="text-wrapper">Diastolic:</span>
                </p>
                <div className="overlap-2">
                <input
                    type="text"
                    className={`textbox-43 ${diastolicStatus && diastolicStatus !== 'normal' ? 'input-error' : ''}`}
                    value={diastolicPulseValue}
                    onChange={handleDiastolicChange}
                    placeholder="no data found"
                  />
                  {diastolicStatus && diastolicStatus !== 'normal' && (
                    <div className="error-popup">Abnormal diastolic value: {diastolicStatus}</div>
                  )}
                </div>
          
                <p className="mm-hg">
                  <span className="span">mmHg</span>
                </p>

              </div>
              <div className="bpm">
                <p className="span-wrapper">
                  <span className="text-wrapper">Heart Rate:</span>
                </p>
                <div className="overlap-3">
                  <input
                    type="text"
                    className={`textbox-43 ${heartRateStatus && heartRateStatus !== 'normal' ? 'input-error' : ''}`}
                    value={heartRateValue}
                    onChange={handleHeartRateChange}
                    placeholder="no data found"
                  />
                  {heartRateStatus && heartRateStatus !== 'normal' && (
                    <div className="error-popup">Abnormal heart rate value: {heartRateStatus}</div>
                  )}
                </div>
                <p className="bpm-2">
                  <span className="span">bpm</span>
                </p>
              </div>
            </div>




            <div className="popover">

              <div className="carotidpopover">
                <CarotidPopover></CarotidPopover>
              </div>                      

            </div>



            <img
              className="carotid-img"
              alt="carotidimg"
              src="https://cdn.animaapp.com/projects/65a945881c395bf52b1e3e78/releases/65a9e82814bc0dc531a973f2/img/carotid-img-1@2x.png"
            />





            <p className="carotid-auscultation">
              <span className="text-wrapper-2">Carotid Auscultation</span>
            </p>
            <div className="pulse">
              <p className="pulses">
                <span className="text-wrapper-2">Pulses</span>
              </p>


              <div className="radial">
                <div className="overlap-4">

                  <input
                    type="text"
                    className={`textbox-42 ${radialStatus && radialStatus !== 'normal' ? 'input-error' : ''}`}
                    value={radialPulseValue}
                    onChange={handleRadialChange}
                    placeholder="no data found"
                  />
                  {radialStatus && radialStatus !== 'normal' && (
                    <div className="error-popup">Abnormal radial pulse status: {radialStatus}</div>
                  )}


                </div>
                <p className="span-wrapper">
                  <span className="text-wrapper">Radial pulse:</span>
                </p>
              </div>
              

              <div className="brachial">
                <div className="overlap-4">
                <input
                    type="text"
                    className={`textbox-42 ${carotidStatus && carotidStatus !== 'normal' ? 'input-error' : ''}`}
                    value={brachialPulseValue}
                    onChange={handleBrachialChange}
                    placeholder="no data found"
                  />
                  {brachialStatus && brachialStatus !== 'normal' && (
                    <div className="error-popup">Abnormal posterior tibial status: {brachialStatus}</div>
                  )}
                </div>
          
                <p className="span-wrapper">
                  <span className="text-wrapper">Posterior tibial pulse:</span>
                </p>
              </div>

              <div className="carotid">
                <div className="overlap-4">
                  <input
                    type="text"
                    className={`textbox-42 ${carotidStatus && carotidStatus !== 'normal' ? 'input-error' : ''}`}
                    value={carotidPulseValue}
                    onChange={handleCarotidChange}
                    placeholder="no data found"
                  />
                  {carotidStatus && carotidStatus !== 'normal' && (
                    <div className="error-popup">Abnormal carotid pulse status: {carotidStatus}</div>
                  )}
                </div>
                

                <p className="span-wrapper">
                  <span className="text-wrapper">Carotid pulse:</span>
                </p>
              </div>
              
              <div className="dorsalis-pedis">
                <div className="group">
                  <div className="overlap-4">
                  <input
                    type="text"
                    className={`textbox-42 ${dorsalisStatus && dorsalisStatus !== 'normal' ? 'input-error' : ''}`}
                    value={dorsalisPulseValue}
                    onChange={handleDorsalisChange}
                    placeholder="no data found"
                  />
                  {dorsalisStatus && dorsalisStatus !== 'normal' && (
                    <div className="error-popup">Abnormal dorsalis pedis pulse status: {dorsalisStatus}</div>
                  )}
                </div>
                

                <p className="span-wrapper">
                  <span className="text-wrapper">Dorsalis pedis pulse:</span>
                </p>

                </div>
              </div>
            </div>
            
            <div className="JVP">
              <input
                    type="text"
                    className={`abnormal ${JugularStatus && JugularStatus !== 'normal' ? 'input-error' : ''}`}
                    value={JugularValue}
                    onChange={handleJugularChange}
                    placeholder="no data found"
                  />
              {JugularStatus && JugularStatus !== 'normal' && (
                    <div className="error-popup">Abnormal jugular venous pressure status: {JugularStatus}</div>
              )}


              <p className="jugular-venous">
                <span className="text-wrapper">Jugular Venous Pressure (JVP) Evaluation:</span>
              </p>
            </div>

            <div className="notes">
            <PhysicianNotes notes={note} token={props.token} proxy={props.proxy} tab="download/pulses"></PhysicianNotes>
            </div>
          </div>

          <div className="tabs">
            <div className="frame">
              <a href="/demographics" className="span-wrapper-3" style={{ textDecoration: 'none' }}>
                  <span className="text-wrapper-6">Demographics</span>
              </a>
            </div>
            <div className="general-wrapper">
              <a href="/general" className="span-wrapper-3" style={{ textDecoration: 'none' }}>
                  <span className="text-wrapper-6">General</span>
              </a>
            </div>
            <div className="lungs-wrapper">
              <a href="/lungs" className="span-wrapper-3" style={{ textDecoration: 'none' }}>
                  <span className="text-wrapper-6">Lungs</span>
              </a>
            </div>
            <div className="pulses-wrapper">
              <a href="/pulses" className="span-wrapper-3" style={{ textDecoration: 'none' }}>
                  <span className="text-wrapper-6">Pulses</span>
              </a>
            </div>
            <div className="abdomen-wrapper">
              <a href="/abdomen" className="span-wrapper-3" style={{ textDecoration: 'none' }}>
                  <span className="text-wrapper-6">Abdomen</span>
              </a>
            </div>
            <div className="heart-wrapper">
              <a href="/heart" className="span-wrapper-3" style={{ textDecoration: 'none' }}>
                  <span className="text-wrapper-6">Heart</span>
              </a>
            </div>
            <div className="legs-wrapper">
              <a href="/legs" className="span-wrapper-3" style={{ textDecoration: 'none' }}>
                  <span className="text-wrapper-6">Legs</span>
              </a>
            </div>
            <div className="summary-wrapper">
              <a href="/summary" className="span-wrapper-3" style={{ textDecoration: 'none' }}>
                  <span className="text-wrapper-6">Summary</span>
              </a>
            </div>
          </div>
          

          {/* NavBar */}
          <NavBar proxy={props.proxy} token={props.token} /> 

        </div>
      </div>
    </div>
    </div>
  );
};
