import React from "react";
import { Button, Img, Line, List, Text } from "./";
import { Link } from 'react-router-dom';
import { jwtDecode } from 'jwt-decode';
const TabNav = (props) => {
    const token = localStorage.getItem('token');
    const type = jwtDecode(token).type
  return (
    <>
       <div className={ jwtDecode(token).type === "physician"?
        "flex flex-row flex-wrap sm:gap-5 items-end justify-start max-w-[1010px] rounded-tl-[12px] rounded-tr-[12px] w-full"
       :" flex flex-row flex-wrap sm:gap-5 items-end justify-start max-w-[1100px] rounded-tl-[12px] rounded-tr-[12px] w-full"}
       >
              <Link to="/demographics">
                    <Button className="cursor-pointer font-medium leading-[normal] min-w-[188px] text-center text-lg" shape="round" 
                        color = {props.tab === "demographic"?"white_A700":"gray_200_01"}> 
                    Demographics </Button> </Link>
  
                <Link to="/general">
                    <Button className="cursor-pointer font-medium leading-[normal] min-w-[131px] text-center text-lg" shape="round"
                    color = {props.tab === "general"?"white_A700":"gray_200_01"}> 
                    General </Button> </Link>
                {type == "medical-tech" &&
                <Link to="/eyes">
                    <Button className="cursor-pointer font-medium leading-[normal] min-w-[103px] text-center text-lg" shape="round"
                    color = {props.tab === "eyes"?"white_A700":"gray_200_01"}> 
                    Eyes</Button> </Link>
                }
  
                <Link to="/lungs">
                    <Button className="cursor-pointer font-medium leading-[normal] min-w-[115px] text-center text-lg" shape="round"
                    color = {props.tab === "lungs"?"white_A700":"gray_200_01"}> 
                    Lungs </Button> </Link>
  
                <Link to="/pulses">
                    <Button className="cursor-pointer font-medium leading-[normal] min-w-[119px] text-center text-lg" shape="round"
                    color = {props.tab === "pulses"?"white_A700":"gray_200_01"}> 
                    Pulses </Button> </Link>
  
                <Link to="/abdomen">
                    <Button className="cursor-pointer font-medium h-[63px] leading-[normal] text-center text-lg" shape="round"
                    color = {props.tab === "abdomen"?"white_A700":"gray_200_01"}> 
                    Abdomen </Button> </Link>
               
                <Link to="/heart">
                    <Button className="cursor-pointer font-medium leading-[normal] min-w-[112px] text-center text-lg" shape="round"
                    color = {props.tab === "heart"?"white_A700":"gray_200_01"}> 
                     Heart </Button> </Link>
                {type == "medical-tech" &&
                <Link to="/hands">
                    <Button className="cursor-pointer font-medium leading-[normal] min-w-[103px] text-center text-lg" shape="round"
                    color = {props.tab === "hands"?"white_A700":"gray_200_01"}> 
                    Hands</Button> </Link>
                }
  
                <Link to="/legs">
                    <Button className="cursor-pointer font-medium leading-[normal] min-w-[103px] text-center text-lg" shape="round"
                    color = {props.tab === "legs"?"white_A700":"gray_200_01"}> 
                    Legs</Button> </Link>

                {type === "physician" &&
                <Link to="/summary">
                    <Button className="cursor-pointer font-medium leading-[normal] min-w-[103px] text-center text-lg" shape="round"
                    color = {props.tab === "summary"?"white_A700":"gray_200_01"}> 
                    Summary</Button> </Link>}
        </div>
    </>
  );
};

TabNav.defaultProps = {};

export default TabNav;