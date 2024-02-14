import React from "react";

import { Button, Img, Line, List, Text } from "components";
import NavBar from "components/NavBar";

const PulsesTabPage = () => {
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
                color="white_A700"
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
            <div className="bg-white-A700 flex flex-col font-helveticaneue items-center justify-start p-10 sm:px-5 w-full">
              <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between mb-[279px] w-[98%] md:w-full">
                <div className="flex flex-col items-start justify-start md:mt-0 mt-[37px] w-[55%] md:w-full">
                  <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between w-full">
                    <div className="flex flex-col gap-[15px] items-start justify-start w-auto">
                      <Text
                        className="text-3xl sm:text-[26px] md:text-[28px] text-black-900 w-auto"
                        size="txtHelveticaNeueBold30"
                      >
                        Pulses
                      </Text>
                      <List
                        className="flex flex-col gap-[15px] w-[83%]"
                        orientation="vertical"
                      >
                        <div className="flex flex-row gap-[31px] items-center justify-start w-[92%] md:w-full">
                          <Text
                            className="text-2xl md:text-[22px] text-black-900 sm:text-xl"
                            size="txtHelveticaNeueBold24"
                          >
                            Radial pulse:
                          </Text>
                          <div className="font-cairo h-[45px] relative w-[35%]">
                            <div className="absolute bg-white-A700_01 border border-black-900_7f border-solid h-[42px] inset-x-[0] mx-auto top-[0] w-full"></div>
                            <Text
                              className="absolute h-full inset-[0] justify-center m-auto text-2xl md:text-[22px] text-black-900 sm:text-xl w-max"
                              size="txtCairoRegular24"
                            >
                              +2
                            </Text>
                          </div>
                        </div>
                        <div className="flex flex-row gap-[35px] items-center justify-between w-full">
                          <Text
                            className="text-2xl md:text-[22px] text-black-900 sm:text-xl"
                            size="txtHelveticaNeueBold24"
                          >
                            Brachial pulse:
                          </Text>
                          <div className="font-cairo h-[45px] relative w-[32%]">
                            <div className="absolute bg-white-A700_01 border border-black-900_7f border-solid h-[42px] inset-x-[0] mx-auto top-[0] w-full"></div>
                            <Text
                              className="absolute h-full inset-[0] justify-center m-auto text-2xl md:text-[22px] text-black-900 sm:text-xl w-max"
                              size="txtCairoRegular24"
                            >
                              +1
                            </Text>
                          </div>
                        </div>
                        <div className="flex flex-row gap-[31px] items-center justify-start w-[96%] md:w-full">
                          <Text
                            className="text-2xl md:text-[22px] text-black-900 sm:text-xl"
                            size="txtHelveticaNeueBold24"
                          >
                            Carotid pulse:
                          </Text>
                          <div className="font-cairo h-11 md:h-[45px] relative w-[33%]">
                            <div className="absolute bg-white-A700_01 border border-black-900_7f border-solid h-[42px] inset-x-[0] mx-auto top-[0] w-full"></div>
                            <Text
                              className="absolute h-max inset-[0] justify-center m-auto text-2xl md:text-[22px] text-black-900 sm:text-xl w-max"
                              size="txtCairoRegular24"
                            >
                              +2
                            </Text>
                          </div>
                        </div>
                      </List>
                      <div className="flex flex-col items-center justify-start w-full">
                        <div className="flex flex-row gap-[31px] items-end justify-between w-full">
                          <Text
                            className="mb-1 mt-2.5 text-2xl md:text-[22px] text-black-900 sm:text-xl"
                            size="txtHelveticaNeueBold24"
                          >
                            Dorsalis pedis pulse:
                          </Text>
                          <div className="font-cairo h-[45px] relative w-[26%]">
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
                    <div className="flex flex-col gap-[15px] items-start justify-start w-auto">
                      <div className="flex flex-row items-center justify-start w-[90%] md:w-full">
                        <Text
                          className="text-2xl md:text-[22px] text-black-900 sm:text-xl"
                          size="txtHelveticaNeueBold24"
                        >
                          Systolic:
                        </Text>
                        <div className="font-cairo h-[45px] ml-7 relative w-[31%]">
                          <div className="absolute bg-white-A700_01 border border-black-900_7f border-solid h-[42px] inset-x-[0] mx-auto top-[0] w-full"></div>
                          <Text
                            className="absolute h-full inset-[0] justify-center m-auto text-2xl md:text-[22px] text-black-900 sm:text-xl w-max"
                            size="txtCairoRegular24"
                          >
                            120
                          </Text>
                        </div>
                        <Text
                          className="ml-[18px] text-2xl md:text-[22px] text-black-900 sm:text-xl"
                          size="txtCairoRegular24"
                        >
                          mmHg
                        </Text>
                      </div>
                      <div className="flex flex-row items-start justify-start w-[93%] md:w-full">
                        <Text
                          className="mt-2 text-2xl md:text-[22px] text-black-900 sm:text-xl"
                          size="txtHelveticaNeueBold24"
                        >
                          Diastolic:
                        </Text>
                        <div className="font-cairo h-[45px] md:h-[49px] mb-1 ml-[27px] relative w-[30%]">
                          <div className="absolute bg-white-A700_01 border border-black-900_7f border-solid h-[42px] inset-[0] justify-center m-auto w-full"></div>
                          <Text
                            className="absolute h-full inset-[0] justify-center m-auto text-2xl md:text-[22px] text-black-900 sm:text-xl w-max"
                            size="txtCairoRegular24"
                          >
                            80
                          </Text>
                        </div>
                        <Text
                          className="ml-[18px] mt-1 text-2xl md:text-[22px] text-black-900 sm:text-xl"
                          size="txtCairoRegular24"
                        >
                          mmHg
                        </Text>
                      </div>
                      <div className="flex flex-row items-start justify-between w-full">
                        <Text
                          className="mt-2 text-2xl md:text-[22px] text-black-900 sm:text-xl"
                          size="txtHelveticaNeueBold24"
                        >
                          Heart Rate:
                        </Text>
                        <Img
                          className="h-6 mt-2.5 w-6"
                          src="images/img_favorite.svg"
                          alt="favorite"
                        />
                        <div className="font-cairo h-[45px] relative w-[28%]">
                          <div className="absolute bg-white-A700_01 border border-black-900_7f border-solid h-[42px] inset-[0] justify-center m-auto w-full"></div>
                          <Text
                            className="absolute h-full inset-[0] justify-center m-auto text-2xl md:text-[22px] text-black-900 sm:text-xl w-max"
                            size="txtCairoRegular24"
                          >
                            88
                          </Text>
                        </div>
                        <Text
                          className="text-2xl md:text-[22px] text-black-900 sm:text-xl"
                          size="txtCairoRegular24"
                        >
                          bpm
                        </Text>
                      </div>
                    </div>
                  </div>
                  <div className="flex md:flex-col flex-row gap-[27px] items-center justify-start mt-[70px] w-[71%] md:w-full">
                    <Text
                      className="text-2xl md:text-[22px] text-black-900 sm:text-xl"
                      size="txtHelveticaNeueBold24"
                    >
                      Jugular Venous Pressure (JVP) Evaluation:{" "}
                    </Text>
                    <Text
                      className="text-2xl md:text-[22px] text-black-900 sm:text-xl"
                      size="txtCairoRegular24"
                    >
                      abnormal{" "}
                    </Text>
                  </div>
                  <Text
                    className="mt-[95px] text-3xl sm:text-[26px] md:text-[28px] text-black-900"
                    size="txtHelveticaNeueBold30"
                  >
                    Carotid Auscultation
                  </Text>
                  <div className="h-[260px] md:h-[279px] mt-[19px] relative w-[38%]">
                    <Img
                      className="h-[260px] m-auto object-cover w-full"
                      src="images/img_carotidimg.png"
                      alt="carotidimg"
                    />
                    <Img
                      className="absolute h-[35px] inset-y-[0] my-auto right-[34%] w-[35px]"
                      src="images/img_user.svg"
                      alt="user"
                    />
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
                      [specialty physician notes on pulse mesasurements go here]
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

export default PulsesTabPage;
