import React from "react";

import { Button, CheckBox, Img, Line, Text } from "components";
import Header from "components/Header";

const LungsTabselectedlungregionOnePage = () => {
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
                color="white_A700"
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
            <div className="bg-white-A700 flex flex-col font-cairo p-10 sm:px-5 relative w-full">
              <div className="flex flex-col items-center justify-start mx-auto w-[92%]">
                <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between w-full">
                  <div className="flex md:flex-1 flex-col gap-[57px] items-start justify-start md:mt-0 mt-[46px] w-[35%] md:w-full">
                    <div className="flex flex-row items-start justify-start w-[63%] md:w-full">
                      <Text
                        className="mt-[3px] text-2xl md:text-[22px] text-black-900 sm:text-xl"
                        size="txtCairoBold24"
                      >
                        Breathing rate:
                      </Text>
                      <div className="md:h-12 h-[45px] mb-[3px] ml-[41px] relative w-[28%]">
                        <div className="absolute bg-white-A700_01 border border-black-900_7f border-solid h-[42px] inset-x-[0] mx-auto top-[0] w-full"></div>
                        <Text
                          className="absolute h-full inset-[0] justify-center m-auto text-2xl md:text-[22px] text-black-900 sm:text-xl w-max"
                          size="txtCairoRegular24"
                        >
                          25
                        </Text>
                      </div>
                      <Text
                        className="mb-[3px] ml-3 text-2xl md:text-[22px] text-black-900 sm:text-xl"
                        size="txtCairoBold24"
                      >
                        min
                      </Text>
                    </div>
                    <div className="flex sm:flex-col flex-row gap-[31px] items-center justify-start w-full">
                      <Text
                        className="sm:flex-1 text-2xl md:text-[22px] text-black-900 sm:text-xl w-[39%] sm:w-full"
                        size="txtCairoBold24"
                      >
                        Labored breathing?
                      </Text>
                      <Text
                        className="text-2xl md:text-[22px] text-black-900 sm:text-xl"
                        size="txtCairoRegular24"
                      >
                        none/mild/moderate/severe ▾{" "}
                      </Text>
                    </div>
                  </div>
                  <div className="flex md:flex-1 flex-col items-start justify-start w-[27%] md:w-full">
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
                        Based on the phonocardiogram graph and the lung sounds,
                        the patient seems to have pneumonia.
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
              </div>
              <div className="font-helveticaneue md:h-[427px] h-[636px] mb-[43px] ml-[279px] mt-[-94.07px] w-[56%] md:w-full z-[1]">
                <div className="md:h-[478px] h-[636px] m-auto w-full">
                  <div className="absolute h-[478px] left-[0] top-[0] w-[48%] sm:w-full">
                    <Img
                      className="h-[478px] m-auto object-cover w-full"
                      src="images/img_lungimg.png"
                      alt="lungimg"
                    />
                    <Img
                      className="absolute bottom-[22%] h-[108px] left-[39%]"
                      src="images/img_leftlung.svg"
                      alt="leftlung"
                    />
                  </div>
                  <div className="absolute bottom-[0] md:h-[474px] h-[477px] right-[0] w-[71%] md:w-full">
                    <div className="absolute bottom-[0] md:h-[289px] h-[456px] left-[0] w-[31%]">
                      <Img
                        className="absolute h-[185px] inset-x-[0] mx-auto top-[0]"
                        src="images/img_line1.svg"
                        alt="lineOne"
                      />
                      <Img
                        className="absolute bottom-[0] h-[289px] inset-x-[0] mx-auto"
                        src="images/img_line2.svg"
                        alt="lineTwo"
                      />
                    </div>
                    <div className="absolute bg-gray-200_02 flex flex-col h-full inset-y-[0] items-center justify-start my-auto p-[18px] right-[0] rounded-[20px] w-[73%]">
                      <div className="flex flex-col items-start justify-start mb-[19px] mt-1 w-full">
                        <Text
                          className="text-black-900 text-xl"
                          size="txtHelveticaNeueMedium20"
                        >
                          Phonocardiogram
                        </Text>
                        <Img
                          className="h-[121px] sm:h-auto mt-2 object-cover w-full"
                          src="images/img_screenshot20231206_121x450.png"
                          alt="screenshot20231"
                        />
                        <Text
                          className="mt-[45px] text-black-900 text-xl"
                          size="txtHelveticaNeueMedium20"
                        >
                          Lung Sounds
                        </Text>
                        <Img
                          className="h-[76px] md:ml-[0] ml-[37px] mt-[26px]"
                          src="images/img_playbar.svg"
                          alt="playbar"
                        />
                        <div className="flex flex-row gap-3.5 items-start justify-start mt-16 w-[37%] md:w-full">
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
                <Img
                  className="absolute h-[108px] inset-y-[0] left-[28%] my-auto"
                  src="images/img_rightlung.svg"
                  alt="rightlung"
                />
              </div>
              <Text
                className="ml-10 mt-[-NaNpx] text-3xl sm:text-[26px] md:text-[28px] text-black-900 z-[1]"
                size="txtCairoBold30"
              >
                <span className="text-black-900 font-cairo text-left font-bold">
                  Lung Auscultation{" "}
                </span>
                <span className="text-black-900 font-cairo text-left font-normal">
                  (posterior analysis only)
                </span>
              </Text>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LungsTabselectedlungregionOnePage;
