import * as React from 'react';
import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import AudioPlayer from "components/AudioPlayer/AudioPlayer.js"
import axios from 'axios';
import { useRef,  useState } from 'react';
import { Img, Line, List, Text, NavBar, TabNav } from "components";

export default function AtrialPopover(props) {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };



  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  const [profilePic, setProfilePic] = useState()
 const fileInputRef = useRef(null);
 const fileInputRef2 = useRef(null);
 const [imageLoaded, setImageLoaded] = useState(false);
 const handleUploadClick = () => {
   fileInputRef.current.click();
 };

 const handleUploadClick2 = () => {
  fileInputRef2.current.click();
};


 const handleAudioUpload = (e) => {
  e.preventDefault();
  console.log("handleAudioUpload")
  const file = e.target.files[0];
  setProfilePic(URL.createObjectURL(file))
  if (!file) {
      console.error('No file selected.');
      return;
  }
  const formData = new FormData();
  formData.append('file', file, file.name);
  formData.append('location', "/heart/atrialdiaphram")
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

const handleAudioUploadBell = (e) => {
  e.preventDefault();
  const file = e.target.files[0];
  console.log('UploadAudioUploadBell')
  setProfilePic(URL.createObjectURL(file))
  if (!file) {
      console.error('No file selected.');
      return;
  }
  const formData = new FormData();
  formData.append('file', file, file.name);
  formData.append('location', "/heart/atrialbell")
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




 
  return (
    <div>
     <Button aria-describedby={id} variant="contained" color="error" onClick={handleClick} style={{ padding: 1, minWidth: 25 }}> A
      </Button>
      <Popover
        id={id}
        open={open}
        onClose={handleClose}
        anchorReference="anchorPosition"
        anchorPosition={{ top: 2060, left: 300 }}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        style={{ marginTop: "150px"}}
      >
            <Typography sx={{ p: 2 }}>
                <div>
                  <h1> Atrial Area Recording </h1>
                  <br></br>
                  <input
                     ref={fileInputRef}
                     type="file"
                     style={{ display: 'none' }}
                     accept="audio/*" // Accept only image files
                     onChange={handleAudioUpload}
                   />
               <button className="bg-indigo-A200 justify-evenly flex md:flex-col flex-row md:gap-5 items-center mt-2.5 w-[96%] md:w-full border-0 h-[50px] rounded-[20px] hover:bg-indigo-A700"
                      onClick={handleUploadClick}
                      >
                        <Img
                          className="h-6 md:ml-[0] ml-[0] md:mt-0 mt-1 w-6"
                          src="images/img_television_white.svg"
                          alt="television"
                        />
                      <Text className="font-semibold md:ml-[0] text-white-A700 text-xl">Upload diaphragm audio</Text>
                  </button>
<br></br>

  <h2>Stethoscope Recording - Diaphragm</h2>
<audio controls>
  <source src={profilePic} type="audio/wav" />
  onLoad ={()=> setImageLoaded(true)}
  
</audio>

<br></br>
                  <input
                     ref={fileInputRef2}
                     type="file"
                     style={{ display: 'none' }}
                     accept="audio/*" // Accept only image files
                     onChange={handleAudioUploadBell}
                   />
               <button className="bg-indigo-A200 justify-evenly flex md:flex-col flex-row md:gap-5 items-center mt-2.5 w-[96%] md:w-full border-0 h-[50px] rounded-[20px] hover:bg-indigo-A700"
                      onClick={handleUploadClick2}
                      >
                        <Img
                          className="h-6 md:ml-[0] ml-[0] md:mt-0 mt-1 w-6"
                          src="images/img_television_white.svg"
                          alt="television"
                        />
                      <Text className="font-semibold md:ml-[0] text-white-A700 text-xl">Upload bell audio</Text>
                  </button>
<br></br>

  <h2>Stethoscope Recording - Bell</h2>
<audio controls>
  <source src={profilePic} type="audio/wav" />
  onLoad ={()=> setImageLoaded(true)}
  
</audio>

<br></br>
                 

                  {/*<AudioPlayer></AudioPlayer> */}  
                </div>
            </Typography>
      </Popover>
    </div>
  );
}