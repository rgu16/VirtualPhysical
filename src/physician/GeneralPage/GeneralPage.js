import { useState, useEffect } from 'react';
import axios from 'axios';
import "./style.css";
import {  Img, List, Text, NavBar, TabNav, PhysicianNotes } from "components";

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
  const [medNote, setMedNotes] = useState();
  const [eyePic, setEyePic] = useState();
  const [handPic, setHandPic] = useState();

  useEffect(() => {
    
    axios.all([
      axios.get(props.proxy + "download/general", { headers: { Authorization: 'Bearer ' + props.token } }),
      axios.get(props.proxy + "download/eyes", { headers: { Authorization: 'Bearer ' + props.token } }),
      axios.get(props.proxy + "download/hands", { headers: { Authorization: 'Bearer ' + props.token } })

    ]).then(axios.spread((generalResponse, eyesResponse, handsResponse) => {

      console.log("general response", generalResponse.data.detail)
      console.log("eyes response", eyesResponse.data)
      console.log("hands response", handsResponse.data)

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
        const generalmed_Notes = generalResponse.data.med_note || "";
        const eyesmed_Notes = eyesResponse.data.med_note || "";
        const handsmed_Notes = handsResponse.data.med_note || "";
        setMedNotes(`${eyesmed_Notes} ${handsmed_Notes} ${generalmed_Notes}`)

        setEyePic(eyesResponse.data.Image)
        setHandPic(handsResponse.data.Image)

    })).catch((error) => {
      console.error("Error fetching data:", error);
    });

  }, [props]); // Dependency array to trigger useEffect when props change


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
            <TabNav tab="general"></TabNav>
            <div className="bg-white-A700 flex flex-col font-cairo items-center justify-start p-10 sm:px-5 w-full"style={{
    paddingTop: '50px',
  }} >
              <div className="flex flex-col  justify-start w-[99%] md:w-full">
                <div className="flex md:flex-col flex-row md:gap-10 items-start justify-start w-full">
                  <div className="md:h-[560px] shrink relative w-[100%] md:w-full">
                      <div className="flex flex-col items-start justify-start w-full">
                        <List
                          className="flex flex-col gap-[10px] md:ml-[0] ml-[50px] w-[80%]"
                          orientation="vertical">      
                          <Text
                          className="sm:text-3xl md:text-[32px] text-[34px] text-gray-900_02"
                          size="txtCairoBold34">
                          General
                          </Text>
                          <div className="flex flex-row gap-[13px] ml-[50px] items-center justify-start w-full" >
                            <Text
                              className="text-2xl md:text-[22px] text-black-900 sm:text-xl"
                              size="txtCairoBold24">
                              Capillary Refill Time:
                            </Text>
                            <Text className={capillaryrefillvalue<9 && capillaryrefillvalue>7?"text-2xl md:text-[22px] text-black-900 sm:text-xl":
                          "text-2xl md:text-[22px] text-red-A700 sm:text-xl"}>{capillaryrefillvalue} sec</Text>
                          </div>
                          <div className="flex flex-row gap-[13px] ml-[50px] items-center justify-start w-full">
                            <Text
                              className="text-2xl md:text-[22px] text-black-900 sm:text-xl"
                              size="txtCairoBold24">
                              Pallor (hands):
                            </Text>   
                            <div className="relative group flex flex-row">
                            <button >
                              <img
                              className="h-[36px] w-[36px]"
                              src="images/img_profile_black_900.svg"
                              alt="profile_One"/>
                            </button>
                            <div  className="z-10 absolute top-[20px] left-full bg-gray-100 text-gray-700 px-2 py-1 rounded-md opacity-0 group-hover:opacity-100 w-[250px] transition-all duration-300 ease-in-out">
                            <Img
                      src= {handPic}
                      alt=""
                      />
                            </div> 
                          </div>                     
                            <Text className={pallorvalue===0?"text-2xl md:text-[22px] text-black-900 sm:text-xl":
                          "text-2xl md:text-[22px] text-red-A700 sm:text-xl"} variant="outlined">+{pallorvalue}</Text>
                          </div>
                          <div className="flex flex-row gap-[13px] ml-[50px] items-center justify-start w-full">
                             <Text
                              className="text-2xl md:text-[22px] text-black-900 sm:text-xl"
                              size="txtCairoBold24" 
                            >
                              Pulse Ox Reading:
                            </Text>
                            <Text className={pulseox>94?"text-2xl md:text-[22px] text-black-900 sm:text-xl":
                          "text-2xl md:text-[22px] text-red-A700 sm:text-xl"}>{pulseox}%</Text>
                          </div>
                          <div className="flex flex-row gap-[13px] ml-[50px] items-center justify-start w-full">
                             <Text
                               className="text-2xl md:text-[22px] text-black-900 sm:text-xl"
                               size="txtCairoBold24">
                               Cyanosis (hands):
                             </Text>
                             <div className="relative group flex flex-row">
                            <button >
                              <img
                              className="h-[36px] w-[36px]"
                              src="images/img_profile_black_900.svg"
                              alt="profile_One"/>
                            </button>
                            <div  className="z-10 absolute top-[20px] left-full bg-gray-100 text-gray-700 px-2 py-1 rounded-md opacity-0 group-hover:opacity-100 w-[250px] transition-all duration-300 ease-in-out">
                            <Img
                      src= {handPic}
                      alt=""
                      />
                            </div> 
                          </div>   
                             <Text className={cyanosisvalue===0?"text-2xl md:text-[22px] text-black-900 sm:text-xl":
                          "text-2xl md:text-[22px] text-red-A700 sm:text-xl"}>+{cyanosisvalue}</Text>
                          </div>
                          <div className="flex flex-row gap-[13px] ml-[50px] items-center justify-start w-full">
                             <Text
                               className="text-2xl md:text-[22px] text-black-900 sm:text-xl"
                               size="txtCairoBold24">
                              Jaundice Severity (eyes):
                             </Text>
                             <div className="relative group flex flex-row">
                            <button >
                              <img
                              className="h-[36px] w-[36px]"
                              src="images/img_profile_black_900.svg"
                              alt="profile_One"/>
                            </button>
                            <div  className="z-10 absolute top-[20px] left-full bg-gray-100 text-gray-700 px-2 py-1 rounded-md opacity-0 group-hover:opacity-100 w-[250px] transition-all duration-300 ease-in-out">
                            <Img
                      src= {eyePic}
                      alt=""
                      />
                            </div> 
                          </div>   
                             <Text className={eyesvalue===0?"text-2xl md:text-[22px] text-black-900 sm:text-xl":
                          "text-2xl md:text-[22px] text-red-A700 sm:text-xl"}>+{eyesvalue}</Text>
                          </div>
                           <div className="flex flex-row gap-[13px] ml-[50px] items-center justify-start w-full">
                            <Text
                              className="text-2xl md:text-[22px] text-black-900 sm:text-xl"
                              size="txtCairoBold24"
                              style={{ whiteSpace: 'nowrap' }}
                            >
                              General Pain:
                            </Text>
                            
                            <Text className="text-2xl md:text-[22px] text-black-900 sm:text-xl">{generalpain}</Text>
                          </div>
                          <div className="flex flex-row gap-[13px] ml-[50px] items-start justify-start w-full">
                            <Text
                              className="text-2xl md:text-[22px] text-black-900 sm:text-xl"
                              size="txtCairoBold24"
                              style={{ whiteSpace: 'nowrap' }}
                            >
                              Pain Summary:
                            </Text>
                            
                            <Text className="text-2xl md:text-[22px] text-black-900 sm:text-xl">{painsummary}</Text>
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
                    <PhysicianNotes notes={note} token={props.token} proxy={props.proxy} tab="general"></PhysicianNotes>
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