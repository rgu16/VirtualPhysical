import React, {useState, useEffect} from "react";
import { Button, Img, Line, List, Text } from ".";
import { Link } from 'react-router-dom';
import axios from 'axios';
import Alert from '@mui/material/Alert';
import CheckIcon from '@mui/icons-material/Check';
import TextareaAutosize from '@mui/material/TextareaAutosize';

const PhysicianNotes = (props) => {
  const [notes, setNotes] = useState('');
  const [showSuccessAlert, setShowSuccessAlert] = useState(false);

  useEffect(() => {
    setNotes(props.notes);
  }, [props.notes]);

  const handleSave = (e) => {
    e.preventDefault();
    const filename = props.tab + "/note";

    axios({
      method: "POST",
      url: props.proxy + "/upload_json",
      data: { data: notes, filename: filename },
      headers: {
        Authorization: 'Bearer ' + props.token
      }
    }).then((response) => {
      setShowSuccessAlert(true); // Show the success alert
      setTimeout(() => {
        setShowSuccessAlert(false); // Hide the success alert after 4 seconds
      }, 4000);
    }).catch((error) => {
      console.error("Error saving notes:", error);
    });
  };

  return (
    <>
      <div className="flex flex-col items-start justify-start w-[400px] ml-[50px] mr-[50px]">
        <Text className="font-bold text-2xl text-black-900">Notes: </Text>
        <TextareaAutosize
          className="w-full h-[200px] border border-gray-400 border-2 rounded-[14px] p-[5px] text-xl leading-normal"
          placeholder="Cardiologist notes"
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
          minRows={6} // Define the minimum number of rows
        />
        <button className="bg-indigo-A200 flex md:flex-col flex-row md:gap-5 ml-5px items-center justify-center mt-2.5 w-[30%] md:w-full h-[50px] rounded-[20px] hover:bg-indigo-A700" 
          onClick={(e) => handleSave(e)}>
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

export default PhysicianNotes; 