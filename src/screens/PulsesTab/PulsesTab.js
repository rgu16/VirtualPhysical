import React from "react";
import "./style.css";

export const PulsesTab = () => {
  return (
    <div className="pulses-tab">
      <div className="overlap-wrapper">
        <div className="overlap">
          <div className="overlap-group">
            <div className="blood-pressure">
              
              <div className="systolic">
                <p className="span-wrapper">
                  <span className="text-wrapper">Systolic:</span>
                </p>
                <div className="div">
                  {/* <img
                    className="textbox-42"
                    alt="Rectangle"
                    src="https://cdn.animaapp.com/projects/65a945881c395bf52b1e3e78/releases/65a9e82814bc0dc531a973f2/img/rectangle-8-13@2x.png"
                  /> */}
                  {/* <p className="element">
                    <span className="span">120</span>
                  </p> */}
                  <input type="text" className="textbox-43" defaultValue="120" />
                </div>
                <p className="mm-hg">
                  <span className="span">mmHg</span>
                </p>
              </div>
              
              <div className="diastolic">
                <p className="span-wrapper">
                  <span className="text-wrapper">Diastolic:</span>
                </p>
                <div className="overlap-2">
                  {/* <img
                    className="textbox-42"
                    alt="Rectangle"
                    src="https://cdn.animaapp.com/projects/65a945881c395bf52b1e3e78/releases/65a9e82814bc0dc531a973f2/img/rectangle-8-13@2x.png"
                  /> */}
                  {/* <p className="p">
                    <span className="span">80</span>
                  </p> */}
                  <input type="text" className="textbox-43" defaultValue="80" />
                </div>
                <p className="mm-hg-2">
                  <span className="span">mmHg</span>
                </p>
              </div>
              <div className="bpm">
                <p className="span-wrapper">
                  <span className="text-wrapper">Heart Rate:</span>
                </p>
                <div className="overlap-3">
                  {/* <img
                    className="textbox-42"
                    alt="Rectangle"
                    src="https://cdn.animaapp.com/projects/65a945881c395bf52b1e3e78/releases/65a9e82814bc0dc531a973f2/img/rectangle-8-13@2x.png"
                  /> */}
                  {/* <p className="p">
                    <span className="span">88</span>
                  </p> */}
                  <input type="text" className="textbox-43" defaultValue="88" />
                </div>
                {/* <img
                  className="heart"
                  alt="Heart"
                  src="https://cdn.animaapp.com/projects/65a945881c395bf52b1e3e78/releases/65a9e82814bc0dc531a973f2/img/heart-1@2x.png"
                /> */}
                <p className="bpm-2">
                  <span className="span">bpm</span>
                </p>
              </div>
            </div>
            <div className="chainlink-link-wrapper">
              <img
                className="chainlink-link"
                alt="Chainlink link"
                src="https://cdn.animaapp.com/projects/65a945881c395bf52b1e3e78/releases/65a9e82814bc0dc531a973f2/img/chainlink--link--13@2x.png"
              />
            </div>
            <p className="carotid-auscultation">
              <span className="text-wrapper-2">Carotid Auscultation</span>
            </p>
            <div className="pulse">
              <p className="pulses">
                <span className="text-wrapper-2">Pulses</span>
              </p>
              <div className="radial">
                <div className="overlap-4">
                  <img
                    className="textbox-42"
                    alt="Rectangle"
                    src="https://cdn.animaapp.com/projects/65a945881c395bf52b1e3e78/releases/65a9e82814bc0dc531a973f2/img/rectangle-8-13@2x.png"
                  />
                  {/* <p className="element-2">
                    <input type="text" className="textbox-42" defaultValue="+2" />
                  </p> */}
                  <input type="text" className="textbox-42" defaultValue="+2" />
                  </div>
                  <p className="span-wrapper-2">
                    <span className="text-wrapper">Radial pulse:</span>
                  </p>
                  {/* <input type="text" className="textbox-42" defaultValue="+2" /> */}
              </div>
              
              <div className="brachial">
                <div className="overlap-4">
                  <img
                    className="textbox-42"
                    alt="Rectangle"
                    src="https://cdn.animaapp.com/projects/65a945881c395bf52b1e3e78/releases/65a9e82814bc0dc531a973f2/img/rectangle-8-13@2x.png"
                  />
                  {/* <p className="p">
                    <span className="span">+1</span>
                  </p> */}
                  <input type="text" className="textbox-42" defaultValue="+1" />
                </div>
                <p className="brachial-pulse">
                  <span className="text-wrapper">Brachial pulse:</span>
                </p>
                {/* <input type="text" className="textbox-42" defaultValue="+1" /> */}
              </div>

              <div className="carotid">
                <div className="overlap-4">
                  <img
                    className="textbox-42"
                    alt="Rectangle"
                    src="https://cdn.animaapp.com/projects/65a945881c395bf52b1e3e78/releases/65a9e82814bc0dc531a973f2/img/rectangle-8-13@2x.png"
                  />
                  {/* <p className="p">
                    <span className="span">+2</span>
                  </p> */}
                  <input type="text" className="textbox-42" defaultValue="+2" />
                </div>
                <p className="span-wrapper">
                  <span className="text-wrapper">Carotid pulse:</span>
                </p>
              </div>
              
              <div className="dorsalis-pedis">
                <div className="group">
                  <div className="overlap-4">
                    <img
                      className="textbox-42"
                      alt="Rectangle"
                      src="https://cdn.animaapp.com/projects/65a945881c395bf52b1e3e78/releases/65a9e82814bc0dc531a973f2/img/rectangle-8-13@2x.png"
                    />
                    {/* <p className="element-3">
                      <span className="span">0</span>
                    </p> */}
                    <input type="text" className="textbox-42" defaultValue="0" />
                  </div>

                  <p className="span-wrapper-2">
                    <span className="text-wrapper">Dorsalis pedis pulse:</span>
                  </p>
                </div>
              </div>
            </div>
            
            <div className="JVP">
              {/* <p className="abnormal">
                <span className="span">abnormal</span>
              </p> */}
            <select className="abnormal">
                <option value="normal">normal</option>
                <option value="abnormal">abnormal</option>
                {/* Add other options here as needed */}
            </select>

              <p className="jugular-venous">
                <span className="text-wrapper">Jugular Venous Pressure (JVP) Evaluation:</span>
              </p>
            </div>

            <div className="notes">
              <div className="specialty-physician-wrapper">
                {/* <p className="specialty-physician">
                  <span className="text-wrapper-3">[specialty physician notes on pulse mesasurements go here]</span>
                </p> */}
                <textarea className="specialty-physician-textarea" placeholder="specialty physician notes on pulse mesasurements go here"></textarea>
              </div>
              <p className="notes-2">
                <span className="text-wrapper-4">Notes:</span>
              </p>
              <button className="save-button">
                <div className="overlap-group-4">
                  <div className="background" />
                  <p className="save">
                    <span className="text-wrapper-5">Save</span>
                  </p>
                </div>
              </button>
            </div>
          </div>
          <div className="tabs">
            <div className="frame">
              {/* <p className="span-wrapper-3">
                <span className="text-wrapper-6">Demographics</span>
              </p> */}
              <a href="/demographics" className="span-wrapper-3" style={{ textDecoration: 'none' }}>
                  <span className="text-wrapper-6">Demographics</span>
              </a>
            </div>
            <div className="general-wrapper">
              {/* <p className="span-wrapper-3">
                <span className="text-wrapper-6">General</span>
              </p> */}
              <a href="/general" className="span-wrapper-3" style={{ textDecoration: 'none' }}>
                  <span className="text-wrapper-6">General</span>
              </a>
            </div>
            <div className="lungs-wrapper">
              {/* <p className="span-wrapper-3">
                <span className="text-wrapper-6">Lungs</span>
              </p> */}
              <a href="/lungs" className="span-wrapper-3" style={{ textDecoration: 'none' }}>
                  <span className="text-wrapper-6">Lungs</span>
              </a>
            </div>
            <div className="pulses-wrapper">
              {/* <p className="span-wrapper-3">
                <span className="text-wrapper-6">Pulses</span>
              </p> */}
              <a href="/pulses" className="span-wrapper-3" style={{ textDecoration: 'none' }}>
                  <span className="text-wrapper-6">Pulses</span>
              </a>
            </div>
            <div className="abdomen-wrapper">
              {/* <p className="span-wrapper-3">
                <span className="text-wrapper-6">Abdomen</span>
              </p> */}
              <a href="/abdomen" className="span-wrapper-3" style={{ textDecoration: 'none' }}>
                  <span className="text-wrapper-6">Abdomen</span>
              </a>
            </div>
            <div className="heart-wrapper">
              {/* <p className="span-wrapper-3">
                <span className="text-wrapper-6">Heart</span>
              </p> */}
              <a href="/heart" className="span-wrapper-3" style={{ textDecoration: 'none' }}>
                  <span className="text-wrapper-6">Heart</span>
              </a>
            </div>
            <div className="legs-wrapper">
              {/* <p className="span-wrapper-3">
                <span className="text-wrapper-6">Legs</span>
              </p> */}
              <a href="/legs" className="span-wrapper-3" style={{ textDecoration: 'none' }}>
                  <span className="text-wrapper-6">Legs</span>
              </a>
            </div>
            <div className="summary-wrapper">
              {/* <p className="span-wrapper-3">
                <span className="text-wrapper-6">Summary</span>
              </p> */}
              <a href="/summary" className="span-wrapper-3" style={{ textDecoration: 'none' }}>
                  <span className="text-wrapper-6">Summary</span>
              </a>
            </div>
          </div>
          <div className="NAV">
            <div className="profile">
              <div className="profile-2">
                <div className="overlap-group-5">
                  <p className="dr-david-ochoa">
                    <span className="text-wrapper-7">Dr. David Ochoa</span>
                  </p>
                  <p className="cardiologist">
                    <span className="text-wrapper-8">Cardiologist</span>
                  </p>
                </div>
                <img
                  className="arrow"
                  alt="Arrow"
                  src="https://cdn.animaapp.com/projects/65a945881c395bf52b1e3e78/releases/65a9e82814bc0dc531a973f2/img/arrow-19@2x.png"
                />
              </div>
              <div className="profile-picture" />
            </div>
            <div className="icon-groups">
              {/* <img
                className="calendar-icon"
                alt="Calendar icon"
                src="https://cdn.animaapp.com/projects/65a945881c395bf52b1e3e78/releases/65a9e82814bc0dc531a973f2/img/calendar-icon-21@2x.png"
              />
              <img
                className="settings-icon"
                alt="Settings icon"
                src="https://cdn.animaapp.com/projects/65a945881c395bf52b1e3e78/releases/65a9e82814bc0dc531a973f2/img/settings-icon-19@2x.png"
              />
              <img
                className="chart-icon"
                alt="Chart icon"
                src="https://cdn.animaapp.com/projects/65a945881c395bf52b1e3e78/releases/65a9e82814bc0dc531a973f2/img/chart-icon-20@2x.png"
              />
              <img
                className="message-icon"
                alt="Message icon"
                src="https://cdn.animaapp.com/projects/65a945881c395bf52b1e3e78/releases/65a9e82814bc0dc531a973f2/img/message-icon-19@2x.png"
              /> */}
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
              <p className="virtual-physical">
                <span className="text-wrapper-9">Virtual Physical</span>
              </p>
              <img
                className="VP-logo-2"
                alt="Vp logo"
                src="https://cdn.animaapp.com/projects/65a945881c395bf52b1e3e78/releases/65a9e82814bc0dc531a973f2/img/vp-logo-19@2x.png"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
