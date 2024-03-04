import React, { useState, useEffect } from "react";
import "./style.css";
import axios from 'axios';
import Stack from '@mui/material/Stack';
// import Button from '@mui/material/Button';
import SendEmailComponent from './SendEmailComponent'; // Import SendEmailComponent
import {  Img, Button, Line, List, Text, NavBar, TabNav, PhysicianNotes } from "components";
import SummaryTab from "./SummaryTab";
import { jwtDecode } from "jwt-decode";
// import { NavBar } from 'components'

const SummaryPage = (props) => {
  const patient = jwtDecode(props.token).patient.split("/");
  const name = useState(patient[1]);
  const tabs = ['Demographics', "General", "Eyes", "Lungs", "Pulses", "Abdomen", "Heart", "Hands", "Legs"]
  const tabNames = ['demographic', "general", "eyes", "lungs", "pulses", "abdomen", "heart", "hands", "legs"]
  const [data, setData] = useState(Array.from({ length: 9 }, () => ''));
  const [notes, setNotes] = useState(Array.from({ length: 9 }, () => ''))
  const [flagVariant, setFlagVariant] = useState(false);

  const handleFlagClick = () => {
    setFlagVariant(!flagVariant);
  };

  const handlePrintClick = () => {
      window.print();
  };

  useEffect(() => {
    axios({
        method: "GET",
        url: props.proxy + "/download/summary",
        headers: {
        Authorization: 'Bearer ' + props.token
        }
    })
    .then((response) => {
        const res = response.data
        console.log(res)
        tabNames.forEach((item, index) => {
          const noteKey = "note_" + item;
          if (res.hasOwnProperty(noteKey)) {
            console.log(noteKey)
            const noteValue = res[noteKey];
            console.log(noteValue)
            setNotes(prevNotes => {
              const updatedNotes = [...prevNotes];
              updatedNotes[index] = noteValue;
              return updatedNotes;
            });
          }
          if (res.hasOwnProperty("detail_" + item)){
            console.log(res["detail_" + item])
            setData(prevData => {
              const updatedData = [...prevData];
              updatedData[index] = res["detail_" + item];
              return updatedData;
            });
          }
        })
        console.log(notes)
    }).catch((error) => {
        if (error.response){
        console.log(error.response)
        console.log(error.response.status)
        console.log(error.response.headers)}
    })
  }, [props]);

return (
  <>
  <NavBar proxy={props.proxy} token={props.token}/>
    <div
      className="bg-cover bg-no-repeat bg-gray-50 flex flex-col font-dmsans h-[1561px] items-center justify-start mx-auto pb-28 w-full"
      style={{ backgroundImage: "url('images/img_demographicstab.svg')" }}
    >
      <div className="flex flex-col md:gap-10 gap-[50px] items-center justify-start w-full">
       <div></div>
        <div className="flex flex-col items-start justify-start max-w-[1700px] mx-auto md:px-5 w-full">
          <TabNav tab="summary"></TabNav>
        <div className="bg-white-A700 flex flex-col font-cairo gap-[22px] items-start justify-start max-w-[1700px] mx-auto p-[41px] md:px-5 w-full">
          <div className="flex md:flex-col flex-row gap-10 items-start justify-start ml-6 md:ml-[0] w-auto md:w-full no-print">
            <Button
              className="cursor-pointer flex items-center justify-between min-w-[260px] rounded-[20px]"
              leftIcon={
                <Img
                  className="h-[30px] mt-1 mb-[7px] ml-[10px]"
                  src="images/img_videocamera.svg"
                  alt="video_camera"
                />
              }
              color={flagVariant?"red_A700_70":"gray_200_01"}
              onClick={handleFlagClick}
            >
              <div className="!text-black-900 font-semibold leading-[normal] md:text-xl sm:text-lg text-[16px] text-center mr-[10px]">
                Flag patient as high-risk
              </div>
            </Button>
            {/* <Button
              className="cursor-pointer flex items-center justify-between min-w-[320px] sm:min-w-full rounded-[20px]"
              leftIcon={
                <Img
                  className="h-[30px] mt-1 mb-[7px] ml-[10px]"
                  src="images/img_calendar.svg"
                  alt="calendar"
                />
              }
            >
              <div className="!text-black-900 font-semibold leading-[normal] md:text-xl sm:text-lg text-[16px] text-center mr-[10px]">
                Schedule virtual call with patient
              </div>
            </Button> */}
            <SendEmailComponent token={props.token} patientEmail={props.patientEmail} />
            <Button
              className="cursor-pointer flex items-center justify-between min-w-[160px] rounded-[20px]"
              leftIcon={
                <Img
                  className="h-[30px] mt-1 mb-[7px] ml-[10px]"
                  src="images/img_folder.svg"
                  alt="folder"
                />
              }
              onClick={handlePrintClick}
            >
              <div className="!text-black-900 font-semibold leading-[normal] md:text-xl sm:text-lg text-[16px] text-center mr-[10px]">
                Print PDF
              </div>
            </Button>
          </div>
          <div className="bg-white-A700 flex flex-col items-start justify-start mb-[17px] ml-6 mr-[50px] md:ml-[0] w-[97%] md:w-full">
            <List
              className="flex flex-col gap-2.5 items-center pt-[20px] w-full"
              orientation="vertical"
            >
                    {tabs.map((item, index) => (
                      <div key={index} className="w-full">
                      <SummaryTab tab={item} data ={data[index]} notes={notes[index]} />
                      </div>
                  ))}      
            </List>
          </div>
        </div>
      </div>
    </div>
    </div>
    <style>
      {`
        /* Define styles for the print */
        @media print {
          /* Hide unwanted elements during printing */
          .no-print {
            display: none !important;
          }
        }
      `}
    </style>
  </>
);
};


export default SummaryPage;

{/* <div className="summary">
<div className="overlap-group-wrapper">
  
  <div className="overlap-2">
    <div className="overlap-3">
      <div className="buttons-2">
        
      <div className="div-wrapper">
        <div className="text-3">
          <p className="flag-patient-as-high-2">
            <Button variant={flagVariant} onClick={handleFlagClick}>
                Flag patient as high-risk
            </Button>
          </p>
          <div className="danger-sign-2" />
        </div>
      </div>

      <div className="message-patient-2">
        <div className="text-4">
          <img className="img-2" alt="Sms tracking" src="https://cdn.animaapp.com/projects/65a945881c395bf52b1e3e78/releases/65a9e82814bc0dc531a973f2/img/sms-tracking-3@2x.png" />
            <div className="message-patient-3">
              <SendEmailComponent token={props.token} patientEmail={props.patientEmail} />
            </div>
        </div>
      </div>

        <div className="group-wrapper">
          <div className="group-2">
            <p className="span-wrapper-4">
              <Button variant="text" onClick={handlePrintClick}>
                Print PDF
              </Button>
            </p>
            <img className="folder-add-2" alt="Folder add" src="https://cdn.animaapp.com/projects/65a945881c395bf52b1e3e78/releases/65a9e82814bc0dc531a973f2/img/folder-add-1@2x.png" />
          </div>
        </div>

      </div>


      <div className="summary-text-2">

        <div className="frame-8">
          <p className="span-wrapper-5">
            <span className="text-wrapper-9">Demographics</span>
          </p>
          <img className="line-2" alt="Line" src="https://cdn.animaapp.com/projects/65a945881c395bf52b1e3e78/releases/65a9e82814bc0dc531a973f2/img/line-4-2@2x.png" />
          <textarea className="text-area-3" defaultValue="Taylor Swift, female, 5’11’’, 130 lbs, 12/13/1989, 33 yo, patient has history of high blood pressure and abnormal heart rhythms">
          </textarea>
          <span className="text-wrapper-11">Notes:</span>
        </div>


        <div className="frame-9">
          <p className="span-wrapper-5">
            <span className="text-wrapper-9">General</span>
          </p>
          <img className="line-2" alt="Line" src="https://cdn.animaapp.com/projects/65a945881c395bf52b1e3e78/releases/65a9e82814bc0dc531a973f2/img/line-4-2@2x.png" />

            <textarea className="text-area-3" defaultValue="Cyanosis: 0, Pallor: +1, Yellowing in eyes: 0, CRT: 3sec">
            </textarea>
            <span className="text-wrapper-11">Notes:</span>
        </div>


        <div className="frame-10">
          <p className="span-wrapper-5">
            <span className="text-wrapper-9">Lungs</span>
          </p>
          <img className="line-2" alt="Line" src="https://cdn.animaapp.com/projects/65a945881c395bf52b1e3e78/releases/65a9e82814bc0dc531a973f2/img/line-4-2@2x.png" />
          <textarea className="text-area-3" defaultValue="Breathing rate: 30 breaths/min, Labored breathing? moderate, Posterior POV: left lower lobe abnormal">
            </textarea>
          <span className="text-wrapper-11">Notes: Based on the phonocardiogram graph and the lung sounds, the patient seems to have pneumonia.</span>
        </div>


        <div className="frame-11">
          <p className="span-wrapper-5">
            <span className="text-wrapper-9">Pulses</span>
          </p>
          <img className="line-2" alt="Line" src="https://cdn.animaapp.com/projects/65a945881c395bf52b1e3e78/releases/65a9e82814bc0dc531a973f2/img/line-4-2@2x.png" />
          
          <textarea className="text-area-3" defaultValue="Radial: +2, Brachial: +1, Carotid: +2, Dorsalis pedis: 0, BP: 120/80, Heart rate: 88bpm, JVP:
              normal, Carotid auscultation: abnormal">
            </textarea>
          <span className="text-wrapper-11">Notes: Blood pressure normal. Carotid artery auscultation might indicate carotid stenosis. Patient
              needs to obtain a carotid ultrasound asap.</span>
        </div>
        
        
        <div className="frame-12">
          <p className="span-wrapper-5">
            <span className="text-wrapper-9">Abdomen</span>
          </p>
          <img className="line-2" alt="Line" src="https://cdn.animaapp.com/projects/65a945881c395bf52b1e3e78/releases/65a9e82814bc0dc531a973f2/img/line-4-2@2x.png" />
          
          <textarea className="text-area-3" defaultValue="Top row, left to right: 3, 2, 1; Middle row, left to right: 2, 0, 0; Bottom row, left to right: 0,
              0, 0">
            </textarea>
          <span className="text-wrapper-11">Notes: Due to high tenderness in liver region, liver is likely enlarged and could indicate
              congestive heart failure. Patient must undergo __ dietary changes and begin taking&nbsp;&nbsp;__
              medications.</span>
        </div>


        <div className="frame-13">
          <div className="frame-14">
            <p className="span-wrapper-5">
              <span className="text-wrapper-9">Heart</span>
            </p>
            <img className="line-2" alt="Line" src="https://cdn.animaapp.com/projects/65a945881c395bf52b1e3e78/releases/65a9e82814bc0dc531a973f2/img/line-4-2@2x.png" />

            <textarea className="text-area-3" defaultValue="Parasternal heave: yes, Tricuspid/mitral thrill: no, Pulmonary/tricuspid thrill: yes, Aortic/pulmonary thrill: no HEART AUSCULTATION -- DIAPHRAGM - A: abnormal, P: normal, T: normal, M: normal -- BELL - A: normal, P: anormal, T: normal, M: normal ECG: abnormal">
            </textarea>
          <span className="text-wrapper-11">Notes: Patient having atrial fibrillation, needs to go to ER asap.</span>
          </div>
        </div>
        
        
        <div className="frame-15">
          <p className="span-wrapper-5">
            <span className="text-wrapper-9">Legs</span>
          </p>
          <img className="line-2" alt="Line" src="https://cdn.animaapp.com/projects/65a945881c395bf52b1e3e78/releases/65a9e82814bc0dc531a973f2/img/line-4-2@2x.png" />
          <textarea className="text-area-3" defaultValue="Pitting edema - Right calve: +3, Left calve: 0">
            </textarea>
          <span className="text-wrapper-11">Notes:</span>
        </div>
      </div>
    </div>
    <NavBar proxy={props.proxy} token={props.token} />
  </div>
</div>
</div> */}