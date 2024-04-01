import { useState, useRef, useEffect } from 'react';
import axios from 'axios';
import "./style.css";
import {  Img, Line, List, Text, NavBar, TabNav, PhysicianNotes } from "components";
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import { InputSharp } from '@mui/icons-material';

export const GeneralPage = (props) => {

  // General tab inputs
  const [generalpain, setGeneralPain] = useState(); // checked values for prior medical history
  const [painsummary, setPainSummary] = useState(); // text input for any pain before starting physical exam
  // Eyes tab inputs
  const [eyesvalue, setEyesValue] = useState();
  // Hands tab inputs
  const [cyanosisvalue, setCyanosisValue] = useState();
  const [pallorvalue, setPallorValue] = useState();
  const [capillaryrefillvalue, setCapillaryRefillValue] = useState();
  const [pulseox, setPulseOx] = useState();
  // Consolidated notes
  const [note, setNotes] = useState();


  useEffect(() => {
    
    axios.all([
      axios.get(props.proxy + "download/general", { headers: { Authorization: 'Bearer ' + props.token } }),
      axios.get(props.proxy + "download/eyes", { headers: { Authorization: 'Bearer ' + props.token } }),
      axios.get(props.proxy + "download/hands", { headers: { Authorization: 'Bearer ' + props.token } })

    ]).then(axios.spread((generalResponse, eyesResponse, handsResponse) => {

      console.log("general response", generalResponse.data.detail)
      console.log("eyes response", eyesResponse.data.detail)
      console.log("hands response", handsResponse.data.detail)

      // Check if the generalResponse has the detail property
      if (generalResponse.data.detail) {
        // General tab inputs
        setGeneralPain(generalResponse.data.detail['generalpain'])
        setPainSummary(generalResponse.data.detail['painsummary'])
        console.log(generalResponse.data.detail)
      } else {
        console.log("General folder does not exist");
      }

      // Check if the eyesResponse has the detail property
      if (eyesResponse.data.detail) {
        // Eyes tab inputs
        setEyesValue(eyesResponse.data.detail['eyes'])
        console.log(eyesResponse.data.detail)
      } else {
        console.log("Eyes folder does not exist");
      }

      // Check if the handsResponse has the detail property
      if (handsResponse.data.detail) {
        // Hands tab inputs
        setCyanosisValue(handsResponse.data.detail['cyanosis'])
        setPallorValue(handsResponse.data.detail['pallor'])
        setCapillaryRefillValue(handsResponse.data.detail['capillaryrefill'])
        setPulseOx(handsResponse.data.detail['pulseox'])
        console.log(handsResponse.data.detail)
      } else {
        console.log("Hands folder does not exist");
      }

      // Consolidated notes section
        const generalNotes = generalResponse.data.note || "";
        const eyesNotes = eyesResponse.data.note || "";
        const handsNotes = handsResponse.data.note || "";

        // Concatenate notes from all folders
        const allNotes = `${eyesNotes}${handsNotes}${generalNotes}`;
        setNotes(allNotes);

    })).catch((error) => {
      console.error("Error fetching data:", error);
    });

  }, [props]); // Dependency array to trigger useEffect when props change


  return (
    <div className="general-tab">
      <div className="overlap-wrapper">
        <div className="overlap">
          <div className="overlap-group">

            <div className="notes">
              <PhysicianNotes notes={note} token={props.token} proxy={props.proxy} tab="general" />
            </div>



            <div className="cyanosis-pallor-jaundice-generalpain-painsummary">

            <div className="capillary-refill">
              <div className='cap-refill-res'>
                <Text>{capillaryrefillvalue} sec</Text>
              </div>
              <p className="p">
                <span className="span">Capillary Refill Time:</span>
              </p>
            </div>
              

              <p className="pallor-title">
                <span className="span">Pallor (hands):</span>
                <div className='pallor-res'>
                <Text>+{pallorvalue}</Text>
                </div>
              </p>

              <div className="pulse-ox-title">
                <span className="span">Pulse Ox Reading:</span>
                <div className='pulse-ox-res'>
                <Text>{pulseox}%</Text>
                </div>
              </div>

              <p className="cyanosis-title">
                <span className="span">Cyanosis (hands):</span>
                <div className='cyanosis-res'>
                <Text>+{cyanosisvalue}</Text>
                </div>
              </p>

              <div className="jaundice-title">
                <span className="span">Jaundice Severity (eyes):</span>
                <div className='jaundice-res'>
                <Text>+{eyesvalue}</Text>
                </div>
              </div>

              <div className="general-pain-title">
                <span className="span">General Pain:</span>
                <div className='general-pain-res'>
                <Text>{generalpain}</Text>
                </div>
              </div>

              <div className="pain-summary-title">
                <span className="span">Pain Summary:</span>
                <div className='pain-summary-res'>
                <Text>{painsummary}</Text>
                </div>
              </div>

            </div>


          </div>



          <div className="tabs">
            <div className="frame">
              {/* <p className="span-wrapper-3">
                <span className="text-wrapper-5">Demographics</span>
              </p> */}
              <a href="/demographics" className="span-wrapper-3" style={{ textDecoration: 'none' }}>
                  <span className="text-wrapper-5">Demographics</span>
              </a>
            </div>
            <div className="general-wrapper">
              {/* <p className="span-wrapper-3">
                <span className="text-wrapper-5">General</span>
              </p> */}
              <a href="/general" className="span-wrapper-3" style={{ textDecoration: 'none' }}>
                  <span className="text-wrapper-5">General</span>
              </a>
            </div>
            <div className="lungs-wrapper">
              {/* <p className="span-wrapper-3">
                <span className="text-wrapper-5">Lungs</span>
              </p> */}
              <a href="/lungs" className="span-wrapper-3" style={{ textDecoration: 'none' }}>
                  <span className="text-wrapper-5">Lungs</span>
              </a>
            </div>
            <div className="pulses-wrapper">
              {/* <p className="span-wrapper-3">
                <span className="text-wrapper-5">Pulses</span>
              </p> */}
              <a href="/pulses" className="span-wrapper-3" style={{ textDecoration: 'none' }}>
                  <span className="text-wrapper-5">Pulses</span>
              </a>
            </div>
            <div className="abdomen-wrapper">
              {/* <p className="span-wrapper-3">
                <span className="text-wrapper-5">Abdomen</span>
              </p> */}
              <a href="/abdomen" className="span-wrapper-3" style={{ textDecoration: 'none' }}>
                  <span className="text-wrapper-5">Abdomen</span>
              </a>
            </div>
            <div className="heart-wrapper">
              {/* <p className="span-wrapper-3">
                <span className="text-wrapper-5">Heart</span>
              </p> */}
              <a href="/heart" className="span-wrapper-3" style={{ textDecoration: 'none' }}>
                  <span className="text-wrapper-5">Heart</span>
              </a>
            </div>
            <div className="legs-wrapper">
              {/* <p className="span-wrapper-3">
                <span className="text-wrapper-5">Legs</span>
              </p> */}
              <a href="/legs" className="span-wrapper-3" style={{ textDecoration: 'none' }}>
                  <span className="text-wrapper-5">Legs</span>
              </a>
            </div>
            <div className="summary-wrapper">
              {/* <p className="span-wrapper-3">
                <span className="text-wrapper-5">Summary</span>
              </p> */}
              <a href="/summary" className="span-wrapper-3" style={{ textDecoration: 'none' }}>
                  <span className="text-wrapper-5">Summary</span>
              </a>
            </div>
          </div>
          
          <NavBar proxy={props.proxy} token={props.token} /> {/* Display NavBar at the top */}
          
        </div>
      </div>
    </div>
  );
};