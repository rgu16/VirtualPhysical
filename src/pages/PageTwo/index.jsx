import React from "react";

import { Img, Line, List, Text } from "components";
import NavBar from "components/NavBar";

const PageTwo = () => {
  return (
    <>
      <div
        className="bg-cover bg-no-repeat bg-white-A700 border border-solid border-white-A700 h-[1561px] mx-auto pb-[103px] relative w-full"
        style={{ backgroundImage: "url('images/img_demographicstab.svg')" }}
      >
        <div className="flex flex-col font-dmsans h-full items-center justify-start mx-auto w-full">
          <div className="flex flex-col md:gap-10 gap-[140px] items-center justify-start w-full">
            <NavBar className="bg-white-A700 flex md:flex-col flex-row md:gap-5 items-center justify-center md:px-5 w-full" />
            <div
              className="bg-cover bg-no-repeat flex flex-col font-cairo h-[1224px] items-start justify-start max-w-[1647px] mx-auto p-[89px] md:px-5 w-full"
              style={{ backgroundImage: "url('images/img_group33.svg')" }}
            >
              <div className="flex sm:flex-col flex-row md:gap-10 items-center justify-between mb-[136px] ml-2 md:ml-[0] w-[70%] md:w-full">
                <List
                  className="flex flex-col gap-[70px] items-start w-auto"
                  orientation="vertical"
                >
                  <div className="flex flex-col items-center justify-start my-0 w-full">
                    <div className="flex flex-row gap-3.5 items-end justify-between w-full">
                      <Img
                        className="h-[70px] w-[70px]"
                        src="images/img_search_gray_900.svg"
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
                  <div className="flex flex-col items-center justify-start my-0 w-full">
                    <div className="flex flex-row gap-3.5 items-end justify-between w-full">
                      <Img
                        className="h-[70px] w-[70px]"
                        src="images/img_search_gray_900.svg"
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
                  <div className="flex flex-col items-center justify-start my-0 w-full">
                    <div className="flex flex-row gap-3.5 items-end justify-between w-full">
                      <Img
                        className="h-[70px] w-[70px]"
                        src="images/img_search_gray_900.svg"
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
                  <div className="flex flex-col items-center justify-start my-0 w-full">
                    <div className="flex flex-row gap-3.5 items-end justify-between w-full">
                      <Img
                        className="h-[70px] w-[70px]"
                        src="images/img_search_gray_900.svg"
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
                  <div className="flex flex-col items-center justify-start my-0 w-full">
                    <div className="flex flex-row gap-3.5 items-end justify-between w-full">
                      <Img
                        className="h-[70px] w-[70px]"
                        src="images/img_search_gray_900.svg"
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
                  <div className="flex flex-col items-center justify-start my-0 w-full">
                    <div className="flex flex-row gap-3.5 items-end justify-between w-full">
                      <Img
                        className="h-[70px] w-[70px]"
                        src="images/img_search_gray_900.svg"
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
                  <div className="flex flex-col items-center justify-start my-0 w-full">
                    <div className="flex flex-row gap-3.5 items-end justify-between w-full">
                      <Img
                        className="h-[70px] w-[70px]"
                        src="images/img_search_gray_900.svg"
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
                <Text
                  className="text-black-900 text-center text-xl"
                  size="txtCairoSemiBold20"
                >
                  Select a chat
                </Text>
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

export default PageTwo;
