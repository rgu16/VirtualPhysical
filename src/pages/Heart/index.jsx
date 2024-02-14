import React from "react";

import { Button, Img, Line, List, Text } from "components";
import NavBar from "components/NavBar";
import { Link } from 'react-router-dom';

// Checkbox component
function Checkbox({ name, value = false, updateValue = () => {}, children }) {
  // handle checkbox change
  const handleChange = () => {
    updateValue(!value, name);
  };
  // render the checkbox
  return (
    <div className="py-2">
      <input type="checkbox" id={`${name}-checkbox`} name={name} checked={value} onChange={handleChange} />
      <label htmlFor={`${name}-checkbox`} className="ml-1 capitalize">{children}</label>
    </div>
  );
}

// List of checkbox options
const listOptions = ["Tricuspid/mitral thrill", "Pulmonary/tricuspid thrill", "Aortic pulmonary thrill"];


const HeartPage = () => {

  const [selected, setSelected] = React.useState([]);

  // Function for updating state on checkbox change
  function handleSelect(value, name) {
    if (value) {
      setSelected([...selected, name]);
    } else {
      setSelected(selected.filter((item) => item !== name));
    }
  }
// Function for selecting/deselecting all checkboxes
function selectAll() {
  if (selected.length === listOptions.length) {
    // If all checkboxes are already selected, unselect all
    setSelected([]);
  } else {
    // Otherwise, select all checkboxes
    setSelected(listOptions);
  }
}

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
              <Button className="cursor-pointer font-medium leading-[normal] min-w-[115px] text-center text-lg" shape="round">
                Lungs </Button> </Link>

              <Link to="/abdomen">
              <Button className="cursor-pointer font-medium leading-[normal] min-w-[119px] text-center text-lg" shape="round">
                Pulses </Button> </Link>

              <Link to="/abdomenfour">
              <Button className="cursor-pointer font-medium h-[63px] leading-[normal] text-center text-lg" shape="round">
                Abdomen </Button> </Link>
             
              <Link to="/heart">
              <Button className="cursor-pointer font-medium leading-[normal] min-w-[112px] text-center text-lg" shape="round" color="white_A700">
                Heart </Button> </Link>
              
              <Link to="/hands">
              <Button className="cursor-pointer font-medium leading-[normal] min-w-[103px] text-center text-lg" shape="round">
                Hands</Button> </Link>

                <Link to="/handsone">
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
                       Heart Inspection 
                      </Text>
        <h4  style={{paddingTop: '30px', paddingBottom: '15px', fontWeight: 'bold',fontSize: '17px'}}>
            {" "}
            Assess for thrills (palpable murmurs): {" "}
            
         </h4>
        {listOptions.map((item) => (
          <Checkbox key={item} name={item} value={selected.includes(item)} updateValue={handleSelect}>{item}</Checkbox>
        ))}
         <div className="-mx-5 px-5 py-0 rounded bg-gray-100 font-medium">
          <Checkbox name="all" value={selected.length === listOptions.length} updateValue={selectAll}>Select All</Checkbox>
        </div>
        <div style={{paddingTop: "2rem"}}>The all checked values are {selected.join(" , ")}</div>
      </div>
    </div>
    
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeartPage;
