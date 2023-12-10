import React from "react";

import { Button, Img, Line, List, Text } from "components";
import Header from "components/Header";

const LegsTabclickedOnePage = () => {
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
              >
                Heart
              </Button>
              <Button
                className="cursor-pointer font-medium leading-[normal] min-w-[103px] text-center text-lg"
                shape="round"
                color="white_A700"
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
            <div className="bg-white-A700 flex flex-col font-cairo items-center justify-start p-10 sm:px-5 w-full">
              <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start mb-[544px] w-[98%] md:w-full">
                <div className="flex flex-col items-start justify-start md:mt-0 mt-[3px] w-[16%] md:w-full">
                  <div className="flex flex-row gap-[21px] items-start justify-between w-full">
                    <Text
                      className="text-3xl sm:text-[26px] md:text-[28px] text-black-900"
                      size="txtCairoBold30"
                    >
                      Pitting Edema
                    </Text>
                    <Img
                      className="h-[43px] mt-[3px] w-[43px]"
                      src="images/img_profile.svg"
                      alt="profile"
                    />
                  </div>
                  <List
                    className="flex flex-col gap-[19px] items-center mt-[18px] w-[97%]"
                    orientation="vertical"
                  >
                    <div className="flex flex-row gap-[25px] items-start justify-between w-full">
                      <Text
                        className="mt-0.5 text-2xl md:text-[22px] text-black-900 sm:text-xl"
                        size="txtCairoBold24"
                      >
                        Right calve:
                      </Text>
                      <div className="h-[45px] md:h-[47px] mb-0.5 relative w-[39%]">
                        <div className="absolute bg-white-A700_01 border border-black-900_7f border-solid h-[42px] inset-x-[0] mx-auto top-[0] w-full"></div>
                        <Text
                          className="absolute h-full inset-[0] justify-center m-auto text-2xl md:text-[22px] text-black-900 sm:text-xl w-max"
                          size="txtCairoRegular24"
                        >
                          +2
                        </Text>
                      </div>
                    </div>
                    <div className="flex flex-row gap-[39px] items-center justify-between w-full">
                      <Text
                        className="text-2xl md:text-[22px] text-black-900 sm:text-xl"
                        size="txtCairoBold24"
                      >
                        Left calve:
                      </Text>
                      <div className="h-[45px] relative w-[39%]">
                        <div className="absolute bg-white-A700_01 border border-black-900_7f border-solid h-[42px] inset-x-[0] mx-auto top-[0] w-full"></div>
                        <Text
                          className="absolute h-full inset-[0] justify-center m-auto text-2xl md:text-[22px] text-black-900 sm:text-xl w-max"
                          size="txtCairoRegular24"
                        >
                          0
                        </Text>
                      </div>
                    </div>
                  </List>
                  <div className="flex flex-col gap-5 items-start justify-start mt-6 w-[90%] md:w-full">
                    <Img
                      className="h-[35px] w-[35px]"
                      src="images/img_thumbsup.svg"
                      alt="thumbsup"
                    />
                    <Img
                      className="h-[306px] md:h-auto object-cover w-full"
                      src="images/img_screenshot20231206_306x221.png"
                      alt="screenshot20231"
                    />
                  </div>
                </div>
                <div className="bg-gray-200_01 flex flex-col items-center justify-start mb-[179px] md:ml-[0] ml-[72px] md:mt-0 mt-[11px] p-[17px] rounded-[20px] w-[27%] md:w-full">
                  <div className="flex flex-col items-start justify-start mb-[22px] w-[97%] md:w-full">
                    <div className="flex flex-row items-start justify-between md:ml-[0] ml-[22px] w-[88%] md:w-full">
                      <Text
                        className="mt-0.5 text-2xl md:text-[22px] text-black-900 sm:text-xl"
                        size="txtCairoRegular24"
                      >
                        Scoring
                      </Text>
                      <Text
                        className="mb-0.5 text-2xl md:text-[22px] text-black-900 sm:text-xl"
                        size="txtCairoRegular24"
                      >
                        Grade Point
                      </Text>
                    </div>
                    <Line className="bg-blue_gray-700 h-px mt-1.5 w-full" />
                    <div className="flex flex-row gap-[39px] items-start justify-start md:ml-[0] ml-[17px] mt-[15px] w-[79%] md:w-full">
                      <Text
                        className="leading-[20.00px] mt-[13px] text-[22px] text-black-900 sm:text-lg md:text-xl"
                        size="txtCairoRegular22"
                      >
                        <>
                          Up to 2mm of depression, rebounding immediately
                          <br />
                          2-4mm of depression, rebounding in 15sec or less
                          <br />
                          5-6mm of depression, rebounding in 60sec
                          <br />
                          8mm of depression, rebounding in 2-3min
                        </>
                      </Text>
                      <div className="flex flex-col gap-7 items-center justify-start mb-1.5 w-[10%]">
                        <Text
                          className="sm:text-[21px] md:text-[23px] text-[25px] text-black-900"
                          size="txtCairoRegular25"
                        >
                          0
                        </Text>
                        <div className="flex flex-col items-start justify-start w-full">
                          <Text
                            className="sm:text-[21px] md:text-[23px] text-[25px] text-black-900"
                            size="txtCairoRegular25"
                          >
                            +1
                          </Text>
                          <Text
                            className="mt-[27px] sm:text-[21px] md:text-[23px] text-[25px] text-black-900"
                            size="txtCairoRegular25"
                          >
                            +2
                          </Text>
                          <Text
                            className="mt-2 sm:text-[21px] md:text-[23px] text-[25px] text-black-900"
                            size="txtCairoRegular25"
                          >
                            +3
                          </Text>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-start justify-start md:ml-[0] ml-[425px] w-[27%] md:w-full">
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
                      [specialty physician notes on leg measurements go here]
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
          </div>
        </div>
      </div>
    </>
  );
};

export default LegsTabclickedOnePage;
