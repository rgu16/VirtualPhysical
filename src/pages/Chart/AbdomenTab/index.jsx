import React from "react";

import { Button, ButtonMUI, Img, Line, Text, Header } from "../components";

const AbdomenTab = () => {
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
              <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between mb-[584px] w-[98%] md:w-full">
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
                <div className="flex flex-col font-cairo items-start justify-start w-[27%] md:w-full">
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
                      [specialty physician notes on abdomen measurements go
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
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AbdomenTab;
