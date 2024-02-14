import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Input, Line, Text } from "components";

const AbdomenTwoPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-white-A700 font-inter h-[1561px] mx-auto pb-[26px] relative w-full">
        <Img
          className="absolute h-[1535px] inset-[0] justify-center m-auto"
          src="images/img_demographicstab.svg"
          alt="background"
        />
        <div className="absolute flex flex-col gap-[9px] items-start justify-start left-[11%] md:px-5 top-[36%]">
          <Text
            className="text-white-A700 text-xl tracking-[-0.14px]"
            size="txtInterMedium20WhiteA700"
          >
            John Smith
          </Text>
          <Text
            className="text-[15px] text-white-A700 tracking-[-0.14px]"
            size="txtInterMedium15"
          >
            Patient id
          </Text>
        </div>
        <div className="absolute bg-gray-200_01 flex sm:flex-col flex-row font-dmsans sm:gap-5 items-end justify-start left-[6%] max-w-[1204px] md:px-5 rounded-tl-[12px] rounded-tr-[12px] top-[12%] w-full">
          <Button
            className="cursor-pointer font-medium leading-[normal] min-w-[179px] text-center text-lg"
            shape="round"
          >
            Demographic
          </Button>
          <Button
            className="cursor-pointer font-medium leading-[normal] min-w-[131px] text-center text-lg"
            shape="round"
          >
            General
          </Button>
          <Button
            className="cursor-pointer font-medium leading-[normal] min-w-[104px] text-center text-lg"
            shape="round"
            color="white_A700"
          >
            Eyes
          </Button>
          <Button
            className="cursor-pointer font-medium leading-[normal] min-w-[112px] text-center text-lg"
            shape="round"
          >
            Heart
          </Button>
          <Button
            className="common-pointer cursor-pointer font-medium h-[63px] leading-[normal] text-center text-lg"
            onClick={() => navigate("/lungs")}
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
            className="cursor-pointer font-medium leading-[normal] min-w-[148px] text-center text-lg"
            shape="round"
          >
            Abdomen
          </Button>
          <Button
            className="common-pointer cursor-pointer font-medium leading-[normal] min-w-[118px] text-center text-lg"
            onClick={() => navigate("/hands")}
            shape="round"
          >
            Hands
          </Button>
          <Input
            name="frame2610485"
            placeholder="Post-evaluation"
            className="font-medium leading-[normal] p-0 placeholder:text-gray-900_01 text-left text-lg w-full"
            wrapClassName="sm:flex-1 w-[15%] sm:w-full"
            shape="round"
          ></Input>
        </div>
        <div className="absolute bg-white-A700 bottom-[8%] flex flex-col font-cairo gap-6 h-[1180px] md:h-auto inset-x-[0] justify-end max-w-[1695px] mx-auto pb-6 pt-8 px-5 rounded-bl-[12px] rounded-br-[12px] w-full">
          <div className="flex flex-col gap-[26px] items-start justify-start w-[37%] md:w-full">
            <Text
              className="sm:text-3xl md:text-[32px] text-[34px] text-gray-900_02"
              size="txtCairoBold34"
            >
              Eyes Inspection
            </Text>
            <div className="flex flex-col items-center justify-start w-full">
              <div className="flex flex-col items-center justify-start w-full">
                <Text
                  className="text-2xl md:text-[22px] text-black-900 sm:text-xl"
                  size="txtCairoBold24"
                >
                  Check for yellowing in the eyes and severity on 0-2 scale:
                </Text>
              </div>
            </div>
          </div>
          <div className="flex md:flex-col flex-row font-nunito md:gap-10 gap-[226px] items-start justify-end md:pr-10 sm:pr-5 pr-[648px] w-[94%] md:w-full">
            <div className="flex flex-col items-start justify-start p-3 w-[71%] md:w-full">
              <div className="flex flex-col items-center justify-start mb-[834px] ml-2.5 md:ml-[0] w-[47%] md:w-full">
                <div className="md:h-[59px] h-[72px] relative w-full">
                  <div className="absolute bottom-[0] flex flex-col inset-x-[0] items-center justify-start mx-auto w-[62%]">
                    <div className="flex flex-row items-center justify-between w-full">
                      <Img
                        className="h-11 w-11"
                        src="images/img_phcirclebold.svg"
                        alt="phcirclebold"
                      />
                      <Img
                        className="h-11 w-11"
                        src="images/img_phcirclebold.svg"
                        alt="phcirclebold_One"
                      />
                      <Img
                        className="h-11 w-11"
                        src="images/img_carboncirclefilled.svg"
                        alt="carboncirclefil"
                      />
                    </div>
                  </div>
                  <div className="absolute flex flex-row inset-x-[0] items-start justify-between mx-auto top-[0] w-full">
                    <Text
                      className="mt-[42px] text-black-900 text-xs"
                      size="txtNunitoRegular12"
                    >
                      None
                    </Text>
                    <Text
                      className="mb-[42px] text-black-900 text-xs"
                      size="txtNunitoRegular12"
                    >
                      0
                    </Text>
                    <Text
                      className="mb-[42px] text-black-900 text-xs"
                      size="txtNunitoRegular12"
                    >
                      1
                    </Text>
                    <Text
                      className="mb-[42px] text-black-900 text-xs"
                      size="txtNunitoRegular12"
                    >
                      2
                    </Text>
                    <Text
                      className="mt-[42px] text-black-900 text-xs"
                      size="txtNunitoRegular12"
                    >
                      Severe
                    </Text>
                  </div>
                </div>
              </div>
            </div>
            <Img
              className="common-pointer h-[35px] md:mt-0 mt-7 w-[35px]"
              src="images/img_profile_black_900_35x35.svg"
              alt="profile"
              onClick={() => navigate("/abdomenthree")}
            />
          </div>
        </div>
        <div className="absolute bg-white-A700 flex md:flex-col flex-row font-dmsans md:gap-5 inset-x-[0] items-start justify-start mx-auto p-1.5 top-[0] w-full">
          <div className="flex md:flex-1 md:flex-col flex-row md:gap-5 items-end justify-start md:ml-[0] ml-[25px] md:mt-0 mt-[19px] md:px-5 w-[81%] md:w-full">
            <div className="flex flex-row gap-2 items-start justify-start w-[17%] md:w-full">
              <Img
                className="h-[35px] w-[35px]"
                src="images/img_settings.svg"
                alt="settings"
              />
              <Text
                className="text-3xl sm:text-[26px] md:text-[28px] text-black-900"
                size="txtDMSansMedium30"
              >
                Virtual Physical
              </Text>
            </div>
            <Img
              className="h-[30px] md:ml-[0] ml-[1067px] md:mt-0 mt-[13px] w-[30px]"
              src="images/img_bookmark_blue_gray_700.svg"
              alt="bookmark"
            />
            <Img
              className="h-[30px] md:ml-[0] ml-[30px] md:mt-0 mt-[13px] w-[30px]"
              src="images/img_calendar.svg"
              alt="calendar"
            />
            <Img
              className="h-[30px] md:ml-[0] ml-[30px] md:mt-0 mt-[13px] w-[30px]"
              src="images/img_message.svg"
              alt="message"
            />
            <Img
              className="h-[30px] md:ml-[0] ml-[30px] md:mt-0 mt-[13px] w-[30px]"
              src="images/img_search.svg"
              alt="search"
            />
          </div>
          <Line className="bg-gray-100 h-14 md:h-px ml-12 md:ml-[0] md:mt-0 mt-[26px] rounded-[1px] md:w-full w-px" />
          <div className="flex md:flex-1 flex-row font-cairo gap-6 items-center justify-center md:ml-[0] ml-[30px] md:mt-0 mt-[25px] md:px-5 w-[12%] md:w-full">
            <div className="flex flex-col h-[57px] items-center justify-start w-[57px]">
              <Img
                className="h-[57px] md:h-auto object-cover rounded-bl-[14px] rounded-br-[14px] w-[57px]"
                src="images/img_placeholder.png"
                alt="placeholder"
              />
            </div>
            <div className="flex flex-row items-center justify-between w-[64%]">
              <div className="flex flex-col relative w-[53%]">
                <Text
                  className="mx-auto text-base text-black-900"
                  size="txtCairoBold16"
                >
                  Franklin Jr.
                </Text>
                <Text
                  className="mt-[-0.01px] text-gray-500 text-right text-sm z-[1]"
                  size="txtCairoRegular14"
                >
                  Admin
                </Text>
              </div>
              <Img className="h-2" src="images/img_arrow.svg" alt="arrow" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AbdomenTwoPage;
