import React, {useState, useEffect} from "react";
import { Button, Img, Line, List, Text } from "./";
import { Link } from 'react-router-dom';
import axios from 'axios';
import TextareaAutosize from '@mui/material/TextareaAutosize';
const MedTechNotes = (props) => {
  return (
    <>
        <div className= "flex flex-col items-start justify-start w-[400px] h-full m-[50px] mt-[80px]">
        <Text className="font-bold text-2xl text-black-900">Notes: </Text>
        <TextareaAutosize
          className="w-full h-[200px] border border-gray-400 border-2 rounded-[14px] p-[5px] text-xl leading-normal"
          placeholder="Med tech notes"
          value={props.notes}
          onChange={(e) => props.setNotes(e.target.value)}
          minRows={6} 
        />
        </div>
    </>
  );
};

export default MedTechNotes;