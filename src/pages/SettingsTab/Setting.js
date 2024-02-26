import React from "react";
import "./style.css";

export const Setting = () => {
  return (
    <div className="setting">
      <div className="overlap-wrapper">
        <div className="overlap">
          <div className="BACKGROUND">
            <div className="profile-picture" />
          </div>
          
          <div className="NAV">
            <div className="profile">
              <div className="div">
                <div className="overlap-group">
                  <p className="cardiologist">
                    <span className="span">Cardiologist</span>
                  </p>
                </div>
                <img
                  className="arrow"
                  alt="Arrow"
                  src="https://cdn.animaapp.com/projects/65a945881c395bf52b1e3e78/releases/65a9e82814bc0dc531a973f2/img/arrow-19@2x.png"
                />
              </div>
              <div className="profile-picture-2" />
            </div>
            <div className="icon-groups">

              <a href="/appointment">
                <img
                  className="calendar-icon"
                  alt="Calendar icon"
                  src="https://cdn.animaapp.com/projects/65a945881c395bf52b1e3e78/releases/65a9e82814bc0dc531a973f2/img/calendar-icon-21@2x.png"
                />
              </a>

              <a href="/setting">
                <img
                  className="settings-icon"
                  alt="Settings icon"
                  src="https://cdn.animaapp.com/projects/65a945881c395bf52b1e3e78/releases/65a9e82814bc0dc531a973f2/img/settings-icon-19@2x.png"
                />
              </a>

              <a href="/chart">
                <img
                  className="chart-icon"
                  alt="Chart icon"
                  src="https://cdn.animaapp.com/projects/65a945881c395bf52b1e3e78/releases/65a9e82814bc0dc531a973f2/img/chart-icon-20@2x.png"
                />
              </a>

              <a href="/messages">
                <img
                  className="message-icon"
                  alt="Message icon"
                  src="https://cdn.animaapp.com/projects/65a945881c395bf52b1e3e78/releases/65a9e82814bc0dc531a973f2/img/message-icon-19@2x.png"
                />
              </a>

            </div>
            <div className="separator" />
            <div className="VP-logo">
              {/* <p className="virtual-physical">
                <span className="text-wrapper-2">Virtual Physical</span>
              </p> */}
              <a href="/summary" className="virtual-physical" style={{ textDecoration: 'none' }}>
                <span className="text-wrapper-2">Virtual Physical</span>
              </a>

              <img
                className="img"
                alt="Vp logo"
                src="https://cdn.animaapp.com/projects/65a945881c395bf52b1e3e78/releases/65a9e82814bc0dc531a973f2/img/vp-logo-19@2x.png"
              />
            </div>
          </div>
          
          <img
            className="rectangle"
            alt="Rectangle"
            src="https://cdn.animaapp.com/projects/65a945881c395bf52b1e3e78/releases/65a9e82814bc0dc531a973f2/img/rectangle-8-25@2x.png"
          />
          <input type="text" className="rectangle" defaultValue="Dr. David Ochoa" />
          <img
            className="rectangle-2"
            alt="Rectangle"
            src="https://cdn.animaapp.com/projects/65a945881c395bf52b1e3e78/releases/65a9e82814bc0dc531a973f2/img/rectangle-8-25@2x.png"
          />
          <input type="text" className="rectangle-2" defaultValue="dr.david.ochoa@gmail.com" />
          <img
            className="rectangle-3"
            alt="Rectangle"
            src="https://cdn.animaapp.com/projects/65a945881c395bf52b1e3e78/releases/65a9e82814bc0dc531a973f2/img/rectangle-8-25@2x.png"
          />
          <input type="text" className="rectangle-3" defaultValue="Houston Methodist" />
          <img
            className="rectangle-4"
            alt="Rectangle"
            src="https://cdn.animaapp.com/projects/65a945881c395bf52b1e3e78/releases/65a9e82814bc0dc531a973f2/img/rectangle-8-25@2x.png"
          />
          <input type="text" className="rectangle-4" defaultValue="Central Standard Time (GMT-6)" />
          <img
            className="rectangle-5"
            alt="Rectangle"
            src="https://cdn.animaapp.com/projects/65a945881c395bf52b1e3e78/releases/65a9e82814bc0dc531a973f2/img/rectangle-8-25@2x.png"
          />
          <input type="text" className="rectangle-5" defaultValue="https://houstonmethodist.zoom.us/my/davidochoa" />
          <img
            className="rectangle-6"
            alt="Rectangle"
            src="https://cdn.animaapp.com/projects/65a945881c395bf52b1e3e78/releases/65a9e82814bc0dc531a973f2/img/rectangle-8-25@2x.png"
          />
          <input type="text" className="rectangle-6" defaultValue="English (United States)" />

          <div className="frame">
            <p className="name">
              <span className="text-wrapper-3">Name:</span>
            </p>
            <p className="email">
              <span className="text-wrapper-3">Email:</span>
            </p>
            <p className="clinic-name">
              <span className="text-wrapper-3">Clinic name:</span>
            </p>
            <p className="time-zone">
              <span className="text-wrapper-3">Time zone:</span>
            </p>
            <p className="zoom-link">
              <span className="text-wrapper-3">Zoom link:</span>
            </p>
            <p className="language">
              <span className="text-wrapper-3">Language:</span>
            </p>
          </div>
          <p className="span-wrapper">
            <span className="text-wrapper-4">Profile Picture</span>
          </p>
          <p className="user-settings">
            <span className="text-wrapper-5">User Settings</span>
          </p>
          <img
            className="gallery-add"
            alt="Gallery add"
            src="https://cdn.animaapp.com/projects/65a945881c395bf52b1e3e78/releases/65a9e82814bc0dc531a973f2/img/gallery-add-2@2x.png"
          />
          <p className="edit-image">
            <span className="text-wrapper-3">Edit image</span>
          </p>
          
          {/* <p className="p"> */}
            {/* <span className="text-wrapper-3">Dr. David Ochoa</span> */}
            {/* <input type="text" className="text-wrapper-3" defaultValue="Dr. David Ochoa" /> */}
          {/* </p> */}
          {/* <p className="https">
            <span className="text-wrapper-3">https://houstonmethodist.zoom.us/my/davidochoa</span>
          </p>
          <p className="dr-david-ochoa-gmail">
            <span className="text-wrapper-3">dr.david.ochoa@gmail.com</span>
          </p>
          <p className="houston-methodist">
            <span className="text-wrapper-3">Houston Methodist</span>
          </p>
          <p className="central-standard">
            <span className="text-wrapper-3">Central Standard Time (GMT-6)</span>
          </p>
          <p className="english-united">
            <span className="text-wrapper-3">English (United States)</span>
          </p> */}
        </div>
      </div>
    </div>
  );
};
