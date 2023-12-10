import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
const PageTwo = React.lazy(() => import("pages/PageTwo"));
const Page = React.lazy(() => import("pages/Page"));
const PageThree = React.lazy(() => import("pages/PageThree"));
const PatientDetails = React.lazy(() => import("pages/PatientDetails"));
const AppointmentsOverviewPage = React.lazy(
  () => import("pages/AppointmentsOverviewPage"),
);
const LegsTabclicked = React.lazy(() => import("pages/LegsTabclicked"));
const LungsTabselectedlungregionOne = React.lazy(
  () => import("pages/LungsTabselectedlungregionOne"),
);
const Summaryflagged = React.lazy(() => import("pages/Summaryflagged"));
const LegsTabclickedOne = React.lazy(() => import("pages/LegsTabclickedOne"));
const HeartTabclicked = React.lazy(() => import("pages/HeartTabclicked"));
const AbdomenTabquestionmarkclicked = React.lazy(
  () => import("pages/AbdomenTabquestionmarkclicked"),
);
const PulsesTabselectedartery = React.lazy(
  () => import("pages/PulsesTabselectedartery"),
);
const LungsTabselectedlungregion = React.lazy(
  () => import("pages/LungsTabselectedlungregion"),
);
const Summary = React.lazy(() => import("pages/Summary"));
const LegsTab = React.lazy(() => import("pages/LegsTab"));
const HeartTab = React.lazy(() => import("pages/HeartTab"));
const AbdomenTab = React.lazy(() => import("pages/AbdomenTab"));
const PulsesTab = React.lazy(() => import("pages/PulsesTab"));
const LungsTab = React.lazy(() => import("pages/LungsTab"));
const GeneralTab = React.lazy(() => import("pages/GeneralTab"));
const DemographicsTab = React.lazy(() => import("pages/DemographicsTab"));
const PageOne = React.lazy(() => import("pages/PageOne"));
const ProjectRoutes = () => {
  return (
    <React.Suspense fallback={<>Loading...</>}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/pageone" element={<PageOne />} />
          <Route path="/demographicstab" element={<DemographicsTab />} />
          <Route path="/generaltab" element={<GeneralTab />} />
          <Route path="/lungstab" element={<LungsTab />} />
          <Route path="/pulsestab" element={<PulsesTab />} />
          <Route path="/abdomentab" element={<AbdomenTab />} />
          <Route path="/hearttab" element={<HeartTab />} />
          <Route path="/legstab" element={<LegsTab />} />
          <Route path="/summary" element={<Summary />} />
          <Route
            path="/lungstabselectedlungregion"
            element={<LungsTabselectedlungregion />}
          />
          <Route
            path="/pulsestabselectedartery"
            element={<PulsesTabselectedartery />}
          />
          <Route
            path="/abdomentabquestionmarkclicked"
            element={<AbdomenTabquestionmarkclicked />}
          />
          <Route path="/hearttabclicked" element={<HeartTabclicked />} />
          <Route path="/legstabclickedone" element={<LegsTabclickedOne />} />
          <Route path="/summaryflagged" element={<Summaryflagged />} />
          <Route
            path="/lungstabselectedlungregionone"
            element={<LungsTabselectedlungregionOne />}
          />
          <Route path="/legstabclicked" element={<LegsTabclicked />} />
          <Route
            path="/appointmentsoverviewpage"
            element={<AppointmentsOverviewPage />}
          />
          <Route path="/patientdetails" element={<PatientDetails />} />
          <Route path="/pagethree" element={<PageThree />} />
          <Route path="/page" element={<Page />} />
          <Route path="/pagetwo" element={<PageTwo />} />
        </Routes>
      </Router>
    </React.Suspense>
  );
};
export default ProjectRoutes;
