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
  const tabs = ['Demographics', "General", "Eyes", "Lungs", "Pulses", "Abdomen", "Heart", "Hands", "Legs"]
  const tabNames = ['demographic', "general", "eyes", "lungs", "pulses", "abdomen", "heart", "hands", "legs"]
  const [data, setData] = useState(Array.from({ length: 9 }, () => ''));
  const [notes, setNotes] = useState(Array.from({ length: 9 }, () => ''))
  const [med_notes, setMedNotes] = useState(Array.from({ length: 9 }, () => ''))
  const [flagVariant, setFlagVariant] = useState(false);

  const handleFlagClick = () => {
    setFlagVariant(!flagVariant);
  };

  const handlePrintClick = () => {
      window.print();
  };
  console.log("Summary page")

  useEffect(() => {
    console.log("HERE")
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
            // console.log(noteKey)
            const noteValue = res[noteKey];
            // console.log(noteValue)
            setNotes(prevNotes => {
              const updatedNotes = [...prevNotes];
              updatedNotes[index] = noteValue;
              return updatedNotes;
            });
          }
          const mednoteKey = "med_note_" + item;
          if (res.hasOwnProperty(mednoteKey)) {
            // console.log(noteKey)
            const mednoteValue = res[mednoteKey];
            // console.log(noteValue)
            setMedNotes(prevNotes => {
              const updatedNotes = [...prevNotes];
              updatedNotes[index] = mednoteValue;
              return updatedNotes;
            });
          }
          if (res.hasOwnProperty("detail_" + item)){
            // console.log(res["detail_" + item])
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
  <div className="h-screen">
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
            <SendEmailComponent proxy= {props.proxy} token={props.token} patientEmail={props.patientEmail} />
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

                      <SummaryTab 
                        tab={item} 
                        data ={data[index]} 
                        notes={notes[index]} 
                        med_notes={med_notes[index]}
                      />

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
    </div>
  </>
);
};


export default SummaryPage;