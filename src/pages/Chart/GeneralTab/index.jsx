import React from "react";

import { Button, CheckBox, Img, Line, List, Text } from "components";
import Header from "components/Header";

const GeneralTabPage = () => {
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
                color="white_A700"
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
              <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between mb-[281px] w-[97%] md:w-full">
                <div className="flex flex-col md:gap-10 gap-[104px] items-start justify-start md:mt-0 mt-6 w-[39%] md:w-full">
                  <List
                    className="flex flex-col gap-[100px] items-center w-full"
                    orientation="vertical"
                  >
                    <div className="flex flex-1 flex-col items-center justify-start my-0 w-full">
                      <div className="flex flex-col gap-[33px] items-start justify-start w-full">
                        <div className="flex flex-row gap-3.5 items-center justify-start w-[30%] md:w-full">
                          <CheckBox
                            className="font-bold leading-[normal] sm:pr-5 text-2xl md:text-[22px] text-black-900 text-left sm:text-xl"
                            inputClassName="mr-[5px]"
                            name="cyanosis"
                            id="cyanosis"
                            label="Cyanosis:"
                          ></CheckBox>
                          <Img
                            className="h-6 w-6"
                            src="images/img_close.svg"
                            alt="close"
                          />
                        </div>
                        <div className="flex sm:flex-col flex-row gap-[38px] items-center justify-between ml-0.5 md:ml-[0] w-full">
                          <Text
                            className="text-2xl md:text-[22px] text-black-900 sm:text-xl"
                            size="txtCairoBold24"
                          >
                            Pallor severity:
                          </Text>
                          <div className="font-nunito h-[74px] relative w-[68%] sm:w-full">
                            <Img
                              className="absolute h-[74px] inset-[0] justify-center m-auto object-cover"
                              src="images/img_gradientline.png"
                              alt="gradientline"
                            />
                            <div className="absolute flex flex-row h-max inset-[0] items-center justify-between m-auto w-full">
                              <Text
                                className="text-black-900 text-xs"
                                size="txtNunitoRegular12"
                              >
                                Bad
                              </Text>
                              <Text
                                className="text-black-900 text-xs"
                                size="txtNunitoRegular12"
                              >
                                Good
                              </Text>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-1 flex-col items-center justify-start mr-0.5 my-0 w-full">
                      <div className="flex flex-col gap-9 items-start justify-start w-full">
                        <div className="flex flex-row gap-3.5 items-center justify-start w-1/4 md:w-full">
                          <CheckBox
                            className="font-bold leading-[normal] sm:pr-5 text-2xl md:text-[22px] text-black-900 text-left sm:text-xl"
                            inputClassName="mr-[5px]"
                            name="pallor"
                            id="pallor"
                            label="Pallor:"
                          ></CheckBox>
                          <Img
                            className="h-6 w-6"
                            src="images/img_close_gray_900.svg"
                            alt="close"
                          />
                        </div>
                        <div className="flex sm:flex-col flex-row gap-[38px] items-center justify-between w-full">
                          <Text
                            className="text-2xl md:text-[22px] text-black-900 sm:text-xl"
                            size="txtCairoBold24"
                          >
                            Pallor severity:
                          </Text>
                          <div className="font-nunito h-[74px] relative w-[68%] sm:w-full">
                            <Img
                              className="absolute h-[74px] inset-[0] justify-center m-auto object-cover"
                              src="images/img_gradientline_yellow_800.png"
                              alt="gradientline"
                            />
                            <div className="absolute flex flex-row h-max inset-[0] items-center justify-between m-auto w-full">
                              <Text
                                className="text-black-900 text-xs"
                                size="txtNunitoRegular12"
                              >
                                Bad
                              </Text>
                              <Text
                                className="text-black-900 text-xs"
                                size="txtNunitoRegular12"
                              >
                                Good
                              </Text>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-1 flex-col items-center justify-start mr-[3px] my-0 w-full">
                      <div className="flex flex-col gap-8 items-start justify-start w-full">
                        <div className="flex flex-row gap-3.5 items-center justify-start w-[45%] md:w-full">
                          <CheckBox
                            className="font-bold leading-[normal] sm:pr-5 text-2xl md:text-[22px] text-black-900 text-left sm:text-xl"
                            inputClassName="mr-[5px]"
                            name="yellowingineyes_One"
                            id="yellowingineyes_One"
                            label="Yellowing in eyes:"
                          ></CheckBox>
                          <Img
                            className="h-6 w-6"
                            src="images/img_close_deep_orange_a700.svg"
                            alt="close"
                          />
                        </div>
                        <div className="flex sm:flex-col flex-row gap-9 items-center justify-between w-full">
                          <Text
                            className="text-2xl md:text-[22px] text-black-900 sm:text-xl"
                            size="txtCairoBold24"
                          >
                            Pallor severity:
                          </Text>
                          <div className="font-nunito h-[74px] relative w-[69%] sm:w-full">
                            <Img
                              className="absolute h-[74px] inset-[0] justify-center m-auto object-cover"
                              src="images/img_gradientline_green_500_01.png"
                              alt="gradientline"
                            />
                            <div className="absolute flex flex-row h-max inset-[0] items-center justify-between m-auto w-full">
                              <Text
                                className="text-black-900 text-xs"
                                size="txtNunitoRegular12"
                              >
                                Bad
                              </Text>
                              <Text
                                className="text-black-900 text-xs"
                                size="txtNunitoRegular12"
                              >
                                Good
                              </Text>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </List>
                  <div className="flex sm:flex-col flex-row sm:gap-5 items-start justify-start w-[63%] md:w-full">
                    <Text
                      className="text-2xl md:text-[22px] text-black-900 sm:text-xl"
                      size="txtCairoBold24"
                    >
                      Capillary Refill Time:
                    </Text>
                    <div className="h-[45px] sm:ml-[0] ml-[31px] relative w-1/4 sm:w-full">
                      <div className="absolute bg-white-A700_01 border border-black-900_7f border-solid h-[42px] inset-x-[0] mx-auto top-[0] w-full"></div>
                      <Text
                        className="absolute h-full inset-[0] justify-center m-auto text-2xl md:text-[22px] text-black-900 sm:text-xl w-max"
                        size="txtCairoRegular24"
                      >
                        3
                      </Text>
                    </div>
                    <Text
                      className="ml-3 sm:ml-[0] text-2xl md:text-[22px] text-black-900 sm:text-xl"
                      size="txtCairoBold24"
                    >
                      sec
                    </Text>
                  </div>
                </div>
                <div className="flex flex-col items-start justify-start w-[27%] md:w-full">
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
                      [specialty physician notes on general inspection
                      measurements go here]
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

export default GeneralTabPage;
