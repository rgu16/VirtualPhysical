import React from "react";
import "./style.css";
import { useState } from 'react';

// function MyComponent() {
//   const [inputValue, setInputValue] = useState('+2');
//   const [isOutOfRange, setIsOutOfRange] = useState(false);

//   const handleInputChange = (e) => {
//     const value = e.target.value;
//     setInputValue(value);

//     // Check if the value is out of the -3 to +3 range
//     const numericValue = parseFloat(value);
//     if (numericValue < -3 || numericValue > 3) {
//       setIsOutOfRange(true);
//     } else {
//       setIsOutOfRange(false);
//     }
//   };

//   return (
//     <div className="overlap-4">
//       <img
//         className="textbox-42"
//         alt="Rectangle"
//         src="https://cdn.animaapp.com/projects/65a945881c395bf52b1e3e78/releases/65a9e82814bc0dc531a973f2/img/rectangle-8-13@2x.png"
//       />
//       <input
//         type="text"
//         className={`textbox-42 ${isOutOfRange ? 'input-error' : ''}`}
//         value={inputValue}
//         onChange={handleInputChange}
//       />
//       {isOutOfRange && (
//         <div className="error-popup">Value must be between -3 and +3.</div>
//       )}
//     </div>
//   );
// }

// export default MyComponent;



export const PulsesPage= () => {
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
      // default:
      //   status = 'abnormal'; // For values not in the 0-4 range or non-numeric values
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
      // default:
      //   status = 'abnormal'; // For values not in the 0-4 range or non-numeric values
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
      // default:
      //   status = 'abnormal'; // For values not in the 0-4 range or non-numeric values
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
      // default:
      //   status = 'abnormal'; // For values not in the 0-4 range or non-numeric values
    }

    setDorsalisStatus(status);
  };

  const handleSystolicChange = (e) => {
    const value = e.target.value;
    setSystolicPulseValue(value);

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
      // default:
      //   status = 'abnormal'; // For values not in the 0-4 range or non-numeric values
    }

    setSystolicStatus(status);
  };


  const handleDiastolicChange = (e) => {
    const value = e.target.value;
    setDiastolicPulseValue(value);

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
      // default:
      //   status = 'abnormal'; // For values not in the 0-4 range or non-numeric values
    }

    setDiastolicStatus(status);
  };



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
                    placeholder="Enter a value"
                  />
                  {systolicStatus && systolicStatus !== 'normal' && (
                    <div className="error-popup">Abnormal systolic value: {systolicStatus}</div>
                  )}
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
                    placeholder="Enter a value"
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
                  <input type="text" className="textbox-43" placeholder="Enter a value" />
                </div>
                <p className="bpm-2">
                  <span className="span">bpm</span>
                </p>
              </div>
            </div>
            <div className="chainlink-link-wrapper">
              <img
                className="chainlink-link"
                alt="Chainlink link"
                src="https://cdn.animaapp.com/projects/65a945881c395bf52b1e3e78/releases/65a9e82814bc0dc531a973f2/img/chainlink--link--13@2x.png"
              />
            </div>
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
                  {/* <input
                    type="text"
                    className={`textbox-42 ${isRadialOutOfRange ? 'input-error' : ''}`}
                    value={radialPulseValue}
                    onChange={handleRadialChange}
                    placeholder="Enter a value"
                  />
                  {isRadialOutOfRange && (
                    <div className="error-popup">Value must be between 0 and +4.</div>
                  )} */}
                  <input
                    type="text"
                    className={`textbox-42 ${radialStatus && radialStatus !== 'normal' ? 'input-error' : ''}`}
                    value={radialPulseValue}
                    onChange={handleRadialChange}
                    placeholder="Enter a value"
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
                  <img
                    className="textbox-42"
                    alt="Rectangle"
                    src="https://cdn.animaapp.com/projects/65a945881c395bf52b1e3e78/releases/65a9e82814bc0dc531a973f2/img/rectangle-8-13@2x.png"
                  />
                  {/* <input type="text" className="textbox-42" defaultValue="+1" />
                </div>
                <p className="brachial-pulse">
                  <span className="text-wrapper">Brachial pulse:</span>
                </p>
                <input type="text" className="textbox-42" defaultValue="+1" /> */}
                <input
                    type="text"
                    className={`textbox-42 ${carotidStatus && carotidStatus !== 'normal' ? 'input-error' : ''}`}
                    value={brachialPulseValue}
                    onChange={handleBrachialChange}
                    placeholder="Enter a value"
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
                    placeholder="Enter a value"
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
                    <img
                      className="textbox-42"
                      alt="Rectangle"
                      src="https://cdn.animaapp.com/projects/65a945881c395bf52b1e3e78/releases/65a9e82814bc0dc531a973f2/img/rectangle-8-13@2x.png"
                    />
                    {/* <input type="text" className="textbox-42" defaultValue="0" />
                  </div>

                  <p className="span-wrapper-2">
                    <span className="text-wrapper">Dorsalis pedis pulse:</span>
                  </p> */}

                  <input
                    type="text"
                    className={`textbox-42 ${dorsalisStatus && dorsalisStatus !== 'normal' ? 'input-error' : ''}`}
                    value={dorsalisPulseValue}
                    onChange={handleDorsalisChange}
                    placeholder="Enter a value"
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
              {/* <p className="abnormal">
                <span className="span">abnormal</span>
              </p> */}
            <select className="abnormal">
                <option value="normal">normal</option>
                <option value="abnormal">abnormal</option>
                {/* Add other options here as needed */}
            </select>

              <p className="jugular-venous">
                <span className="text-wrapper">Jugular Venous Pressure (JVP) Evaluation:</span>
              </p>
            </div>

            <div className="notes">
              <div className="specialty-physician-wrapper">
                {/* <p className="specialty-physician">
                  <span className="text-wrapper-3">[specialty physician notes on pulse mesasurements go here]</span>
                </p> */}
                <textarea className="specialty-physician-textarea" placeholder="specialty physician notes on pulse mesasurements go here"></textarea>
              </div>
              <p className="notes-2">
                <span className="text-wrapper-4">Notes:</span>
              </p>
              <button className="save-button">
                <div className="overlap-group-4">
                  <div className="background" />
                  <p className="save">
                    <span className="text-wrapper-5">Save</span>
                  </p>
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
          <div className="NAV">
            <div className="profile">
              <div className="profile-2">
                <div className="overlap-group-5">
                  <p className="dr-david-ochoa">
                    <span className="text-wrapper-7">Dr. David Ochoa</span>
                  </p>
                  <p className="cardiologist">
                    <span className="text-wrapper-8">Cardiologist</span>
                  </p>
                </div>
                <img
                  className="arrow"
                  alt="Arrow"
                  src="https://cdn.animaapp.com/projects/65a945881c395bf52b1e3e78/releases/65a9e82814bc0dc531a973f2/img/arrow-19@2x.png"
                />
              </div>
              <div className="profile-picture" />
            </div>
            <div className="icon-groups">
              {/* <img
                className="calendar-icon"
                alt="Calendar icon"
                src="https://cdn.animaapp.com/projects/65a945881c395bf52b1e3e78/releases/65a9e82814bc0dc531a973f2/img/calendar-icon-21@2x.png"
              />
              <img
                className="settings-icon"
                alt="Settings icon"
                src="https://cdn.animaapp.com/projects/65a945881c395bf52b1e3e78/releases/65a9e82814bc0dc531a973f2/img/settings-icon-19@2x.png"
              />
              <img
                className="chart-icon"
                alt="Chart icon"
                src="https://cdn.animaapp.com/projects/65a945881c395bf52b1e3e78/releases/65a9e82814bc0dc531a973f2/img/chart-icon-20@2x.png"
              />
              <img
                className="message-icon"
                alt="Message icon"
                src="https://cdn.animaapp.com/projects/65a945881c395bf52b1e3e78/releases/65a9e82814bc0dc531a973f2/img/message-icon-19@2x.png"
              /> */}
              <a href="/appointment">
                <img
                  className="calendar-icon"
                  alt="Calendar icon"
                  src="https://cdn.animaapp.com/projects/65a945881c395bf52b1e3e78/releases/65a9e82814bc0dc531a973f2/img/calendar-icon-21@2x.png"
                />
              </a>

              <a href="/setting">
                <img
                  className="settings-icon"
                  alt="Settings icon"
                  src="https://cdn.animaapp.com/projects/65a945881c395bf52b1e3e78/releases/65a9e82814bc0dc531a973f2/img/settings-icon-19@2x.png"
                />
              </a>

              <a href="/chart">
                <img
                  className="chart-icon"
                  alt="Chart icon"
                  src="https://cdn.animaapp.com/projects/65a945881c395bf52b1e3e78/releases/65a9e82814bc0dc531a973f2/img/chart-icon-20@2x.png"
                />
              </a>

              <a href="/messages">
                <img
                  className="message-icon"
                  alt="Message icon"
                  src="https://cdn.animaapp.com/projects/65a945881c395bf52b1e3e78/releases/65a9e82814bc0dc531a973f2/img/message-icon-19@2x.png"
                />
              </a>
              
            </div>
            <div className="separator" />
            <div className="VP-logo">
              <p className="virtual-physical">
                <span className="text-wrapper-9">Virtual Physical</span>
              </p>
              <img
                className="VP-logo-2"
                alt="Vp logo"
                src="https://cdn.animaapp.com/projects/65a945881c395bf52b1e3e78/releases/65a9e82814bc0dc531a973f2/img/vp-logo-19@2x.png"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
