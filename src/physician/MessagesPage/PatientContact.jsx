import React from "react";
import "./style.css";

export const PatientContact= (props) => {
  const email = props.patient.email
  const name = props.patient.name
  const picture = props.patient.picture
  const active = props.active
  const id = props.id
  return (

    <button className="rounded-[20px] w-[336px] h-[124px]"
            onClick= {() => props.onClick(id)}
            style={{background: active? '#efefef':'transparent' }}
            >
    <div className="flex flex-row h-[70px] w-[300px] items-center justify-between">
    <img
      className=" h-[60px] w-[60px] ml-[30px]"
      src = {picture} 
    />
    <div className="flex flex-col mr-[30px] items-center justify-start">
      <span className="text-wrapper-3">{name}</span>
      <span className="text-wrapper-4">{email}</span>
    </div>
  </div>
  </button>
  );
};
