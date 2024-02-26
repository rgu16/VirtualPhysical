import React, { useState } from "react";
import { Route, Routes } from "react-router-dom"

// Cardiology Chart Pages
import { DemographicsTab } from "pages/Chart/DemographicsTab";
import { GeneralTab } from "pages/Chart/GeneralTab";
import { LungsTab } from "pages/Chart/LungsTab";
import { PulsesTab } from "pages/Chart/PulsesTab";
import { AbdomenTab } from "pages/Chart/AbdomenTab";
import { HeartTab } from "pages/Chart/HeartTab";
import { LegsTab } from "pages/Chart/LegsTab";
import { SummaryTab } from "pages/Chart/SummaryTab";

// Cardiology NavBar Pages
import { Appointments } from "pages/Appointments-NavBar/CalendarApp";
import { Messages } from "pages/Messages-NavBar/Messages";
import { Settings } from "pages/Settings-NavBar/Settings";
import { FindPatient } from "pages/FindPatient-NavBar/FindPatient";


const App = () => {
  return (
    <Routes>
      <Route path="/demographics" element={<DemographicsTab />} />      
      <Route path="/general" element={<GeneralTab />} />
      <Route path="/lungs" element={<LungsTab />} />
      <Route path="/pulses" element={<PulsesTab />} />
      <Route path="/abdomen" element={<AbdomenTab />} />
      <Route path="/heart" element={<HeartTab />} />
      <Route path="/legs" element={<LegsTab />} />
      <Route path="/summary" element={<SummaryTab />} />

      <Route path="/appointments" element={<Appointments />} />
      <Route path="/messages" element={<Messages />} />
      <Route path="/settings" element={<Settings />} />
      <Route path="/findpatient" element={<FindPatient />} />
    </Routes>
  );
};

export default App;