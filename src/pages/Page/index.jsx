import React from "react";

import { Img, Input, Line, Text } from "components";
import NavBar from "components/NavBar";

const Page = () => {
  return (
    <>
      <div className="bg-white-A700 flex flex-col items-center justify-start mx-auto w-full">
        <div className="bg-gray-50 flex flex-col justify-start pb-[641px] w-full">
          <NavBar className="bg-white-A700 flex md:flex-col flex-row font-dmsans md:gap-5 items-center justify-center md:px-5 w-full" />
          <Text
            className="md:ml-[0] ml-[129px] mt-[78px] sm:text-4xl md:text-[38px] text-[40px] text-black-900"
            size="txtCairoSemiBold40"
          >
            Good morning, Dr. Ochoa
          </Text>
          <div className="bg-blue-50 flex flex-col font-cairo items-start justify-start mt-11 mx-auto pt-0.5 px-0.5 md:px-5 rounded-[20px] shadow-bs2 w-[55%] md:w-full">
            <div className="flex md:flex-col flex-row md:gap-10 gap-[78px] items-start justify-start ml-0.5 md:ml-[0] w-[93%] md:w-full">
              <div className="bg-white-A700 flex flex-col items-center justify-start p-2 w-[52%] md:w-full">
                <Img
                  className="h-[607px] md:h-auto mb-[3px] object-cover w-[89%]"
                  src="images/img_untitleddesign.png"
                  alt="untitleddesign"
                />
              </div>
              <div className="flex flex-col md:gap-10 gap-[66px] items-center justify-start md:mt-0 mt-[22px] w-[41%] md:w-full">
                <div className="flex flex-col gap-2 items-center justify-start w-full">
                  <Text
                    className="sm:text-4xl md:text-[38px] text-[40px] text-black-900 text-center"
                    size="txtCairoBold40"
                  >
                    Search Patient
                  </Text>
                  <div className="flex flex-col font-helvetica relative w-full">
                    <div className="flex flex-col gap-[15px] items-center justify-start mx-auto w-full">
                      <div className="flex flex-col items-start justify-start pt-0.5 w-full">
                        <Text
                          className="text-base text-black-900"
                          size="txtHelveticaBold16"
                        >
                          First name
                        </Text>
                        <Input
                          name="input"
                          placeholder="John"
                          className="leading-[normal] p-0 placeholder:text-gray-600 text-base text-left w-full"
                          wrapClassName="border border-gray-400 border-solid mt-0.5 rounded-[20px] w-full"
                          color="white_A700"
                          size="xs"
                        ></Input>
                      </div>
                      <div className="flex flex-col gap-6 items-start justify-start pb-4 w-full">
                        <div className="flex flex-col items-start justify-start pt-0.5 w-full">
                          <Text
                            className="text-base text-black-900"
                            size="txtHelveticaBold16"
                          >
                            Last name
                          </Text>
                          <Input
                            name="input_One"
                            placeholder="Smith"
                            className="leading-[normal] p-0 placeholder:text-gray-600 text-base text-left w-full"
                            wrapClassName="border border-gray-400 border-solid mt-0.5 rounded-[20px] w-full"
                            color="white_A700"
                            size="xs"
                          ></Input>
                        </div>
                        <Text
                          className="text-base text-black-900"
                          size="txtHelveticaBold16"
                        >
                          Email{" "}
                        </Text>
                      </div>
                    </div>
                    <Input
                      name="input_Two"
                      placeholder="e.g. john@widgetco.com"
                      className="leading-[normal] p-0 placeholder:text-gray-600 text-base text-left w-full z-[1]"
                      wrapClassName="border border-gray-400 border-solid mt-[-16.59px] mx-auto rounded-[20px] w-full z-[1]"
                      color="white_A700"
                      size="xs"
                    ></Input>
                  </div>
                </div>
                <div className="bg-indigo-A200 flex flex-col items-center justify-start md:px-10 sm:px-5 px-[93px] rounded-[20px] w-full">
                  <Text
                    className="leading-[20.00px] text-center text-white-A700 text-xl w-full"
                    size="txtCairoBold20"
                  >
                    Search
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

export default Page;
