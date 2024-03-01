import React, {useEffect, useState} from "react";
import "./style.css";
import { Img, Input, Text, NavBar} from "components";
import { PatientContact } from "./PatientContact";
import { SendOutlined } from '@ant-design/icons';
import axios from 'axios';
export const MessagesPage = (props) => {
  const [msg, setMsg] = useState([])
  const [patients, setPatients] = useState([{name:"Taylor Swift", email: "1@gmail.com",picture:"images/img_defaultprofile.jpg"}
                                            ,{name:"Taylor Swift", email: "2@gmail.com",picture:"images/img_defaultprofile.jpg"},
                                            {name:"Taylor Swift", email: "3@gmail.com",picture:"images/img_defaultprofile.jpg"}])
  const [active, setActive] = useState(0)
  useEffect(() => {
    axios({
        method: "POST",
        url: props.proxy + "/search_patient",
        data:{
          email: '',
          name: '',
          date: ''
        },
        headers: {
        Authorization: 'Bearer ' + props.token
        }
    })
    .then((response) => {
        const res = response.data
        const data = res.map(patient => ({
          name: patient.name,
          email: patient.email,
          picture: "images/img_defaultprofile.jpg"
        }))
        setPatients(data)
        setMsg(Array.from({ length: data.length }, () => ""))
    }).catch((error) => {
        console.log(error.response)
        console.log(error.response.status)
        console.log(error.response.headers)
    })
  }, [props]);

  const handleContactSelect = (id) => {
    setActive(id);
  };

  const updateMessages = (e) => {
    const newList = [...msg];
    newList[active] = e;
    setMsg(newList);
  };

  const handleSendMessage = () => {
    axios({
      method: "POST",
      url: props.proxy + "send_message",
      data:{
        email: patients[active].email,
        msg: msg[active],
      },
      headers: {
      Authorization: 'Bearer ' + props.token
      }
  })
    .then((response) => {
        const res = response.data
        alert('Scheduling email sent successfully!');
    }).catch((error) => {
        console.log(error.response)
        console.log(error.response.status)
        console.log(error.response.headers)
    })
  };
  return (
    <div className="bg-white-A700 flex flex-col items-center justify-start mx-auto w-full h-screen">
    <NavBar  proxy={props.proxy} token={props.token}></NavBar>
      <div className="bg-gray-50 flex flex-col items-center justify-start pb-[20px] w-full">
        <div className="flex flex-col justify-start w-full">
            <Text className="font-cairo font-semibold md:ml-[0] ml-[250px] mt-[77px] sm:text-4xl md:text-[38px] text-[40px] text-black-900">
              Messages
            </Text>
            <div className ="flex justify-center items-center w-full">
            <div className = "bg-white-A700 flex flex-row rounded-[50px] w-[80%]">
            <div className="flex flex-col pr-[150px] ml-[50px] gap-[5px] mt-[50px] mb-[50px] mr-[50px] border-r-4 border-gray-200_04"
            style={{ maxHeight: '500px', overflowY: 'scroll', overflowX: 'hidden'}}>
              {patients.map((patient,index) =>
                <PatientContact key={index} 
                                id={index} 
                                active={active === index}
                                patient={patient}
                                onClick={handleContactSelect}/>
                
              )}
                
            </div>
            <div className="bg-gray-200_04 flex flex-col rounded-[20px] w-full mt-[50px] mb-[50px] mr-[50px]">
            <div className="flex flex-row mt-[50px] mr-[50px] ml-[50px] pb-[10px] mb-[10px] border-b-2 border-black-900">
              <p className="taylor-swift-gmail">
                <span className="text-wrapper-3">To: {patients[active].email}</span>
              </p>
            </div>
              <textarea className="block w-[90%] h-full ml-[50px] mb-[20px] mr-[50px] rounded-[20px] p-[10px]"         
                        value={msg[active]} 
                        onChange={(e) => updateMessages(e.target.value)} 
                        placeholder= "Enter email message..."
              >
              </textarea>
            
            <button className="bg-indigo-A200 flex flex-col h-[60px] m-[50px] mt-[0] items-center justify-start md:px-10 sm:px-5 px-[93px] rounded-[20px] w-[20%]"
                        type="submit"
                        onClick={handleSendMessage}>
                <div className="flex flex-row justify-center items-center w-full">
                <Text className="flex flex-row font-bold items-center justify-center leading-[20.00px] mt-2.5 text-center text-white-A700 text-xl w-full">
                    Send
                </Text>
                </div>
            </button>
            </div>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
};
