import React from "react";

import { Button, Img, Line, List, Text } from "components";
import Header from "components/Header";

const SummaryflaggedPage = () => {
  return (
    <>
      <div
        className="bg-cover bg-no-repeat bg-white-A700 flex flex-col font-dmsans h-[1561px] items-center justify-start mx-auto pb-28 w-full"
        style={{ backgroundImage: "url('images/img_demographicstab.svg')" }}
      >
        <div className="flex flex-col items-center justify-start w-full">
          <div className="flex flex-col md:gap-10 gap-[92px] justify-start w-full">
            <Header className="bg-white-A700 flex md:flex-col flex-row md:gap-5 items-center justify-center md:px-5 w-full" />
            <div className="bg-gray-200_01 flex flex-row flex-wrap sm:gap-5 items-end justify-start max-w-[1062px] md:ml-[0] ml-[110px] mr-[748px] md:px-5 rounded-tl-[12px] rounded-tr-[12px] w-full">
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
                color="white_A700"
              >
                Summary
              </Button>
            </div>
          </div>
          <div className="bg-white-A700 flex flex-col font-cairo gap-[22px] items-start justify-start max-w-[1700px] mx-auto p-[41px] md:px-5 w-full">
            <div className="flex md:flex-col flex-row gap-10 items-start justify-start ml-6 md:ml-[0] w-auto md:w-full">
              <Button
                className="cursor-pointer flex items-center justify-center min-w-[314px] rounded-[20px]"
                leftIcon={
                  <Img
                    className="h-[30px] mt-1 mb-[7px]"
                    src="images/img_videocamera.svg"
                    alt="video_camera"
                  />
                }
                color="red_A700_70"
              >
                <div className="font-semibold leading-[normal] md:text-xl sm:text-lg text-[22px] text-center">
                  Flag patient as high-risk
                </div>
              </Button>
              <Button
                className="cursor-pointer flex items-center justify-center min-w-[250px] rounded-[20px]"
                leftIcon={
                  <Img
                    className="h-[30px] mt-1 mb-[7px]"
                    src="images/img_settings_gray_900.svg"
                    alt="settings"
                  />
                }
              >
                <div className="!text-black-900 font-semibold leading-[normal] md:text-xl sm:text-lg text-[22px] text-center">
                  Message patient
                </div>
              </Button>
              <Button
                className="cursor-pointer flex items-center justify-center min-w-[394px] sm:min-w-full rounded-[20px]"
                leftIcon={
                  <Img
                    className="h-[30px] mt-1 mb-[7px]"
                    src="images/img_calendar.svg"
                    alt="calendar"
                  />
                }
              >
                <div className="!text-black-900 font-semibold leading-[normal] md:text-xl sm:text-lg text-[22px] text-center">
                  Schedule virtual call with patient
                </div>
              </Button>
              <Button
                className="cursor-pointer flex items-center justify-center min-w-[195px] rounded-[20px]"
                leftIcon={
                  <Img
                    className="h-[30px] mt-1 mb-[7px]"
                    src="images/img_folder.svg"
                    alt="folder"
                  />
                }
              >
                <div className="!text-black-900 font-semibold leading-[normal] md:text-xl sm:text-lg text-[22px] text-center">
                  Print PDF
                </div>
              </Button>
            </div>
            <div className="bg-white-A700 flex flex-col items-start justify-start mb-[17px] ml-6 md:ml-[0] w-auto md:w-full">
              <List
                className="flex flex-col gap-2.5 items-center pt-[270px] w-full"
                orientation="vertical"
              >
                <div className="flex md:flex-1 flex-col gap-[5px] items-start justify-start w-auto md:w-full">
                  <Text
                    className="sm:text-[21px] md:text-[23px] text-[25px] text-black-900 w-auto"
                    size="txtCairoExtraBold25"
                  >
                    Lungs
                  </Text>
                  <Line className="bg-black-900 h-px w-full" />
                  <Text
                    className="text-black-900 text-lg"
                    size="txtCairoRegular18"
                  >
                    <span className="text-black-900 font-cairo text-left font-normal">
                      <>
                        Breathing rate: 30 breaths/min, Labored breathing?
                        moderate, Posterior POV: left lower lobe abnormal
                        <br />
                      </>
                    </span>
                    <span className="text-black-900 font-cairo text-left font-bold">
                      Notes: Based on the phonocardiogram graph and the lung
                      sounds, the patient seems to have pneumonia.
                    </span>
                  </Text>
                </div>
                <div className="flex md:flex-1 flex-col gap-[5px] items-start justify-start w-auto md:w-full">
                  <div className="flex flex-col items-start justify-start w-full">
                    <Text
                      className="sm:text-[21px] md:text-[23px] text-[25px] text-black-900 w-auto"
                      size="txtCairoExtraBold25"
                    >
                      General
                    </Text>
                    <Line className="bg-black-900 h-px mt-1 w-full" />
                  </div>
                  <Text
                    className="text-black-900 text-lg"
                    size="txtCairoRegular18"
                  >
                    <span className="text-black-900 font-cairo text-left font-normal">
                      <>
                        Cyanosis: 0, Pallor: +1, Yellowing in eyes: 0, CRT: 3sec
                        <br />
                      </>
                    </span>
                    <span className="text-black-900 font-cairo text-left font-bold">
                      Notes:{" "}
                    </span>
                  </Text>
                </div>
                <div className="flex md:flex-1 flex-col gap-[5px] items-start justify-start w-auto md:w-full">
                  <Text
                    className="sm:text-[21px] md:text-[23px] text-[25px] text-black-900 w-auto"
                    size="txtCairoExtraBold25"
                  >
                    Demographics
                  </Text>
                  <Line className="bg-black-900 h-px w-full" />
                  <Text
                    className="text-black-900 text-lg"
                    size="txtCairoRegular18"
                  >
                    <span className="text-black-900 font-cairo text-left font-normal">
                      <>
                        Taylor Swift, female, 5’11’’, 130 lbs, 12/13/1989, 33
                        yo, patient has history of high blood pressure and
                        abnormal heart rhythms
                        <br />
                      </>
                    </span>
                    <span className="text-black-900 font-cairo text-left font-bold">
                      Notes:{" "}
                    </span>
                  </Text>
                </div>
                <div className="flex md:flex-1 flex-col gap-[5px] items-start justify-start w-auto md:w-full">
                  <div className="flex flex-col items-start justify-start w-full">
                    <Text
                      className="sm:text-[21px] md:text-[23px] text-[25px] text-black-900 w-auto"
                      size="txtCairoExtraBold25"
                    >
                      Pulses
                    </Text>
                    <Line className="bg-black-900 h-px mt-1 w-full" />
                  </div>
                  <Text
                    className="text-black-900 text-lg"
                    size="txtCairoRegular18"
                  >
                    <span className="text-black-900 font-cairo text-left font-normal">
                      <>
                        Radial: +2, Brachial: +1, Carotid: +2, Dorsalis pedis:
                        0, BP: 120/80, Heart rate: 88bpm, JVP: normal, Carotid
                        auscultation: abnormal
                        <br />
                      </>
                    </span>
                    <span className="text-black-900 font-cairo text-left font-bold">
                      Notes: Blood pressure normal. Carotid artery auscultation
                      might indicate carotid stenosis. Patient needs to obtain a
                      carotid ultrasound asap.{" "}
                    </span>
                  </Text>
                </div>
                <div className="flex md:flex-1 flex-col gap-[5px] items-start justify-start w-auto md:w-full">
                  <div className="flex flex-col items-start justify-start w-full">
                    <Text
                      className="sm:text-[21px] md:text-[23px] text-[25px] text-black-900 w-auto"
                      size="txtCairoExtraBold25"
                    >
                      Abdomen
                    </Text>
                    <Line className="bg-black-900 h-px mt-1 w-full" />
                  </div>
                  <Text
                    className="text-black-900 text-lg"
                    size="txtCairoRegular18"
                  >
                    <span className="text-black-900 font-cairo text-left font-normal">
                      <>
                        Top row, left to right: 3, 2, 1; Middle row, left to
                        right: 2, 0, 0; Bottom row, left to right: 0, 0, 0<br />
                      </>
                    </span>
                    <span className="text-black-900 font-cairo text-left font-bold">
                      Notes: Due to high tenderness in liver region, liver is
                      likely enlarged and could indicate congestive heart
                      failure. Patient must undergo __ dietary changes and begin
                      taking __ medications.
                    </span>
                  </Text>
                </div>
                <div className="flex md:flex-1 flex-col items-start justify-start w-auto md:w-full">
                  <div className="flex flex-col gap-[5px] items-start justify-start w-auto md:w-full">
                    <div className="flex flex-col items-start justify-start w-full">
                      <Text
                        className="sm:text-[21px] md:text-[23px] text-[25px] text-black-900 w-auto"
                        size="txtCairoExtraBold25"
                      >
                        Heart
                      </Text>
                      <Line className="bg-black-900 h-px mt-[3px] w-full" />
                    </div>
                    <Text
                      className="text-black-900 text-lg"
                      size="txtCairoRegular18"
                    >
                      <span className="text-black-900 font-cairo text-left font-normal">
                        <>
                          Parasternal heave: yes, Tricuspid/mitral thrill: no,
                          Pulmonary/tricuspid thrill: yes, Aortic/pulmonary
                          thrill: no
                          <br />
                          HEART AUSCULTATION -- DIAPHRAGM - A: abnormal, P:
                          normal, T: normal, M: normal -- BELL - A: normal, P:
                          anormal, T: normal, M: normal
                          <br />
                          ECG: abnormal
                          <br />
                        </>
                      </span>
                      <span className="text-black-900 font-cairo text-left font-bold">
                        Notes: Patient having atrial fibrillation, needs to go
                        to ER asap.
                      </span>
                    </Text>
                  </div>
                </div>
                <div className="flex md:flex-1 flex-col gap-[5px] items-start justify-start w-auto md:w-full">
                  <Text
                    className="sm:text-[21px] md:text-[23px] text-[25px] text-black-900 w-auto"
                    size="txtCairoExtraBold25"
                  >
                    Legs
                  </Text>
                  <Line className="bg-black-900 h-px w-full" />
                  <Text
                    className="text-black-900 text-lg"
                    size="txtCairoRegular18"
                  >
                    <span className="text-black-900 font-cairo text-left font-normal">
                      <>
                        Pitting edema - Right calve: +3, Left calve: 0<br />
                      </>
                    </span>
                    <span className="text-black-900 font-cairo text-left font-bold">
                      Notes:{" "}
                    </span>
                  </Text>
                </div>
              </List>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SummaryflaggedPage;
