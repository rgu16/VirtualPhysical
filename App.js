import React, { useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { SummaryFlagged } from "./screens/SummaryFlagged";
import { Summary } from "./screens/Summary";
import { LegsTabClicked } from "./screens/LegsTabClicked";
import { LegsTabClickedScreen } from "./screens/LegsTabClickedScreen";
import { LegsTab } from "./screens/LegsTab";
// import { Page } from "./screens/Login";
import { GeneralTab } from "./screens/GeneralTab/GeneralTab";
import { PulsesTab } from "./screens/PulsesTab/PulsesTab";
import { LungsTab } from "./screens/LungsTab/LungsTab";

import { Appointments } from "./screens/Appointment/AppoTab";
import { Messages } from "./screens/Messages";
// import {  } from "./screens/ChartTab";
import { Setting } from "./screens/Setting";

import { Route, Routes } from "react-router-dom"

const App = () => {
  return (
    <Routes>
      {/* <Route path="/login" element={<Page />} /> */}
      <Route path="/general" element={<GeneralTab />} />
      {/* <Route path="/summary-flagged" element={<SummaryFlagged />} /> */}
      <Route path="/summary" element={<Summary />} />
      <Route path="/pulses" element={<PulsesTab />} />
      <Route path="/lungs" element={<LungsTab />} />
      <Route path="/legs-tab-clicked" element={<LegsTabClicked />} />
      <Route path="/legs-tab-clicked2" element={<LegsTabClickedScreen />} />
      <Route path="/legs" element={<LegsTab />} />
      <Route path="/messages" element={<Messages />} />
      <Route path="/setting" element={<Setting />} />
      <Route path="/appointment" element={<Appointments />} />
      {/* <Route path="/appointment" element={<Appointments />} /> */}

      {/* Add more routes as needed */}
    </Routes>
  );
};

export default App;

// const router = createBrowserRouter([
//   {
//     path: "/*",
//     element: <SummaryFlagged />,
//   },
//   {
//     path: "/summaryu44-flagged",
//     element: <SummaryFlagged />,
//   },
//   {
//     path: "/summary",
//     element: <Summary />,
//   },
//   {
//     path: "/legs-tabu44-clicked",
//     element: <LegsTabClicked />,
//   },
//   {
//     path: "/legs-tabu44-clicked2",
//     element: <LegsTabClickedScreen />,
//   },
//   {
//     path: "/legs-tab",
//     element: <LegsTab />,
//   },
// ]);

// export const App = () => {
//   return <RouterProvider router={router} />;
// };


// function App() {
//   return (
//     <div className="App">
//         <Summary /> {/* This renders your tab-based navigation component */}
//     </div>
//   );
// }

// export default App;
