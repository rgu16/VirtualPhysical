
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, Outlet, } from 'react-router-dom';
import {LoginPage, RegisterPage, ForgotPasswordPage, HomePage, UploadFilePage, UserManagementPage} from "./pages";
import {useToken} from './components';

export default function App() {
    const { token, removeToken, setToken} = useToken();
    const proxy = "http://localhost:5000";
    return (
        <Router>
            <div className = 'App'>
                <Routes>
                    <Route exact path="/" element={!!token? 
                                                <HomePage proxy={proxy} token={token} setToken={setToken} removeToken={removeToken}/>:
                                                <LoginPage proxy={proxy} setToken={setToken}/>}/>
                    <Route path="/register" element={ <RegisterPage proxy={proxy} setToken={setToken} /> } />
                    <Route path="/forgot_password" element={ <ForgotPasswordPage /> } />
                    <Route path="/upload_files"
                        element={
                        <ProtectedRoute isAllowed={!!token}>
                            <UploadFilePage proxy={proxy} token={token}/>
                        </ProtectedRoute>
                    }/>
                    <Route path='/user_management' 
                        element={
                        <ProtectedRoute isAllowed={!!token}>
                            <UserManagementPage proxy={proxy} token={token}/>
                        </ProtectedRoute>
                    }/>
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