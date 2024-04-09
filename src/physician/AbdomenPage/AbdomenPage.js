import React, { useState, useRef, useEffect } from "react";
import axios from 'axios';
import Button from '@mui/material/Button';
import "./style.css";
import {  PhysicianNotes } from "components";
import { NavBar } from 'components'
import Grade from "./Grade.png"
import Popover from '@mui/material/Popover';
import {  Img, Line, List, Text, TabNav } from "components";



export const AbdomenPage = (props) => {

  // For Question Mark Popover
  const [questionMarkAnchorEl, setQuestionMarkAnchorEl] = useState(null);
  const questionMarkOpen = Boolean(questionMarkAnchorEl);

  const handleQuestionMarkPopoverOpen = (event) => {
    setQuestionMarkAnchorEl(event.currentTarget);
  };

  const handleQuestionMarkPopoverClose = () => {
    setQuestionMarkAnchorEl(null);
  };

  const [note, setNotes] = useState();

  // Top row
  const [hypochondriacRValue, setHypochondriacRValue] = useState();
  const [epigastricValue, setEpigastricValue] = useState();
  const [hypochondriacLValue, setHypochondriacLValue] = useState();
  // Middle row
  const [lumbarRValue, setLumbarRValue] = useState();
  const [umbilicalValue, setUmbilicalValue] = useState();
  const [lumbarLValue, setLumbarLValue] = useState();
  // Bottom row
  const [iliacRValue, setIliacRValue] = useState();
  const [hypogastricValue, setHypogastricValue] = useState();
  const [iliacLValue, setIliacLValue] = useState();


  useEffect(() => {
    axios({
        method: "GET",
        url: props.proxy + "download/abdomen",
        headers: {
        Authorization: 'Bearer ' + props.token
        }
    })
    .then((response) => {
        const res = response.data
        console.log(res)

        // Top row
        setHypochondriacRValue(res.detail['hypochondriacR'])
        setEpigastricValue(res.detail['epigastric'])
        setHypochondriacLValue(res.detail['hypochondriacL'])
        // Middle row
        setLumbarRValue(res.detail['lumbarR'])
        setUmbilicalValue(res.detail['umbilical'])
        setLumbarLValue(res.detail['lumbarL'])
        // Bottom row
        setIliacRValue(res.detail['iliacR'])
        setHypogastricValue(res.detail['hypogastric'])
        setIliacLValue(res.detail['iliacL'])

        if(res.hasOwnProperty("note")){
          setNotes(res.note)
        }
        
    }).catch((error) => {
        if (error.response){
        console.log(error.response)
        console.log(error.response.status)
        console.log(error.response.headers)}
    })
  }, [props]);


  return (
    <div className="abdomen-tab-question">
      <div className="overlap-wrapper">
        <div className="overlap">
          <div className="overlap-group">
            <div className="notes">
              <PhysicianNotes notes={note} token={props.token} proxy={props.proxy} tab="abdomen"></PhysicianNotes>
            </div>

            <div className="pulse">
              <p className="abdominal-palpation">
                <span className="text-wrapper-3">Abdominal Palpation</span>
              </p>
            </div>

            <div className="overlap-2">
              <div className="region">
                <div className="overlap-3">
                  <img
                    className="rectangle"
                    alt="Rectangle"
                    src="https://cdn.animaapp.com/projects/65a945881c395bf52b1e3e78/releases/65a9e82814bc0dc531a973f2/img/rectangle-8-13@2x.png"
                  />

                  <p className="element">
                    <Text
                      className="text-2xl md:text-[22px] text-black-900 sm:text-xl"
                      value = {iliacLValue} 
                      id="outlined-select-currency-native"
                      select
                      label=""
                      defaultValue="no selection"
                      SelectProps={{
                        native: true,
                      }}
                      helperText=""
                    >
                    {iliacLValue} </Text>
                  </p>

                </div>
              </div>

              <div className="overlap-group-wrapper">
                <div className="overlap-3">
                  <img
                    className="rectangle"
                    alt="Rectangle"
                    src="https://cdn.animaapp.com/projects/65a945881c395bf52b1e3e78/releases/65a9e82814bc0dc531a973f2/img/rectangle-8-13@2x.png"
                  />

                  <p className="element">
                    <Text
                      className="text-2xl md:text-[22px] text-black-900 sm:text-xl"
                      value = {hypogastricValue} 
                      id="outlined-select-currency-native"
                      select
                      label=""
                      defaultValue="no selection"
                      SelectProps={{
                        native: true,
                      }}
                      helperText=""
                    >
                    {hypogastricValue} </Text>
                  </p>

                </div>
              </div>

              <div className="div-wrapper">
                <div className="overlap-3">
                  <img
                    className="rectangle"
                    alt="Rectangle"
                    src="https://cdn.animaapp.com/projects/65a945881c395bf52b1e3e78/releases/65a9e82814bc0dc531a973f2/img/rectangle-8-13@2x.png"
                  />

                  <p className="element">
                    <Text
                      className="text-2xl md:text-[22px] text-black-900 sm:text-xl"
                      value = {iliacRValue} 
                      id="outlined-select-currency-native"
                      select
                      label=""
                      defaultValue="no selection"
                      SelectProps={{
                        native: true,
                      }}
                      helperText=""
                    >
                    {iliacRValue} </Text>
                  </p>


                </div>
              </div>

              <div className="region-2">
                <div className="overlap-3">
                  <img
                    className="rectangle"
                    alt="Rectangle"
                    src="https://cdn.animaapp.com/projects/65a945881c395bf52b1e3e78/releases/65a9e82814bc0dc531a973f2/img/rectangle-8-13@2x.png"
                  />

                  <p className="element">
                    <Text
                      className="text-2xl md:text-[22px] text-black-900 sm:text-xl"
                      value = {lumbarLValue} 
                      id="outlined-select-currency-native"
                      select
                      label=""
                      defaultValue="no selection"
                      SelectProps={{
                        native: true,
                      }}
                      helperText=""
                    >
                    {lumbarLValue} </Text>
                  </p>

                </div>
              </div>

              <div className="region-3">
                <div className="overlap-3">
                  <img
                    className="rectangle"
                    alt="Rectangle"
                    src="https://cdn.animaapp.com/projects/65a945881c395bf52b1e3e78/releases/65a9e82814bc0dc531a973f2/img/rectangle-8-13@2x.png"
                  />

                  <p className="element">
                    <Text
                      className="text-2xl md:text-[22px] text-black-900 sm:text-xl"
                      value = {umbilicalValue} 
                      id="outlined-select-currency-native"
                      select
                      label=""
                      defaultValue="no selection"
                      SelectProps={{
                        native: true,
                      }}
                      helperText=""
                    >
                    {umbilicalValue} </Text>
                  </p>

                </div>
              </div>

              <div className="region-4">
                <div className="overlap-3">
                  <img
                    className="rectangle"
                    alt="Rectangle"
                    src="https://cdn.animaapp.com/projects/65a945881c395bf52b1e3e78/releases/65a9e82814bc0dc531a973f2/img/rectangle-8-13@2x.png"
                  />

                  <p className="element">
                    <Text
                      className="text-2xl md:text-[22px] text-black-900 sm:text-xl"
                      value = {lumbarRValue} 
                      id="outlined-select-currency-native"
                      select
                      label=""
                      defaultValue="no selection"
                      SelectProps={{
                        native: true,
                      }}
                      helperText=""
                    >
                    {lumbarRValue} </Text>
                  </p>

                </div>
              </div>

              <div className="region-5">
                <div className="overlap-3">
                  <img
                    className="rectangle"
                    alt="Rectangle"
                    src="https://cdn.animaapp.com/projects/65a945881c395bf52b1e3e78/releases/65a9e82814bc0dc531a973f2/img/rectangle-8-13@2x.png"
                  />

                  <p className="element">
                    <Text
                      className="text-2xl md:text-[22px] text-black-900 sm:text-xl"
                      value = {hypochondriacLValue} 
                      id="outlined-select-currency-native"
                      select
                      label=""
                      defaultValue="no selection"
                      SelectProps={{
                        native: true,
                      }}
                      helperText=""
                    >
                    {hypochondriacLValue} </Text>
                  </p>

                </div>
              </div>

              <div className="region-6">
                <div className="overlap-3">
                  <img
                    className="rectangle"
                    alt="Rectangle"
                    src="https://cdn.animaapp.com/projects/65a945881c395bf52b1e3e78/releases/65a9e82814bc0dc531a973f2/img/rectangle-8-13@2x.png"
                  />

                  <p className="element">
                    <Text
                      className="text-2xl md:text-[22px] text-black-900 sm:text-xl"
                      value = {epigastricValue} 
                      id="outlined-select-currency-native"
                      select
                      label=""
                      defaultValue="no selection"
                      SelectProps={{
                        native: true,
                      }}
                      helperText=""
                    >
                    {epigastricValue} </Text>
                  </p>

                </div>
              </div>

              <div className="region-7">
                <div className="overlap-3">
                  <img
                    className="rectangle"
                    alt="Rectangle"
                    src="https://cdn.animaapp.com/projects/65a945881c395bf52b1e3e78/releases/65a9e82814bc0dc531a973f2/img/rectangle-8-13@2x.png"
                  />

                  <p className="element">
                    <Text
                      className="text-2xl md:text-[22px] text-black-900 sm:text-xl"
                      value = {hypochondriacRValue} 
                      id="outlined-select-currency-native"
                      select
                      label=""
                      defaultValue="no selection"
                      SelectProps={{
                        native: true,
                      }}
                      helperText=""
                    >
                    {hypochondriacRValue} </Text>
                  </p>

                </div>
              </div>
            </div>


            <div>
              <img
                className="mdi-question-mark"
                alt="Mdi question mark"
                src="https://cdn.animaapp.com/projects/65a945881c395bf52b1e3e78/releases/65a9e82814bc0dc531a973f2/img/mdi-question-mark-circle-outline-1@2x.png"
                onMouseEnter={handleQuestionMarkPopoverOpen}
                onMouseLeave={handleQuestionMarkPopoverClose}
              />
              <Popover
                id="mouse-over-popover"
                sx={{
                  pointerEvents: 'none',
                }}
                open={questionMarkOpen}
                anchorEl={questionMarkAnchorEl}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'left',
                }}
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'left',
                }}
                onClose={handleQuestionMarkPopoverClose}
                disableRestoreFocus
              >
                <img
                  src={Grade}
                  alt="Grade"
                  style={{ width: '50%', height: '50%' }}
                />
              </Popover>
            </div>
            </div>


          <div className="tabs">
            <div className="frame">
              {/* <p className="span-wrapper-2">
                <span className="text-wrapper-7">Demographics</span>
              </p> */}
              <a href="/demographics" className="span-wrapper-2" style={{ textDecoration: 'none' }}>
                  <span className="text-wrapper-7">Demographics</span>
              </a>
            </div>
            <div className="general-wrapper">
              {/* <p className="span-wrapper-2">
                <span className="text-wrapper-7">General</span>
              </p> */}
              <a href="/general" className="span-wrapper-2" style={{ textDecoration: 'none' }}>
                  <span className="text-wrapper-7">General</span>
              </a>
            </div>
            <div className="lungs-wrapper">
              {/* <p className="span-wrapper-2">
                <span className="text-wrapper-7">Lungs</span>
              </p> */}
              <a href="/lungs" className="span-wrapper-2" style={{ textDecoration: 'none' }}>
                  <span className="text-wrapper-7">Lungs</span>
              </a>
            </div>
            <div className="pulses-wrapper">
              {/* <p className="span-wrapper-2">
                <span className="text-wrapper-7">Pulses</span>
              </p> */}
              <a href="/pulses" className="span-wrapper-2" style={{ textDecoration: 'none' }}>
                  <span className="text-wrapper-7">Pulses</span>
              </a>
            </div>
            <div className="abdomen-wrapper">
              {/* <p className="span-wrapper-2">
                <span className="text-wrapper-7">Abdomen</span>
              </p> */}
              <a href="/abdomen" className="span-wrapper-2" style={{ textDecoration: 'none' }}>
                  <span className="text-wrapper-7">Abdomen</span>
              </a>
            </div>
            <div className="heart-wrapper">
              {/* <p className="span-wrapper-2">
                <span className="text-wrapper-7">Heart</span>
              </p> */}
              <a href="/heart" className="span-wrapper-2" style={{ textDecoration: 'none' }}>
                  <span className="text-wrapper-7">Heart</span>
              </a>
            </div>
            <div className="legs-wrapper">
              {/* <p className="span-wrapper-2">
                <span className="text-wrapper-7">Legs</span>
              </p> */}
              <a href="/legs" className="span-wrapper-2" style={{ textDecoration: 'none' }}>
                  <span className="text-wrapper-7">Legs</span>
              </a>
            </div>
            <div className="summary-wrapper">
              {/* <p className="span-wrapper-2">
                <span className="text-wrapper-7">Summary</span>
              </p> */}
              <a href="/summary" className="span-wrapper-2" style={{ textDecoration: 'none' }}>
                  <span className="text-wrapper-7">Summary</span>
              </a>
            </div>
          </div>

          
          <NavBar proxy={props.proxy} token={props.token} /> {/* Display NavBar at the top */}


        </div>
      </div>
    </div>
  );
};
