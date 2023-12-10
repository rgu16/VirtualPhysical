import React from "react";

import { Button, Img, Line, List, Text } from "components";
import Header from "components/Header";

const DemographicsTabPage = () => {
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
                color="white_A700"
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
              <div className="flex flex-col gap-[41px] justify-start mb-60 w-[99%] md:w-full">
                <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between w-full">
                  <div className="md:h-[560px] h-[580px] relative w-[37%] md:w-full">
                    <div className="absolute flex flex-col h-max inset-[0] items-center justify-center m-auto w-full">
                      <div className="flex flex-col items-start justify-start w-full">
                        <List
                          className="flex flex-col gap-[37px] md:ml-[0] ml-[230px] w-[49%]"
                          orientation="vertical"
                        >
                          <div className="flex flex-row gap-[13px] items-center justify-between w-full">
                            <Text
                              className="text-2xl md:text-[22px] text-black-900 sm:text-xl"
                              size="txtCairoBold24"
                            >
                              First Name:
                            </Text>
                            <div className="h-[45px] relative w-[53%]">
                              <div className="absolute bg-gray-50 border border-black-900_7f border-solid h-[42px] inset-x-[0] mx-auto top-[0] w-full"></div>
                              <Text
                                className="absolute h-full inset-[0] justify-center m-auto text-2xl md:text-[22px] text-black-900 sm:text-xl w-max"
                                size="txtCairoRegular24"
                              >
                                Taylor
                              </Text>
                            </div>
                          </div>
                          <div className="flex flex-row gap-[15px] items-start justify-between w-full">
                            <Text
                              className="mt-0.5 text-2xl md:text-[22px] text-black-900 sm:text-xl"
                              size="txtCairoBold24"
                            >
                              Last Name:
                            </Text>
                            <div className="h-[45px] md:h-[47px] mb-0.5 relative w-[53%]">
                              <div className="absolute bg-white-A700_01 border border-black-900_7f border-solid h-[42px] inset-[0] justify-center m-auto w-full"></div>
                              <Text
                                className="absolute h-full inset-[0] justify-center m-auto text-2xl md:text-[22px] text-black-900 sm:text-xl w-max"
                                size="txtCairoRegular24"
                              >
                                Swift
                              </Text>
                            </div>
                          </div>
                        </List>
                        <div className="flex flex-row items-start justify-between w-[69%] md:w-full">
                          <Text
                            className="mb-9 text-2xl md:text-[22px] text-black-900 sm:text-xl"
                            size="txtCairoRegular24"
                          >
                            Taylor Swift
                          </Text>
                          <div className="flex flex-row items-center justify-between mt-9 w-[42%]">
                            <Text
                              className="text-2xl md:text-[22px] text-black-900 sm:text-xl"
                              size="txtCairoBold24"
                            >
                              Sex:
                            </Text>
                            <Text
                              className="text-2xl md:text-[22px] text-black-900 sm:text-xl"
                              size="txtCairoRegular24"
                            >
                              female
                            </Text>
                          </div>
                        </div>
                        <div className="flex flex-col items-start justify-start md:ml-[0] ml-[230px] mt-[41px] w-3/5 md:w-full">
                          <List
                            className="flex flex-col gap-[35px] w-[65%]"
                            orientation="vertical"
                          >
                            <div className="flex flex-row items-start justify-between w-[99%] md:w-full">
                              <Text
                                className="mt-[5px] text-2xl md:text-[22px] text-black-900 sm:text-xl"
                                size="txtCairoBold24"
                              >
                                Height:
                              </Text>
                              <div className="h-[45px] md:h-[50px] mb-[5px] relative w-[43%]">
                                <div className="absolute bg-white-A700_01 border border-black-900_7f border-solid bottom-[0] h-[42px] inset-x-[0] mx-auto w-full"></div>
                                <Text
                                  className="absolute h-full inset-[0] justify-center m-auto text-2xl md:text-[22px] text-black-900 sm:text-xl w-max"
                                  size="txtCairoRegular24"
                                >
                                  5’11
                                </Text>
                              </div>
                              <Text
                                className="my-0.5 text-2xl md:text-[22px] text-black-900 sm:text-xl"
                                size="txtCairoBold24"
                              >
                                <span className="text-black-900 font-cairo text-left font-bold">
                                  ft{" "}
                                </span>
                                <span className="text-black-900 font-cairo text-left font-normal">
                                  {" "}
                                </span>
                                <span className="text-black-900 font-cairo text-left font-bold">
                                  {" "}
                                </span>
                              </Text>
                            </div>
                            <div className="flex flex-row items-start justify-between w-full">
                              <Text
                                className="mt-0.5 text-2xl md:text-[22px] text-black-900 sm:text-xl"
                                size="txtCairoBold24"
                              >
                                Weight:
                              </Text>
                              <div className="h-[45px] md:h-[47px] mb-0.5 relative w-[43%]">
                                <div className="absolute bg-white-A700_01 border border-black-900_7f border-solid bottom-[0] h-[42px] inset-x-[0] mx-auto w-full"></div>
                                <Text
                                  className="absolute h-full inset-[0] justify-center m-auto text-2xl md:text-[22px] text-black-900 sm:text-xl w-max"
                                  size="txtCairoRegular24"
                                >
                                  130
                                </Text>
                              </div>
                              <Text
                                className="mt-0.5 text-2xl md:text-[22px] text-black-900 sm:text-xl"
                                size="txtCairoBold24"
                              >
                                <span className="text-black-900 font-cairo text-left font-bold">
                                  lb
                                </span>
                                <span className="text-black-900 font-cairo text-left font-normal">
                                  {" "}
                                </span>
                                <span className="text-black-900 font-cairo text-left font-bold">
                                  {" "}
                                </span>
                              </Text>
                            </div>
                          </List>
                          <div className="flex flex-row items-center justify-between mt-[45px] w-full">
                            <Text
                              className="text-2xl md:text-[22px] text-black-900 sm:text-xl"
                              size="txtCairoBold24"
                            >
                              Date of Birth:{" "}
                            </Text>
                            <Text
                              className="text-2xl md:text-[22px] text-black-900 sm:text-xl"
                              size="txtCairoRegular24"
                            >
                              12{" "}
                            </Text>
                            <Text
                              className="text-2xl md:text-[22px] text-black-900 sm:text-xl"
                              size="txtCairoRegular24"
                            >
                              / 13{" "}
                            </Text>
                            <Text
                              className="text-2xl md:text-[22px] text-black-900 sm:text-xl"
                              size="txtCairoRegular24"
                            >
                              / 1989
                            </Text>
                          </div>
                          <div className="flex flex-row gap-3 items-start justify-start mt-[39px] w-[49%] md:w-full">
                            <Text
                              className="mt-0.5 text-2xl md:text-[22px] text-black-900 sm:text-xl"
                              size="txtCairoBold24"
                            >
                              Age:
                            </Text>
                            <div className="md:h-12 h-[45px] mb-[3px] relative w-[39%]">
                              <div className="absolute bg-white-A700_01 border border-black-900_7f border-solid h-[42px] inset-[0] justify-center m-auto w-full"></div>
                              <Text
                                className="absolute h-full inset-[0] justify-center m-auto text-2xl md:text-[22px] text-black-900 sm:text-xl w-max"
                                size="txtCairoRegular24"
                              >
                                33
                              </Text>
                            </div>
                            <Text
                              className="mt-[3px] text-2xl md:text-[22px] text-black-900 sm:text-xl"
                              size="txtCairoBold24"
                            >
                              yrs
                            </Text>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="absolute flex flex-col h-[130px] items-center justify-start left-[0] top-[0] w-[130px]">
                      <Img
                        className="h-[130px] md:h-auto rounded-[50%] w-[130px]"
                        src="images/img_screenshot20231206.png"
                        alt="screenshot20231"
                      />
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
                        [specialty physician notes on patient demographics go
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
                <div className="flex flex-col items-start justify-start md:ml-[0] ml-[212px] w-[41%] md:w-full">
                  <Text
                    className="text-2xl md:text-[22px] text-black-900 sm:text-xl"
                    size="txtCairoBold24"
                  >
                    Patient History:
                  </Text>
                  <div className="bg-white-A700_01 border border-black-900_7f border-solid flex flex-col items-center justify-start p-[13px] w-full">
                    <Text
                      className="mb-8 text-black-900 text-xl w-[98%] sm:w-full"
                      size="txtCairoRegular20"
                    >
                      Patient has history of high blood pressure and abnormal
                      heart rhythms
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

export default DemographicsTabPage;
