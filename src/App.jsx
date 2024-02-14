
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, Outlet, } from 'react-router-dom';
import {LoginPage, RegisterPage, ForgotPasswordPage, UploadFilePage, ResetPasswordPage, UserSettingsPage, AdminHomePage} from "./pages";
import {useToken} from './components';
import { jwtDecode } from 'jwt-decode';
import {SummaryFlagged,Summary, LegsTabClicked, LegsTabClickedScreen, LegsTab, GeneralTab, PulsesTab, LungsTab, Appointments, Messages, Setting} from "./screens"

export default function App() {
    const { token, removeToken, setToken} = useToken();
    const proxy = "http://localhost:5000";
    return (
        <Router>
            <div className = 'App'>
                <Routes>
                    <Route exact path="/" element={!!token? 
                                                jwtDecode(token).type === 'admin'? <AdminHomePage proxy={proxy} token={token} setToken={setToken} removeToken={removeToken}/>
                                                :<UserSettingsPage proxy={proxy} token={token} setToken={setToken} removeToken={removeToken}/>:
                                                // <HomePage proxy={proxy} token={token} setToken={setToken} removeToken={removeToken}/>:
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
                    <Route path="/summary" element={<Summary />} />
                    <Route path="/pulses" element={<PulsesTab />} />
                    <Route path="/lungs" element={<LungsTab />} />
                    <Route path="/legs-tab-clicked" element={<LegsTabClicked />} />
                    <Route path="/legs-tab-clicked2" element={<LegsTabClickedScreen />} />
                    <Route path="/legs" element={<LegsTab />} />
                    <Route path="/messages" element={<Messages />} />
                    <Route path="/setting" element={<Setting />} />
                    <Route path="/appointment" element={<Appointments />} />
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