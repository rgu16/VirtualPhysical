import * as React from 'react';
import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import AudioPlayer from "components/AudioPlayer/AudioPlayer.js"
import axios from 'axios';
import { useRef,  useState } from 'react';
import { Img, Line, List, Text, NavBar, TabNav } from "components";

export default function PulmonaryPopover(props) {
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
  formData.append('location', "/heart/pulmonarydiaphram")
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
  formData.append('location', "/heart/pulmonarybell")
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
     <Button 
        aria-describedby={id} 
        variant="contained" 
        onClick={handleClick} 
        style={{ padding: 1, minWidth: 25 }}> 
      P
      </Button>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
            vertical: 'top',
            horizontal: 'left',
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'left',
          }}
      >
            <Typography sx={{ p: 2 }}>
                <div>
                  <h1> Pulmonary Area Recording </h1>
                  <br></br>
                  <input
                     ref={fileInputRef}
                     type="file"
                     style={{ display: 'none' }}
                     accept="audio/*" // Accept only image files
                     onChange={handleAudioUpload}
                   />
               <button
  className="flex md:flex-col flex-row md:gap-5 items-center mt-2.5 w-[96%] md:w-full border-0 roundedButton"
  style={{ background: '#5974F6',  borderRadius: '20px', width: '250px'}}
  onClick={handleUploadClick}
>
  <Img
    className="h-7 md:ml-[0] ml-[0] md:mt-0 mt-1 w-7 "
    src="images/audioupload.png"
    alt="television"
  />
  <Text  style={{color: 'white' }} className="font-semibold ml-2.5 md:ml-[0] text-xl">Upload diaphram audio</Text>
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
               <button
  className="flex md:flex-col flex-row md:gap-5 items-center mt-2.5 w-[96%] md:w-full border-0 roundedButton"
  style={{ background: '#5974F6',  borderRadius: '20px', width: '250px'}}
  onClick={handleUploadClick2}
>
  <Img
    className="h-7 md:ml-[0] ml-[0] md:mt-0 mt-1 w-7 "
    src="images/audioupload.png"
    alt="television"
  />
  <Text  style={{color: 'white' }} className="font-semibold ml-2.5 md:ml-[0] text-xl">Upload bell audio</Text>
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