import React from "react";
import "./style.css";
import { List, Text, TabNav, NavBar } from "components";
import { useState, useEffect } from 'react';
import { PhysicianNotes } from "components";
import LungPopover from "components/LungPopover/LungPopover";
import axios from 'axios';
import { jwtDecode } from "jwt-decode";

export const LungsPage = (props) => {
  const [breathingValue, setBreathingValue] = useState('');
  const [breathingStatus, setBreathingStatus] = useState('');
  const [medNote, setMedNotes] = useState();
  const [LaboredBreathing, setLaboredBreathing] = useState('');

  const [lt, setlt] = useState(null)
  const [lm, setlm] = useState(null)
  const [lb, setlb] = useState(null)
  const [rt, setrt] = useState(null)
  const [rm, setrm] = useState(null)
  const [rb, setrb] = useState(null)
  const [statuslt, setStatuslt] = useState(null)
  const [statuslm, setStatuslm] = useState(null)
  const [statuslb, setStatuslb] = useState(null)
  const [statusrt, setStatusrt] = useState(null)
  const [statusrm, setStatusrm] = useState(null)
  const [statusrb, setStatusrb] = useState(null)
  const [note, setNotes] = useState();

  
    useEffect(() => {
      axios({
          method: "GET",
          url: props.proxy + "/download/lungs",
          headers: {
          Authorization: 'Bearer ' + props.token
          }
      })
      .then((response) => {
          const res = response.data
          console.log(res)
          console.log(res.med_note)
          setMedNotes(res.med_note)
          setNotes(res.note)

          const breathingValue = parseInt(res.detail['breathingrate'], 10);
          setBreathingValue( breathingValue )

          const LaboredBreathing = res.detail['breathinglabor']
          setLaboredBreathing(LaboredBreathing)

          setlt(res.topleftaudio)
          setlm(res.middleleftaudio)
          setlb(res.bottomleftaudio)
          setrt(res.toprightaudio)
          setrm(res.middlerightaudio)
          setrb(res.bottomrightaudio)

          setStatuslt(res.statuslt['status'])
          setStatuslm(res.statuslm['status'])
          setStatuslb(res.statuslb['status'])
          setStatusrt(res.statusrt['status'])
          setStatusrm(res.statusrm['status'])
          setStatusrb(res.statusrb['status'])

          let breathingStatus = '';
          // Ensure BreathingRate is a number and not empty
          // const numericBreathingRate = Number(BreathingRate);
          if (breathingValue >= 12 && breathingValue <= 18) {
            breathingStatus = 'normal';
          } else if (breathingValue < 12 || breathingValue > 25) {
            breathingStatus = 'abnormal';
          }
          else if (breathingValue === '') {
            // Handle the case for an empty input
            breathingStatus = ''; // or any other default status you want to set for no input
          } else {
            // Handle the case for non-numeric input
            breathingStatus = ''; // or any other status for invalid input
          }
          setBreathingStatus(breathingStatus);


          if(res.hasOwnProperty("note")){
            setNotes(res.note)
            console.log(res.note)
          }
          if (res.hasOwnProperty("med_note")){
            
            
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



  return (
    <>
    <div className="h-screen">
      <NavBar proxy={props.proxy} token={props.token}/>

      <div
        className="bg-cover bg-no-repeat bg-gray-50 flex flex-col font-dmsans items-center justify-start mx-auto pb-28 w-full"
        style={{ backgroundImage: "url('images/img_demographicstab.svg')" }}
      >
        <div className="flex flex-col md:gap-10 gap-[50px] items-center justify-start w-full">
         <div></div>
          <div className="flex flex-col items-start justify-start max-w-[1700px] mx-auto md:px-5 w-full">
            <TabNav tab="lungs"></TabNav>
            <div className="bg-white-A700 flex flex-col font-cairo items-center justify-start p-10 sm:px-5 w-full"style={{
    paddingTop: '50px',
  }} >
              <div className="flex flex-col  justify-start w-[99%] md:w-full">
                <div className="flex md:flex-col flex-row md:gap-10 items-start justify-start w-full">
                  <div className="md:h-[560px] shrink relative w-[100%] md:w-full">
                      <div className="flex flex-col items-start justify-start w-full">
                        <List
                          className="flex flex-col gap-[10px] md:ml-[0] ml-[50px] w-[62%]"
                          orientation="vertical">      
                          <Text
                          className="sm:text-3xl md:text-[32px] text-[34px] text-gray-900_02"
                          size="txtCairoBold34">
                          Lungs
                          </Text>
                          
                          <div className="flex flex-row gap-[13px] ml-[50px] items-center justify-start w-full" >
                            <Text
                              className="text-2xl md:text-[22px] text-black-900 sm:text-xl"
                              size="txtCairoBold24">
                              Breathing rate:
                            </Text>
                            <Text className= { breathingStatus === 'normal' ?
                                                  "text-2xl md:text-[22px] text-black-900 sm:text-xl":
                                                  "text-2xl md:text-[22px] text-red-A700 sm:text-xl"}
                            >{breathingValue} breaths/min</Text>
                          </div>
                          <div className="flex flex-row gap-[13px] ml-[50px] items-center justify-start w-full">
                            <Text
                              className="text-2xl md:text-[22px] text-black-900 sm:text-xl"
                              size="txtCairoBold24">
                              Labored breathing?
                            </Text>                        
                            <Text className="text-2xl md:text-[22px] text-black-900 sm:text-xl" variant="outlined">{LaboredBreathing}</Text>
                          </div>
                          <div className="flex flex-row gap-[13px] ml-[50px] items-start justify-start w-full" >
                          <Text
                              className="text-2xl md:text-[22px] text-black-900 sm:text-xl"
                              size="txtCairoBold24">
                             Lung Ausculatation (posterior analysis only)
                          </Text>
                        </div>
                        <div className = "flex flex-row">
                        
                        <div className="flex flex-row ml-[80px] h-[478px] w-[68%]" 
                        style={{ backgroundImage: "url(https://cdn.animaapp.com/projects/65a945881c395bf52b1e3e78/releases/65a9e82814bc0dc531a973f2/img/lung-img-1@2x.png)" }}>
                          <div className= "flex flex-col h-full w-[37%]"></div>
                          <div className= "flex flex-col h-full">
                            <div className= "flex flex-col h-[60%]"></div>
                            
                          <LungPopover proxy={props.proxy} token={props.token} 
                                      title="Top Left Lung Upload" location ="/lungs/topleftaudio"
                                      position="left top" audio={lt}
                                      setStatus={setStatuslt} status={statuslt}
                                      tab={'lungs'} name={'lt'}></LungPopover>
                          <LungPopover proxy={props.proxy} token={props.token} 
                                      title="Middle Left Lung Upload" location ="/lungs/middleleftaudio"
                                      position="left top" audio={lm}
                                      setStatus={setStatuslm} status={statuslm}
                                      tab={'lungs'} name={'lm'}></LungPopover>
                          <LungPopover proxy={props.proxy} token={props.token} 
                                      title="Bottom Left Lung Upload" location ="/lungs/bottomleftaudio"
                                      position="left top" audio={lb}
                                      setStatus={setStatuslb} status={statuslb}
                                      tab={'lungs'} name={'lb'}></LungPopover>
                          </div>
                          <div className= "flex flex-col w-[16%]"></div>
                          <div className= "flex flex-col h-full">
                            <div className= "flex flex-col h-[60%]"></div>
                          <LungPopover proxy={props.proxy} token={props.token} 
                                      title="Top Right Lung Upload" location ="/lungs/toprightaudio"
                                      position="right top" audio={rt}
                                      setStatus={setStatusrt} status={statusrt}
                                      tab={'lungs'} name={'rt'}></LungPopover>
                          <LungPopover proxy={props.proxy} token={props.token} 
                                      title="Middle Right Lung Upload" location ="/lungs/middlerightaudio"
                                      position="right top" audio={rm}
                                      setStatus={setStatusrm} status={statusrm}
                                      tab={'lungs'} name={'rm'}></LungPopover>
                          <LungPopover proxy={props.proxy} token={props.token} 
                                      title="Bottom Right Lung Upload" location ="/lungs/bottomrightaudio"
                                      position="right top" audio={rb}
                                      setStatus={setStatusrb} status={statusrb}
                                      tab={'lungs'} name={'rb'}></LungPopover>
                          </div>

                        </div>
                        </div>
                        </List>
                      </div>
                      
                  </div>
                  <div className="relative mt-[50px]">
                    {medNote !== "" && 
                      <div className="flex flex-col items-start justify-start w-[400px] ml-[50px] mr-[50px] mb-[20px]">
                      <Text
                        className="text-2xl md:text-[22px] text-black-900 sm:text-xl"
                        size="txtCairoBold24"
                      >
                        Med Tech Notes:{" "}
                      </Text>
                      
                      <Text className="text-2xl md:text-[22px] text-black-900 sm:text-xl">{medNote}</Text>
                      </div>}
                    <PhysicianNotes notes={note} token={props.token} proxy={props.proxy} tab="lungs"></PhysicianNotes>
                  </div>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
    </>
  );
};