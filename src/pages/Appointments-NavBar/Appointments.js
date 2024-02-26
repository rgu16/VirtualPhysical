import React, { useEffect, useState } from "react";
import "./App.css";
import EventExt from "./components/EventExt.js";
import axios from 'axios';
import Calendar from './calendar.js';
import { ArrowForward, ArrowBack } from '@mui/icons-material'; // Import icons here

function Appointments() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    axios({
      method: "GET",
      url: "https://virtualphysical.pythonanywhere.com/get_calendar",
    })
      .then((response) => {
        console.log(response.items)
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
    <div className="App py-8 flex flex-col justify-center">
      <h1>Patient Appointments</h1>
      <Calendar events={events} /> 
    </div>
  );
}

export default Appointments;