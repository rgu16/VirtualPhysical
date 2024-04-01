import { useState, useRef, useEffect } from 'react';
import axios from 'axios';
import "./style.css";
import {  Img, Line, List, Text, NavBar, TabNav, PhysicianNotes } from "components";
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import { InputSharp } from '@mui/icons-material';

export const GeneralPage = (props) => {

  // General tab inputs
  const [generalpain, setGeneralPain] = useState();
  const [painsummary, setPainSummary] = useState();
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

      // General tab inputs
      setGeneralPain(generalResponse.detail['generalpain'])
      setPainSummary(generalResponse.detail['painsummary'])
      // Eyes tab inputs
      setEyesValue(eyesResponse.detail['eyes'])
      // Hands tab inputs
      setCyanosisValue(handsResponse.detail['cyanosis'])
      setPallorValue(handsResponse.detail['pallor'])
      setCapillaryRefillValue(handsResponse.detail['capillaryrefill'])
      setPulseOx(handsResponse.detail['pulseox'])


      // Consolidated notes section
        const generalNotes = generalResponse.note || "";
        const eyesNotes = eyesResponse.note || "";
        const handsNotes = handsResponse.note || "";

        // Concatenate notes from all folders
        const allNotes = `General Notes:\n${generalNotes}\n\nEyes Notes:\n${eyesNotes}\n\nHands Notes:\n${handsNotes}`;
        setNotes(allNotes);

    })).catch((error) => {
      console.error("Error fetching notes:", error);
    });

  }, [props]);

  return (
    <div className="general-tab">
      <div className="overlap-wrapper">
        <div className="overlap">
          <div className="overlap-group">

            <div className="notes">
              <PhysicianNotes notes={note} token={props.token} proxy={props.proxy} tab="general" />
            </div>


            <div className="capillary-refill">
            <Text>{capillaryrefillvalue}</Text>

              <p className="p">
                <span className="span">Capillary Refill Time:</span>
              </p>

              <p className="sec">
                <span className="span">sec</span>
              </p>
            </div>




            <div className="cyanosis-pallor">


              <p className="cyanosis-title">
                <span className="span">Cyanosis (hands):</span>
                <Text>{cyanosisvalue}</Text>
              </p>
              

              <p className="pallor-title">
                <span className="span">Pallor (hands):</span>
                <Text>{pallorvalue}</Text>
              </p>

              <div className="pulse-ox-title">
                <span className="span">Pulse Ox Reading:</span>
                <Text>{pulseox}</Text>
              </div>

              <div className="jaundice-title">
                <span className="span">Jaundice Severity (eyes):</span>
                <Text>{eyesvalue}</Text>
              </div>

              <div className="general-pain-title">
                <span className="span">General Pain:</span>
                <Text>{generalpain}</Text>
              </div>

              <div className="pain-summary-title">
                <span className="span">Pain Summary:</span>
                <Text>{painsummary}</Text>
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