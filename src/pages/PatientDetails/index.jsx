import React from "react";

import { Button, Img, Input, Line, List, Text } from "components";
import NavBar from "components/NavBar";

const PatientDetailsPage = () => {
  return (
    <>
      <div className="bg-white-A700 font-dmsans h-[1561px] mx-auto relative w-full">
        <div
          className="absolute bg-cover bg-no-repeat flex flex-col h-full inset-[0] items-center justify-center m-auto pb-[795px] w-full"
          style={{ backgroundImage: "url('images/img_demographicstab.svg')" }}
        >
          <div className="flex flex-col md:gap-10 gap-[104px] justify-start w-full">
            <div className="flex flex-col md:gap-10 gap-[67px] items-center justify-start w-full">
              <NavBar className="bg-white-A700 flex md:flex-col flex-row md:gap-5 items-center justify-center md:px-5 w-full" />
              <div className="flex md:flex-col flex-row font-cairo md:gap-10 items-start justify-between max-w-[1707px] mx-auto md:px-5 w-full">
                <Text
                  className="sm:text-3xl md:text-[32px] text-[34px] text-gray-900_02"
                  size="txtCairoBold34"
                >
                  Patient Profile
                </Text>
                <div className="flex sm:flex-1 sm:flex-col flex-row gap-10 items-start justify-start md:mt-0 mt-[58px] w-auto sm:w-full">
                  <Button
                    className="cursor-pointer flex items-center justify-center min-w-[197px]"
                    leftIcon={
                      <Img
                        className="h-[30px] mt-1 mb-[7px]"
                        src="images/img_bookmark.svg"
                        alt="bookmark"
                      />
                    }
                    shape="square"
                  >
                    <div className="!text-black-900 font-semibold leading-[normal] md:text-xl sm:text-lg text-[22px] text-center">
                      View chart
                    </div>
                  </Button>
                  <Button
                    className="cursor-pointer flex items-center justify-center min-w-[250px]"
                    leftIcon={
                      <Img
                        className="h-[30px] mt-1 mb-[7px]"
                        src="images/img_settings_gray_900.svg"
                        alt="settings"
                      />
                    }
                    shape="square"
                  >
                    <div className="!text-black-900 font-semibold leading-[normal] md:text-xl sm:text-lg text-[22px] text-center">
                      Message patient
                    </div>
                  </Button>
                </div>
              </div>
            </div>
            <div className="bg-blue-200 flex flex-col font-cairo gap-[9px] h-[367px] items-center justify-start md:ml-[0] ml-[1337px] mr-[216px] p-[18px] md:px-5 rounded-[30px] w-[367px]">
              <Text
                className="text-3xl sm:text-[26px] md:text-[28px] text-center text-white-A700"
                size="txtCairoExtraBold30"
              >
                Call History
              </Text>
              <div className="flex flex-col items-center justify-start mb-3.5 w-[97%] md:w-full">
                <Input
                  name="lucy"
                  placeholder="NOV 17, 2023"
                  className="!placeholder:text-indigo-A700 !text-indigo-A700 font-medium leading-[normal] p-0 text-left text-xl uppercase w-full"
                  wrapClassName="flex rounded-[20px] shadow-bs1 w-full"
                  suffix={
                    <Img
                      className="mt-auto mb-1 h-[35px] ml-[35px]"
                      src="images/img_user_indigo_a200.svg"
                      alt="user"
                    />
                  }
                  color="white_A700"
                  size="md"
                ></Input>
                <Input
                  name="petercech"
                  placeholder="DEC 1, 2023"
                  className="font-medium leading-[normal] p-0 placeholder:text-indigo-A700 text-left text-xl uppercase w-full"
                  wrapClassName="flex mt-7 rounded-[20px] w-full"
                  suffix={
                    <Img
                      className="mt-auto mb-[3px] h-[35px] ml-[35px]"
                      src="images/img_user_indigo_a200.svg"
                      alt="user"
                    />
                  }
                  color="white_A700_99"
                  size="md"
                ></Input>
                <Input
                  name="erling"
                  placeholder="NOV 1, 2023"
                  className="font-medium leading-[normal] p-0 placeholder:text-indigo-A700 text-left text-xl uppercase w-full"
                  wrapClassName="flex mt-6 rounded-[20px] w-full"
                  suffix={
                    <Img
                      className="mt-auto mb-1 h-[35px] ml-[35px]"
                      src="images/img_user_indigo_a200.svg"
                      alt="user"
                    />
                  }
                  color="white_A700_99"
                  size="sm"
                ></Input>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-[0] flex flex-col font-cairo items-center justify-end left-[7%] md:px-5 w-[44%]">
          <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between w-full">
            <div className="flex md:flex-1 flex-col gap-[5px] items-end justify-start md:mt-0 mt-[9px] w-[16%] md:w-full">
              <div className="flex flex-col h-[130px] items-center justify-start mr-0.5 w-[130px]">
                <Img
                  className="h-[130px] md:h-auto rounded-[50%] w-[130px]"
                  src="images/img_screenshot20231206.png"
                  alt="screenshot20231"
                />
              </div>
              <Text
                className="text-2xl md:text-[22px] text-black-900 sm:text-xl"
                size="txtCairoRegular24"
              >
                Taylor Swift
              </Text>
            </div>
            <div className="flex md:flex-1 flex-col md:gap-10 gap-[66px] items-start justify-start w-[70%] md:w-full">
              <div className="flex flex-col items-start justify-start w-[64%] md:w-full">
                <div className="flex flex-row gap-[17px] items-start justify-start w-[90%] md:w-full">
                  <div className="flex flex-row gap-[21px] items-center justify-between w-[86%]">
                    <Text
                      className="text-2xl md:text-[22px] text-black-900 sm:text-xl"
                      size="txtCairoBold24"
                    >
                      Status:
                    </Text>
                    <div className="h-[45px] relative w-[66%]">
                      <div className="absolute h-[42px] inset-x-[0] mx-auto top-[0] w-full">
                        <div className="bg-white-A700_01 border border-black-900_7f border-solid h-[42px] ml-auto my-auto w-4/5"></div>
                        <div className="absolute bg-white-A700_01 border border-black-900_7f border-solid h-[42px] inset-[0] justify-center m-auto w-full"></div>
                      </div>
                      <Text
                        className="absolute h-full inset-[0] justify-center m-auto text-2xl md:text-[22px] text-black-900 sm:text-xl w-max"
                        size="txtCairoRegular24"
                      >
                        Flagged Patient
                      </Text>
                    </div>
                  </div>
                  <Img
                    className="h-[30px] mt-[5px] w-[30px]"
                    src="images/img_videocamera_red_a700.svg"
                    alt="videocamera"
                  />
                </div>
                <List
                  className="flex flex-col gap-[37px] mt-16 w-[77%]"
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
                      <div className="absolute bg-white-A700_01 border border-black-900_7f border-solid h-[42px] inset-x-[0] mx-auto top-[0] w-full"></div>
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
                <div className="flex flex-row gap-[19px] items-center justify-start mt-[38px] w-[41%] md:w-full">
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
                    female ▾{" "}
                  </Text>
                </div>
                <List
                  className="flex flex-col gap-[35px] mt-[41px] w-[65%]"
                  orientation="vertical"
                >
                  <div className="flex flex-row items-start justify-between w-[99%] md:w-full">
                    <Text
                      className="mt-[5px] text-2xl md:text-[22px] text-black-900 sm:text-xl"
                      size="txtCairoBold24"
                    >
                      Height:
                    </Text>
                    <div className="h-[45px] md:h-[50px] mb-[5px] relative w-[41%]">
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
                        ▾{" "}
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
                    <div className="h-[45px] md:h-[47px] mb-0.5 relative w-2/5">
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
                        lb{" "}
                      </span>
                      <span className="text-black-900 font-cairo text-left font-normal">
                        ▾{" "}
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
                    12 ▾{" "}
                  </Text>
                  <Text
                    className="text-2xl md:text-[22px] text-black-900 sm:text-xl"
                    size="txtCairoRegular24"
                  >
                    / 13 ▾{" "}
                  </Text>
                  <Text
                    className="text-2xl md:text-[22px] text-black-900 sm:text-xl"
                    size="txtCairoRegular24"
                  >
                    / 1989 ▾{" "}
                  </Text>
                </div>
                <div className="flex flex-row gap-3 items-start justify-start mt-[39px] w-[46%] md:w-full">
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
              <div className="flex flex-col md:gap-10 gap-[506px] justify-start w-full">
                <div className="h-[38px] mr-[448px] relative w-[23%]">
                  <div className="absolute bg-black-900 h-[35px] inset-[0] justify-center m-auto shadow-bs w-full"></div>
                  <Text
                    className="absolute h-full inset-[0] justify-center m-auto text-white-A700 text-xl w-max"
                    size="txtCairoRegular20WhiteA700"
                  >
                    Save
                  </Text>
                </div>
                <Text
                  className="md:ml-[0] ml-[534px] text-white-A700 text-xl"
                  size="txtCairoRegular20WhiteA700"
                >
                  Save
                </Text>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PatientDetailsPage;
