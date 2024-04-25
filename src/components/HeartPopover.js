import * as React from 'react';
import Popup from 'reactjs-popup';
import Button from '@mui/material/Button';
import { useState, useEffect } from 'react';
import {Text} from "components";
import CheckandXButtons from "components/CheckandXButtons";

export default function HeartUpload(props) {

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };


  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  const [profilePic, setProfilePic] = useState(null);
  const [profilePic1, setProfilePic1] = useState(null);
  useEffect(() => {
    setProfilePic(props.audio);
    setProfilePic1(props.audiobell);
    // console.log(props.audiobell)
  }, [props.audio, props.audiobell]);
  
  let popupbutton
  switch(props.letter) {
      case "A":
        popupbutton = <Button aria-describedby={id} variant="contained" color="error" onClick={handleClick}
        
         style={{     backgroundColor: 'red',
                      color: 'white',      
                      padding: 1, minWidth: 25 }}> A
        </Button>
        break;
      case "M":
        popupbutton =    <Button 
        aria-describedby={id} 
        variant="contained" 
        // color="inherit"
        onClick={handleClick} 
        style={{ padding: 1, minWidth: 25, backgroundColor: "#ce8a01", color:'#fafafa'}}> 
      M
      </Button>
        break;
      case "P":
          popupbutton = <Button 
      aria-describedby={id} 
      variant="contained" 
      onClick={handleClick} 
      style={{  backgroundColor: 'blue',
      color: 'white',  padding: 1, minWidth: 25 }}> 
    P
    </Button>
        break;
      case "T":
          popupbutton = <Button 
      aria-describedby={id} 
      variant="contained" 
      color="success"
      onClick={handleClick} 
      style={{  backgroundColor: 'green',
      color: 'white',  padding: 1, minWidth: 25 }}> 
    T
    </Button>
          break;
      default:
          popupbutton = <Button aria-describedby={id} variant="contained" color="error" onClick={handleClick} style={{ padding: 1, minWidth: 25 }}> A
        </Button>
        // Code to execute if expression doesn't match any case
    }
    const classname = props.position === "left top"? 'flex flex-col items-center p-2 justify-start text-center mt-[100px] ml-[115px] bg-white-A700 shadow-lg border-solid border-2 border-black':
    'flex flex-col items-center p-2 justify-start text-center mt-[100px] bg-white-A700 ml-[175px] shadow-lg border-solid border-2 border-black';
  return (
    <div>
    <Popup trigger={popupbutton} >
      <div className={classname}>
                  <Text
                              className="text-2xl md:text-[22px] text-black-900 sm:text-xl"
                              size="txtCairoBold24">
                             {props.title}
                          </Text> 
                          <Text
                              className="text-xl md:text-[22px] text-black-900 sm:text-xl mt-[10px]">
                             Stethoscope Recording - Diaphragm
                          </Text> 
                  <audio controls>
                    {profilePic && <source src={profilePic} type="audio/wav" />}
                    
                  </audio>
                
                          <Text
                              className="text-xl md:text-[22px] text-black-900 sm:text-xl mt-[10px]">
                             Stethoscope Recording - Bell
                          </Text> 
                  <audio controls>
                    {profilePic1 && <source src={profilePic1} type="audio/wav" />}
                    
                  </audio>
                  <div className="flex flex-row gap-[13px] ml-[50px] items-center justify-start w-full">
                          <Text
                               className="text-2xl md:text-[22px] text-black-900 sm:text-xl"
                               >
                               Normal?
                             </Text>
                              {/* <span className="text-wrapper-7">Normal?</span> */}
                            
                            <span className="flex flex-row">
                              <div>
                              <CheckandXButtons setStatus={props.setStatus} status={props.status}
                                                tab={props.tab} name={props.name}
                                                proxy={props.proxy} token={props.token}/>
                              </div>   
                                     
                            </span>
                            </div>
                  
                </div>
  </Popup>
    </div>
  );
}