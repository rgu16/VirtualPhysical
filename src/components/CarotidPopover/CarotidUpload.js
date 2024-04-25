import * as React from 'react';
import Button from '@mui/material/Button';
import { useRef,  useState } from 'react';
import { Text} from "components";
import Popup from 'reactjs-popup';
import axios from 'axios';

export default function CarotidUpload(props) {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  const [profilePic, setProfilePic] = useState()
 const fileInputRef = useRef(null);
 const handleUploadClick = () => {
   fileInputRef.current.click();
 };



 const handleAudioUpload = (e) => {
  e.preventDefault();
  console.log("handleCarotidAudioUpload")
  const file = e.target.files[0];
  setProfilePic(URL.createObjectURL(file))
  if (!file) {
      console.error('No file selected.');
      return;
  }
  const formData = new FormData();
  formData.append('file', file, file.name);
  formData.append('location', "/pulses/carotidaudio")
  console.log(formData)
  axios({
      method: "POST",
      url: props.proxy+"/upload_file",
      data: formData,
      headers: {
          Authorization: 'Bearer ' + props.token
      }
  }).then((response) => {

  }).catch((error)=>{
      if(error.response){
          console.log(error.response)
          console.log(error.response.status)
          console.log(error.response.headers)
      }
  })
};

  return (
    <div>
    <Popup trigger={ profilePic?<Button aria-describedby={id} variant="contained" color={profilePic?"success":"error"} onClick={(e) => handleClick(e)} style={{ backgroundColor: 'green',
                      color: 'white', padding: 1, minWidth: 25 }}></Button>:<Button aria-describedby={id} variant="contained" color={profilePic?"success":"error"} onClick={(e) => handleClick(e)} style={{ backgroundColor: 'red',
                      color: 'white', padding: 1, minWidth: 25 }}> {props.position === "left top"? "L" : "R"}
      </Button>} position= {props.position}>
      <div className='flex flex-col items-center p-2 justify-start text-center mt-[100px] ml-[115px] bg-white-A700 shadow-lg border-solid border-2 border-black'>
                  <Text
                              className="text-2xl md:text-[22px] text-black-900 sm:text-xl"
                              size="txtCairoBold24">
                             {props.title}
                          </Text> 
                  <input
                     ref={fileInputRef}
                     type="file"
                     style={{ display: 'none' }}
                     accept="audio/*" // Accept only image files
                     onChange={handleAudioUpload}
                   />
                   <button className="bg-indigo-A200 justify-evenly flex md:flex-col flex-row md:gap-5 items-center mt-2.5 w-[200px] md:w-full border-0 h-[50px] rounded-[20px] hover:bg-indigo-A700"
                      onClick={handleUploadClick}
                      >
                      <Text className="font-semibold md:ml-[0] text-white-A700 text-xl">Upload audio</Text>
                  </button>
                          <Text
                              className="text-xl md:text-[22px] text-black-900 sm:text-xl mt-[10px]">
                             Stethoscope Recording - Diaphragm
                          </Text> 
                  <audio controls>
                    {profilePic && <source src={profilePic} type="audio/wav" />}
                    
                  </audio>
                </div>
  </Popup>
    </div>
  );
}