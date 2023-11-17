
import React from 'react';
import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, Outlet, } from 'react-router-dom';

import {LoginPage, RegisterPage, ForgotPasswordPage, HomePage} from "./pages";

export default function App() {
    const [registeredUsers, setRegisteredUsers] = useState([{email: 'virtualphysical23@gmail.com', password :'senior design', name: "Virtual Physical", id: "admin"},{email:'a@gmail.com',password:'a',name:'a'},]);
    const [currentUser, setCurrentUser] = React.useState(null);

    console.log(registeredUsers);
    console.log(currentUser);

    const handleRegister = (newUser) => {
      setRegisteredUsers([...registeredUsers, newUser]);
    };

    const handleLogin = (user) => {
        setCurrentUser(user);
    };

    const handleLogout = () => {
        console.log(currentUser)
        setCurrentUser(null);
    };

    const handleDelete = () => {
        const updatedUsers = registeredUsers.filter(user => user !== currentUser)
        setRegisteredUsers(updatedUsers)
        setCurrentUser(null);
    };

    const updatePassword = (newPassword) => {
        setRegisteredUsers(prevUsers => {
            const updatedUsers = prevUsers.map(user =>
                user === currentUser ? { ...user, password: newPassword } : user
            );
            return updatedUsers;
        });
        setCurrentUser(prevUser => ({...prevUser, password: newPassword}));
    };

    return (
        <Router>
            <div className = 'App'>
                <Routes>
                    <Route exact path="/" element={ <LoginPage handleLogin= {handleLogin} registeredUsers={registeredUsers}/> } />
                    <Route path="/register" element={ <RegisterPage handleLogin= {handleLogin} onRegister={handleRegister} registeredUsers={registeredUsers} /> } />
                    <Route path="/forgot-password" element={ <ForgotPasswordPage registeredUsers={registeredUsers}/> } />
                    <Route element ={<ProtectedRoute isAllowed={!!currentUser}/>}>
                    <Route path="/home" element={ <HomePage handleLogout= {handleLogout} handleDelete={handleDelete} updatePassword={updatePassword} currentUser={currentUser} /> } />
                    </Route>
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