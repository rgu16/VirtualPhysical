import React, {useState, useEffect} from "react";
import { Button, Img, Line, List, Text } from "./";
import { Link } from 'react-router-dom';
import axios from 'axios';
import Alert from '@mui/material/Alert';
import CheckIcon from '@mui/icons-material/Check';
import TextareaAutosize from '@mui/material/TextareaAutosize';

const GeneralPhysicianNotes = (props) => {
  const [notes, setNotes] = useState();
  const [showSuccessAlert, setShowSuccessAlert] = useState(false);

  useEffect(() => {
    setNotes(props.notes);
    console.log('props.notes changed:', props.notes);
  }, [props.notes]);

    const handleSave = (e) => {
        e.preventDefault();
        
        let folder;
        
        switch (props.tab) {
            case 'general':
                folder = 'general';
                break;
            case 'eyes':
                folder = 'eyes';
                break;
            case 'hands':
                folder = 'hands';
                break;
            default:
                folder = 'general'; // Default to general folder
        }

        const filename = folder + "/note";
    
        axios({
        method:"POST",
        url: props.proxy + "/upload_json",
        data: { data: notes, filename: filename },
        headers: {
            Authorization: 'Bearer ' + props.token
        }
        }).then((response) => {
        console.log("Notes saved successfully.");
        }).catch((error) => {
        console.error("Error saving notes:", error);
        });
    };
  
  return (
    <>
        <div className= "flex flex-col items-start justify-start w-[400px] h-full m-[50px] mt-[80px]">
        <Text className="font-bold text-2xl text-black-900">Notes: </Text>
        <TextareaAutosize
          className="w-full h-[400px] border border-gray-400 border-2 rounded-[14px] p-[10px]"
          placeholder="Specialty physician notes"
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
          minRows={22} // Define the minimum number of rows
        />
        <button className="bg-indigo-A200 flex md:flex-col flex-row md:gap-5 ml-5px items-center justify-center mt-2.5 w-[50%] md:w-full h-[50px] rounded-[20px]"
            onClick={(e) => handleSave(e)}
            >
            <Text className="font-semibold md:ml-[0] text-white-A700 text-xl">Save</Text>
        </button>
        </div>
        {showSuccessAlert && ( // Conditionally render the success alert
        <Alert icon={<CheckIcon fontSize="inherit" />} severity="success">
          Your notes have been saved.
        </Alert>
      )}
    </>
    );
};


export default GeneralPhysicianNotes;