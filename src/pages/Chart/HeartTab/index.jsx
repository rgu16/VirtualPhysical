import React from "react";

import { Button, CheckBox, Img, Line, Text } from "components";
import Header from "components/Header";

const HeartTab = () => {
  return (
    <>
      <div
        className="bg-cover bg-no-repeat bg-white-A700 flex flex-col font-dmsans h-[1561px] items-center justify-start mx-auto pb-28 w-full"
        style={{ backgroundImage: "url('images/img_demographicstab.svg')" }}
      >
        <div className="flex flex-col md:gap-10 gap-[92px] items-center justify-start w-full">
          <Header className="bg-white-A700 flex md:flex-col flex-row md:gap-5 items-center justify-center md:px-5 w-full" />
          <div className="flex flex-col items-start justify-start max-w-[1700px] mx-auto md:px-5 w-full">
            <div className="bg-gray-200_01 flex flex-row flex-wrap sm:gap-5 items-end justify-start max-w-[1062px] rounded-tl-[12px] rounded-tr-[12px] w-full">
              <Button
                className="cursor-pointer font-medium leading-[normal] min-w-[188px] text-center text-lg"
                shape="round"
              >
                Demographics
              </Button>
              <Button
                className="cursor-pointer font-medium leading-[normal] min-w-[131px] text-center text-lg"
                shape="round"
              >
                General
              </Button>
              <Button
                className="cursor-pointer font-medium leading-[normal] min-w-[115px] text-center text-lg"
                shape="round"
              >
                Lungs
              </Button>
              <Button
                className="cursor-pointer font-medium leading-[normal] min-w-[119px] text-center text-lg"
                shape="round"
              >
                Pulses
              </Button>
              <Button
                className="cursor-pointer font-medium h-[63px] leading-[normal] text-center text-lg"
                shape="round"
              >
                Abdomen
              </Button>
              <Button
                className="cursor-pointer font-medium leading-[normal] min-w-[112px] text-center text-lg"
                shape="round"
                color="white_A700"
              >
                Heart
              </Button>
              <Button
                className="cursor-pointer font-medium leading-[normal] min-w-[103px] text-center text-lg"
                shape="round"
              >
                Legs
              </Button>
              <Button
                className="cursor-pointer font-medium leading-[normal] min-w-[146px] text-center text-lg"
                shape="round"
              >
                Summary
              </Button>
            </div>
            <div className="bg-white-A700 flex flex-col font-helveticaneue items-center justify-start p-8 sm:px-5 w-full">
              <div className="flex flex-col justify-start mb-[15px] mt-2 w-[98%] md:w-full">
                <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between w-full">
                  <div className="flex md:flex-1 flex-col justify-start md:mt-0 mt-[17px] w-[35%] md:w-full">
                    <div className="flex flex-col items-start justify-start md:ml-[0] ml-[17px] w-[83%] md:w-full">
                      <div className="flex flex-row gap-[27px] items-center justify-start w-[74%] md:w-full">
                        <Text
                          className="text-2xl md:text-[22px] text-black-900 sm:text-xl"
                          size="txtHelveticaNeueBold24"
                        >
                          Parasternal heave:
                        </Text>
                        <Text
                          className="text-2xl md:text-[22px] text-black-900 sm:text-xl"
                          size="txtCairoRegular24"
                        >
                          abnormal{" "}
                        </Text>
                      </div>
                      <div className="flex flex-row gap-[35px] items-end justify-start mt-[19px] w-[77%] md:w-full">
                        <Text
                          className="mb-1 mt-2.5 text-2xl md:text-[22px] text-black-900 sm:text-xl"
                          size="txtHelveticaNeueBold24"
                        >
                          Tricuspid/mitral thrill:{" "}
                        </Text>
                        <Text
                          className="text-2xl md:text-[22px] text-black-900 sm:text-xl"
                          size="txtCairoRegular24"
                        >
                          normal{" "}
                        </Text>
                      </div>
                      <div className="flex sm:flex-col flex-row gap-[31px] items-end justify-start mt-[19px] w-[93%] md:w-full">
                        <Text
                          className="mb-1 sm:mt-0 mt-2.5 text-2xl md:text-[22px] text-black-900 sm:text-xl"
                          size="txtHelveticaNeueBold24"
                        >
                          Pulmonary/tricuspid thrill:{" "}
                        </Text>
                        <Text
                          className="text-2xl md:text-[22px] text-black-900 sm:text-xl"
                          size="txtCairoRegular24"
                        >
                          abnormal{" "}
                        </Text>
                      </div>
                      <div className="flex sm:flex-col flex-row gap-[38px] items-end justify-start mt-[19px] w-[82%] md:w-full">
                        <Text
                          className="mb-1 sm:mt-0 mt-2.5 text-2xl md:text-[22px] text-black-900 sm:text-xl"
                          size="txtHelveticaNeueBold24"
                        >
                          Aortic/pulmonary thrill:
                        </Text>
                        <Text
                          className="text-2xl md:text-[22px] text-black-900 sm:text-xl"
                          size="txtCairoRegular24"
                        >
                          normal{" "}
                        </Text>
                      </div>
                      <div className="flex flex-col items-start justify-start mt-[82px] w-auto sm:w-full">
                        <Text
                          className="text-3xl sm:text-[26px] md:text-[28px] text-black-900 w-auto"
                          size="txtHelveticaNeueBold30"
                        >
                          <span className="text-black-900 font-helveticaneue text-left font-bold">
                            Heart Auscultation{" "}
                          </span>
                          <span className="text-black-900 font-helveticaneue text-left font-normal">
                            (anterior only)
                          </span>
                        </Text>
                      </div>
                    </div>
                    <div className="h-[379px] md:h-[412px] mt-[33px] relative w-full">
                      <Img
                        className="h-[379px] m-auto object-cover w-full"
                        src="images/img_tempimagefen4er.png"
                        alt="tempimagefen4er"
                      />
                      <Img
                        className="absolute bottom-[27%] h-[35px] right-[29%] w-[35px]"
                        src="images/img_user.svg"
                        alt="user"
                      />
                      <div className="absolute flex flex-col gap-[37px] inset-x-[0] items-start justify-start mx-auto top-[30%] w-[18%]">
                        <div className="flex flex-row gap-[25px] items-start justify-between w-full">
                          <Img
                            className="h-[35px] mb-0.5 w-[35px]"
                            src="images/img_user.svg"
                            alt="user_One"
                          />
                          <Img
                            className="h-[35px] mt-0.5 w-[35px]"
                            src="images/img_user.svg"
                            alt="user_Two"
                          />
                        </div>
                        <Img
                          className="h-[35px] w-[35px]"
                          src="images/img_user.svg"
                          alt="user_Three"
                        />
                      </div>
                    </div>
                    <Text
                      className="ml-9 md:ml-[0] mt-[86px] text-3xl sm:text-[26px] md:text-[28px] text-black-900"
                      size="txtHelveticaNeueBold30"
                    >
                      Single-Lead ECG Recording
                    </Text>
                  </div>
                  <div className="flex md:flex-1 flex-col font-cairo items-start justify-start w-[27%] md:w-full">
                    <Text
                      className="text-2xl md:text-[22px] text-black-900 sm:text-xl w-[45%] sm:w-full"
                      size="txtCairoBold24"
                    >
                      Notes:
                    </Text>
                    <div className="bg-white-A700_01 border border-black-900_7f border-solid flex flex-col items-center justify-start p-[15px] rounded-[20px] w-full">
                      <Text
                        className="my-0.5 text-black-900 text-xl w-full"
                        size="txtCairoRegular20"
                      >
                        [specialty physician notes on heart measurements go
                        here]
                      </Text>
                    </div>
                    <div className="h-[38px] md:h-[65px] md:ml-[0] ml-[138px] mt-[27px] relative w-[31%]">
                      <div className="absolute bg-black-900 h-[35px] inset-[0] justify-center m-auto rounded-[17px] shadow-bs2 w-full"></div>
                      <Text
                        className="absolute h-full inset-[0] justify-center m-auto text-white-A700 text-xl w-max"
                        size="txtCairoRegular20WhiteA700"
                      >
                        Save
                      </Text>
                    </div>
                  </div>
                </div>
                <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start md:ml-[0] ml-[18px] mt-[15px] w-[76%] md:w-full">
                  <Img
                    className="h-[143px] sm:h-auto object-cover w-1/2 md:w-full"
                    src="images/img_screenshot20231206_143x605.png"
                    alt="screenshot20231"
                  />
                  <Img
                    className="h-[143px] sm:h-auto object-cover w-1/2 md:w-full"
                    src="images/img_screenshot20231206_143x605.png"
                    alt="screenshot20231_One"
                  />
                </div>
                <div className="flex flex-row gap-3.5 items-start justify-start ml-11 md:ml-[0] mt-[19px] w-[11%] md:w-full">
                  <CheckBox
                    className="font-medium leading-[normal] sm:pr-5 text-black-900 text-left text-xl"
                    inputClassName="mr-[5px]"
                    name="normal"
                    id="normal"
                    label="Normal?"
                    size="xs"
                  ></CheckBox>
                  <Img
                    className="h-6 w-6"
                    src="images/img_close_deep_orange_a700.svg"
                    alt="close"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeartTab;
