import React from "react";
import "./style.css";
import { List, Text, TabNav, NavBar } from "components";
import { useState, useEffect } from 'react';
import {  PhysicianNotes } from "components";
import axios from 'axios';
import LungPopover from "components/LungPopover/LungPopover";

export const PulsesPage = (props) => {
  const [medNote, setMedNotes] = useState();
  const [lt, setlt] = useState(null);
  const [statuslb, setStatuslb] = useState(null)
  const [radialPulseValue, setRadialPulseValue] = useState('');
  const [brachialPulseValue, setBrachialPulseValue] = useState('');
  const [carotidPulseValue, setCarotidPulseValue] = useState('');
  const [dorsalisPulseValue, setDorsalisPulseValue] = useState('');
  const [systolicPulseValue, setSystolicPulseValue] = useState('');
  const [diastolicPulseValue, setDiastolicPulseValue] = useState('');
  const [heartRateValue, setheartRateValue] = useState('')
  const [JugularValue, setJugularValue] = useState('');
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
          setMedNotes(res.med_note)
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
          setStatuslb(res.statuslt['status'])

          const heartRateValue = parseInt(res.detail['heartrate'], 10);
          setheartRateValue(heartRateValue)


          const JugularValue = res.detail['jvp']
          setJugularValue(JugularValue)
          setlt(res.carotidaudio)
    
          if(res.hasOwnProperty("note")){
            setNotes(res.note)
            console.log(res.note)
          }
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
            <TabNav tab="pulses"></TabNav>
            <div className="bg-white-A700 flex flex-col font-cairo items-center justify-start p-10 sm:px-5 w-full"style={{
    paddingTop: '50px',
  }} >
              <div className="flex flex-col  justify-start w-[99%] md:w-full">
                <div className="flex md:flex-col flex-row md:gap-10 items-start justify-start w-full">
                  <div className="md:h-[560px] shrink relative w-[100%] md:w-full">
                      <div className="flex flex-col items-start justify-start w-full">
                        <List
                          className="flex flex-col gap-[10px] md:ml-[0] ml-[50px] w-[100%]"
                          orientation="vertical">      
                          <Text
                          className="sm:text-3xl md:text-[32px] text-[34px] text-gray-900_02"
                          size="txtCairoBold34">
                          Pulses
                          </Text>
                          <div className='flex flex-row w-full'>
                          <div className="flex flex-col gap-[13px] ml-[50px] items-center justify-start w-[50%]" >
                            <div className="flex flex-row gap-[13px] items center justify-start w-full">
                            <Text
                              className="text-2xl md:text-[22px] text-black-900 sm:text-xl"
                              size="txtCairoBold24">
                              Radial Pulse:
                            </Text>
                            <Text className= { radialPulseValue === 2 ?
                                                  "text-2xl md:text-[22px] text-black-900 sm:text-xl":
                                                  "text-2xl md:text-[22px] text-red-A700 sm:text-xl"}
                            >+{radialPulseValue} </Text>
                            </div>
                            <div className="flex flex-row gap-[13px] items center justify-start w-full">
                            <Text
                              className="text-2xl md:text-[22px] text-black-900 sm:text-xl"
                              size="txtCairoBold24">
                              Brachial Pulse:
                            </Text>
                            <Text className= { brachialPulseValue === 2 ?
                                                  "text-2xl md:text-[22px] text-black-900 sm:text-xl":
                                                  "text-2xl md:text-[22px] text-red-A700 sm:text-xl"}
                            >+{brachialPulseValue} </Text>
                            </div>
                            <div className="flex flex-row gap-[13px] items center justify-start w-full">
                            <Text
                              className="text-2xl md:text-[22px] text-black-900 sm:text-xl"
                              size="txtCairoBold24">
                              Carotid Pulse:
                            </Text>
                            <Text className= { carotidPulseValue === 2 ?
                                                  "text-2xl md:text-[22px] text-black-900 sm:text-xl":
                                                  "text-2xl md:text-[22px] text-red-A700 sm:text-xl"}
                            >+{carotidPulseValue} </Text>
                            </div>
                            <div className="flex flex-row gap-[13px] items center justify-start w-full">
                            <Text
                              className="text-2xl md:text-[22px] text-black-900 sm:text-xl"
                              size="txtCairoBold24">
                              Dorsalis pedis Pulse:
                            </Text>
                            <Text className= { dorsalisPulseValue === 2 ?
                                                  "text-2xl md:text-[22px] text-black-900 sm:text-xl":
                                                  "text-2xl md:text-[22px] text-red-A700 sm:text-xl"}
                            >+{dorsalisPulseValue} </Text>
                            </div>
                            
                          </div>
                          <div className="flex flex-col gap-[13px] ml-[50px] items-center justify-start w-[50%]" >
                            <div className="flex flex-row gap-[13px] items center justify-start w-full">
                            <Text
                              className="text-2xl md:text-[22px] text-black-900 sm:text-xl"
                              size="txtCairoBold24">
                              Systolic:
                            </Text>
                            <Text className= { systolicPulseValue > 89 && systolicPulseValue < 121 ?
                                                  "text-2xl md:text-[22px] text-black-900 sm:text-xl":
                                                  "text-2xl md:text-[22px] text-red-A700 sm:text-xl"}
                            >{systolicPulseValue} mmHg</Text>
                            </div>
                            <div className="flex flex-row gap-[13px] items center justify-start w-full">
                            <Text
                              className="text-2xl md:text-[22px] text-black-900 sm:text-xl"
                              size="txtCairoBold24">
                              Diastolic:
                            </Text>
                            <Text className= { diastolicPulseValue >59 && diastolicPulseValue<81?
                                                  "text-2xl md:text-[22px] text-black-900 sm:text-xl":
                                                  "text-2xl md:text-[22px] text-red-A700 sm:text-xl"}
                            >{diastolicPulseValue} mmHg</Text>
                            </div>
                            <div className="flex flex-row gap-[13px] items center justify-start w-full">
                            <Text
                              className="text-2xl md:text-[22px] text-black-900 sm:text-xl"
                              size="txtCairoBold24">
                              Heart Rate:
                            </Text>
                            <Text className= { heartRateValue>49 && heartRateValue < 111 ?
                                                  "text-2xl md:text-[22px] text-black-900 sm:text-xl":
                                                  "text-2xl md:text-[22px] text-red-A700 sm:text-xl"}
                            >{heartRateValue} bpm</Text>
                            </div>

                            </div>
                            
                          </div>
                          <div className="flex flex-row gap-[13px] items center ml-[50px] justify-start w-[50%]">
                            <Text
                              className="text-2xl md:text-[22px] text-black-900 sm:text-xl"
                              size="txtCairoBold24">
                              Jugular Venous Pressure (JVP) Evaluation:
                            </Text>
                            <Text className= { JugularValue>6 && JugularValue<10 ?
                                                  "text-2xl md:text-[22px] text-black-900 sm:text-xl":
                                                  "text-2xl md:text-[22px] text-red-A700 sm:text-xl"}
                            >{JugularValue} cm H2O</Text>
                            </div>
                            <div className="flex flex-row gap-[13px] ml-[50px] items-start justify-start w-full mt-[20px] mb-[20px]" >
                          <Text
                              className="text-2xl md:text-[22px] text-black-900 sm:text-xl"
                              size="txtCairoBold24">
                            Carotid Auscultation 
                          </Text>
                          
                      </div>
                      <div className="flex flex-row ml-[80px] h-[260px] w-[322px]" 
                               style={{ backgroundImage: "url(https://cdn.animaapp.com/projects/65a945881c395bf52b1e3e78/releases/65a9e82814bc0dc531a973f2/img/carotid-img-1@2x.png)" }}>
                          <div className= "flex flex-col h-full mt-[150px] ml-[170px]">
                          <LungPopover proxy={props.proxy} token={props.token} 
                                      title="Carotid" location ="/pulses/carotid"
                                      position="right top" audio={lt}
                                      setStatus={setStatuslb} status={statuslb}
                                      tab={'pulses'} name={'lt'}></LungPopover>
                          {/* <CarotidUpload proxy={props.proxy} token={props.token} 
                                      title="Carotid" location ="/pulses/carotid"
                                      position="right top" audio={lt}></CarotidUpload> */}
                          </div>
                      </div>
                      
                        </List>
                      </div>
                      
                  </div>
                  <div className="relative mt-[50px]">
                    {medNote !== "" && medNote &&
                      <div className="flex flex-col items-start justify-start w-[400px] ml-[50px] mr-[50px] mb-[20px]">
                      <Text
                        className="text-2xl md:text-[22px] text-black-900 sm:text-xl"
                        size="txtCairoBold24"
                      >
                        Med Tech Notes:{" "}
                      </Text>
                      
                      <Text className="text-2xl md:text-[22px] text-black-900 sm:text-xl">{medNote}</Text>
                      </div>}
                    <PhysicianNotes notes={note} token={props.token} proxy={props.proxy} tab="pulses"></PhysicianNotes>
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
