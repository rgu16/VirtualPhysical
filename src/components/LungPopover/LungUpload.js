import * as React from 'react';
import Popup from 'reactjs-popup';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import AudioPlayer from "components/AudioPlayer/AudioPlayer.js"
import axios from 'axios';
import { useRef,  useState, useEffect } from 'react';
import { Img, Line, List, Text, NavBar, TabNav } from "components";

export default function LungPopover(props) {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  const [profilePic, setProfilePic] = useState(null);

  useEffect(() => {
    setProfilePic(props.audio);
  }, [props.audio]);

  const fileInputRef = useRef(null);
  const [imageLoaded, setImageLoaded] = useState(false);
  const handleUploadClick = () => {
    fileInputRef.current.click();
  };


 const handleAudioUpload = (e) => {
  e.preventDefault();
  console.log("handleLungAudioUpload")
  const file = e.target.files[0];
  setProfilePic(URL.createObjectURL(file))
  if (!file) {
      console.error('No file selected.');
      return;
  }
  const formData = new FormData();
  formData.append('file', file, file.name);
  formData.append('location', props.location)
  console.log(formData)
  axios({
      method: "POST",
      url: props.proxy+"/upload_file",
      data: formData,
      headers: {
          Authorization: 'Bearer ' + props.token
      }
  }).then((response) => {
    const res = response.data
    console.log(res)
 
    console.log('Server response:', response);
    console.log('Image uploaded:', imageUrl);
   // Assuming the URL is nested within a 'data' property, modify this accordingly
  const imageUrl = response.data && response.data.url;

  }).catch((error)=>{
      if(error.response){
          console.log(error.response)
          console.log(error.response.status)
          console.log(error.response.headers)
      }
  })
};

    const classname = props.position === "left top"? 'flex flex-col items-center p-2 justify-start text-center mt-[100px] ml-[115px] bg-white-A700 shadow-lg border-solid border-2 border-black':
    'flex flex-col items-center p-2 justify-start text-center mt-[100px] bg-white-A700 ml-[175px] shadow-lg border-solid border-2 border-black';
 

  return (
    <div>

    <Popup trigger={ 
      <Button 
        aria-describedby={id} 
        variant="contained" 
        color={profilePic?"success":"error"} 
        onClick={(e) => handleClick(e)} 
        style={{ padding: 1, minWidth: 25 }}>
          {props.position === "left top"? "L" : "R"}
      </Button>} 
      
      position= {props.position}>

      <div className={classname}>
                  <Text
                      className="text-2xl md:text-[22px] text-black-900 sm:text-xl"
                      size="txtCairoBold24">
                      {props.title}
                  </Text> 

                  <input
                     ref={fileInputRef}
                     type="file"
                     style={{ display: 'none' }}
                     accept="audio/*" // Accept only audio files
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