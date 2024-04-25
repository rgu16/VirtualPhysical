import React from "react";

import { Button, Img, Line, List, Text, NavBar, TabNav } from "components";
// import NavBar from "components/NavBar";

const SummaryTab = (props) => {

// console.log(props.tab)
// console.log(props.data)

// Prototyping
//     const str = response.data.detail_abdomen
//     console.log(str)
//     const abdomenvalues = str.split(/[:,;]/).map(item => item.trim()).filter(item => !isNaN(item));
//     console.log(abdomenvalues);
//   }

    // const abdomenvalues = str.split(/[:,]/).map(item => item.trim()).filter(item => !isNaN(item));

//   // Define a function to conditionally apply class based on the value
//   const getColorClass = (value) => {
//     return value >= 2 ? "text-red-700" : "text-black-900";
//   };

  // Function to check if a value contains an asterisk
  const hasAsterisk = (value) => {
    return value.includes('*');
  };

    // Function to split the string into parts before and after the asterisk
    const splitString = (value) => {
        const parts = value.split('*');
        return parts.map((part, index) => (
            <span key={index} className={index > 0 ? 'red-text' : 'black-text'}>
            {part}
            {index < parts.length - 1 && <span className="red-text">*</span>}
            </span>
        ));
        };

  return (
    <>
    {/* THESE ARE THE TAB NAMES */}
    <div className="flex md:flex-1 flex-col gap-[5px] items-start justify-start w-full md:w-full">
        <div className="flex flex-col items-start justify-start w-full">
            <Text
                className="sm:text-[21px] md:text-[23px] text-[25px] text-black-900 w-auto"
                size="txtCairoExtraBold25"
            >
                {props.tab}
            </Text>
            <Line className="bg-black-900 h-px mt-1 w-full mr-6" />
        </div>

        {/* THESE ARE THE VALUES FOR EACH TAB */}
        <Text className="text-black-900 text-lg" size="txtCairoRegular18">
            {/* <span className="text-black-900 font-cairo text-left font-normal"> */}
                        {/* <span className={hasAsterisk(props.data) ? 'red-text' : 'black-text'}>
                {props.data}<br />
            </span> */}
            <div>
                {splitString(props.data)}
            </div>

        {/* THESE ARE THE MED TECH NOTES FOR EACH TAB */}
        {props.med_notes && (
            <span className="text-black-900 font-cairo text-left font-bold">
                Med Tech Notes: {props.med_notes} <br></br>
            </span>
        )}

        {/* THESE ARE THE PHYSICIAN NOTES FOR EACH TAB */}
        {props.notes && (
            <span className="text-black-900 font-cairo text-left font-bold">
                Notes: {props.notes}
            </span>
        )}

        </Text>
    </div>
    </>
            
  );
};

export default SummaryTab;