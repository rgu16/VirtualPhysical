import React from "react";

import {  Img, List, Text, NavBar, TabNav, PhysicianNotes } from "components";
import { useState, useEffect } from 'react';
import axios from 'axios';
import { jwtDecode } from "jwt-decode";

export const DemographicPage = (props) => {
  const patient = jwtDecode(props.token).patient.split("/");
  const firstname = useState(patient[1]);
  const lastname = useState(patient[0]);

  const [genderValue, setGenderValue] = useState();
  const [heightInches, setHeightInchesValue] = useState();
  const [height, setHeightValue] = useState();
  const [weight, setWeightValue] = useState();
  const [DOB, setDOBValue] = useState();
  
  const [history, setHistoryValue] = useState();

  const [profilePic, setProfilePic] = useState()
  const [note, setNotes] = useState();
  const [medNote, setMedNotes] = useState();

    useEffect(() => {
      axios({
          method: "GET",
          url: props.proxy + "/download/demographic",
          headers: {
          Authorization: 'Bearer ' + props.token
          }
      })
      .then((response) => {
          const res = response.data
          console.log(res)

          setGenderValue(res.detail['gender'])
          setHeightValue(res.detail['height'])
          setHeightInchesValue(res.detail['heightInches'])
          setWeightValue(res.detail['weight'])
          setDOBValue(res.detail['DOB'])
          setHistoryValue(res.detail['history'])
          
          if(res.hasOwnProperty("note")){
            setNotes(res.note)
          }
          if(res.hasOwnProperty("profile_pic")){
            setProfilePic(res.profile_pic)
          }
          if (res.hasOwnProperty("med_note")){
            console.log(res.med_note)
            setMedNotes(res.med_note)
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
            <TabNav tab="demographic"></TabNav>
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
                          Demographics 
                          </Text>
                          <div className="flex flex-col items-start ml-[50px]">  
                            <Img
                              className="h-[200px] w-[200px] md:h-auto object-cover rounded-bl-[14px] rounded-[14px] w-full"
                              src= {profilePic}
                              alt=""
                              // style={{ display: imageLoaded ? "block" : "none" }}
                              />
                            {/* <Img
                              className="h-[200px] w-[200px] md:h-auto object-cover rounded-bl-[14px] rounded-[14px] w-full"
                              src= "images/img_defaultprofile.jpg"
                              alt="image"
                              style = {{display: imageLoaded? "none": "block"}}
                              /> */}
                          </div>
                          <div className="flex flex-row gap-[13px] ml-[50px] items-center justify-start w-full" >
                            <Text
                              className="text-2xl md:text-[22px] text-black-900 sm:text-xl"
                              size="txtCairoBold24">
                              Name:
                            </Text>
                            <Text className="text-2xl md:text-[22px] text-black-900 sm:text-xl">{firstname}</Text>
                          </div>
                          <div className="flex flex-row gap-[13px] ml-[50px] items-center justify-start w-full">
                            <Text
                              className="text-2xl md:text-[22px] text-black-900 sm:text-xl"
                              size="txtCairoBold24">
                              Email:
                            </Text>                        
                            <Text className="text-2xl md:text-[22px] text-black-900 sm:text-xl" variant="outlined">{lastname}</Text>
                          </div>
                          <div className="flex flex-row gap-[13px] ml-[50px] items-center justify-start w-full">
                             <Text
                              className="text-2xl md:text-[22px] text-black-900 sm:text-xl"
                              size="txtCairoBold24" 
                            >
                              Gender:
                            </Text>
                            <Text className="text-2xl md:text-[22px] text-black-900 sm:text-xl">{genderValue}</Text>
                          </div>
                          <div className="flex flex-row gap-[13px] ml-[50px] items-center justify-start w-full">
                             <Text
                               className="text-2xl md:text-[22px] text-black-900 sm:text-xl"
                               size="txtCairoBold24">
                               Height:
                             </Text>
                             <Text className="text-2xl md:text-[22px] text-black-900 sm:text-xl">{height} ft</Text>
                             <Text className="text-2xl md:text-[22px] text-black-900 sm:text-xl">{heightInches} in</Text>
                          </div>
                          <div className="flex flex-row gap-[13px] ml-[50px] items-center justify-start w-full">
                             <Text
                               className="text-2xl md:text-[22px] text-black-900 sm:text-xl"
                               size="txtCairoBold24">
                               Weight:
                             </Text>
                             <Text className="text-2xl md:text-[22px] text-black-900 sm:text-xl">{weight} lbs</Text>
                          </div>
                           <div className="flex flex-row gap-[13px] ml-[50px] items-center justify-start w-full">
                            <Text
                              className="text-2xl md:text-[22px] text-black-900 sm:text-xl"
                              size="txtCairoBold24"
                            >
                              Birthday:{" "}
                            </Text>
                            
                            <Text className="text-2xl md:text-[22px] text-black-900 sm:text-xl">{DOB}</Text>
                          </div>
                          <div className="flex flex-row gap-[13px] ml-[50px] items-start justify-start w-full">
                            <Text
                              className="text-2xl md:text-[22px] text-black-900 sm:text-xl"
                              size="txtCairoBold24"
                              style={{ whiteSpace: 'nowrap' }}
                            >
                              Patient History:{" "}
                            </Text>
                            
                            <Text className="text-2xl md:text-[22px] text-black-900 sm:text-xl">{history}</Text>
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
                    <PhysicianNotes notes={note} token={props.token} proxy={props.proxy} tab="demographic"></PhysicianNotes>
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

