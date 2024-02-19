import React from "react";

import { Button, Img, Line, List, Text } from "components";
import NavBar from "components/NavBar";
import { Link } from 'react-router-dom';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';

const gender = [
  {
    value: 'mild',
    label: 'mild',
  },
  {
    value: 'moderate',
    label: 'moderate',
  },
  {
    value: 'severe',
    label: 'severe',
  },

];

const LungsPage = () => {


  return (
    <>
      <div
        className="bg-cover bg-no-repeat bg-white-A700 flex flex-col font-dmsans h-[1561px] items-center justify-start mx-auto pb-28 w-full"
        style={{ backgroundImage: "url('images/img_demographicstab.svg')" }}
      >
        <div className="flex flex-col md:gap-10 gap-[92px] items-center justify-start w-full">
          <NavBar className="bg-white-A700 flex md:flex-col flex-row md:gap-5 items-center justify-center md:px-5 w-full" />
          <div className="flex flex-col items-start justify-start max-w-[1700px] mx-auto md:px-5 w-full">
            <div className="bg-gray-200_01 flex flex-row flex-wrap sm:gap-5 items-end justify-start max-w-[1100px] rounded-tl-[12px] rounded-tr-[12px] w-full">
              
            <Link to="/demographic">
              <Button className="cursor-pointer font-medium leading-[normal] min-w-[188px] text-center text-lg" shape="round">
                Demographics </Button> </Link>

              <Link to="/demographicone">
              <Button className="cursor-pointer font-medium leading-[normal] min-w-[131px] text-center text-lg" shape="round">
                General </Button> </Link>

                <Link to="/hands">
              <Button className="cursor-pointer font-medium leading-[normal] min-w-[103px] text-center text-lg" shape="round">
                Eyes</Button> </Link>

              <Link to="/lungs">
              <Button className="cursor-pointer font-medium leading-[normal] min-w-[115px] text-center text-lg" shape="round" color="white_A700">
                Lungs </Button> </Link>

              <Link to="/abdomen">
              <Button className="cursor-pointer font-medium leading-[normal] min-w-[119px] text-center text-lg" shape="round">
                Pulses </Button> </Link>

              <Link to="/abdomenfour">
              <Button className="cursor-pointer font-medium h-[63px] leading-[normal] text-center text-lg" shape="round">
                Abdomen </Button> </Link>
             
              <Link to="/heart">
              <Button className="cursor-pointer font-medium leading-[normal] min-w-[112px] text-center text-lg" shape="round">
                Heart </Button> </Link>
              
              <Link to="/handsone">
              <Button className="cursor-pointer font-medium leading-[normal] min-w-[103px] text-center text-lg" shape="round">
                Hands</Button> </Link>

                <Link to="/abdomenone">
              <Button className="cursor-pointer font-medium leading-[normal] min-w-[103px] text-center text-lg" shape="round">
  Legs</Button> </Link>


            </div>
            <div className="bg-white-A700 flex flex-col font-cairo items-center justify-start p-10 sm:px-5 w-full" >
                        
                   <div style={{paddingLeft: '150px', paddingTop: '50px'}} className="flex w-full min-h-screen p-5">
      <div className="w-full max-w-md">
      <Text
                        className="sm:text-3xl md:text-[32px] text-[34px] text-gray-900_02"
                        size="txtCairoBold34"
                      >
                       Lungs Inspection 
                      </Text>
        <h4  style={{paddingTop: '30px', paddingBottom: '15px', fontWeight: 'bold',fontSize: '22px'}}>
            {" "}
            Qualitative description on patient's breathing: {" "}
            
         </h4>
         <div className="flex flex-row gap-[13px] items-center justify-between w-full" >
                    
                            <Text
                              className="text-2xl md:text-[22px] text-black-900 sm:text-xl"
                              size="txtCairoBold24"
                            >
                              Breathing Rate:
                            </Text>
         <TextField
          id="outlined-number"
          label="breaths/min"
          type="number"
          InputLabelProps={{
            shrink: true,
          }}
        />
      
      </div>
      <div className="flex flex-row gap-[12px] items-center justify-between w-full" >
                             <Text
                              className="mt-0.5 text-2xl md:text-[22px] text-black-900 sm:text-xl"
                              size="txtCairoBold24" 
                            >
                              Is breathing labored?
                            </Text>
                        
                          <TextField 
          id="outlined-select-currency"
          select
          label="Select"
          defaultValue="EUR"
          helperText="Please select one of the options"
        > 
          {gender.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
        </div>
      </div>
      <Img
                          className="common-pointer h-[43px] w-[43px]"
                          src="images/img_profile_black_900.svg"
                          alt="profile"
                 
                        />
    </div>
    
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LungsPage;
