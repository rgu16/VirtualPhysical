
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, Outlet, } from 'react-router-dom';
import {LoginPage, RegisterPage, ForgotPasswordPage, UploadFilePage, ResetPasswordPage, UserSettingsPage, AdminHomePage, Home} from "./pages";
import {useToken} from './components';
import { jwtDecode } from 'jwt-decode';
// import {Summary} from "./screens"
import {SummaryFlagged, Summary, LegsTabClicked, LegsTabClickedScreen, LegsTab, GeneralTab, PulsesTab, LungsTab, Appointments, Messages, Setting} from "./screens"
import NotFound from "pages/NotFound";
// import AbdomenThree from "pages/AbdomenThree";
// import AbdomenTwo from"pages/AbdomenTwo";
import AbdomenOne from"pages/AbdomenOne";
import Abdomen from"pages/Abdomen";
import AbdomenFour from"pages/AbdomenFour";
import DemographicOne from"pages/DemographicOne";
import Heart from"pages/Heart";
import HandsOne from"pages/HandsOne";
import Hands from"pages/Hands";
import Demographic from"pages/Demographic";
import Lungs from"pages/Lungs";
// import Calendario from"pages/Calendario";
// import Form from"pages/Form";
// import PageFour from"pages/PageFour";
// import PageThree from"pages/PageThree";
// import PageTwo from"pages/PageTwo";
// import PatientDetails from"pages/PatientDetails";
// import AppointmentsOverviewPage from "pages/AppointmentsOverviewPage";
// import LegsTabclickedOne from"pages/LegsTabclickedOne";
// import LungsTabselectedlungregionOne from "pages/LungsTabselectedlungregionOne";
// import Summaryflagged from"pages/Summaryflagged";
// import LegsTabclicked from"pages/LegsTabclicked";
// import HeartTabclicked from"pages/HeartTabclicked";
// import AbdomenTabquestionmarkclicked from "pages/AbdomenTabquestionmarkclicked";
// import PulsesTabselectedartery from "pages/PulsesTabselectedartery";
// import LungsTabselectedlungregion from "pages/LungsTabselectedlungregion";
// // import Summary from"pages/Summary";
// import LegsTab from"pages/LegsTab";
// import HeartTab from"pages/HeartTab";
// import AbdomenTab from"pages/AbdomenTab";
// import PulsesTab from"pages/PulsesTab";
// import LungsTab from"pages/LungsTab";
// import GeneralTab from"pages/GeneralTab";
// import DemographicsTab from"pages/DemographicsTab";
// import Page from"pages/Page";

export default function App() {
    const { token, removeToken, setToken} = useToken();
    const proxy = "https://virtualphysical.pythonanywhere.com/";
    return (
        <Router>
            <div className = 'App'>
                <Routes>
                    <Route exact path="/" element={!!token? 
                                                jwtDecode(token).type === 'admin'? <AdminHomePage proxy={proxy} token={token} setToken={setToken} removeToken={removeToken}/>
                                                :<UserSettingsPage proxy={proxy} token={token} setToken={setToken} removeToken={removeToken}/>:
                                                <LoginPage proxy={proxy} setToken={setToken}/>}/>
                    <Route path="/register" element={ <RegisterPage proxy={proxy} setToken={setToken} /> } />
                    <Route path="/forgot_password" element={ <ForgotPasswordPage  proxy={proxy} /> } />
                    <Route path="/upload_files"
                        element={
                        <ProtectedRoute isAllowed={!!token}>
                            <UploadFilePage proxy={proxy} token={token}/>
                        </ProtectedRoute>
                    }/>
                    <Route path="/reset_password" element={<ResetPasswordPage proxy={proxy}/>} />
                    
                    <Route path="/general" element={<GeneralTab />} />
                    <Route path="/summary-flagged" element={<SummaryFlagged />} />
                    <Route path="/summary" element={<Summary proxy={proxy} />} />
                    <Route path="/pulses" element={<PulsesTab />} />
                    <Route path="/lungs" element={<LungsTab />} />
                    <Route path="/legs-tab-clicked" element={<LegsTabClicked />} />
                    <Route path="/legs-tab-clicked2" element={<LegsTabClickedScreen />} />
                    <Route path="/legs" element={<LegsTab />} />
                    <Route path="/messages" element={<Messages />} />
                    <Route path="/setting" element={<Setting />} />
                    <Route path="/appointment" element={<Appointments />} />
                    
                    <Route path="/home" element={<Home />} />
                    <Route path="*" element={<NotFound />} />
                    {/* <Route path="/page" element={<Page />} />
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
                    <Route path="/legstabclicked" element={<LegsTabclicked />} />
                    <Route path="/summaryflagged" element={<Summaryflagged />} />
                    <Route
                    path="/lungstabselectedlungregionone"
                    element={<LungsTabselectedlungregionOne />}
                    />
                    <Route path="/legstabclickedone" element={<LegsTabclickedOne />} />
                    <Route
                    path="/appointmentsoverviewpage"
                    element={<AppointmentsOverviewPage />}
                    /> */}
                    {/* <Route path="/patientdetails" element={<PatientDetails />} />
                    <Route path="/pagetwo" element={<PageTwo />} />
                    <Route path="/pagethree" element={<PageThree />} />
                    <Route path="/pagefour" element={<PageFour />} />
                    <Route path="/form" element={<Form />} />
                    <Route path="/calendario" element={<Calendario />} /> */}
                    {/* <Route path="/lungs" element={<Lungs />} /> */}
                    <Route path="/demographic" element={<Demographic />} />
                    <Route path="/hands" element={<Hands />} />
                    <Route path="/handsone" element={<HandsOne />} />
                    <Route path="/heart" element={<Heart />} />
                    <Route path="/demographicone" element={<DemographicOne />} />
                    <Route path="/abdomenfour" element={<AbdomenFour />} />
                    <Route path="/abdomen" element={<Abdomen />} />
                    <Route path="/abdomenone" element={<AbdomenOne />} />
                    {/* <Route path="/abdomentwo" element={<AbdomenTwo />} />
                    <Route path="/abdomenthree" element={<AbdomenThree />} /> */}
                </Routes>
            </div>
        </Router>
    )
}

const ProtectedRoute = ({isAllowed, redirectPath = '/', children,}) => {
    if (!isAllowed){
        return <Navigate to={redirectPath} replace/>;
    }
    return children? children: <Outlet/>;
}