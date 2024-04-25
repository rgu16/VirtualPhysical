import React, { useState, useEffect } from "react";
import axios from 'axios';
import "./style.css";
import {  PhysicianNotes } from "components";
import { NavBar } from 'components'
import {  List, Text, TabNav } from "components";



export const AbdomenPage = (props) => {

  const [medNote, setMedNotes] = useState();


  const [note, setNotes] = useState();

  const [hypochondriacL, setHypochondriacLValue] = useState("none");
  const [epigastric, setEpigastricValue] = useState("none");
  const [hypochondriacR, setHypochondriacRValue] = useState("none");
  
  const [lumbarL, setLumbarLValue] = useState("none");
  const [umbilical, setUmbilicalValue] = useState("none");
  const [lumbarR, setLumbarRValue] = useState("none");
  
  const [iliacL, setIliacLValue] = useState("none");
  const [hypogastric, setHypogastricValue] = useState("none");
  const [iliacR, setIliacRValue] = useState("none");


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
        setMedNotes(res.med_note)

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
            <TabNav tab="abdomen"></TabNav>
            <div className="bg-white-A700 flex flex-col font-cairo items-center justify-start p-10 sm:px-5 w-full"style={{
    paddingTop: '50px',
  }} >
              <div className="flex flex-col  justify-start w-[99%] md:w-full">
                <div className="flex md:flex-col flex-row md:gap-10 items-start justify-start w-full">
                  <div className="md:h-[560px]  relative w-[100%] md:w-full">
                      <div className="flex flex-col items-start justify-start w-full">
                        <List
                          className="flex flex-col gap-[10px] md:ml-[0] ml-[50px] w-full"
                          orientation="vertical">      
                          <Text
                          className="sm:text-3xl md:text-[32px] text-[34px] text-gray-900_02"
                          size="txtCairoBold34">
                          Abdomen
                          </Text>
                          <div className="flex flex-row gap-[13px] ml-[50px] items-center justify-start w-full" >
                            <Text
                              className="text-2xl md:text-[22px] text-black-900 sm:text-xl"
                              size="txtCairoBold24">
                              Palpation:
                            </Text>
                          </div>
                          <div className="ml-[80px] h-[500px] items-center justify-center" 
                        style={{ backgroundImage: "url(images/abodomencard.png)", 
                        backgroundSize: "contain", // or "contain" depending on your preference
        backgroundRepeat: "no-repeat"}}>
                        <div className ="ml-[65px] w-[39%] h-[60%] mt-[110px] gap-4 grid grid-cols-3 items-center justify-center text-center">
                            <Text
                              className={hypochondriacR===0?"col-start-1 col-span-1 row-start-1 row-span-1 text-2xl md:text-[22px] text-black-900 text-center sm:text-xl":
                              "col-start-1 col-span-1 row-start-1 row-span-1 text-2xl md:text-[22px] text-red-A700 text-center sm:text-xl"
                                        }
                              size="txtCairoBold24">
                              {hypochondriacR}
                            </Text>
                            <Text
                              className={epigastric===0?"col-start-2 col-span-1 row-start-1 row-span-1 text-2xl md:text-[22px] text-black-900 text-center sm:text-xl":
                              "col-start-2 col-span-1 row-start-1 row-span-1 text-2xl md:text-[22px] text-red-A700 text-center sm:text-xl"}
                              size="txtCairoBold24">
                              {epigastric}
                            </Text>
                            <Text
                              className={hypochondriacL===0?" col-start-3 col-span-1 row-start-1 row-span-1 text-2xl md:text-[22px] text-black-900  text-center sm:text-xl":
                              " col-start-3 col-span-1 row-start-1 row-span-1 text-2xl md:text-[22px] text-red-A700  text-center sm:text-xl"}
                              size="txtCairoBold24">
                              {hypochondriacL}
                            </Text>
                            <Text
                              className={lumbarR===0?"mt-2 col-start-1 col-span-1 row-start-3 row-span-1 text-2xl md:text-[22px] text-black-900 text-center sm:text-xl"
                                        :"mt-2 col-start-1 col-span-1 row-start-3 row-span-1 text-2xl md:text-[22px] text-red-A700 text-center sm:text-xl"}
                              size="txtCairoBold24">
                              {lumbarR}
                            </Text>
                            <Text
                              className={umbilical===0?"mt-2 col-start-2 col-span-1 row-start-3 row-span-1  text-2xl md:text-[22px] text-black-900 text-center sm:text-xl"
                                        :"mt-2 col-start-2 col-span-1 row-start-3 row-span-1  text-2xl md:text-[22px] text-red-A700 text-center sm:text-xl"}
                              size="txtCairoBold24">
                              {umbilical} 
                            </Text>
                            <Text
                              className={lumbarL===0?"mt-2 col-start-3 col-span-1 row-start-3 row-span-1  text-2xl md:text-[22px] text-black-900  text-center sm:text-xl"
                                        :"mt-2 col-start-3 col-span-1 row-start-3 row-span-1  text-2xl md:text-[22px] text-red-A700  text-center sm:text-xl"}
                              size="txtCairoBold24">
                              {lumbarL}
                            </Text>
                            <Text
                              className={iliacR===0?"col-start-1 col-span-1 row-start-5 row-span-1 text-2xl md:text-[22px] text-black-900 text-center sm:text-xl"
                                        :"col-start-1 col-span-1 row-start-5 row-span-1 text-2xl md:text-[22px] text-red-A700 text-center sm:text-xl"}
                              size="txtCairoBold24">
                              {iliacR}
                            </Text>
                            <Text
                              className={hypogastric===0?"col-start-2 col-span-1 row-start-5 row-span-1 text-2xl md:text-[22px] text-black-900 text-center sm:text-xl"
                                        :"col-start-2 col-span-1 row-start-5 row-span-1 text-2xl md:text-[22px] text-red-A700 text-center sm:text-xl"}
                              size="txtCairoBold24">
                              {hypogastric} 
                            </Text>
                            <Text
                              className={iliacL===0?" col-start-3 col-span-1 row-start-5 row-span-1 text-2xl md:text-[22px] text-black-900  text-center sm:text-xl"
                                        :" col-start-3 col-span-1 row-start-5 row-span-1 text-2xl md:text-[22px] text-red-A700  text-center sm:text-xl"}
                              size="txtCairoBold24">
                              {iliacL}
                            </Text>
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
                    <PhysicianNotes notes={note} token={props.token} proxy={props.proxy} tab="abdomen"></PhysicianNotes>
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
