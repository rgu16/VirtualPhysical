import React from "react";

import { Button, Img, Line, Text } from "components";
import NavBar from "components/NavBar";

const LungsTabPage = () => {
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
                color="white_A700"
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
              <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between mb-[201px] w-[96%] md:w-full">
                <div className="flex flex-col items-start justify-start md:mt-0 mt-[46px] w-[45%] md:w-full">
                  <div className="flex sm:flex-col flex-row sm:gap-5 items-start justify-start w-[63%] md:w-full">
                    <Text
                      className="sm:mt-0 mt-[3px] text-2xl md:text-[22px] text-black-900 sm:text-xl"
                      size="txtCairoBold24"
                    >
                      Breathing rate:
                    </Text>
                    <div className="md:h-12 h-[45px] mb-[3px] sm:ml-[0] ml-[41px] relative w-[22%] sm:w-full">
                      <div className="absolute bg-white-A700_01 border border-black-900_7f border-solid h-[42px] inset-x-[0] mx-auto top-[0] w-full"></div>
                      <Text
                        className="absolute h-full inset-[0] justify-center m-auto text-2xl md:text-[22px] text-black-900 sm:text-xl w-max"
                        size="txtCairoRegular24"
                      >
                        30
                      </Text>
                    </div>
                    <Text
                      className="mb-[3px] ml-3 sm:ml-[0] text-2xl md:text-[22px] text-black-900 sm:text-xl"
                      size="txtCairoBold24"
                    >
                      breaths/min
                    </Text>
                  </div>
                  <div className="flex flex-row gap-[31px] items-center justify-start mt-[57px] w-[49%] md:w-full">
                    <Text
                      className="text-2xl md:text-[22px] text-black-900 sm:text-xl w-[62%] sm:w-full"
                      size="txtCairoBold24"
                    >
                      Labored breathing?
                    </Text>
                    <Text
                      className="text-2xl md:text-[22px] text-black-900 sm:text-xl"
                      size="txtCairoRegular24"
                    >
                      moderate{" "}
                    </Text>
                  </div>
                  <Text
                    className="mt-[101px] text-3xl sm:text-[26px] md:text-[28px] text-black-900"
                    size="txtCairoBold30"
                  >
                    <span className="text-black-900 font-cairo text-left font-bold">
                      Lung Auscultation{" "}
                    </span>
                    <span className="text-black-900 font-cairo text-left font-normal">
                      (posterior analysis only)
                    </span>
                  </Text>
                  <div className="h-[478px] md:h-[562px] md:ml-[0] ml-[239px] mt-[84px] relative w-[66%] sm:w-full">
                    <Img
                      className="h-[478px] m-auto object-cover w-full"
                      src="images/img_lungimg.png"
                      alt="lungimg"
                    />
                    <div className="absolute bottom-[22%] flex flex-row gap-16 inset-x-[0] items-center justify-center mx-auto w-1/4">
                      <Img
                        className="h-[108px]"
                        src="images/img_leftlung.svg"
                        alt="leftlung"
                      />
                      <Img
                        className="h-[108px]"
                        src="images/img_leftlung.svg"
                        alt="rightlung"
                      />
                    </div>
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
                      [specialty physician notes on lung measurements go here]
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

export default LungsTabPage;
