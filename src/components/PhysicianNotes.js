import React, {useState, useEffect} from "react";
import { Button, Img, Line, List, Text } from "./";
import { Link } from 'react-router-dom';
import axios from 'axios';
const PhysicianNotes = (props) => {
  const [notes, setNotes] = useState();

  useEffect(() => {
    setNotes(props.notes);
    console.log('props.notes changed:', props.notes);
  }, [props.notes]);

  const handleSave = (e) => {
    console.log(notes);
    e.preventDefault();
    const filename = props.tab === '/demographic'? "/demographic_notes" : props.tab + "/note";
    axios({
     method:"POST",
     url: props.proxy + "/upload_json",
     data: {data: notes, filename: filename},
     headers: {
       Authorization: 'Bearer ' + props.token
       }
   }).then((response) => {
     const res =response.data;
     console.log(notes)
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
    <>
        <div className= "flex flex-col items-start justify-start w-[400px] h-full m-[50px] mt-[80px]">
        <Text className="font-bold text-2xl text-black-900">Notes: </Text>
        <textarea className="w-full h-[400px] border border-gray-400 border-2 rounded-[14px] p-[10px]" 
                  placeholder="Specialty physician notes"
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}></textarea>
        <button className="bg-indigo-A200 flex md:flex-col flex-row md:gap-5 ml-5px items-center justify-center mt-2.5 w-[50%] md:w-full h-[50px] rounded-[20px]"
            onClick={(e) => handleSave(e)}
            >
            <Text className="font-semibold md:ml-[0] text-white-A700 text-xl">Save</Text>
        </button>
        </div>
    </>
  );
};

export default PhysicianNotes;