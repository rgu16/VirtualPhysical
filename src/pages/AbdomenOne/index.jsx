import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Input, Line, List, Text } from "components";

const AbdomenOnePage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div
        className="bg-cover bg-no-repeat bg-white-A700 flex flex-col font-dmsans gap-[7px] h-[1561px] items-center justify-start mx-auto pb-[125px] w-full"
        style={{ backgroundImage: "url('images/img_demographicstab.svg')" }}
      >
        <div className="flex flex-col md:gap-10 gap-[92px] justify-start w-full">
          <div className="bg-white-A700 flex md:flex-col flex-row md:gap-5 items-start justify-start p-1.5 w-full">
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
          <div className="bg-gray-200_01 flex sm:flex-col flex-row sm:gap-5 items-end justify-start max-w-[1204px] ml-28 md:ml-[0] mr-[604px] md:px-5 rounded-tl-[12px] rounded-tr-[12px] w-full">
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
              className="cursor-pointer font-medium leading-[normal] min-w-[119px] text-center text-lg"
              shape="round"
              color="white_A700"
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
        </div>
        <div className="font-inter h-[1180px] md:h-[1448px] sm:h-[1479px] max-w-[1695px] mx-auto md:px-5 relative w-full">
          <div className="flex flex-col gap-[9px] h-full items-start justify-start ml-[93px] mt-[307px]">
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
          <div className="absolute bg-white-A700 flex flex-col font-cairo gap-6 md:h-auto h-full inset-[0] justify-end m-auto max-w-[1695px] pb-6 pt-8 px-5 rounded-bl-[12px] rounded-br-[12px] w-full">
            <div className="flex flex-col gap-[27px] items-start justify-start w-2/5 md:w-full">
              <Text
                className="sm:text-3xl md:text-[32px] text-[34px] text-gray-900_02"
                size="txtCairoBold34"
              >
                Pulses & blood pressure
              </Text>
              <div className="flex flex-col items-center justify-start w-full">
                <div className="flex flex-col items-center justify-start w-full">
                  <Text
                    className="text-2xl md:text-[22px] text-black-900 sm:text-xl"
                    size="txtCairoBold24"
                  >
                    Check pulses at extremities and classify strength on 0-2
                    scale:
                  </Text>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-start justify-start w-[94%] md:w-full">
              <div className="flex flex-col items-center justify-start w-[53%] md:w-full">
                <div className="flex relative w-full">
                  <div className="flex flex-col items-center justify-end mt-auto p-4 w-[78%]">
                    <div className="flex flex-col md:gap-10 gap-[71px] justify-start mb-[298px] mt-5 w-[97%] md:w-full">
                      <List
                        className="flex flex-col gap-[42px] items-center ml-3 md:ml-[0] w-[98%]"
                        orientation="vertical"
                      >
                        <div className="flex flex-row sm:gap-10 items-start justify-between w-full">
                          <div className="flex flex-col gap-[21px] items-start justify-start mt-[3px]">
                            <Text
                              className="text-black-900 text-xl"
                              size="txtCairoSemiBold20"
                            >
                              i. Radial pulse (wrist)
                            </Text>
                            <div className="font-nunito md:h-[50px] h-[54px] ml-0.5 md:ml-[0] relative w-full">
                              <div className="absolute bottom-[0] flex flex-col items-center justify-start left-[18%] w-3/5">
                                <div className="flex flex-row items-center justify-between w-full">
                                  <Img
                                    className="h-[33px] w-[33px]"
                                    src="images/img_phcirclebold.svg"
                                    alt="phcirclebold"
                                  />
                                  <Img
                                    className="h-[33px] w-[33px]"
                                    src="images/img_phcirclebold.svg"
                                    alt="phcirclebold_One"
                                  />
                                  <Img
                                    className="h-[33px] w-[33px]"
                                    src="images/img_carboncirclefilled.svg"
                                    alt="carboncirclefil"
                                  />
                                </div>
                              </div>
                              <div className="absolute flex flex-row inset-x-[0] items-start justify-start mx-auto top-[0] w-full">
                                <Text
                                  className="mt-8 text-black-900 text-xs"
                                  size="txtNunitoRegular12"
                                >
                                  Weak
                                </Text>
                                <Text
                                  className="mb-[33px] ml-[21px] text-black-900 text-xs"
                                  size="txtNunitoRegular12"
                                >
                                  0
                                </Text>
                                <Text
                                  className="mb-[33px] ml-[42px] text-black-900 text-xs"
                                  size="txtNunitoRegular12"
                                >
                                  1
                                </Text>
                                <Text
                                  className="mb-[33px] ml-[42px] text-black-900 text-xs"
                                  size="txtNunitoRegular12"
                                >
                                  2
                                </Text>
                                <Text
                                  className="ml-[25px] mt-[33px] text-black-900 text-xs"
                                  size="txtNunitoRegular12"
                                >
                                  Strong
                                </Text>
                              </div>
                            </div>
                          </div>
                          <Img
                            className="h-[43px] w-[43px]"
                            src="images/img_profile_black_900.svg"
                            alt="profile"
                          />
                        </div>
                        <div className="flex flex-row sm:gap-10 items-start justify-between w-full">
                          <div className="flex flex-col gap-[23px] items-start justify-start">
                            <Text
                              className="text-black-900 text-xl"
                              size="txtCairoSemiBold20"
                            >
                              ii. Brachial
                            </Text>
                            <div className="font-nunito md:h-[50px] h-[54px] ml-0.5 md:ml-[0] relative w-full">
                              <div className="absolute bottom-[0] flex flex-col items-center justify-start left-[18%] w-3/5">
                                <div className="flex flex-row items-center justify-between w-full">
                                  <Img
                                    className="h-[33px] w-[33px]"
                                    src="images/img_phcirclebold.svg"
                                    alt="phcirclebold"
                                  />
                                  <Img
                                    className="h-[33px] w-[33px]"
                                    src="images/img_phcirclebold.svg"
                                    alt="phcirclebold_One"
                                  />
                                  <Img
                                    className="h-[33px] w-[33px]"
                                    src="images/img_carboncirclefilled.svg"
                                    alt="carboncirclefil"
                                  />
                                </div>
                              </div>
                              <div className="absolute flex flex-row inset-x-[0] items-start justify-start mx-auto top-[0] w-full">
                                <Text
                                  className="mt-8 text-black-900 text-xs"
                                  size="txtNunitoRegular12"
                                >
                                  Weak
                                </Text>
                                <Text
                                  className="mb-[33px] ml-[21px] text-black-900 text-xs"
                                  size="txtNunitoRegular12"
                                >
                                  0
                                </Text>
                                <Text
                                  className="mb-[33px] ml-[42px] text-black-900 text-xs"
                                  size="txtNunitoRegular12"
                                >
                                  1
                                </Text>
                                <Text
                                  className="mb-[33px] ml-[42px] text-black-900 text-xs"
                                  size="txtNunitoRegular12"
                                >
                                  2
                                </Text>
                                <Text
                                  className="ml-[25px] mt-[33px] text-black-900 text-xs"
                                  size="txtNunitoRegular12"
                                >
                                  Strong
                                </Text>
                              </div>
                            </div>
                          </div>
                          <Img
                            className="h-[35px] mt-[5px] w-[35px]"
                            src="images/img_profile_black_900_35x35.svg"
                            alt="profile"
                          />
                        </div>
                        <div className="flex flex-row sm:gap-10 items-start justify-between w-full">
                          <div className="flex flex-col gap-[23px] items-start justify-start mt-[7px]">
                            <Text
                              className="text-black-900 text-xl"
                              size="txtCairoSemiBold20"
                            >
                              iii. Carotid
                            </Text>
                            <div className="font-nunito md:h-[50px] h-[54px] ml-0.5 md:ml-[0] relative w-full">
                              <div className="absolute bottom-[0] flex flex-col items-center justify-start left-[18%] w-3/5">
                                <div className="flex flex-row items-center justify-between w-full">
                                  <Img
                                    className="h-[33px] w-[33px]"
                                    src="images/img_phcirclebold.svg"
                                    alt="phcirclebold"
                                  />
                                  <Img
                                    className="h-[33px] w-[33px]"
                                    src="images/img_phcirclebold.svg"
                                    alt="phcirclebold_One"
                                  />
                                  <Img
                                    className="h-[33px] w-[33px]"
                                    src="images/img_carboncirclefilled.svg"
                                    alt="carboncirclefil"
                                  />
                                </div>
                              </div>
                              <div className="absolute flex flex-row inset-x-[0] items-start justify-start mx-auto top-[0] w-full">
                                <Text
                                  className="mt-8 text-black-900 text-xs"
                                  size="txtNunitoRegular12"
                                >
                                  Weak
                                </Text>
                                <Text
                                  className="mb-[33px] ml-[21px] text-black-900 text-xs"
                                  size="txtNunitoRegular12"
                                >
                                  0
                                </Text>
                                <Text
                                  className="mb-[33px] ml-[42px] text-black-900 text-xs"
                                  size="txtNunitoRegular12"
                                >
                                  1
                                </Text>
                                <Text
                                  className="mb-[33px] ml-[42px] text-black-900 text-xs"
                                  size="txtNunitoRegular12"
                                >
                                  2
                                </Text>
                                <Text
                                  className="ml-[25px] mt-[33px] text-black-900 text-xs"
                                  size="txtNunitoRegular12"
                                >
                                  Strong
                                </Text>
                              </div>
                            </div>
                          </div>
                          <Img
                            className="h-[35px] w-[35px]"
                            src="images/img_profile_black_900_35x35.svg"
                            alt="profile"
                          />
                        </div>
                        <div className="flex flex-row sm:gap-10 items-start justify-between w-full">
                          <div className="flex flex-col gap-[21px] items-start justify-start mt-[19px]">
                            <Text
                              className="text-black-900 text-xl"
                              size="txtCairoSemiBold20"
                            >
                              iv. Dorsalis pedis pulse (foot)
                            </Text>
                            <div className="font-nunito md:h-[50px] h-[54px] ml-0.5 md:ml-[0] relative w-[92%]">
                              <div className="absolute bottom-[0] flex flex-col items-center justify-start left-[18%] w-3/5">
                                <div className="flex flex-row items-center justify-between w-full">
                                  <Img
                                    className="h-[33px] w-[33px]"
                                    src="images/img_phcirclebold.svg"
                                    alt="phcirclebold"
                                  />
                                  <Img
                                    className="h-[33px] w-[33px]"
                                    src="images/img_phcirclebold.svg"
                                    alt="phcirclebold_One"
                                  />
                                  <Img
                                    className="h-[33px] w-[33px]"
                                    src="images/img_carboncirclefilled.svg"
                                    alt="carboncirclefil"
                                  />
                                </div>
                              </div>
                              <div className="absolute flex flex-row inset-x-[0] items-start justify-start mx-auto top-[0] w-full">
                                <Text
                                  className="mt-8 text-black-900 text-xs"
                                  size="txtNunitoRegular12"
                                >
                                  Weak
                                </Text>
                                <Text
                                  className="mb-[33px] ml-[21px] text-black-900 text-xs"
                                  size="txtNunitoRegular12"
                                >
                                  0
                                </Text>
                                <Text
                                  className="mb-[33px] ml-[42px] text-black-900 text-xs"
                                  size="txtNunitoRegular12"
                                >
                                  1
                                </Text>
                                <Text
                                  className="mb-[33px] ml-[42px] text-black-900 text-xs"
                                  size="txtNunitoRegular12"
                                >
                                  2
                                </Text>
                                <Text
                                  className="ml-[25px] mt-[33px] text-black-900 text-xs"
                                  size="txtNunitoRegular12"
                                >
                                  Strong
                                </Text>
                              </div>
                            </div>
                          </div>
                          <Img
                            className="h-[35px] w-[35px]"
                            src="images/img_profile_black_900_35x35.svg"
                            alt="profile"
                          />
                        </div>
                      </List>
                      <div className="flex flex-col gap-10 items-start justify-start w-[62%] md:w-full">
                        <Text
                          className="text-2xl md:text-[22px] text-black-900 sm:text-xl"
                          size="txtCairoBold24"
                        >
                          Blood pressure input:
                        </Text>
                        <div className="flex flex-row items-start justify-start w-full">
                          <Text
                            className="text-2xl md:text-[22px] text-black-900 sm:text-xl"
                            size="txtCairoSemiBold24"
                          >
                            Systolic BP :
                          </Text>
                          <div className="h-[45px] md:h-[47px] mb-0.5 ml-[47px] relative w-[27%]">
                            <div className="absolute bg-white-A700_01 border border-black-900_7f border-solid h-[42px] inset-[0] justify-center m-auto w-full"></div>
                            <Text
                              className="absolute h-full inset-[0] justify-center m-auto text-2xl md:text-[22px] text-black-900 sm:text-xl w-max"
                              size="txtCairoRegular24"
                            >
                              100
                            </Text>
                          </div>
                          <Text
                            className="ml-[22px] mt-0.5 text-2xl md:text-[22px] text-black-900 sm:text-xl"
                            size="txtCairoBold24"
                          >
                            mmHg{" "}
                          </Text>
                        </div>
                        <div className="flex flex-row gap-9 items-start justify-start w-[74%] md:w-full">
                          <Text
                            className="mb-[7px] text-2xl md:text-[22px] text-black-900 sm:text-xl"
                            size="txtCairoSemiBold24"
                          >
                            Diastolic BP :
                          </Text>
                          <div className="bg-white-A700_01 border border-black-900_7f border-solid h-[42px] mt-2.5 w-[36%]"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col items-end justify-start ml-[-24px] mt-2 pl-2.5 pt-2.5 w-[26%] z-[1]">
                    <Img
                      className="h-[140px] md:h-auto object-cover w-[81%]"
                      src="images/img_screenshot20231206_140x161.png"
                      alt="screenshot20231"
                    />
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

export default AbdomenOnePage;
