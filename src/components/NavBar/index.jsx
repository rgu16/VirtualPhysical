import React from "react";

import { Img, Line, Text } from "../";

const NavBar = (props) => {
  return (
    <>
      <header className={props.className}>
        <div className="flex flex-row gap-2 items-start justify-start mb-[22px] ml-7 md:ml-[0] md:mt-0 mt-[30px] w-[14%] md:w-full">
          <Img
            className="h-[35px] w-[35px]"
            src="images/img_settings.svg"
            alt="settings"
          />
          <Text
            className="text-3xl sm:text-[26px] md:text-[28px] text-black-900"
            size="txtDMSansMedium30"
          >
            Virtual Physical
          </Text>
        </div>
        <Img
          className="h-[30px] mb-[27px] md:ml-[0] ml-[1067px] md:mt-0 mt-[37px]"
          src="images/img_icongroups.svg"
          alt="icongroups"
        />
        <Line className="bg-blue_gray-100 md:h-0.5 h-14 mb-[15px] ml-12 md:ml-[0] md:mt-0 mt-[23px] rounded-[1px] w-0.5 md:w-full" />
        <div className="flex flex-row gap-6 items-center justify-center mb-[13px] ml-8 md:ml-[0] mr-[50px] md:mt-0 mt-[23px] w-[12%] md:w-full">
          <div className="flex flex-col h-[57px] items-center justify-start w-[57px]">
            <Img
              className="h-[57px] md:h-auto object-cover rounded-bl-[14px] rounded-br-[14px] w-[57px]"
              src="images/img_placeholder.png"
              alt="placeholder"
            />
          </div>
          <div className="flex flex-col items-center justify-start w-[64%]">
            <div className="flex flex-row gap-4 items-center justify-between w-full">
              <div className="flex flex-col items-start justify-start">
                <Text
                  className="text-base text-black-900"
                  size="txtCairoBold16"
                >
                  Dr. David Ochoa
                </Text>
                <Text
                  className="text-gray-500 text-right text-sm"
                  size="txtCairoRegular14"
                >
                  Cardiologist
                </Text>
              </div>
              <Img className="h-2" src="images/img_arrow.svg" alt="arrow" />
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

NavBar.defaultProps = {};

export default NavBar;
