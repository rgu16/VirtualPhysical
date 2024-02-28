import React, { useEffect, useState } from "react";
import "./Appointments.css";
import axios from 'axios';
import Calendar from './calendar.js';
import {NavBar} from "components";
// import { ArrowForward, ArrowBack } from '@mui/icons-material';
// import Event from "./components/Event.js";

function AppointmentPage(props) {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    axios({
      method: "GET",
      url: "https://virtualphysical.pythonanywhere.com/get_calendar",
    })
      .then((response) => {
        console.log(response.data.items)
        const events = response.data.items;
        setEvents(events);
      })
      .catch((error) => {
        console.error("Error fetching events:", error);
        if (error.response) {
          console.log(error.response.status);
          console.log(error.response.data);
          console.log(error.response.headers);
        } else {
          console.log("Error message:", error.message);
        }
      });
  }, []); // Empty dependency array means the effect runs only once when the component mounts

  return (
    <div className="bg-white-A700 flex flex-col items-center justify-start mx-auto w-full h-screen">
    <NavBar  proxy={props.proxy} token={props.token}></NavBar>
    <div className="App py-8 flex flex-col justify-center">
      <h1>Patient Appointments</h1>
      <Calendar events={events} /> 
    </div>
    </div>
  );
}

export default AppointmentPage;