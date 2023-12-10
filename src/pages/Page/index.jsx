import React from "react";

import { Button, Img, Line, List, Text } from "components";
import Header from "components/Header";

const Page = () => {
  return (
    <>
      <div
        className="bg-cover bg-no-repeat bg-white-A700 border border-solid border-white-A700 h-[1561px] mx-auto pb-[103px] relative w-full"
        style={{ backgroundImage: "url('images/img_demographicstab.svg')" }}
      >
        <div className="flex flex-col font-dmsans h-full items-center justify-start mx-auto w-full">
          <div className="flex flex-col md:gap-10 gap-[140px] items-center justify-start w-full">
            <Header className="bg-white-A700 flex md:flex-col flex-row md:gap-5 items-center justify-center md:px-5 w-full" />
            <div
              className="bg-cover bg-no-repeat flex flex-col font-cairo h-[1224px] items-center justify-end max-w-[1647px] mx-auto p-[61px] md:px-5 w-full"
              style={{ backgroundImage: "url('images/img_group39.svg')" }}
            >
              <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between mt-2 w-[98%] md:w-full">
                <List
                  className="flex flex-col gap-[70px] items-start md:mt-0 mt-5 w-auto"
                  orientation="vertical"
                >
                  <div className="flex flex-col items-center justify-start w-full">
                    <div className="flex flex-row gap-3.5 items-end justify-between w-full">
                      <Img
                        className="h-[70px] w-[70px]"
                        src="images/img_search.svg"
                        alt="search"
                      />
                      <div className="flex flex-col items-center justify-start mb-[3px] mt-2">
                        <Text
                          className="text-black-900 text-xl"
                          size="txtCairoSemiBold20"
                        >
                          Taylor Swift
                        </Text>
                        <div className="flex flex-row items-start justify-evenly w-[97%] md:w-full">
                          <Img
                            className="h-3 mt-[3px] w-3"
                            src="images/img_clock.svg"
                            alt="clock"
                          />
                          <Text
                            className="text-[15px] text-black-900"
                            size="txtCairoSemiBold15"
                          >
                            Today | 5:30 PM
                          </Text>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col items-center justify-start w-full">
                    <div className="flex flex-row gap-3.5 items-end justify-between w-full">
                      <Img
                        className="h-[70px] w-[70px]"
                        src="images/img_search.svg"
                        alt="search"
                      />
                      <div className="flex flex-col items-center justify-start mb-[3px] mt-2">
                        <Text
                          className="text-black-900 text-xl"
                          size="txtCairoSemiBold20"
                        >
                          Bad Bunny
                        </Text>
                        <div className="flex flex-row items-start justify-evenly w-[97%] md:w-full">
                          <Img
                            className="h-3 mt-[3px] w-3"
                            src="images/img_clock.svg"
                            alt="clock"
                          />
                          <Text
                            className="text-[15px] text-black-900"
                            size="txtCairoSemiBold15"
                          >
                            Today | 12:30 PM
                          </Text>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col items-center justify-start w-full">
                    <div className="flex flex-row gap-3.5 items-end justify-between w-full">
                      <Img
                        className="h-[70px] w-[70px]"
                        src="images/img_search.svg"
                        alt="search"
                      />
                      <div className="flex flex-col items-center justify-start mb-[3px] mt-2">
                        <Text
                          className="text-black-900 text-xl"
                          size="txtCairoSemiBold20"
                        >
                          Michelle Obama
                        </Text>
                        <div className="flex flex-row items-start justify-evenly w-[97%] md:w-full">
                          <Img
                            className="h-3 mt-[3px] w-3"
                            src="images/img_clock.svg"
                            alt="clock"
                          />
                          <Text
                            className="text-[15px] text-black-900"
                            size="txtCairoSemiBold15"
                          >
                            Yesterday | 2:30 PM
                          </Text>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col items-center justify-start w-full">
                    <div className="flex flex-row gap-3.5 items-end justify-between w-full">
                      <Img
                        className="h-[70px] w-[70px]"
                        src="images/img_search.svg"
                        alt="search"
                      />
                      <div className="flex flex-col items-center justify-start mb-[3px] mt-2">
                        <Text
                          className="text-black-900 text-xl"
                          size="txtCairoSemiBold20"
                        >
                          Justin Beiber
                        </Text>
                        <div className="flex flex-row items-start justify-evenly w-[97%] md:w-full">
                          <Img
                            className="h-3 mt-[3px] w-3"
                            src="images/img_clock.svg"
                            alt="clock"
                          />
                          <Text
                            className="text-[15px] text-black-900"
                            size="txtCairoSemiBold15"
                          >
                            Yesterday | 10:30 AM
                          </Text>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col items-center justify-start w-full">
                    <div className="flex flex-row gap-3.5 items-end justify-between w-full">
                      <Img
                        className="h-[70px] w-[70px]"
                        src="images/img_search.svg"
                        alt="search"
                      />
                      <div className="flex flex-col items-center justify-start mb-[3px] mt-2">
                        <Text
                          className="text-black-900 text-xl"
                          size="txtCairoSemiBold20"
                        >
                          Venus Williams
                        </Text>
                        <div className="flex flex-row items-start justify-evenly w-[97%] md:w-full">
                          <Img
                            className="h-3 mt-[3px] w-3"
                            src="images/img_clock.svg"
                            alt="clock"
                          />
                          <Text
                            className="text-[15px] text-black-900"
                            size="txtCairoSemiBold15"
                          >
                            Dec 9, 2023 | 5:30 PM
                          </Text>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col items-center justify-start w-full">
                    <div className="flex flex-row gap-3.5 items-end justify-between w-full">
                      <Img
                        className="h-[70px] w-[70px]"
                        src="images/img_search.svg"
                        alt="search"
                      />
                      <div className="flex flex-col items-center justify-start mb-[3px] mt-2">
                        <Text
                          className="text-black-900 text-xl"
                          size="txtCairoSemiBold20"
                        >
                          Usain Bolt
                        </Text>
                        <div className="flex flex-row items-start justify-evenly w-[97%] md:w-full">
                          <Img
                            className="h-3 mt-[3px] w-3"
                            src="images/img_clock.svg"
                            alt="clock"
                          />
                          <Text
                            className="text-[15px] text-black-900"
                            size="txtCairoSemiBold15"
                          >
                            Dec 8, 2023 | 1:30 PM
                          </Text>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col items-center justify-start w-full">
                    <div className="flex flex-row gap-3.5 items-end justify-between w-full">
                      <Img
                        className="h-[70px] w-[70px]"
                        src="images/img_search.svg"
                        alt="search"
                      />
                      <div className="flex flex-col items-center justify-start mb-[3px] mt-2">
                        <Text
                          className="text-black-900 text-xl"
                          size="txtCairoSemiBold20"
                        >
                          Lady Gaga
                        </Text>
                        <div className="flex flex-row items-start justify-evenly w-[97%] md:w-full">
                          <Img
                            className="h-3 mt-[3px] w-3"
                            src="images/img_clock.svg"
                            alt="clock"
                          />
                          <Text
                            className="text-[15px] text-black-900"
                            size="txtCairoSemiBold15"
                          >
                            Dec 7, 2023 | 10:30 AM
                          </Text>
                        </div>
                      </div>
                    </div>
                  </div>
                </List>
                <div className="bg-gray-200_04 flex flex-col items-center justify-start p-[33px] sm:px-5 rounded-[20px] w-[72%] md:w-full">
                  <div className="flex flex-col gap-[42px] justify-start mb-[11px] w-[94%] md:w-full">
                    <div className="flex flex-col gap-[34px] items-center justify-start ml-5 md:ml-[0] w-[98%] md:w-full">
                      <div className="flex flex-col items-center justify-start w-full">
                        <div className="flex flex-col justify-start w-full">
                          <div className="flex flex-row gap-6 items-start justify-start md:ml-[0] ml-[7px] w-[28%] md:w-full">
                            <Text
                              className="text-black-900 text-xl"
                              size="txtCairoSemiBold20"
                            >
                              To:
                            </Text>
                            <Text
                              className="text-black-900 text-xl"
                              size="txtCairoSemiBold20"
                            >
                              taylor.swift@gmail.com
                            </Text>
                          </div>
                          <div className="flex flex-col items-start justify-start w-full">
                            <Line className="bg-blue_gray-700 h-0.5 w-full" />
                            <div className="flex flex-row gap-[18px] items-start justify-start md:ml-[0] ml-[7px] mt-[11px] w-[33%] md:w-full">
                              <Text
                                className="text-black-900 text-xl"
                                size="txtCairoSemiBold20"
                              >
                                From:
                              </Text>
                              <Text
                                className="text-black-900 text-xl"
                                size="txtCairoSemiBold20"
                              >
                                dr.david.ochoa@gmail.com
                              </Text>
                            </div>
                            <Line className="bg-blue_gray-700 h-0.5 mt-0.5 w-full" />
                            <div className="flex flex-row gap-[27px] items-center justify-start md:ml-[0] ml-[7px] mt-[11px] w-[35%] md:w-full">
                              <Text
                                className="text-black-900 text-xl"
                                size="txtCairoSemiBold20"
                              >
                                Subject:
                              </Text>
                              <Text
                                className="text-black-900 text-xl"
                                size="txtCairoSemiBold20"
                              >
                                [Urgent] Need to visit ER
                              </Text>
                            </div>
                            <Line className="bg-blue_gray-700 h-0.5 mt-0.5 w-full" />
                          </div>
                        </div>
                      </div>
                      <Text
                        className="text-black-900 text-xl"
                        size="txtCairoSemiBold20"
                      >
                        <>
                          Dear Taylor Swift,
                          <br />
                          <br />
                          After reviewing your cardiology physical exam chart, I
                          have detected some abnormalities in your exam that
                          warrant an Emergency Room visit. Please head to your
                          nearest ER now.
                          <br />
                          <br />
                          Best wishes, <br />
                          <br />
                          Dr. David Ochoa
                          <br />
                          Cardiologist
                        </>
                      </Text>
                    </div>
                    <div className="flex flex-row gap-[31px] items-center justify-start w-[29%] md:w-full">
                      <Button
                        className="cursor-pointer flex items-center justify-center min-w-[123px] rounded-[20px]"
                        leftIcon={
                          <Img
                            className="h-6 mt-[9px] mb-1 mr-2.5"
                            src="images/img_save.svg"
                            alt="save"
                          />
                        }
                        color="indigo_A200"
                        size="xs"
                      >
                        <div className="font-semibold leading-[normal] text-left text-xl">
                          Send
                        </div>
                      </Button>
                      <Img
                        className="h-6 w-28"
                        src="images/img_attachmentbuttons.svg"
                        alt="attachmentbutto"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Text
          className="absolute left-[9%] sm:text-4xl md:text-[38px] text-[40px] text-black-900 top-[11%]"
          size="txtCairoSemiBold40"
        >
          Messages
        </Text>
      </div>
    </>
  );
};

export default Page;
