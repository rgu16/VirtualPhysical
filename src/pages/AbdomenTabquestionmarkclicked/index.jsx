import React from "react";

import { Button, Img, Line, Text } from "components";
import NavBar from "components/NavBar";

const AbdomenTabquestionmarkclickedPage = () => {
  return (
    <>
      <div
        className="bg-cover bg-no-repeat bg-white-A700 flex flex-col font-dmsans h-[1561px] items-center justify-start mx-auto pb-28 w-full"
        style={{ backgroundImage: "url('images/img_demographicstab.svg')" }}
      >
        <div className="flex flex-col md:gap-10 gap-[92px] items-center justify-start w-full">
          <NavBar className="bg-white-A700 flex md:flex-col flex-row md:gap-5 items-center justify-center md:px-5 w-full" />
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
                color="white_A700"
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
            <div className="bg-white-A700 flex flex-col font-helveticaneue items-center justify-start p-10 sm:px-5 w-full">
              <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start mb-[584px] w-[98%] md:w-full">
                <div className="flex flex-col gap-[31px] items-start justify-start w-[30%] md:w-full">
                  <div className="flex flex-row gap-[21px] items-center justify-start w-[79%] md:w-full">
                    <div className="flex flex-col items-start justify-start w-auto">
                      <Text
                        className="text-3xl sm:text-[26px] md:text-[28px] text-black-900 w-auto"
                        size="txtHelveticaNeueBold30"
                      >
                        Abdominal Palpation
                      </Text>
                    </div>
                    <Img
                      className="h-[43px] w-[43px]"
                      src="images/img_profile.svg"
                      alt="profile"
                    />
                  </div>
                  <div className="font-cairo h-96 relative w-full">
                    <Img
                      className="h-96 m-auto object-cover w-full"
                      src="images/img_abdomenpic.png"
                      alt="abdomenpic"
                    />
                    <div className="absolute bottom-[13%] flex flex-col inset-x-[0] items-center justify-start mx-auto w-[70%]">
                      <div className="gap-[18px] grid grid-cols-3 justify-center min-h-[auto] w-full">
                        <div className="h-[45px] relative w-full">
                          <div className="absolute bg-white-A700_01 border border-black-900_7f border-solid h-[42px] inset-x-[0] mx-auto top-[0] w-full"></div>
                          <Text
                            className="absolute h-full inset-[0] justify-center m-auto text-2xl md:text-[22px] text-black-900 sm:text-xl w-max"
                            size="txtCairoRegular24"
                          >
                            3
                          </Text>
                        </div>
                        <div className="h-[45px] relative w-full">
                          <div className="absolute bg-white-A700_01 border border-black-900_7f border-solid h-[42px] inset-x-[0] mx-auto top-[0] w-full"></div>
                          <Text
                            className="absolute h-full inset-[0] justify-center m-auto text-2xl md:text-[22px] text-black-900 sm:text-xl w-max"
                            size="txtCairoRegular24"
                          >
                            2
                          </Text>
                        </div>
                        <div className="h-[45px] relative w-full">
                          <div className="absolute bg-white-A700_01 border border-black-900_7f border-solid h-[42px] inset-x-[0] mx-auto top-[0] w-full"></div>
                          <Text
                            className="absolute h-full inset-[0] justify-center m-auto text-2xl md:text-[22px] text-black-900 sm:text-xl w-max"
                            size="txtCairoRegular24"
                          >
                            1
                          </Text>
                        </div>
                        <div className="h-[45px] relative w-full">
                          <div className="absolute bg-white-A700_01 border border-black-900_7f border-solid h-[42px] inset-x-[0] mx-auto top-[0] w-full"></div>
                          <Text
                            className="absolute h-full inset-[0] justify-center m-auto text-2xl md:text-[22px] text-black-900 sm:text-xl w-max"
                            size="txtCairoRegular24"
                          >
                            2
                          </Text>
                        </div>
                        <div className="h-[45px] relative w-full">
                          <div className="absolute bg-white-A700_01 border border-black-900_7f border-solid h-[42px] inset-x-[0] mx-auto top-[0] w-full"></div>
                          <Text
                            className="absolute h-full inset-[0] justify-center m-auto text-2xl md:text-[22px] text-black-900 sm:text-xl w-max"
                            size="txtCairoRegular24"
                          >
                            0
                          </Text>
                        </div>
                        <div className="h-[45px] relative w-full">
                          <div className="absolute bg-white-A700_01 border border-black-900_7f border-solid h-[42px] inset-x-[0] mx-auto top-[0] w-full"></div>
                          <Text
                            className="absolute h-full inset-[0] justify-center m-auto text-2xl md:text-[22px] text-black-900 sm:text-xl w-max"
                            size="txtCairoRegular24"
                          >
                            0
                          </Text>
                        </div>
                        <div className="h-[45px] relative w-full">
                          <div className="absolute bg-white-A700_01 border border-black-900_7f border-solid h-[42px] inset-x-[0] mx-auto top-[0] w-full"></div>
                          <Text
                            className="absolute h-full inset-[0] justify-center m-auto text-2xl md:text-[22px] text-black-900 sm:text-xl w-max"
                            size="txtCairoRegular24"
                          >
                            0
                          </Text>
                        </div>
                        <div className="h-[45px] relative w-full">
                          <div className="absolute bg-white-A700_01 border border-black-900_7f border-solid h-[42px] inset-x-[0] mx-auto top-[0] w-full"></div>
                          <Text
                            className="absolute h-full inset-[0] justify-center m-auto text-2xl md:text-[22px] text-black-900 sm:text-xl w-max"
                            size="txtCairoRegular24"
                          >
                            0
                          </Text>
                        </div>
                        <div className="h-[45px] relative w-full">
                          <div className="absolute bg-white-A700_01 border border-black-900_7f border-solid h-[42px] inset-x-[0] mx-auto top-[0] w-full"></div>
                          <Text
                            className="absolute h-full inset-[0] justify-center m-auto text-2xl md:text-[22px] text-black-900 sm:text-xl w-max"
                            size="txtCairoRegular24"
                          >
                            0
                          </Text>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-gray-200_01 flex flex-col font-cairo items-center justify-start mb-[65px] md:ml-[0] ml-[102px] md:mt-0 mt-[53px] p-[17px] rounded-[20px] w-[28%] md:w-full">
                  <div className="flex flex-col items-start justify-start mb-[18px] w-[97%] md:w-full">
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
                    <div className="flex flex-row gap-[38px] items-start justify-start md:ml-[0] ml-[17px] mt-3 w-3/4 md:w-full">
                      <Text
                        className="leading-[20.00px] mt-4 text-[22px] text-black-900 sm:text-lg md:text-xl"
                        size="txtCairoRegular22"
                      >
                        <>
                          No tenderness
                          <br />
                          Patient says area is tender
                          <br />
                          Patient winces due to pain
                          <br />
                          Patient winces & withdraws the affected part
                          <br />
                          Patient doesn’t allow touching the affected part
                        </>
                      </Text>
                      <div className="flex flex-col items-center justify-start mb-[7px] w-[5%]">
                        <div className="flex flex-col relative w-full">
                          <Text
                            className="mx-auto sm:text-[21px] md:text-[23px] text-[25px] text-black-900"
                            size="txtCairoRegular25"
                          >
                            0
                          </Text>
                          <Text
                            className="mt-[-0.01px] sm:text-[21px] md:text-[23px] text-[25px] text-black-900 z-[1]"
                            size="txtCairoRegular25"
                          >
                            1
                          </Text>
                        </div>
                        <Text
                          className="mt-2.5 sm:text-[21px] md:text-[23px] text-[25px] text-black-900"
                          size="txtCairoRegular25"
                        >
                          2
                        </Text>
                        <Text
                          className="mt-[18px] sm:text-[21px] md:text-[23px] text-[25px] text-black-900"
                          size="txtCairoRegular25"
                        >
                          3
                        </Text>
                        <Text
                          className="mt-7 sm:text-[21px] md:text-[23px] text-[25px] text-black-900"
                          size="txtCairoRegular25"
                        >
                          4
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col font-cairo items-start justify-start md:ml-[0] ml-[167px] w-[27%] md:w-full">
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
                      Due to high tenderness in liver region, liver is likely
                      enlarged and could indicate congestive heart failure.
                      Patient must undergo __ dietary changes and begin taking
                      __ medications.
                    </Text>
                  </div>
                  <div className="h-[38px] md:h-[65px] md:ml-[0] ml-[138px] mt-[27px] relative w-[31%]">
                    <div className="absolute bg-black-900 h-[35px] inset-[0] justify-center m-auto rounded-[17px] shadow-bs w-full"></div>
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

export default AbdomenTabquestionmarkclickedPage;
