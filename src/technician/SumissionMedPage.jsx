import React, { useState, useEffect } from "react";
import axios from 'axios';
import {  List, Text, NavBar, TabNav } from "components";
import SummaryTab from "../physician/SummaryPage/SummaryTab";
import { Navigate } from 'react-router-dom';

const SubmissionMedPage = (props) => {
  const tabs = ['Demographics', "General", "Eyes", "Lungs", "Pulses", "Abdomen", "Heart", "Hands", "Legs"]
  const [data, setData] = useState(Array.from({ length: 9 }, () => ''));
  const [notes, setNotes] = useState(Array.from({ length: 9 }, () => ''))
  const [med_notes, setMedNotes] = useState(Array.from({ length: 9 }, () => ''))
  const [navigate, setNavigate] = useState();

  useEffect(() => {
    const tabNames = ['demographic', "general", "eyes", "lungs", "pulses", "abdomen", "heart", "hands", "legs"]
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
        // console.log(notes)
    }).catch((error) => {
        if (error.response){
        console.log(error.response)
        console.log(error.response.status)
        console.log(error.response.headers)}
    })
  }, [props]);

  const handleClick = (e) => {
    e.preventDefault();
    setNavigate('/');
  };

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

          <div className="bg-white-A700 flex flex-col items-start justify-start mb-[17px] ml-6 mr-[50px] md:ml-[0] w-[97%] md:w-full">
            <List
              className="flex flex-col gap-2.5 items-center pt-[20px] w-full"
              orientation="vertical"
            >
                    {tabs.map((item, index) => (
                      <div key={index} className="w-full">
                      <SummaryTab tab={item} data ={data[index]} notes={notes[index]} med_notes={med_notes[index]}/>
                      </div>
                  ))}      
            </List>
            <button className="bg-indigo-A200 flex md:flex-col flex-row md:gap-5 ml-5px items-center justify-center mt-2.5 w-[10%] md:w-full h-[50px] rounded-[20px] hover:bg-indigo-A700"
              onClick={handleClick}
              >
              <Text className="font-semibold md:ml-[0] text-white-A700 text-xl">Submit</Text>
          </button>
          {navigate ? (<Navigate replace to= {navigate} />) : null}
          </div>
        </div>
      </div>
    </div>
    </div>
    </div>
  </>
);
};


export default SubmissionMedPage;