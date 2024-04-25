import React, { useState, useEffect } from "react";
import axios from 'axios';
import { Img, Button } from 'components';
import { jwtDecode } from "jwt-decode";

const SendEmailComponent = (props) => {
  const [cardiologistName, setCardiologistName] = useState(null);
  const [cardiologistWorkplace, setCardiologistWorkplace] = useState(null);
  const [cardiologistContact, setCardiologistContact] = useState(null);
  const token = props.token;
  // GET CARDIOLOGIST INFORMATION
  useEffect(() => {
    axios({
      method: "GET",
      url: props.proxy + "/profile",
      headers: {
        Authorization: 'Bearer ' + token
      }
    })
    .then((response) => {
      console.log(response.data.data['name'])
      setCardiologistName(response.data.data['name']);
      setCardiologistWorkplace(response.data.data['workplace']);
      setCardiologistContact(response.data.data['email']);
    })
    .catch((error) => {
      console.log(error.response);
      console.log(error.response.status);
      console.log(error.response.headers);
    });
  }, [token, props]);
  // COMPOSE EMAIL
  const handleSendClick = async () => {
    // PATIENT INFORMATION
    const folder = jwtDecode(token).patient;
    const patientEmail = folder.split('/')[0];
    const patientName = folder.split('/')[1];
    const checkupDate = folder.split('/')[2];
    console.log(cardiologistName)
    // console.log(folder)
    // console.log(patientName)
    axios({
      method: "POST",
      url: "https://virtualphysical.pythonanywhere.com/" + "send_message",
      data: {
        email: patientEmail,
        msg: 
`Dear ${patientName},

I hope this message finds you well. I have reviewed the notes from your recent check-up on ${checkupDate}. I want to discuss the results with you and address any concerns you may have in a timely manner through a virtual consultation.

To set up this virtual consultation, I kindly request that you schedule a Zoom call at your earliest convenience using the following link: https://calendar.app.google/jBwKghtErjq5XENbA.

Thank you for your cooperation and prompt attention to this matter. If you have any questions on scheduling the virtual consultation, please contact me at ${cardiologistContact}.

Best regards,

${cardiologistName}
${cardiologistWorkplace}
${cardiologistContact}`,
      },
      headers: {
        Authorization: 'Bearer ' + token
      }
    })
    .then((response) => {
      // Handle response if needed
      alert('Scheduling email sent successfully!');
    })
    .catch((error) => {
      console.log(error.response);
      console.log(error.response.status);
      console.log(error.response.headers);
    });
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
        onClick={() => handleSendClick()}
        color="gray_200_01"
      >
        <div className="!text-black-900 font-semibold leading-[normal] md:text-xl sm:text-lg text-[16px] text-center mr-[10px]">
          Schedule virtual call with patient
        </div>
      </Button>
    </div>
  );
};
export default SendEmailComponent;











// Message Melissa Cantu










// import React, { useState, useEffect } from "react";
// import axios from 'axios';
// import { Img, Button } from 'components';
// import { jwtDecode } from "jwt-decode";

// const SendEmailComponent = (props) => {
//   const [sendVariant, setSendVariant] = useState('text');
//   const [cardiologistName, setCardiologistName] = useState(null);
//   const [cardiologistWorkplace, setCardiologistWorkplace] = useState(null);
//   const [cardiologistContact, setCardiologistContact] = useState(null);

//   const token = props.token;


//   // GET CARDIOLOGIST INFORMATION
//   useEffect(() => {
//     axios({
//       method: "GET",
//       url: props.proxy + "/profile",
//       headers: {
//         Authorization: 'Bearer ' + token
//       }
//     })
//     .then((response) => {
//       console.log(response.data)
//       setCardiologistName(response.data.name);
//       setCardiologistWorkplace(response.data.workplace);
//       setCardiologistContact(response.data.email);
//     })
//     .catch((error) => {
//       console.log(error.response);
//       console.log(error.response.status);
//       console.log(error.response.headers);
//     });
//   }, [token, props]);

//   // GET PATIENT INFORMATION
//   const patient = jwtDecode(props.token).patient.split("/");
//   const firstname = useState(patient[1]);
//   const lastname = useState(patient[0]);

//   // COMPOSE EMAIL
//   const handleSendClick = async () => {
//     const folder = jwtDecode(token).patient;
//     const patientEmail = folder.split('/')[0];

//     axios({
//       method: "POST",
//       url: "https://virtualphysical.pythonanywhere.com/" + "send_message",
//       data: {
//         email: patientEmail,
//         msg: `Dear ${firstname} ${lastname},
  
//               I hope this message finds you well.
                        
//               I have reviewed the notes from your recent check-up. I want to discuss the results with you and address any concerns you may have in a timely manner through a virtual consultation.
                        
//               To set up this virtual consultation, I kindly request that you schedule a Zoom call at your earliest convenience using the following link: https://calendar.app.google/jBwKghtErjq5XENbA.
                        
//               Thank you for your cooperation and prompt attention to this matter. If you have any questions on scheduling the virtual consultation, please contact me at ${cardiologistContact}.
                        
//               Best regards,
                        
//               ${cardiologistName}
//               ${cardiologistWorkplace}
//               ${cardiologistContact}`,
//       },
//       headers: {
//         Authorization: 'Bearer ' + token
//       }
//     })
//     .then((response) => {
//       // Handle response if needed
//       setSendVariant('contained');
//       alert('Scheduling email sent successfully!');
//     })
//     .catch((error) => {
//       console.log(error.response);
//       console.log(error.response.status);
//       console.log(error.response.headers);
//     });
//   }

//   return (
//     <div>
//       <Button
//         className="cursor-pointer flex items-center justify-between min-w-[320px] sm:min-w-full rounded-[20px]"
//         leftIcon={
//           <Img
//             className="h-[30px] mt-1 mb-[7px] ml-[10px]"
//             src="images/img_calendar.svg"
//             alt="calendar"
//           />
//         }
//         onClick={() => handleSendClick()}
//         color="gray_200_01"
//       >
//         <div className="!text-black-900 font-semibold leading-[normal] md:text-xl sm:text-lg text-[16px] text-center mr-[10px]">
//           Schedule virtual call with patient
//         </div>
//       </Button>
//     </div>
//   );
// };

// export default SendEmailComponent;
