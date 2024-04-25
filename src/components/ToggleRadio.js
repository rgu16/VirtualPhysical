import React from "react";
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';


const ToggleRadio = (props) => {
    let error

    if (props.title.includes("calf")){
        error = Boolean(props.value === "2" | props.value === "3" | props.value === "4")
    } else if (props.title.includes("region")){
        error = Boolean((props.value !== '0') & (props.value !== "none"))
    }
 return (
    <>
        <FormControl error = {error}>
            <div className="flex flex-row gap-[13px] items-start justify-start w-full mt-[30px]" >
            <FormLabel style={{paddingBottom: '10px', color: 'black' , fontSize: '20px', fontWeight: 'bold'}} id="demo-row-radio-buttons-group-label">{props.title}</FormLabel>
            </div>
            <RadioGroup className = "flex flex-row justify-between w-full" value = {props.value} onChange={props.onChange} >
                <div className = {props.expand?"flex flex-row justify-between w-full":"flex flex-row justify-start"}>
                    {props.expand? <div></div> :
                        <FormLabel style={{paddingTop: '10px' , fontSize: '20px'}} id="demo-row-radio-buttons-group-label">None</FormLabel>}
                    <FormControlLabel inputRef={props.inputRef} value="0" labelPlacement="bottom" control={<Radio />} label="0" />
                    <FormControlLabel inputRef={props.inputRef} value="1" labelPlacement="bottom" control={<Radio />} label="1" />
                    <FormControlLabel inputRef={props.inputRef} value="2" labelPlacement="bottom" control={<Radio />} label="2" />
                    <FormControlLabel inputRef={props.inputRef} value="3" labelPlacement="bottom" control={<Radio />} label="3" />
                    <FormControlLabel inputRef={props.inputRef} value="4" labelPlacement="bottom" control={<Radio />} label="4" />
                    {props.expand? <div></div> :
                        <FormLabel style={{paddingTop: '9px', fontSize: '20px' }} id="demo-row-radio-buttons-group-label">Severe</FormLabel>}
                </div>
            </RadioGroup>
        </FormControl>
    </>
 );
};

export default ToggleRadio;