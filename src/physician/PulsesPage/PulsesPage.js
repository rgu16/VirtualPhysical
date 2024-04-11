import React from "react";
import "./style.css";
import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import CarotidPopover from "components/CarotidPopover/CarotidPopover.jsx"
import { useHistory, useNavigate } from 'react-router-dom';

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
import { orange } from "@mui/material/colors";


export const PulsesPage = (props) => {
  // State for the radial pulse value and whether it's out of range
  // const [radialPulseValue, setRadialPulseValue] = useState('');
  // const [isRadialOutOfRange, setIsRadialOutOfRange] = useState('');
  const [submitVariant, setSubmitVariant] = useState('outlined');
  const navigate = useNavigate();

  const [radialPulseValue, setRadialPulseValue] = useState('');
  const [radialStatus, setRadialStatus] = useState('');
  const [brachialPulseValue, setBrachialPulseValue] = useState('');
  const [brachialStatus, setBrachialStatus] = useState('');
  const [carotidPulseValue, setCarotidPulseValue] = useState('');
  const [carotidStatus, setCarotidStatus] = useState('');
  const [dorsalisPulseValue, setDorsalisPulseValue] = useState('');
  const [dorsalisStatus, setDorsalisStatus] = useState('');

  const [radialWarning, setRadialWarning] = useState('');
  const [showRadialWarning, setShowRadialWarning] = useState(true);

  const [brachialWarning, setBrachialWarning] = useState('');
  const [showBrachialWarning, setShowBrachilWarning] = useState(true);

  const [carotidWarning, setCarotidWarning] = useState('');
  const [showCarotidWarning, setShowCarotidWarning] = useState(true);

  const [dorsalisWarning, setDorsalisWarning] = useState('');
  const [showDorsalisWarning, setShowDorsalisWarning] = useState(true);

  const [systolicPulseValue, setSystolicPulseValue] = useState('');
  const [systolicStatus, setSystolicStatus] = useState('');
  const [diastolicPulseValue, setDiastolicPulseValue] = useState('');
  const [diastolicStatus, setDiastolicStatus] = useState('');


  const [HeartRateWarning, setHeartRateWarning] = useState('');
  const [showHeartRateWarning, setShowHeartRateWarning] = useState(true);

  const [diastolicWarning, setDistolicWarning] = useState('');
  const [showDiastolicWarning, setShowDiastolicWarning] = useState(true);

  const [systolicWarning, setSystolicWarning] = useState('');
  const [showSystolicWarning, setShowSystolicWarning] = useState(true);

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

  const handleSubmit = () => {
    // Check if all fields are filled
    if (!JugularValue || !heartRateValue || !radialPulseValue || !brachialPulseValue || !carotidPulseValue || !dorsalisPulseValue || !systolicPulseValue || !diastolicPulseValue) {
      alert("Please fill in all required fields.");
      // Here, you would also navigate back to the "Lungs" tab if your app supports tab navigation.
      navigate('/pulses');
      // This might involve calling a function passed down from the parent component that controls the active tab.
      return;
    }

    // If all fields are filled, proceed with form submission logic
    setSubmitVariant(submitVariant === 'outlined' ? 'contained' : 'outlined');

    console.log("Form is ready to be submitted");
    // setSaveVariant('contained');

    // Reset form or navigate away upon successful submission
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
          url: props.proxy + "/download/pulses",
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
            // Reset warnings and status at the beginning of the validation
            setHeartRateWarning('');
            setheartRateStatus('');

            // Check if the input is non-numeric by trying to convert it to a number
            // and checking if the result is NaN, or by directly testing against non-numeric regex
            // if (!/^\d+$/.test(heartRateValue)) {
            //     // The input is non-numeric
            //     if (heartRateValue.trim() != '') {
            //         // Only set a warning if the input field is not blank
            //         setHeartRateWarning('Please enter a numeric value for the heart rate.');
            //     }
            //     // Ensure we don't attempt to evaluate the heart rate status for non-numeric input
            //     return;
            // }
            if (heartRateValue.trim() !== '') {
              // Use a regular expression to check if the input is numeric
              const isNumeric = /^\d+$/.test(heartRateValue);
          
              if (!isNumeric) {
                setHeartRateWarning('Please enter a numeric value for the heart rate.');
                setheartRateStatus('');
                return; // Exit the function if the input is not numeric
              }
            }

            // Proceed with numeric evaluation since we have a numeric input
            const numericHeartRateValue = parseInt(heartRateValue, 10);
            if (numericHeartRateValue <= 59) {
                heartRateStatus = 'Abnormally slow heart rate';
            } else if (numericHeartRateValue >= 60 && numericHeartRateValue <= 100) {
                heartRateStatus = 'Normal';
            } else if (numericHeartRateValue >= 101) {
                heartRateStatus = 'Abnormally fast heart rate';
            }

            setheartRateStatus(heartRateStatus);


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

        
            // Determine the carotid pulse status
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
          

            // Determine the carotid pulse status
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

    // Check if the text box is not blank before proceeding with further validation.
    if (value.trim() === '') {
      // If the text box is blank, do not set any warning or status, and exit early.
      setRadialWarning('');
      setRadialStatus('');
      return;
    }

    // At this point, the input is not blank, so we proceed to check if it's numeric.
    const isNumeric = /^\d+$/.test(value);
    
    if (!isNumeric) {
      // If the input is not numeric, set the warning message.
      setRadialWarning('Please enter a numeric value for the radial value.');
      // Ensure the heart rate status is cleared as the input is invalid.
      setRadialStatus('');
      return; // Exit the function as the validation has concluded with a non-numeric input.
    }

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

      // Check if the text box is not blank before proceeding with further validation.
      if (value.trim() === '') {
        // If the text box is blank, do not set any warning or status, and exit early.
        setCarotidWarning('');
        setCarotidStatus('');
        return;
      }
  
      // At this point, the input is not blank, so we proceed to check if it's numeric.
      const isNumeric = /^\d+$/.test(value);
      
      if (!isNumeric) {
        // If the input is not numeric, set the warning message.
        setCarotidWarning('Please enter a numeric value for the carotid value.');
        // Ensure the heart rate status is cleared as the input is invalid.
        setCarotidStatus('');
        return; // Exit the function as the validation has concluded with a non-numeric input.
      }

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

      // Check if the text box is not blank before proceeding with further validation.
      if (value.trim() === '') {
        // If the text box is blank, do not set any warning or status, and exit early.
        setBrachialWarning('');
        setBrachialStatus('');
        return;
      }
  
      // At this point, the input is not blank, so we proceed to check if it's numeric.
      const isNumeric = /^\d+$/.test(value);
      
      if (!isNumeric) {
        // If the input is not numeric, set the warning message.
        setBrachialWarning('Please enter a numeric value for the brachial value.');
        // Ensure the heart rate status is cleared as the input is invalid.
        setBrachialStatus('');
        return; // Exit the function as the validation has concluded with a non-numeric input.
      }

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

    // Check if the text box is not blank before proceeding with further validation.
    if (value.trim() === '') {
      // If the text box is blank, do not set any warning or status, and exit early.
      setDorsalisWarning('');
      setDorsalisStatus('');
      return;
    }

    // At this point, the input is not blank, so we proceed to check if it's numeric.
    const isNumeric = /^\d+$/.test(value);
    
    if (!isNumeric) {
      // If the input is not numeric, set the warning message.
      setDorsalisWarning('Please enter a numeric value for the dorsal value.');
      // Ensure the heart rate status is cleared as the input is invalid.
      setDorsalisStatus('');
      return; // Exit the function as the validation has concluded with a non-numeric input.
    }

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

    // Check if the text box is not blank before proceeding with further validation.
    if (value.trim() === '') {
      // If the text box is blank, do not set any warning or status, and exit early.
      setSystolicWarning('');
      return;
    }

    // At this point, the input is not blank, so we proceed to check if it's numeric.
    const isNumeric = /^\d+$/.test(value);
    
    if (!isNumeric) {
      // If the input is not numeric, set the warning message.
      setSystolicWarning('Please enter a numeric value for the systolic value.');
      // Ensure the heart rate status is cleared as the input is invalid.
      setSystolicStatus('');
      return; // Exit the function as the validation has concluded with a non-numeric input.
    }

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

    // Check if the text box is not blank before proceeding with further validation.
    if (value.trim() === '') {
      // If the text box is blank, do not set any warning or status, and exit early.
      setDistolicWarning('');
      return;
    }

    // At this point, the input is not blank, so we proceed to check if it's numeric.
    const isNumeric = /^\d+$/.test(value);
    
    if (!isNumeric) {
      // If the input is not numeric, set the warning message.
      setDistolicWarning('Please enter a numeric value for the diastolic value.');
      // Ensure the heart rate status is cleared as the input is invalid.
      setDiastolicStatus('');
      return; // Exit the function as the validation has concluded with a non-numeric input.
    }

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

      // Check if the text box is not blank before proceeding with further validation.
      if (value.trim() === '') {
        // If the text box is blank, do not set any warning or status, and exit early.
        setHeartRateWarning('');
        return;
      }

      // At this point, the input is not blank, so we proceed to check if it's numeric.
      const isNumeric = /^\d+$/.test(value);
      
      if (!isNumeric) {
        // If the input is not numeric, set the warning message.
        setHeartRateWarning('Please enter a numeric value for the heart rate.');
        // Ensure the heart rate status is cleared as the input is invalid.
        setheartRateStatus('');
        return; // Exit the function as the validation has concluded with a non-numeric input.
      }

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
    //   else {
    //     // The input is non-numeric
    //     setJugularStatus('Invalid input');
    //   }
    // } else {
    //   // The textbox is blank, reset the status or take no action
    //   setheartRateStatus(''); // Resetting the status for blank input
    // 
    }
  }



  // Handler for radial pulse input changes
  // const handleRadialChange = (e) => {
  //   const value = e.target.value;
  //   setRadialPulseValue(value);

  //   // Check if the numeric value is out of the -3 to +3 range
  //   const numericValue = parseInt(value, 10);
  //   if (numericValue < 0 || numericValue > 4) {
  //     setIsRadialOutOfRange(true);
  //   } else {
  //     setIsRadialOutOfRange(false);
  //   }
  // };


  return (
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
                  {/* <img
                    className="textbox-42"
                    alt="Rectangle"
                    src="https://cdn.animaapp.com/projects/65a945881c395bf52b1e3e78/releases/65a9e82814bc0dc531a973f2/img/rectangle-8-13@2x.png"
                  /> */}
                  {/* <p className="element">
                    <span className="span">120</span>
                  </p> */}


                  {/* <input type="text" className="textbox-43" defaultValue="120" />
                </div>
                <p className="mm-hg">
                  <span className="span">mmHg</span>
                </p> */}

                <input
                    type="text"
                    className={`textbox-43 ${systolicStatus && systolicStatus !== 'normal' ? 'input-error' : ''}`}
                    value={systolicPulseValue}
                    onChange={handleSystolicChange}
                    placeholder="135"
                  />
                  {systolicStatus && systolicStatus !== 'normal' && showSystolicWarning && (
                    <div className="error-popup">Abnormal systolic value: {systolicStatus}. Consider re-measuring it and inputting the value again.
                    <button onClick={() => setShowSystolicWarning(false)} style={{ marginLeft: '10px', cursor: 'pointer' }}>
                        Hide
                      </button>
                    
                    </div>
                  )}
                  {systolicWarning && <div className="error-popup">{systolicWarning}</div>}
                </div>
          
                <p className="mm-hg">
                  <span className="span">mmHg</span>
                </p>
              {/* </div> */}
              </div>
              
              <div className="diastolic">
                <p className="span-wrapper">
                  <span className="text-wrapper">Diastolic:</span>
                </p>
                <div className="overlap-2">
                  {/* <input type="text" className="textbox-43" defaultValue="80" />
                </div>
                <p className="mm-hg-2">
                  <span className="span">mmHg</span>
                </p> */}
                <input
                    type="text"
                    className={`textbox-43 ${diastolicStatus && diastolicStatus !== 'normal' ? 'input-error' : ''}`}
                    value={diastolicPulseValue}
                    onChange={handleDiastolicChange}
                    placeholder="87"
                  />
                  {diastolicStatus && diastolicStatus !== 'normal' && showDiastolicWarning && (
                    <div className="error-popup">Abnormal diastolic value: {diastolicStatus}. Consider re-measuring it and inputting the value again.
                    <button onClick={() => setShowDiastolicWarning(false)} style={{ marginLeft: '10px', cursor: 'pointer' }}>
                        Hide
                      </button>
                    </div>
                  )}
                  {diastolicWarning && <div className="error-popup">{diastolicWarning}</div>}
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
                  {/* <input type="text" className="textbox-43" placeholder="80" /> */}
                  <input
                    type="text"
                    className={`textbox-43 ${heartRateStatus && heartRateStatus !== 'normal' ? 'input-error' : ''}`}
                    value={heartRateValue}
                    onChange={handleHeartRateChange}
                    placeholder="87"
                  />

                  {HeartRateWarning && <div className="error-popup">{HeartRateWarning}</div>}

                  {heartRateStatus && heartRateStatus !== 'normal' && showHeartRateWarning && (
                    <div className="error-popup">Abnormal heart rate value: {heartRateStatus}. Consider re-measuring it and inputting the value again.
                    <button onClick={() => setShowHeartRateWarning(false)} style={{ marginLeft: '10px', cursor: 'pointer' }}>
                        Hide
                      </button>
                  
                    </div>
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
                  <img
                    className="textbox-42"
                    alt="Rectangle"
                    src="https://cdn.animaapp.com/projects/65a945881c395bf52b1e3e78/releases/65a9e82814bc0dc531a973f2/img/rectangle-8-13@2x.png"
                  />

                  <input
                    type="text"
                    className={`textbox-42 ${radialStatus && radialStatus !== 'normal' ? 'input-error' : ''}`}
                    value={radialPulseValue}
                    onChange={handleRadialChange}
                    placeholder="1"
                  />

                  {radialStatus && radialStatus !== 'normal' && showRadialWarning &&  (
                    // setShowRadialWarning(true)
                    <div className="error-popup">
                      Abnormal radial pulse status: {radialStatus}. Consider re-measuring the radial pulse and inputting the value again.
                      <button onClick={() => setShowRadialWarning(false)} style={{ marginLeft: '10px', cursor: 'pointer' }}>
                        Hide
                      </button>
                    </div>
                  )}

                  {radialWarning && <div className="error-popup">{radialWarning}</div>}



                </div>
                <p className="span-wrapper-2">
                  <span className="text-wrapper">Radial pulse:</span>
                </p>
              </div>
              

              <div className="brachial">
                <div className="overlap-4">
                  <img
                    className="textbox-42"
                    alt="Rectangle"
                    src="https://cdn.animaapp.com/projects/65a945881c395bf52b1e3e78/releases/65a9e82814bc0dc531a973f2/img/rectangle-8-13@2x.png"
                  />

                <input
                    type="text"
                    className={`textbox-42 ${brachialStatus && brachialStatus !== 'normal' ? 'input-error' : ''}`}
                    value={brachialPulseValue}
                    onChange={handleBrachialChange}
                    placeholder="1"
                  />
                  {brachialStatus && brachialStatus !== 'normal' && showBrachialWarning && (
                    <div className="error-popup">Abnormal posterior tibial status: {brachialStatus}. Consider re-measuring it and inputting the value again.
                    <button onClick={() => setShowBrachilWarning(false)} style={{ marginLeft: '10px', cursor: 'pointer' }}>
                        Hide
                      </button>
                    </div>
                  )}
                  {brachialWarning && <div className="error-popup">{brachialWarning}</div>}
                </div>
          
                <p className="span-wrapper">
                  <span className="text-wrapper">Posterior tibial pulse:</span>
                </p>
              </div>

              <div className="carotid">
                <div className="overlap-4">
                  <img
                    className="textbox-42"
                    alt="Rectangle"
                    src="https://cdn.animaapp.com/projects/65a945881c395bf52b1e3e78/releases/65a9e82814bc0dc531a973f2/img/rectangle-8-13@2x.png"
                  />

                  <input
                    type="text"
                    className={`textbox-42 ${carotidStatus && carotidStatus !== 'normal' ? 'input-error' : ''}`}
                    value={carotidPulseValue}
                    onChange={handleCarotidChange}
                    placeholder="2"
                  />
                  {carotidStatus && carotidStatus !== 'normal' && showCarotidWarning && (
                    <div className="error-popup">Abnormal carotid pulse status: {carotidStatus}. Consider re-measuring it and inputting the value again.
                    <button onClick={() => setShowCarotidWarning(false)} style={{ marginLeft: '10px', cursor: 'pointer' }}>
                        Hide
                      </button>
                    </div>
                  )}
                  {carotidWarning && <div className="error-popup">{carotidWarning}</div>}
                </div>
                

                <p className="span-wrapper">
                  <span className="text-wrapper">Carotid pulse:</span>
                </p>
              </div>
              
              <div className="dorsalis-pedis">
                <div className="group">
                  <div className="overlap-4">
                    <img
                      className="textbox-42"
                      alt="Rectangle"
                      src="https://cdn.animaapp.com/projects/65a945881c395bf52b1e3e78/releases/65a9e82814bc0dc531a973f2/img/rectangle-8-13@2x.png"
                    />


                  <input
                    type="text"
                    className={`textbox-42 ${dorsalisStatus && dorsalisStatus !== 'normal' ? 'input-error' : ''}`}
                    value={dorsalisPulseValue}
                    onChange={handleDorsalisChange}
                    placeholder="1"
                  />
                  {dorsalisStatus && dorsalisStatus !== 'normal' && showDorsalisWarning && (
                    <div className="error-popup">Abnormal dorsalis pedis pulse status: {dorsalisStatus}. Consider re-measuring it and inputting the value again.
                    <button onClick={() => setShowDorsalisWarning(false)} style={{ marginLeft: '10px', cursor: 'pointer' }}>
                        Hide
                      </button>
                    </div>
                  )}
                  {dorsalisWarning && <div className="error-popup">{dorsalisWarning}</div>}
                </div>
                

                <p className="span-wrapper">
                  <span className="text-wrapper">Dorsalis pedis pulse:</span>
                </p>

                </div>
              </div>
            </div>
            
            <div className="JVP">
              {/* <p className="abnormal">
                <span className="span">normal</span>
              </p> */}
              <img
                    className="abnormal"
                      alt="Rectangle"
                      src="https://cdn.animaapp.com/projects/65a945881c395bf52b1e3e78/releases/65a9e82814bc0dc531a973f2/img/rectangle-8-13@2x.png"
                    />
              {/* <input
                    type="text"
                    className="abnormal"
                    // value={radialPulseValue}
                    // onChange={handleRadialChange}
                    placeholder="Normal"
              /> */}
              <input
                    type="text"
                    className={`abnormal ${JugularStatus && JugularStatus !== 'normal' ? 'input-error' : ''}`}
                    value={JugularValue}
                    onChange={handleJugularChange}
                    placeholder="Normal"
                  />
              {JugularStatus && JugularStatus !== 'normal' && (
                    <div className="error-popup">Abnormal jugular venous pressure status: {JugularStatus}</div>
              )}


              <p className="jugular-venous">
                <span className="text-wrapper">Jugular Venous Pressure (JVP) Evaluation:</span>
              </p>
            </div>

            <div className="notes">
              <div className="specialty-physician-wrapper">
                <p className="specialty-physician">
                  {/* <span className="text-wrapper-3">[specialty physician notes on pulse mesasurements go here]</span> */}
                
                <textarea className="specialty-physician-textarea" 
                style={{
                  // width: '300px', // Set the desired width
                  // height: '100px', // Set the desired height
                  overflowY: 'auto', // Ensure vertical scroll is enabled when necessary
                }}
                placeholder="specialty physician notes on pulse mesasurements go here"></textarea>
                </p>
              </div>
              <p className="notes-2">
                <span className="text-wrapper-4">Notes:</span>
              </p>

              <button className="save-button">
                <div className="overlap-group-2">
                  <div className="background" />
                  <Button variant={saveVariant} onClick={handleSaveClick}>
                    {saveVariant === 'outlined' ? 'Save' : 'Saved'}
                  </Button>

                  <Button variant={submitVariant} onClick={handleSubmit}>
                    {submitVariant === 'outlined' ? 'Submit' : 'Submitted'}
              </Button>
                </div>
              </button>

            </div>
          </div>

          <div className="tabs">
            <div className="frame">
              {/* <p className="span-wrapper-3">
                <span className="text-wrapper-6">Demographics</span>
              </p> */}
              <a href="/demographics" className="span-wrapper-3" style={{ textDecoration: 'none' }}>
                  <span className="text-wrapper-6">Demographics</span>
              </a>
            </div>
            <div className="general-wrapper">
              {/* <p className="span-wrapper-3">
                <span className="text-wrapper-6">General</span>
              </p> */}
              <a href="/general" className="span-wrapper-3" style={{ textDecoration: 'none' }}>
                  <span className="text-wrapper-6">General</span>
              </a>
            </div>
            <div className="lungs-wrapper">
              {/* <p className="span-wrapper-3">
                <span className="text-wrapper-6">Lungs</span>
              </p> */}
              <a href="/lungs" className="span-wrapper-3" style={{ textDecoration: 'none' }}>
                  <span className="text-wrapper-6">Lungs</span>
              </a>
            </div>
            <div className="pulses-wrapper">
              {/* <p className="span-wrapper-3">
                <span className="text-wrapper-6">Pulses</span>
              </p> */}
              <a href="/pulses" className="span-wrapper-3" style={{ textDecoration: 'none' }}>
                  <span className="text-wrapper-6">Pulses</span>
              </a>
            </div>
            <div className="abdomen-wrapper">
              {/* <p className="span-wrapper-3">
                <span className="text-wrapper-6">Abdomen</span>
              </p> */}
              <a href="/abdomen" className="span-wrapper-3" style={{ textDecoration: 'none' }}>
                  <span className="text-wrapper-6">Abdomen</span>
              </a>
            </div>
            <div className="heart-wrapper">
              {/* <p className="span-wrapper-3">
                <span className="text-wrapper-6">Heart</span>
              </p> */}
              <a href="/heart" className="span-wrapper-3" style={{ textDecoration: 'none' }}>
                  <span className="text-wrapper-6">Heart</span>
              </a>
            </div>
            <div className="legs-wrapper">
              {/* <p className="span-wrapper-3">
                <span className="text-wrapper-6">Legs</span>
              </p> */}
              <a href="/legs" className="span-wrapper-3" style={{ textDecoration: 'none' }}>
                  <span className="text-wrapper-6">Legs</span>
              </a>
            </div>
            <div className="summary-wrapper">
              {/* <p className="span-wrapper-3">
                <span className="text-wrapper-6">Summary</span>
              </p> */}
              <a href="/summary" className="span-wrapper-3" style={{ textDecoration: 'none' }}>
                  <span className="text-wrapper-6">Summary</span>
              </a>
            </div>
          </div>
          
          <NavBar proxy={props.proxy} token={props.token} /> {/* Display NavBar at the top */}


        </div>
      </div>
    </div>
  );
};
