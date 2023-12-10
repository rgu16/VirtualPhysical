import React from "react";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <div className="dhiwise-navigation">
      <h1>Homepage</h1>
      <p className="headline">
        This project was generated By{" "}
        <a href="https://www.dhiwise.com">Dhiwise</a>. Quickly use below links
        to navigate through all pages.
      </p>
      <ul>
        <li>
          <Link to="/pageone">PageOne</Link>
        </li>
        <li>
          <Link to="/demographicstab">DemographicsTab</Link>
        </li>
        <li>
          <Link to="/generaltab">GeneralTab</Link>
        </li>
        <li>
          <Link to="/lungstab">LungsTab</Link>
        </li>
        <li>
          <Link to="/pulsestab">PulsesTab</Link>
        </li>
        <li>
          <Link to="/abdomentab">AbdomenTab</Link>
        </li>
        <li>
          <Link to="/hearttab">HeartTab</Link>
        </li>
        <li>
          <Link to="/legstab">LegsTab</Link>
        </li>
        <li>
          <Link to="/summary">Summary</Link>
        </li>
        <li>
          <Link to="/lungstabselectedlungregion">
            LungsTabselectedlungregion
          </Link>
        </li>
        <li>
          <Link to="/pulsestabselectedartery">PulsesTabselectedartery</Link>
        </li>
        <li>
          <Link to="/abdomentabquestionmarkclicked">
            AbdomenTabquestionmarkclicked
          </Link>
        </li>
        <li>
          <Link to="/hearttabclicked">HeartTabclicked</Link>
        </li>
        <li>
          <Link to="/legstabclickedone">LegsTabclickedOne</Link>
        </li>
        <li>
          <Link to="/summaryflagged">Summaryflagged</Link>
        </li>
        <li>
          <Link to="/lungstabselectedlungregionone">
            LungsTabselectedlungregionOne
          </Link>
        </li>
        <li>
          <Link to="/legstabclicked">LegsTabclicked</Link>
        </li>
        <li>
          <Link to="/appointmentsoverviewpage">AppointmentsOverviewPage</Link>
        </li>
        <li>
          <Link to="/patientdetails">PatientDetails</Link>
        </li>
        <li>
          <Link to="/pagethree">PageThree</Link>
        </li>
        <li>
          <Link to="/page">Page</Link>
        </li>
        <li>
          <Link to="/pagetwo">PageTwo</Link>
        </li>
      </ul>
    </div>
  );
};
export default Home;