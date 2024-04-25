import * as React from 'react';
import Popup from 'reactjs-popup';
import Button from '@mui/material/Button';
import { useState, useEffect } from 'react';
import { Text } from "components";
import CheckandXButtons from "components/CheckandXButtons";

export default function LungPopover(props) {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  const [profilePic, setProfilePic] = useState(null);
  useEffect(() => {
    setProfilePic(props.audio);
  }, [props.audio]);

    const classname = props.position === "left top"? 'flex flex-col items-center p-2 justify-start text-center mt-[100px] ml-[115px] bg-white-A700 shadow-lg border-solid border-2 border-black':
    'flex flex-col items-center p-2 justify-start text-center mt-[100px] bg-white-A700 ml-[175px] shadow-lg border-solid border-2 border-black';
  return (
    <div>
    <Popup trigger={ <Button aria-describedby={id} variant="contained" color="error" onClick={(e) => handleClick(e)} style={{  backgroundColor: 'red',
                      color: 'white',  padding: 1, minWidth: 25 }}> {props.position === "left top"? "L" : "R"}
      </Button>} position= {props.position}>
      <div className={classname}>
                  <Text
                              className="text-2xl md:text-[22px] text-black-900 sm:text-xl"
                              size="txtCairoBold24">
                             {props.title}
                          </Text> 
                  {/* <input
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
                  </button> */}
                          <Text
                              className="text-xl md:text-[22px] text-black-900 sm:text-xl mt-[10px]">
                             Stethoscope Recording - Diaphragm
                          </Text> 
                  <audio controls>
                    {profilePic && <source src={profilePic} type="audio/wav" />}
                    
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