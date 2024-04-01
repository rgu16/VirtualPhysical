import React, { useState } from "react";
import "./style.css";
import axios from 'axios';
// import Button from '@mui/material/Button';
import { jwtDecode } from 'jwt-decode';
import {Img, Button} from 'components';

const SendEmailComponent = (props) => {
  const [sendVariant, setSendVariant] = useState('text');
  const token = props.token

  const handleSendClick = async () => {

    console.log(props.patientEmail)
    console.log(jwtDecode(token).patient)
    const folder = jwtDecode(token).patient
    const patientEmail = folder.split('/')[0];
    console.log(patientEmail)

      axios({
        method: "POST",
        url: "https://virtualphysical.pythonanywhere.com/" + "send_message",
        data:{
          email: patientEmail,
          msg: 
`Dear [Patient's Name], 
  
I hope this message finds you well.
          
I have reviewed the notes from your recent check-up on [Date]. I want to discuss the results with you and address any concerns you may have in a timely manner through a virtual consultation.
          
To set up this virtual consultation, I kindly request that you schedule a Zoom call at your earliest convenience using the following link: https://calendar.app.google/jBwKghtErjq5XENbA.
          
Thank you for your cooperation and prompt attention to this matter. If you have any questions on scheduling the virtual consultation, please contact me at [Contact Information].
          
Best regards,
          
[Cardiologist's Name]
[Position]
[Contact Information]`,
        },
        headers: {
        Authorization: 'Bearer ' + token
        }
    })

      .then((response) => {
          const res = response.data
      }).catch((error) => {
          console.log(error.response)
          console.log(error.response.status)
          console.log(error.response.headers)
      })
        setSendVariant('contained');
        alert('Scheduling email sent successfully!');
      }
  


  return (
    <div>
      <Button
        className="cursor-pointer flex items-center justify-between min-w-[320px] sm:min-w-full rounded-[20px]"
        leftIcon={
          <Img
            className="h-[30px] mt-1 mb-[7px] ml-[10px]"
            src="images/img_calendar.svg"
            alt="calendar"
          />
        }
        // variant={sendVariant}
        onClick={() => handleSendClick()}
        color="gray_200_01"

      >
        <div className="!text-black-900 font-semibold leading-[normal] md:text-xl sm:text-lg text-[16px] text-center mr-[10px]">
          Schedule virtual call with patient
        </div>
      </Button>
      {/* <div>
        <Button variant={sendVariant} onClick={() => handleSendClick()}>
          Send your consult scheduling link to the patient
        </Button>
      </div> */}
    </div>
  );
};

export default SendEmailComponent;