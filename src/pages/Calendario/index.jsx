import React from "react";

import { Button, Img, List, Text } from "components";

const CalendarioPage = () => {
  return (
    <>
      <div className="bg-white-A700 flex flex-col font-helvetica items-center justify-end mx-auto pl-1 w-full">
        <div className="h-[480px] sm:h-[527px] md:h-[840px] md:px-5 relative w-full">
          <div className="absolute flex h-[480px] sm:h-[527px] md:h-[840px] inset-[0] justify-end m-auto w-full">
            <div className="bg-white-A700 h-[527px] mt-auto mx-auto rounded-[10px] shadow-bs2 w-full"></div>
            <Text
              className="absolute right-[17%] text-black-900 text-center text-xl top-[0]"
              size="txtHelveticaBold20"
            >
              Past Records
            </Text>
            <div className="absolute bottom-[0] flex md:flex-col flex-row font-poppins md:gap-10 inset-x-[0] items-center justify-between mx-auto w-[89%]">
              <div className="flex flex-col gap-[57px] justify-start px-[7px] w-[51%] md:w-full">
                <Img
                  className="h-[30px] md:ml-[0] ml-[338px]"
                  src="images/img_fechas.svg"
                  alt="fechas"
                />
                <div className="flex flex-col gap-[21px] items-center justify-start mr-0.5 w-full">
                  <div className="flex flex-row items-center justify-between w-[98%] md:w-full">
                    <Text
                      className="text-deep_purple-600 text-xl"
                      size="txtPoppinsBold20"
                    >
                      S
                    </Text>
                    <Text
                      className="text-deep_purple-600 text-xl"
                      size="txtPoppinsBold20"
                    >
                      S
                    </Text>
                    <Text
                      className="text-deep_purple-600 text-xl"
                      size="txtPoppinsBold20"
                    >
                      M
                    </Text>
                    <Text
                      className="text-deep_purple-600 text-xl"
                      size="txtPoppinsBold20"
                    >
                      T
                    </Text>
                    <Text
                      className="text-deep_purple-600 text-xl"
                      size="txtPoppinsBold20"
                    >
                      W
                    </Text>
                    <Text
                      className="text-deep_purple-600 text-xl"
                      size="txtPoppinsBold20"
                    >
                      R
                    </Text>
                    <Text
                      className="text-deep_purple-600 text-xl"
                      size="txtPoppinsBold20"
                    >
                      F
                    </Text>
                  </div>
                  <div className="md:h-[236px] h-[251px] sm:h-[485px] relative w-full">
                    <div className="absolute bottom-[0] flex flex-col items-center justify-start left-[29%] w-[28%]">
                      <div className="flex flex-col gap-2.5 items-center justify-start w-full">
                        <div className="flex flex-row gap-[35px] items-center justify-between w-full">
                          <div className="bg-blue_gray-50 h-11 rounded-[50%] w-11"></div>
                          <div className="bg-blue_gray-50 h-11 rounded-[50%] w-11"></div>
                        </div>
                        <div className="flex flex-row gap-[35px] items-center justify-between w-full">
                          <div className="bg-pink-200 h-11 rounded-[50%] w-11"></div>
                          <div className="bg-indigo-100 h-11 rounded-[50%] w-11"></div>
                        </div>
                        <div className="flex flex-row gap-[35px] items-center justify-between w-full">
                          <div className="bg-indigo-100 h-11 rounded-[50%] w-11"></div>
                          <div className="bg-indigo-100 h-11 rounded-[50%] w-11"></div>
                        </div>
                        <div className="flex flex-row gap-[35px] items-center justify-between w-full">
                          <div className="bg-indigo-100 h-11 rounded-[50%] w-11"></div>
                          <div className="bg-indigo-100 h-11 rounded-[50%] w-11"></div>
                        </div>
                      </div>
                    </div>
                    <div className="absolute flex flex-col h-max inset-[0] items-center justify-center m-auto w-full">
                      <div className="flex flex-col items-center justify-start w-full">
                        <div className="flex flex-col items-center justify-start w-full">
                          <List
                            className="flex flex-col gap-[21px] items-center w-full"
                            orientation="vertical"
                          >
                            <div className="flex md:flex-1 flex-row items-start justify-between ml-[3px] mr-[7px] my-0 w-[98%] md:w-full">
                              <div className="flex flex-row items-center justify-between w-[18%]">
                                <Text
                                  className="text-base text-blue_gray-700_01"
                                  size="txtPoppinsMedium16"
                                >
                                  30
                                </Text>
                                <Text
                                  className="text-base text-blue_gray-700_01"
                                  size="txtPoppinsMedium16"
                                >
                                  31
                                </Text>
                              </div>
                              <div className="flex flex-row items-center justify-center">
                                <Text
                                  className="text-black-900 text-xl"
                                  size="txtPoppinsMedium20"
                                >
                                  1
                                </Text>
                                <Text
                                  className="ml-[74px] text-black-900 text-xl"
                                  size="txtPoppinsMedium20"
                                >
                                  2
                                </Text>
                                <Text
                                  className="ml-[57px] text-black-900 text-xl"
                                  size="txtPoppinsMedium20"
                                >
                                  3
                                </Text>
                              </div>
                              <Text
                                className="text-black-900 text-xl"
                                size="txtPoppinsMedium20"
                              >
                                4
                              </Text>
                              <Text
                                className="text-black-900 text-xl"
                                size="txtPoppinsMedium20"
                              >
                                5
                              </Text>
                            </div>
                            <div className="flex md:flex-1 flex-row items-start justify-between ml-1.5 my-0 w-[99%] md:w-full">
                              <Text
                                className="text-black-900 text-xl"
                                size="txtPoppinsMedium20"
                              >
                                6
                              </Text>
                              <Text
                                className="text-black-900 text-xl"
                                size="txtPoppinsMedium20"
                              >
                                7
                              </Text>
                              <Text
                                className="text-gray-500_03 text-xl"
                                size="txtPoppinsBold20Gray50003"
                              >
                                8
                              </Text>
                              <Text
                                className="text-gray-500_03 text-xl"
                                size="txtPoppinsBold20Gray50003"
                              >
                                9
                              </Text>
                              <Text
                                className="text-black-900 text-xl"
                                size="txtPoppinsMedium20"
                              >
                                10
                              </Text>
                              <Text
                                className="text-black-900 text-xl"
                                size="txtPoppinsMedium20"
                              >
                                11
                              </Text>
                              <Text
                                className="text-black-900 text-xl"
                                size="txtPoppinsMedium20"
                              >
                                12
                              </Text>
                            </div>
                            <div className="flex md:flex-1 flex-row items-center justify-between mx-auto my-0 w-[99%] md:w-full">
                              <Text
                                className="text-black-900 text-xl"
                                size="txtPoppinsMedium20"
                              >
                                13
                              </Text>
                              <Text
                                className="text-black-900 text-xl"
                                size="txtPoppinsMedium20"
                              >
                                14
                              </Text>
                              <Text
                                className="text-pink-500 text-xl"
                                size="txtPoppinsBold20Pink500"
                              >
                                15
                              </Text>
                              <Text
                                className="text-indigo-A700 text-xl"
                                size="txtPoppinsBold20IndigoA700"
                              >
                                16
                              </Text>
                              <Text
                                className="text-black-900 text-xl"
                                size="txtPoppinsMedium20"
                              >
                                17
                              </Text>
                              <Text
                                className="text-black-900 text-xl"
                                size="txtPoppinsMedium20"
                              >
                                18
                              </Text>
                              <Text
                                className="text-black-900 text-xl"
                                size="txtPoppinsMedium20"
                              >
                                19
                              </Text>
                            </div>
                            <div className="flex flex-1 flex-row items-center justify-between my-0 w-full">
                              <Text
                                className="text-black-900 text-xl"
                                size="txtPoppinsMedium20"
                              >
                                20
                              </Text>
                              <Text
                                className="text-black-900 text-xl"
                                size="txtPoppinsMedium20"
                              >
                                21
                              </Text>
                              <Text
                                className="text-indigo-A700 text-xl"
                                size="txtPoppinsBold20IndigoA700"
                              >
                                22
                              </Text>
                              <Text
                                className="text-indigo-A700 text-xl"
                                size="txtPoppinsBold20IndigoA700"
                              >
                                23
                              </Text>
                              <Text
                                className="text-black-900 text-xl"
                                size="txtPoppinsMedium20"
                              >
                                24
                              </Text>
                              <Text
                                className="text-black-900 text-xl"
                                size="txtPoppinsMedium20"
                              >
                                25
                              </Text>
                              <Text
                                className="text-black-900 text-xl"
                                size="txtPoppinsMedium20"
                              >
                                26
                              </Text>
                            </div>
                            <div className="flex md:flex-1 sm:flex-col flex-row sm:gap-5 items-start justify-start mr-[73px] my-0 w-[84%] md:w-full">
                              <Text
                                className="text-black-900 text-xl"
                                size="txtPoppinsMedium20"
                              >
                                27
                              </Text>
                              <Text
                                className="sm:ml-[0] ml-[42px] text-black-900 text-xl"
                                size="txtPoppinsMedium20"
                              >
                                28
                              </Text>
                              <Text
                                className="sm:ml-[0] ml-[51px] text-indigo-A700 text-xl"
                                size="txtPoppinsBold20IndigoA700"
                              >
                                29
                              </Text>
                              <Text
                                className="ml-14 sm:ml-[0] text-indigo-A700 text-xl"
                                size="txtPoppinsBold20IndigoA700"
                              >
                                30
                              </Text>
                              <Text
                                className="sm:ml-[0] ml-[52px] text-black-900 text-xl"
                                size="txtPoppinsMedium20"
                              >
                                1
                              </Text>
                              <Text
                                className="sm:ml-[0] ml-[63px] text-black-900 text-xl"
                                size="txtPoppinsMedium20"
                              >
                                2
                              </Text>
                            </div>
                          </List>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-blue-200 flex flex-col font-barlow gap-[26px] justify-center p-[21px] sm:px-5 rounded-[30px] w-2/5 md:w-full">
                <div className="flex flex-row gap-[34px] items-center justify-start ml-6 md:ml-[0] mr-[133px] mt-[13px] w-[52%] md:w-full">
                  <Text
                    className="text-white-A700_87 text-xl uppercase"
                    size="txtBarlowMedium20"
                  >
                    Recent{" "}
                  </Text>
                  <Text
                    className="text-gray-200_05 text-xl uppercase"
                    size="txtBarlowMedium20Gray20005"
                  >
                    SAVED
                  </Text>
                </div>
                <div className="flex flex-col items-start justify-start mb-[7px] mr-1.5 w-[99%] md:w-full">
                  <div className="bg-white-A700_7f flex flex-row items-center justify-between p-2.5 rounded-[20px] shadow-bs1 w-full">
                    <div className="flex flex-col items-start justify-start ml-1 mt-2">
                      <Text
                        className="text-base text-red-700 uppercase"
                        size="txtBarlowMedium16"
                      >
                        lucy
                      </Text>
                      <Text
                        className="mt-0.5 text-red-700 text-xs uppercase"
                        size="txtBarlowLight12"
                      >
                        <span className="text-red-700 font-barlow text-left font-light">
                          today at 11:30 AM R
                        </span>
                        <span className="text-red-700 font-barlow text-left font-light">
                          ejected
                        </span>
                      </Text>
                    </div>
                    <Img
                      className="h-[27px] mr-1 w-[27px]"
                      src="images/img_fluentcalldismiss20filled.svg"
                      alt="fluentcalldismi"
                    />
                  </div>
                  <div className="bg-white-A700_e5 flex flex-row items-center justify-between mt-7 p-[7px] rounded-[20px] shadow-bs1 w-full">
                    <div className="flex flex-col items-start justify-start ml-[7px] mt-3">
                      <Text
                        className="text-base text-indigo-A700 uppercase"
                        size="txtBarlowMedium16IndigoA700"
                      >
                        Peter Cech
                      </Text>
                      <Text
                        className="mt-1 text-indigo-A700 text-xs uppercase"
                        size="txtBarlowLight12IndigoA700"
                      >
                        <span className="text-indigo-A700 font-barlow text-left font-light">
                          Yesterday at 3pm{" "}
                        </span>
                        <span className="text-indigo-A700 font-barlow text-left font-light">
                          Incoming
                        </span>
                        <span className="text-indigo-A700 font-barlow text-left font-light">
                          {" "}
                          24
                        </span>
                        <span className="text-indigo-A700 font-barlow text-left font-light">
                          s
                        </span>
                      </Text>
                    </div>
                    <Img
                      className="h-[27px] mr-[7px] w-[27px]"
                      src="images/img_fluentcallinbound48filled.svg"
                      alt="fluentcallinbou"
                    />
                  </div>
                  <div className="bg-white-A700_e5 flex flex-row items-center justify-between mt-6 p-[7px] rounded-[20px] shadow-bs1 w-full">
                    <div className="flex flex-col items-start justify-start ml-[7px] mt-[11px]">
                      <Text
                        className="text-base text-indigo-A700 uppercase"
                        size="txtBarlowMedium16IndigoA700"
                      >
                        erling
                      </Text>
                      <Text
                        className="text-indigo-A700 text-xs uppercase"
                        size="txtBarlowLight12IndigoA700"
                      >
                        <span className="text-indigo-A700 font-barlow text-left font-light">
                          NOV 16 i
                        </span>
                        <span className="text-indigo-A700 font-barlow text-left font-light">
                          ncoming
                        </span>
                      </Text>
                    </div>
                    <Img
                      className="h-[25px] mr-[7px]"
                      src="images/img_fluentcallinbound48filled.svg"
                      alt="fluentcallinbou_One"
                    />
                  </div>
                  <Button
                    className="flex h-[37px] items-center justify-center md:ml-[0] ml-[279px] mt-7 rounded-[18px] w-[37px]"
                    color="white_A700"
                    size="sm"
                  >
                    <Img
                      className="h-6"
                      src="images/img_akariconsmorehorizontal.svg"
                      alt="akariconsmoreho"
                    />
                  </Button>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute flex flex-col gap-[41px] justify-start left-[0] md:px-10 sm:px-5 px-[66px] top-[0]">
            <Text
              className="ml-24 md:ml-[0] text-black-900 text-center text-xl"
              size="txtHelveticaBold20"
            >
              Upcoming Virtual Calls
            </Text>
            <Text
              className="bg-blue_gray-50 justify-center md:ml-[0] ml-[9px] mr-[82px] pt-[9px] sm:px-5 px-[29px] rounded-[15px] text-black-900 text-xl w-[223px]"
              size="txtPoppinsMedium20"
            >
              November 2022
            </Text>
          </div>
        </div>
      </div>
    </>
  );
};

export default CalendarioPage;
