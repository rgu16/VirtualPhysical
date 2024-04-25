import React, { useState, useEffect } from 'react';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CancelIcon from '@mui/icons-material/Cancel';
import axios from 'axios';

export default function CheckandXButtons(props) {
  const [activeButton, setActiveButton] = useState(null);
  useEffect(() => {
    console.log("HERE");
    console.log(props.name)
    console.log(props.status);
    const button = props.status === 'normal'? 'check':(props.status === 'abnormal'? 'cross':null);
    setActiveButton(button);
  }, [props.status, props.name]);

  const handleButtonClick = (button) => {
    setActiveButton(button);
    const status = activeButton === 'cross'? 'normal' : 'abnormal';
    const data = {}
    data['status'] = status;
    props.setStatus(status);
    axios({
     method:"POST",
     url: props.proxy + "/upload_json",
     data: {data: data, filename: props.tab + '/status' + props.name},
     headers: {
       Authorization: 'Bearer ' + props.token
       }
   }).then((response) => {
    // console.log(data);
 })
   .catch((error)=>{
     if(error.response){
       console.log(error.response)
       console.log(error.response.status)
       console.log(error.response.headers)
     }
   })
  };

  return (
    <Stack direction="row" spacing={1}>
      <IconButton
        onClick={() => handleButtonClick('check')}
        style={{ backgroundColor: activeButton === 'check' ? 'green' : 'transparent' }}
      >
        <CheckCircleIcon fontSize="large"/>
      </IconButton>

      <IconButton
        onClick={() => handleButtonClick('cross')}
        style={{ backgroundColor: activeButton === 'cross' ? 'red' : 'transparent' }}
      >
        <CancelIcon fontSize="large"/>
      </IconButton>
    </Stack>
  );
}
