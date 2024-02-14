import React from "react";

import { Img, Line, Text } from "components";
import NavBar from "components/NavBar";

const PageFour = () => {
  return (
    <>
      <div className="bg-white-A700 flex flex-col items-center justify-start mx-auto w-full">
        <div className="bg-gray-50 flex flex-col items-center justify-start pb-[728px] w-full">
          <div className="flex flex-col justify-start w-full">
            <NavBar className="bg-white-A700 flex md:flex-col flex-row font-dmsans md:gap-5 items-center justify-center md:px-5 w-full" />
            <Text
              className="md:ml-[0] ml-[97px] mt-[77px] sm:text-4xl md:text-[38px] text-[40px] text-black-900"
              size="txtCairoSemiBold40"
            >
              User Settings
            </Text>
            <div className="flex md:flex-col flex-row font-cairo gap-[33px] items-end justify-start md:ml-[0] ml-[115px] mt-[23px] md:px-5 w-[49%] md:w-full">
              <div className="flex flex-col md:gap-10 gap-[60px] items-start justify-start md:mt-0 mt-[37px] w-auto">
                <Text
                  className="text-black-900 text-xl w-auto"
                  size="txtCairoSemiBold20"
                >
                  Name:
                </Text>
                <Text
                  className="text-black-900 text-xl w-auto"
                  size="txtCairoSemiBold20"
                >
                  Email:{" "}
                </Text>
                <Text
                  className="text-black-900 text-xl w-auto"
                  size="txtCairoSemiBold20"
                >
                  Clinic name:
                </Text>
                <Text
                  className="text-black-900 text-xl w-auto"
                  size="txtCairoSemiBold20"
                >
                  Time zone:
                </Text>
                <Text
                  className="text-black-900 text-xl w-auto"
                  size="txtCairoSemiBold20"
                >
                  Zoom link:
                </Text>
                <Text
                  className="text-black-900 text-xl w-auto"
                  size="txtCairoSemiBold20"
                >
                  Language:
                </Text>
              </div>
              <div className="flex flex-col items-start justify-start w-[86%] md:w-full">
                <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between w-full">
                  <div className="flex md:flex-1 flex-col gap-[53px] items-center justify-start w-3/5 md:w-full">
                    <div className="h-11 md:h-[42px] relative w-full">
                      <div className="absolute bg-white-A700_01 border border-black-900_7f border-solid h-[42px] inset-x-[0] mx-auto top-[0] w-full"></div>
                      <Text
                        className="absolute bottom-[0] left-[2%] text-black-900 text-xl w-[53%] sm:w-full"
                        size="txtCairoSemiBold20"
                      >
                        Dr. David Ochoa
                      </Text>
                    </div>
                    <div className="bg-white-A700_01 border border-black-900_7f border-solid flex flex-col items-start justify-end w-full">
                      <Text
                        className="ml-2 md:ml-[0] text-black-900 text-xl w-[53%] sm:w-full"
                        size="txtCairoSemiBold20"
                      >
                        dr.david.ochoa@gmail.com
                      </Text>
                    </div>
                  </div>
                  <div className="flex md:flex-1 flex-col items-center justify-start w-1/4 md:w-full">
                    <Text
                      className="text-black-900 text-xl"
                      size="txtCairoBold20Black900"
                    >
                      Profile Picture
                    </Text>
                    <div className="flex flex-col items-center justify-start mt-1 w-full">
                      <Img
                        className="h-[180px] md:h-auto object-cover rounded-bl-[14px] rounded-br-[14px] w-full"
                        src="images/img_placeholder.png"
                        alt="placeholder_One"
                      />
                    </div>
                  </div>
                </div>
                <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start mt-2.5 w-[96%] md:w-full">
                  <div className="md:h-[42px] h-[43px] relative w-[63%] md:w-full">
                    <div className="absolute bg-white-A700_01 border border-black-900_7f border-solid h-[42px] inset-[0] justify-center m-auto w-full"></div>
                    <Text
                      className="absolute bottom-[0] left-[2%] text-black-900 text-xl w-[53%] sm:w-full"
                      size="txtCairoSemiBold20"
                    >
                      Houston Methodist
                    </Text>
                  </div>
                  <Img
                    className="h-6 md:ml-[0] ml-[162px] md:mt-0 mt-1 w-6"
                    src="images/img_television.svg"
                    alt="television"
                  />
                  <Text
                    className="ml-2.5 md:ml-[0] text-black-900 text-xl"
                    size="txtCairoSemiBold20"
                  >
                    Edit image
                  </Text>
                </div>
                <div className="bg-white-A700_01 border border-black-900_7f border-solid flex flex-col items-start justify-end mt-[51px]">
                  <Text
                    className="ml-2 md:ml-[0] text-black-900 text-xl w-[63%] sm:w-full"
                    size="txtCairoSemiBold20"
                  >
                    Central Standard Time (GMT-6)
                  </Text>
                </div>
                <div className="bg-white-A700_01 border border-black-900_7f border-solid flex flex-col items-center justify-start mt-[60px] pl-0.5 py-0.5">
                  <a
                    href="https://houstonmethodist.zoom.us/my/davidochoa"
                    className="font-semibold text-black-900 text-xl w-[99%] sm:w-full"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Text>https://houstonmethodist.zoom.us/my/davidochoa</Text>
                  </a>
                </div>
                <div className="bg-white-A700_01 border border-black-900_7f border-solid flex flex-col items-start justify-start mt-12 p-0.5">
                  <Text
                    className="ml-2 md:ml-[0] text-black-900 text-xl w-[64%] sm:w-full"
                    size="txtCairoSemiBold20"
                  >
                    English (United States)
                  </Text>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PageFour;
