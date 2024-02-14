import React from "react";

import { Button, Img, Input, Line, Text } from "components";

const FormPage = () => {
  return (
    <>
      <div className="bg-blue-50 flex flex-col font-helvetica items-center justify-start mx-auto pt-0.5 px-0.5 shadow-bs2 w-full">
        <div className="flex md:flex-col flex-row gap-[17px] items-center justify-between max-w-[1039px] mx-auto md:px-5 w-full">
          <div className="bg-white-A700 flex md:flex-1 flex-col items-center justify-start p-2 w-[49%] md:w-full">
            <Img
              className="h-[607px] md:h-auto mb-[3px] object-cover w-[89%]"
              src="images/img_untitleddesign.png"
              alt="untitleddesign"
            />
          </div>
          <div className="flex md:flex-1 flex-col justify-start w-[51%] md:w-full">
            <Text
              className="md:ml-[0] ml-[173px] text-black-900 text-center text-xl"
              size="txtHelveticaBold20"
            >
              Search Patient
            </Text>
            <div className="flex flex-col gap-[45px] items-center justify-start md:ml-[0] ml-[60px] mt-[34px] w-3/4 md:w-full">
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
                      wrapClassName="border border-gray-400 border-solid mt-0.5 rounded w-full"
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
                        wrapClassName="border border-gray-400 border-solid mt-0.5 rounded w-full"
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
                  wrapClassName="border border-gray-400 border-solid mt-[-16.59px] mx-auto rounded w-full z-[1]"
                  color="white_A700"
                  size="md"
                ></Input>
              </div>
              <Button
                className="cursor-pointer font-helveticaneue font-medium min-w-[388px] sm:min-w-full rounded text-center text-sm"
                color="indigo_A200"
                size="md"
              >
                Search
              </Button>
            </div>
            <div className="flex sm:flex-col flex-row font-roboto sm:gap-5 items-start justify-start mt-[29px] w-full">
              <Line className="bg-gray-300 h-px sm:ml-[0] ml-[55px] sm:mt-0 my-1.5 w-[35%]" />
              <Text
                className="ml-4 sm:ml-[0] text-gray-900_01 text-xs"
                size="txtRobotoRegular12"
              >
                or
              </Text>
              <Line className="bg-gray-300 h-px sm:ml-[0] ml-[15px] sm:mt-0 my-1.5 w-[31%]" />
            </div>
            <Text
              className="bg-white-A700 border-b-2 border-black-900_26 border-solid border-t border-x h-[46px] justify-center md:ml-[0] ml-[62px] mr-[74px] mt-[35px] sm:px-5 px-[35px] py-[13px] rounded text-[17px] text-black-900 text-center w-96"
              size="txtHelveticaBold17"
            >
              Create patient profile{" "}
            </Text>
          </div>
        </div>
      </div>
    </>
  );
};

export default FormPage;
