import React from "react";

import { Button, Img, Line, List, Text, NavBar, TabNav } from "components";
// import NavBar from "components/NavBar";

const SummaryTab = (props) => {
    let note
    if (props.data.split("T05:00:00.000Z")[1]){
        note = props.data.split("T05:00:00.000Z")[0] + props.data.split("T05:00:00.000Z")[1];
    }else{
        note = props.data.split("T05:00:00.000Z")[0]
    }
  return (
    <>
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
        <Text
        className="text-black-900 text-lg"
        size="txtCairoRegular18"
        >
        <span className="text-black-900 font-cairo text-left font-normal">
            <>
            {/* {props.data}<br />
             */}
             {note}<br />
            </>
        </span>
        {props.med_notes && <span className="text-black-900 font-cairo text-left font-bold">
            Med Tech Notes: {props.med_notes}
        </span>}
        {props.notes && <span className="text-black-900 font-cairo text-left font-bold">
            Notes: {props.notes}
        </span>}
        </Text>
    </div>
    </>
            
  );
};

export default SummaryTab;