import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Input, Line, Text } from "components";

const HandsOnePage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-white-A700 font-inter h-[1561px] mx-auto pb-[26px] relative w-full">
        <Img
          className="absolute h-[1535px] inset-[0] justify-center m-auto"
          src="images/img_demographicstab.svg"
          alt="background"
        />
        <Img
          className="absolute h-6 right-[21%] top-[2%]"
          src="images/img_search_gray_500_04.svg"
          alt="search"
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
            className="common-pointer cursor-pointer font-medium leading-[normal] min-w-[131px] text-center text-lg"
            onClick={() => navigate("/demographicone")}
            shape="round"
          >
            General
          </Button>
          <Button
            className="cursor-pointer font-medium leading-[normal] min-w-[104px] text-center text-lg"
            shape="round"
          >
            Eyes
          </Button>
          <Button
            className="common-pointer cursor-pointer font-medium leading-[normal] min-w-[112px] text-center text-lg"
            onClick={() => navigate("/heart")}
            shape="round"
          >
            Heart
          </Button>
          <Button
            className="cursor-pointer font-medium h-[63px] leading-[normal] text-center text-lg"
            shape="round"
          >
            Lungs
          </Button>
          <Button
            className="common-pointer cursor-pointer font-medium leading-[normal] min-w-[119px] text-center text-lg"
            onClick={() => navigate("/abdomen")}
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
            className="cursor-pointer font-medium leading-[normal] min-w-[118px] text-center text-lg"
            shape="round"
            color="white_A700"
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
        <div className="absolute bg-white-A700 bottom-[8%] flex flex-col font-cairo gap-6 h-[1180px] md:h-auto inset-x-[0] items-start justify-start max-w-[1695px] mx-auto pb-6 pt-8 px-5 rounded-bl-[12px] rounded-br-[12px] w-full">
          <Text
            className="sm:text-3xl md:text-[32px] text-[34px] text-gray-900_02"
            size="txtCairoBold34"
          >
            Hands Inspection
          </Text>
          <div className="flex flex-col items-center justify-start w-4/5 md:w-full">
            <div className="flex md:flex-col flex-row md:gap-[51px] items-start justify-between w-full">
              <div className="flex md:flex-1 flex-col gap-[25px] items-start justify-start w-[63%] md:w-full">
                <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start w-full">
                  <div className="flex flex-col items-center justify-start md:mt-0 mt-[15px]">
                    <Text
                      className="text-2xl md:text-[22px] text-black-900 sm:text-xl"
                      size="txtCairoBold24"
                    >
                      Check for cynosis:
                    </Text>
                  </div>
                  <Img
                    className="h-[31px] ml-2 md:ml-[0] w-[31px]"
                    src="images/img_materialsymbol.svg"
                    alt="materialsymbol"
                  />
                  <Img
                    className="common-pointer h-[43px] md:ml-[0] ml-[552px] w-[43px]"
                    src="images/img_profile_black_900.svg"
                    alt="profile"
                    onClick={() => navigate("/abdomenfour")}
                  />
                </div>
                <div className="flex md:flex-col flex-row gap-[17px] items-start justify-start md:ml-[0] ml-[5px] w-[74%] md:w-full">
                  <Text
                    className="md:mt-0 mt-[54px] text-2xl md:text-[22px] text-black-900 sm:text-xl"
                    size="txtCairoBold24"
                  >
                    Cynosis severity:
                  </Text>
                  <div className="flex flex-col font-nunito gap-[5px] items-center justify-start w-[68%] md:w-full">
                    <Img
                      className="h-[90px] md:h-auto object-cover"
                      src="images/img_gradientline_light_green_500.png"
                      alt="gradientline"
                    />
                    <div className="flex flex-row items-center justify-between w-[98%] md:w-full">
                      <Text
                        className="text-black-900 text-xs"
                        size="txtNunitoRegular12"
                      >
                        1
                      </Text>
                      <Text
                        className="text-black-900 text-xs"
                        size="txtNunitoRegular12"
                      >
                        10
                      </Text>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex md:flex-1 flex-col font-nunito gap-3 items-start justify-start md:mt-0 mt-0.5 w-[34%] md:w-full">
                <Img
                  className="h-[221px] md:h-auto object-cover w-[65%]"
                  src="images/img_screenshot20231128.png"
                  alt="screenshot20231"
                />
                <div className="flex flex-col items-center justify-start w-full">
                  <Text
                    className="text-base text-black-900 w-full"
                    size="txtNunitoSemiBold16"
                  >
                    Check skin, lips, and nails for blue/gray color due to a
                    lack of oxygen in blood (picture(s) of skin, lips, and/or
                    nails here)
                  </Text>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center justify-start w-1/2 md:w-full">
            <div className="flex flex-col gap-[35px] items-start justify-start w-full">
              <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start w-full">
                <Text
                  className="md:mt-0 mt-0.5 text-2xl md:text-[22px] text-black-900 sm:text-xl"
                  size="txtCairoBold24"
                >
                  Check for pallor:
                </Text>
                <Img
                  className="h-[31px] md:ml-[0] ml-[15px] md:mt-0 mt-[7px] w-[31px]"
                  src="images/img_materialsymbol.svg"
                  alt="materialsymbol_One"
                />
                <Img
                  className="h-[43px] md:ml-[0] ml-[564px] w-[43px]"
                  src="images/img_profile_black_900.svg"
                  alt="profile_One"
                />
              </div>
              <div className="flex md:flex-col flex-row gap-[46px] items-start justify-start w-3/4 md:w-full">
                <Text
                  className="md:mt-0 mt-[45px] text-2xl md:text-[22px] text-black-900 sm:text-xl"
                  size="txtCairoBold24"
                >
                  Pallor severity:
                </Text>
                <div className="flex flex-col font-nunito gap-1.5 items-center justify-start w-[67%] md:w-full">
                  <Img
                    className="h-[74px] md:h-auto object-cover"
                    src="images/img_gradientline_yellow_800.png"
                    alt="gradientline_One"
                  />
                  <div className="flex flex-row items-center justify-between w-[98%] md:w-full">
                    <Text
                      className="text-black-900 text-xs"
                      size="txtNunitoRegular12"
                    >
                      1
                    </Text>
                    <Text
                      className="text-black-900 text-xs"
                      size="txtNunitoRegular12"
                    >
                      10
                    </Text>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start w-1/2 md:w-full">
            <Text
              className="md:mt-0 mt-0.5 text-2xl md:text-[22px] text-black-900 sm:text-xl"
              size="txtCairoBold24"
            >
              Enter capillary refill time (CRT):
            </Text>
            <div className="h-[45px] md:h-[47px] mb-0.5 md:ml-[0] ml-[13px] relative w-[12%] md:w-full">
              <div className="absolute bg-white-A700_01 border border-black-900_7f border-solid h-[42px] inset-[0] justify-center m-auto w-full"></div>
              <Text
                className="absolute h-full inset-[0] justify-center m-auto text-2xl md:text-[22px] text-black-900 sm:text-xl w-max"
                size="txtCairoRegular24"
              >
                2
              </Text>
            </div>
            <Text
              className="ml-3.5 md:ml-[0] md:mt-0 mt-0.5 text-2xl md:text-[22px] text-black-900 sm:text-xl"
              size="txtCairoBold24"
            >
              sec{" "}
            </Text>
            <Img
              className="h-[43px] md:ml-[0] ml-[298px] w-[43px]"
              src="images/img_profile_black_900.svg"
              alt="profile_Two"
            />
          </div>
          <div className="h-[38px] relative w-[8%]">
            <div className="absolute bg-black-900 h-[35px] inset-[0] justify-center m-auto shadow-bs w-full"></div>
            <Text
              className="absolute h-full inset-[0] justify-center m-auto text-white-A700 text-xl w-max"
              size="txtCairoRegular20WhiteA700"
            >
              Save
            </Text>
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
              alt="search_One"
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

export default HandsOnePage;
