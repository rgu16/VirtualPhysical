import React from "react";

import { createColumnHelper } from "@tanstack/react-table";

import { Img, Line, List, ReactTable, Text } from "components";
import Header from "components/Header";

const AppointmentsOverviewPagePage = () => {
  const tableData = React.useRef([
    {
      frameOne: "Lady Gaga",
      frameTwo: "Justin Beiber",
      frameThree: "Albert Einstein",
      frameFour: "John Cena",
      frameFive: "Michael Jackson",
      frameSix: "Nicki Minaj",
      frameSeven: "7",
    },
    {
      frameOne: "8",
      frameTwo: "Peter Parker",
      frameThree: "Anne Hathaway",
      frameFour: "Matthew McConaughey",
      frameFive: "Amelia Earhart",
      frameSix: "Roald Dahl",
      frameSeven: "John Lennon",
    },
  ]);
  const tableColumns = React.useMemo(() => {
    const tableColumnHelper = createColumnHelper();
    return [
      tableColumnHelper.accessor("frameOne", {
        cell: (info) => (
          <div className="flex flex-row items-center justify-evenly">
            <div className="flex flex-col gap-2.5 h-48 md:h-auto items-start justify-between outline outline-[0.5px] outline-gray-200_03 p-3 w-[185px]">
              <Text
                className="sm:text-[17px] md:text-[19px] text-[21px] text-gray-500_02 w-auto"
                size="txtInterMedium21"
              >
                1
              </Text>
              <Text
                className="bg-gray-200_03 justify-center pt-1 px-1 rounded text-gray-700 text-sm w-auto"
                size="txtInterMedium14"
              >
                {info?.getValue()}
              </Text>
            </div>
          </div>
        ),
        header: (info) => (
          <Text
            className="bg-white-A700 h-[43px] justify-center min-w-[185px] outline outline-[0.5px] outline-gray-200_03 rounded-tl-lg text-base text-center text-gray-500_02"
            size="txtInterMedium16"
          >
            SUN
          </Text>
        ),
      }),
      tableColumnHelper.accessor("frameTwo", {
        cell: (info) => (
          <div className="flex flex-row items-center justify-center">
            <div className="flex flex-col gap-2.5 h-48 md:h-auto items-start justify-between outline outline-[0.5px] outline-gray-200_03 p-3 w-[185px]">
              <Text
                className="sm:text-[17px] md:text-[19px] text-[21px] text-gray-500_02 w-auto"
                size="txtInterMedium21"
              >
                2
              </Text>
              <div className="flex flex-col gap-1.5 items-start justify-start p-0.5 w-full">
                <Text
                  className="bg-gray-200_03 justify-center pt-1 px-1 rounded text-gray-700 text-sm w-auto"
                  size="txtInterMedium14"
                >
                  Bad Bunny
                </Text>
                <Text
                  className="bg-gray-200_03 justify-center px-1 py-0.5 rounded text-gray-700 text-sm w-auto"
                  size="txtInterMedium14"
                >
                  {info?.getValue()}
                </Text>
              </div>
            </div>
          </div>
        ),
        header: (info) => (
          <Text
            className="bg-white-A700 h-[43px] justify-center min-w-[185px] outline outline-[0.5px] outline-gray-200_03 text-base text-center text-gray-500_02"
            size="txtInterMedium16"
          >
            MON
          </Text>
        ),
      }),
      tableColumnHelper.accessor("frameThree", {
        cell: (info) => (
          <div className="flex flex-row items-center justify-center">
            <div className="flex flex-col gap-2.5 h-48 md:h-auto items-start justify-between outline outline-[0.5px] outline-gray-200_03 p-3 w-[185px]">
              <Text
                className="sm:text-[17px] md:text-[19px] text-[21px] text-gray-500_02 w-auto"
                size="txtInterMedium21"
              >
                3
              </Text>
              <Text
                className="bg-gray-200_03 justify-center px-1 py-0.5 rounded text-gray-700 text-sm w-auto"
                size="txtInterMedium14"
              >
                {info?.getValue()}
              </Text>
            </div>
          </div>
        ),
        header: (info) => (
          <Text
            className="bg-white-A700 h-[43px] justify-center min-w-[185px] outline outline-[0.5px] outline-gray-200_03 text-base text-center text-gray-500_02"
            size="txtInterMedium16"
          >
            TUE
          </Text>
        ),
      }),
      tableColumnHelper.accessor("frameFour", {
        cell: (info) => (
          <div className="flex flex-row items-center justify-center">
            <div className="flex flex-col gap-2.5 h-48 md:h-auto items-start justify-between outline outline-[0.5px] outline-gray-200_03 p-3 w-[185px]">
              <Text
                className="sm:text-[17px] md:text-[19px] text-[21px] text-gray-500_02 w-auto"
                size="txtInterMedium21"
              >
                4
              </Text>
              <Text
                className="bg-gray-200_03 justify-center px-1 py-0.5 rounded text-gray-700 text-sm w-auto"
                size="txtInterMedium14"
              >
                {info?.getValue()}
              </Text>
            </div>
          </div>
        ),
        header: (info) => (
          <Text
            className="bg-white-A700 h-[43px] justify-center min-w-[185px] outline outline-[0.5px] outline-gray-200_03 text-base text-center text-gray-500_02"
            size="txtInterMedium16"
          >
            WED
          </Text>
        ),
      }),
      tableColumnHelper.accessor("frameFive", {
        cell: (info) => (
          <div className="flex flex-row items-center justify-center">
            <div className="flex flex-col gap-2.5 h-48 md:h-auto items-start justify-between outline outline-[0.5px] outline-gray-200_03 p-3 w-[185px]">
              <Text
                className="sm:text-[17px] md:text-[19px] text-[21px] text-gray-500_02 w-auto"
                size="txtInterMedium21"
              >
                5
              </Text>
              <div className="flex flex-col gap-1.5 items-start justify-start p-0.5 w-full">
                <Text
                  className="bg-gray-200_03 justify-center px-1 py-0.5 rounded text-gray-700 text-sm w-auto"
                  size="txtInterMedium14"
                >
                  Kendall Jenner
                </Text>
                <Text
                  className="bg-gray-200_03 justify-center px-1 py-0.5 rounded text-gray-700 text-sm w-auto"
                  size="txtInterMedium14"
                >
                  {info?.getValue()}
                </Text>
              </div>
            </div>
          </div>
        ),
        header: (info) => (
          <Text
            className="bg-white-A700 h-[43px] justify-center min-w-[185px] outline outline-[0.5px] outline-gray-200_03 text-base text-center text-gray-500_02"
            size="txtInterMedium16"
          >
            THUR
          </Text>
        ),
      }),
      tableColumnHelper.accessor("frameSix", {
        cell: (info) => (
          <div className="flex flex-row items-center justify-center">
            <div className="flex flex-col gap-2.5 h-48 md:h-auto items-start justify-between outline outline-[0.5px] outline-gray-200_03 p-3 w-[185px]">
              <Text
                className="sm:text-[17px] md:text-[19px] text-[21px] text-gray-500_02 w-auto"
                size="txtInterMedium21"
              >
                6
              </Text>
              <Text
                className="bg-gray-200_03 justify-center pt-1 px-1 rounded text-gray-700 text-sm w-auto"
                size="txtInterMedium14"
              >
                {info?.getValue()}
              </Text>
            </div>
          </div>
        ),
        header: (info) => (
          <Text
            className="bg-white-A700 h-[43px] justify-center min-w-[185px] outline outline-[0.5px] outline-gray-200_03 text-base text-center text-gray-500_02"
            size="txtInterMedium16"
          >
            FRI
          </Text>
        ),
      }),
      tableColumnHelper.accessor("frameSeven", {
        cell: (info) => (
          <div className="flex flex-row items-center justify-evenly">
            <div className="flex flex-col h-48 md:h-auto items-start justify-between outline outline-[0.5px] outline-gray-200_03 p-3 w-[185px]">
              <Text
                className="sm:text-[17px] md:text-[19px] text-[21px] text-gray-500_02 w-auto"
                size="txtInterMedium21"
              >
                {info?.getValue()}
              </Text>
            </div>
          </div>
        ),
        header: (info) => (
          <Text
            className="bg-white-A700 h-[43px] justify-center min-w-[185px] outline outline-[0.5px] outline-gray-200_03 rounded-tr-lg text-base text-center text-gray-500_02"
            size="txtInterMedium16"
          >
            SAT
          </Text>
        ),
      }),
    ];
  }, []);

  return (
    <>
      <div className="bg-white-A700 flex flex-col items-center justify-start mx-auto w-full">
        <div className="bg-gray-50 flex flex-col items-center justify-start pb-[204px] w-full">
          <Header className="bg-white-A700 flex md:flex-col flex-row font-dmsans md:gap-5 items-center justify-center md:px-5 w-full" />
          <Text
            className="mt-[69px] sm:text-4xl md:text-[38px] text-[40px] text-black-900"
            size="txtCairoSemiBold40"
          >
            Appointments
          </Text>
          <div className="font-inter h-[1067px] sm:h-[1116px] md:h-[2004px] max-w-[1295px] mt-[51px] mx-auto md:px-5 relative w-full">
            <div className="flex sm:flex-col flex-row gap-7 h-full items-center justify-between ml-auto w-auto">
              <Text
                className="bg-gray-200_03 justify-center px-1 py-0.5 rounded text-gray-700 text-xl w-auto"
                size="txtInterMedium20"
              >
                Past Appointment
              </Text>
              <div className="bg-white-A700 flex flex-col items-start justify-start px-1 py-[3px] rounded w-auto">
                <div className="flex flex-col items-start justify-start w-auto">
                  <Text
                    className="text-red-600 text-xl w-auto"
                    size="txtInterMedium20Red600"
                  >
                    Flagged Patient
                  </Text>
                </div>
              </div>
              <div className="bg-white-A700 flex flex-col items-start justify-start px-1 py-[3px] rounded w-auto">
                <div className="flex flex-col items-start justify-start w-auto">
                  <Text
                    className="text-green-A700 text-xl w-auto"
                    size="txtInterMedium20GreenA700"
                  >
                    Regular Patient
                  </Text>
                </div>
              </div>
            </div>
            <div className="absolute flex flex-col h-full inset-[0] items-start justify-start m-auto shadow-bs3 w-auto">
              <div className="flex flex-row gap-2.5 items-start justify-start pb-8 pr-2.5 w-auto">
                <Text
                  className="text-2xl md:text-[22px] text-gray-700 sm:text-xl w-auto"
                  size="txtInterBold24"
                >
                  May, 2022
                </Text>
                <Img
                  className="h-6 w-6"
                  src="images/img_favorite_gray_900.svg"
                  alt="favorite"
                />
              </div>
              <div className="overflow-auto w-full">
                <ReactTable
                  columns={tableColumns}
                  data={tableData.current}
                  rowClass={"bg-white-A700"}
                  headerClass="bg-gray-50_01"
                />
              </div>
              <div className="flex md:flex-col flex-row md:gap-5 h-48 md:h-auto items-start justify-start w-auto md:w-full">
                <div className="bg-white-A700 flex flex-col h-48 md:h-auto items-start justify-between outline outline-[0.5px] outline-gray-200_03 p-3 w-[185px]">
                  <Text
                    className="sm:text-[17px] md:text-[19px] text-[21px] text-gray-500_02 w-auto"
                    size="txtInterMedium21"
                  >
                    15
                  </Text>
                </div>
                <List
                  className="sm:flex-col flex-row gap-px grid sm:grid-cols-1 grid-cols-3 w-[43%] md:w-full"
                  orientation="horizontal"
                >
                  <div className="bg-white-A700 flex flex-col gap-2.5 h-48 md:h-auto items-start justify-between outline outline-[0.5px] outline-gray-200_03 p-3 w-[185px]">
                    <Text
                      className="sm:text-[17px] md:text-[19px] text-[21px] text-gray-500_02 w-auto"
                      size="txtInterMedium21"
                    >
                      16
                    </Text>
                    <div className="flex flex-col gap-1.5 items-start justify-start p-0.5 w-full">
                      <div className="bg-white-A700 flex flex-col items-start justify-start px-1 py-[3px] rounded w-auto">
                        <div className="flex flex-col items-start justify-start w-auto">
                          <Text
                            className="text-red-600 text-sm w-auto"
                            size="txtInterMedium14Red600"
                          >
                            Justin Timberlake
                          </Text>
                        </div>
                      </div>
                      <div className="bg-white-A700 flex flex-col items-start justify-start px-1 py-[3px] rounded w-auto">
                        <div className="flex flex-col items-start justify-start w-auto">
                          <Text
                            className="text-green-A700 text-sm w-auto"
                            size="txtInterMedium14GreenA700"
                          >
                            Dwight Howard
                          </Text>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-white-A700 flex flex-col gap-2.5 h-48 md:h-auto items-start justify-between outline outline-[0.5px] outline-gray-200_03 p-3 w-[185px]">
                    <Text
                      className="sm:text-[17px] md:text-[19px] text-[21px] text-gray-500_02 w-auto"
                      size="txtInterMedium21"
                    >
                      17
                    </Text>
                    <div className="flex flex-col gap-1.5 items-start justify-start p-0.5 w-full">
                      <div className="bg-white-A700 flex flex-col items-start justify-start px-1 py-[3px] rounded w-auto">
                        <div className="flex flex-col items-start justify-start w-auto">
                          <Text
                            className="text-red-600 text-sm w-auto"
                            size="txtInterMedium14Red600"
                          >
                            Taylor Swift
                          </Text>
                        </div>
                      </div>
                      <div className="bg-white-A700 flex flex-col items-start justify-start px-1 py-[3px] rounded w-auto">
                        <div className="flex flex-col items-start justify-start w-auto">
                          <Text
                            className="text-green-A700 text-sm w-auto"
                            size="txtInterMedium14GreenA700"
                          >
                            Theodore Roosevelt
                          </Text>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-white-A700 flex flex-col gap-2.5 h-48 md:h-auto items-start justify-between outline outline-[0.5px] outline-gray-200_03 p-3 w-[185px]">
                    <Text
                      className="sm:text-[17px] md:text-[19px] text-[21px] text-gray-500_02 w-auto"
                      size="txtInterMedium21"
                    >
                      18
                    </Text>
                    <div className="flex flex-col gap-1.5 items-start justify-start p-0.5 w-full">
                      <div className="bg-white-A700 flex flex-col items-start justify-start px-1 py-[3px] rounded w-auto">
                        <div className="flex flex-col items-start justify-start w-auto">
                          <Text
                            className="text-green-A700 text-sm w-auto"
                            size="txtInterMedium14GreenA700"
                          >
                            Bill Cosby
                          </Text>
                        </div>
                      </div>
                      <div className="bg-white-A700 flex flex-col items-start justify-start px-1 py-[3px] rounded w-auto">
                        <div className="flex flex-col items-start justify-start w-auto">
                          <Text
                            className="text-red-600 text-sm w-auto"
                            size="txtInterMedium14Red600"
                          >
                            Elanor Roosevelt
                          </Text>
                        </div>
                      </div>
                      <div className="bg-white-A700 flex flex-col items-start justify-start px-1 py-[3px] rounded w-auto">
                        <div className="flex flex-col items-start justify-start w-auto">
                          <Text
                            className="text-green-A700 text-sm w-auto"
                            size="txtInterMedium14GreenA700"
                          >
                            Martin Luther King Jr.
                          </Text>
                        </div>
                      </div>
                    </div>
                  </div>
                </List>
                <div className="bg-white-A700 flex flex-col gap-2.5 h-48 md:h-auto items-start justify-between outline outline-[0.5px] outline-gray-200_03 p-3 w-[185px]">
                  <Text
                    className="sm:text-[17px] md:text-[19px] text-[21px] text-gray-500_02 w-auto"
                    size="txtInterMedium21"
                  >
                    19
                  </Text>
                  <div className="flex flex-col items-start justify-start p-0.5 w-full">
                    <div className="bg-white-A700 flex flex-col items-start justify-start px-1 py-[3px] rounded w-auto">
                      <div className="flex flex-col items-start justify-start w-auto">
                        <Text
                          className="text-green-A700 text-sm w-auto"
                          size="txtInterMedium14GreenA700"
                        >
                          Venus Williams
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-white-A700 flex flex-col gap-2.5 h-48 md:h-auto items-start justify-between outline outline-[0.5px] outline-gray-200_03 p-3 w-[185px]">
                  <Text
                    className="sm:text-[17px] md:text-[19px] text-[21px] text-gray-500_02"
                    size="txtInterMedium21"
                  >
                    20
                  </Text>
                  <div className="flex flex-col gap-1.5 items-start justify-start p-0.5 w-full">
                    <div className="bg-white-A700 flex flex-col items-start justify-start px-1 py-[3px] rounded w-auto">
                      <div className="flex flex-col items-start justify-start w-auto">
                        <Text
                          className="text-green-A700 text-sm w-auto"
                          size="txtInterMedium14GreenA700"
                        >
                          Tom Brady
                        </Text>
                      </div>
                    </div>
                    <div className="bg-white-A700 flex flex-col items-start justify-start px-1 py-[3px] rounded w-auto">
                      <div className="flex flex-col items-start justify-start w-auto">
                        <Text
                          className="text-red-600 text-sm w-auto"
                          size="txtInterMedium14Red600"
                        >
                          Robert Downey Jr.
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-white-A700 flex flex-col gap-2.5 h-48 md:h-auto items-start justify-between outline outline-[0.5px] outline-gray-200_03 p-3 w-[185px]">
                  <Text
                    className="sm:text-[17px] md:text-[19px] text-[21px] text-gray-500_02 w-auto"
                    size="txtInterMedium21"
                  >
                    21
                  </Text>
                  <div className="flex flex-col items-start justify-start w-auto">
                    <Text
                      className="text-gray-200_03 text-sm w-auto"
                      size="txtInterMedium14Gray20003"
                    >
                      -
                    </Text>
                  </div>
                  <div className="flex flex-col items-start justify-start p-0.5 w-full">
                    <div className="bg-white-A700 flex flex-col items-start justify-start px-1 py-[3px] rounded w-auto">
                      <div className="flex flex-col items-start justify-start w-auto">
                        <Text
                          className="text-red-600 text-sm w-auto"
                          size="txtInterMedium14Red600"
                        >
                          Plato
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex md:flex-col flex-row md:gap-5 h-48 md:h-auto items-start justify-start w-auto md:w-full">
                <div className="bg-white-A700 flex flex-col h-48 md:h-auto items-start justify-between outline outline-[0.5px] outline-gray-200_03 p-3 w-[185px]">
                  <Text
                    className="sm:text-[17px] md:text-[19px] text-[21px] text-gray-500_02"
                    size="txtInterMedium21"
                  >
                    22
                  </Text>
                </div>
                <div className="bg-white-A700 flex flex-col gap-2.5 h-48 md:h-auto items-start justify-between outline outline-[0.5px] outline-gray-200_03 p-3 w-[185px]">
                  <Text
                    className="sm:text-[17px] md:text-[19px] text-[21px] text-gray-500_02"
                    size="txtInterMedium21"
                  >
                    23
                  </Text>
                  <div className="flex flex-col gap-1.5 items-start justify-start p-0.5 w-full">
                    <div className="bg-white-A700 flex flex-col items-start justify-start px-1 py-[3px] rounded w-auto">
                      <div className="flex flex-col items-start justify-start w-auto">
                        <Text
                          className="text-red-600 text-sm w-auto"
                          size="txtInterMedium14Red600"
                        >
                          Bob Marley
                        </Text>
                      </div>
                    </div>
                    <div className="bg-white-A700 flex flex-col items-start justify-start px-1 py-[3px] rounded w-auto">
                      <div className="flex flex-col items-start justify-start w-auto">
                        <Text
                          className="text-green-A700 text-sm w-auto"
                          size="txtInterMedium14GreenA700"
                        >
                          Usain Bolt
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-white-A700 flex flex-col gap-2.5 h-48 md:h-auto items-start justify-between outline outline-[0.5px] outline-gray-200_03 p-3 w-[185px]">
                  <Text
                    className="sm:text-[17px] md:text-[19px] text-[21px] text-gray-500_02"
                    size="txtInterMedium21"
                  >
                    24
                  </Text>
                  <div className="flex flex-col gap-1.5 items-start justify-start p-0.5 w-full">
                    <div className="bg-white-A700 flex flex-col items-start justify-start px-1 py-[3px] rounded w-auto">
                      <div className="flex flex-col items-start justify-start w-auto">
                        <Text
                          className="text-red-600 text-sm w-auto"
                          size="txtInterMedium14Red600"
                        >
                          George Washington
                        </Text>
                      </div>
                    </div>
                    <div className="bg-white-A700 flex flex-col items-start justify-start px-1 py-[3px] rounded w-auto">
                      <div className="flex flex-col items-start justify-start w-auto">
                        <Text
                          className="text-green-A700 text-sm w-auto"
                          size="txtInterMedium14GreenA700"
                        >
                          Britney Spears
                        </Text>
                      </div>
                    </div>
                    <div className="bg-white-A700 flex flex-col items-start justify-start px-1 py-[3px] rounded w-auto">
                      <div className="flex flex-col items-start justify-start w-auto">
                        <Text
                          className="text-green-A700 text-sm w-auto"
                          size="txtInterMedium14GreenA700"
                        >
                          Michael Jordan
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-white-A700 flex flex-col gap-2.5 h-48 md:h-auto items-start justify-between outline outline-[0.5px] outline-gray-200_03 p-3 w-[185px]">
                  <Text
                    className="sm:text-[17px] md:text-[19px] text-[21px] text-gray-500_02"
                    size="txtInterMedium21"
                  >
                    25
                  </Text>
                  <div className="flex flex-col items-start justify-start p-0.5 w-full">
                    <div className="bg-white-A700 flex flex-col items-start justify-start px-1 py-[3px] rounded w-auto">
                      <div className="flex flex-col items-start justify-start w-auto">
                        <Text
                          className="text-green-A700 text-sm w-auto"
                          size="txtInterMedium14GreenA700"
                        >
                          Maya Angelou
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-white-A700 flex flex-col gap-2.5 h-48 md:h-auto items-start justify-between outline outline-[0.5px] outline-gray-200_03 p-3 w-[185px]">
                  <Text
                    className="sm:text-[17px] md:text-[19px] text-[21px] text-gray-500_02"
                    size="txtInterMedium21"
                  >
                    26
                  </Text>
                  <div className="flex flex-col gap-1.5 items-start justify-start p-0.5 w-full">
                    <div className="bg-white-A700 flex flex-col items-start justify-start px-1 py-[3px] rounded w-auto">
                      <div className="flex flex-col items-start justify-start w-auto">
                        <Text
                          className="text-green-A700 text-sm w-auto"
                          size="txtInterMedium14GreenA700"
                        >
                          Tiger Woods
                        </Text>
                      </div>
                    </div>
                    <div className="bg-white-A700 flex flex-col items-start justify-start px-1 py-[3px] rounded w-auto">
                      <div className="flex flex-col items-start justify-start w-auto">
                        <Text
                          className="text-green-A700 text-sm w-auto"
                          size="txtInterMedium14GreenA700"
                        >
                          Ryan Reynolds
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-white-A700 flex flex-col gap-2.5 h-48 md:h-auto items-start justify-between outline outline-[0.5px] outline-gray-200_03 p-3 w-[185px]">
                  <Text
                    className="sm:text-[17px] md:text-[19px] text-[21px] text-gray-500_02"
                    size="txtInterMedium21"
                  >
                    27
                  </Text>
                  <div className="flex flex-col items-start justify-start p-0.5 w-full">
                    <div className="bg-white-A700 flex flex-col items-start justify-start px-1 py-[3px] rounded w-auto">
                      <div className="flex flex-col items-start justify-start w-auto">
                        <Text
                          className="text-red-600 text-sm w-auto"
                          size="txtInterMedium14Red600"
                        >
                          Helen Keller
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-white-A700 flex flex-col h-48 md:h-auto items-start justify-between outline outline-[0.5px] outline-gray-200_03 p-3 rounded-br-lg w-[185px]">
                  <Text
                    className="sm:text-[17px] md:text-[19px] text-[21px] text-gray-500_02"
                    size="txtInterMedium21"
                  >
                    28
                  </Text>
                </div>
              </div>
              <div className="flex md:flex-col flex-row md:gap-5 h-48 md:h-auto items-start justify-start w-auto md:w-full">
                <div className="bg-white-A700 flex flex-col h-48 md:h-auto items-start justify-between outline outline-[0.5px] outline-gray-200_03 p-3 rounded-bl-lg w-[185px]">
                  <Text
                    className="sm:text-[17px] md:text-[19px] text-[21px] text-gray-500_02"
                    size="txtInterMedium21"
                  >
                    29
                  </Text>
                </div>
                <List
                  className="sm:flex-col flex-row gap-px grid sm:grid-cols-1 grid-cols-3 w-3/4 md:w-full"
                  orientation="horizontal"
                >
                  <div className="bg-white-A700 flex flex-col gap-2.5 h-48 md:h-auto items-start justify-between outline outline-[0.5px] outline-gray-200_03 p-3 w-[185px]">
                    <Text
                      className="sm:text-[17px] md:text-[19px] text-[21px] text-gray-500_02 w-auto"
                      size="txtInterMedium21"
                    >
                      30
                    </Text>
                    <div className="flex flex-col items-start justify-start p-0.5 w-full">
                      <div className="bg-white-A700 flex flex-col items-start justify-start px-1 py-[3px] rounded w-auto">
                        <div className="flex flex-col items-start justify-start w-auto">
                          <Text
                            className="text-green-A700 text-sm w-auto"
                            size="txtInterMedium14GreenA700"
                          >
                            Oscar Wilde
                          </Text>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-white-A700 flex flex-col gap-2.5 h-48 md:h-auto items-start justify-between outline outline-[0.5px] outline-gray-200_03 p-3 w-[185px]">
                    <Text
                      className="sm:text-[17px] md:text-[19px] text-[21px] text-gray-500_02 w-auto"
                      size="txtInterMedium21"
                    >
                      31
                    </Text>
                    <div className="flex flex-col items-start justify-start p-0.5 w-full">
                      <div className="bg-white-A700 flex flex-col items-start justify-start px-1 py-[3px] rounded w-auto">
                        <div className="flex flex-col items-start justify-start w-auto">
                          <Text
                            className="text-red-600 text-sm w-auto"
                            size="txtInterMedium14Red600"
                          >
                            Elvis Presley
                          </Text>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-white-A700 flex flex-col gap-2.5 h-48 md:h-auto items-start justify-between outline outline-[0.5px] outline-gray-200_03 p-3 rounded-br-lg w-[185px]">
                    <Text
                      className="sm:text-[17px] md:text-[19px] text-[21px] text-gray-500_02"
                      size="txtInterMedium21"
                    >
                      32
                    </Text>
                    <div className="flex flex-col items-start justify-start p-0.5 w-full">
                      <div className="bg-white-A700 flex flex-col items-start justify-start px-1 py-[3px] rounded w-auto">
                        <div className="flex flex-col items-start justify-start w-auto">
                          <Text
                            className="text-green-A700 text-sm w-auto"
                            size="txtInterMedium14GreenA700"
                          >
                            Sandra Bullock
                          </Text>
                        </div>
                      </div>
                    </div>
                  </div>
                </List>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AppointmentsOverviewPagePage;
