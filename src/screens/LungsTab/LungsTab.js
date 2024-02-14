import React from "react";
import "./style.css";

export const LungsTab = () => {
  return (
    <div className="lungs-tab">
      <div className="overlap-wrapper">
        <div className="overlap">
          <div className="overlap-group">
            <div className="labored-breathing">
            <select className="moderate">
                <option value="low">low</option>
                <option value="moderate">moderate</option>
                <option value="high">high</option>
                <option value="extreme">extreme</option>
                {/* Add other options here as needed */}
            </select>
              <p className="span-wrapper">
                <span className="span">Labored breathing?</span>
              </p>
            </div>
            <div className="brething-rate">
              <div className="div">
                {/* <img
                  className="rectangle"
                  alt="Rectangle"
                  src="https://cdn.animaapp.com/projects/65a945881c395bf52b1e3e78/releases/65a9e82814bc0dc531a973f2/img/rectangle-8-13@2x.png"
                />
                <p className="element">
                  <span className="text-wrapper">30</span>
                </p> */}
                <input
                type="text"
                className="rectangle"
                defaultValue=""
                style={{
                    width: 'same width as the image',
                    height: 'same height as the image',
                    // Additional styling to make it look like a rectangle
                }}
                />
              </div>
              <p className="breaths-min">
                <span className="span">breaths/min</span>
              </p>
              <p className="breathing-rate">
                <span className="span">Breathing rate:</span>
              </p>
            </div>
            {/* <div className="notes">
              <div className="specialty-physician-wrapper">
                <p className="specialty-physician">
                  <span className="text-wrapper-2">[specialty physician notes on lung measurements go here]</span>
                </p>
              </div>
              <p className="p">
                <span className="span">Notes:</span>
              </p>
              <button className="save-button">
                <div className="overlap-group-2">
                  <div className="background" />
                  <p className="save">
                    <span className="text-wrapper-3">Save</span>
                  </p>
                </div>
              </button>
            </div> */}
            <div className="notes">
            <div className="specialty-physician-wrapper">
                <textarea className="specialty-physician-textarea" placeholder="specialty physician notes on lung measurements go here"></textarea>
            </div>
            <p className="p">
                <span className="span">Notes:</span>
            </p>
            <button className="save-button" >
                <div className="overlap-group-2">
                <div className="background" />
                <p className="save">
                    <span className="text-wrapper-3">Save</span>
                </p>
                </div>
            </button>
            </div>

            <div className="overlap-2">
              <div className="left-lung">
                <img
                  className="chainlink-link"
                  alt="Chainlink link"
                  src="https://cdn.animaapp.com/projects/65a945881c395bf52b1e3e78/releases/65a9e82814bc0dc531a973f2/img/chainlink--link--14@2x.png"
                />
                <img
                  className="img"
                  alt="Chainlink link"
                  src="https://cdn.animaapp.com/projects/65a945881c395bf52b1e3e78/releases/65a9e82814bc0dc531a973f2/img/chainlink--link--14@2x.png"
                />
                <img
                  className="chainlink-link-2"
                  alt="Chainlink link"
                  src="https://cdn.animaapp.com/projects/65a945881c395bf52b1e3e78/releases/65a9e82814bc0dc531a973f2/img/chainlink--link--14@2x.png"
                />
              </div>
              <div className="right-lung">
                <img
                  className="chainlink-link"
                  alt="Chainlink link"
                  src="https://cdn.animaapp.com/projects/65a945881c395bf52b1e3e78/releases/65a9e82814bc0dc531a973f2/img/chainlink--link--14@2x.png"
                />
                <img
                  className="img"
                  alt="Chainlink link"
                  src="https://cdn.animaapp.com/projects/65a945881c395bf52b1e3e78/releases/65a9e82814bc0dc531a973f2/img/chainlink--link--14@2x.png"
                />
                <img
                  className="chainlink-link-2"
                  alt="Chainlink link"
                  src="https://cdn.animaapp.com/projects/65a945881c395bf52b1e3e78/releases/65a9e82814bc0dc531a973f2/img/chainlink--link--14@2x.png"
                />
              </div>
            </div>
            <p className="lung-auscultation">
              <span className="text-wrapper-4">Lung Auscultation </span>
              <span className="text-wrapper-5">(posterior analysis only)</span>
            </p>
          </div>
          <div className="tabs">
            <div className="frame">
              {/* <p className="span-wrapper-2">
                <span className="text-wrapper-6">Demographics</span>
              </p> */}
              <a href="/demographics" className="span-wrapper-2" style={{ textDecoration: 'none' }}>
                  <span className="text-wrapper-6">Demographics</span>
              </a>
            </div>
            <div className="general-wrapper">
              {/* <p className="span-wrapper-2">
                <span className="text-wrapper-6">General</span>
              </p> */}
              <a href="/general" className="span-wrapper-2" style={{ textDecoration: 'none' }}>
                  <span className="text-wrapper-6">General</span>
              </a>
            </div>
            <div className="lungs-wrapper">
              {/* <p className="span-wrapper-2">
                <span className="text-wrapper-6">Lungs</span>
              </p> */}
              <a href="/lungs" className="span-wrapper-2" style={{ textDecoration: 'none' }}>
                  <span className="text-wrapper-6">Lungs</span>
              </a>
            </div>
            <div className="pulses-wrapper">
              {/* <p className="span-wrapper-2">
                <span className="text-wrapper-6">Pulses</span>
              </p> */}
              <a href="/pulses" className="span-wrapper-2" style={{ textDecoration: 'none' }}>
                  <span className="text-wrapper-6">Pulses</span>
              </a>
            </div>
            <div className="abdomen-wrapper">
              {/* <p className="span-wrapper-2">
                <span className="text-wrapper-6">Abdomen</span>
              </p> */}
              <a href="/abdomen" className="span-wrapper-2" style={{ textDecoration: 'none' }}>
                  <span className="text-wrapper-6">Abdomen</span>
              </a>
            </div>
            <div className="heart-wrapper">
              {/* <p className="span-wrapper-2">
                <span className="text-wrapper-6">Heart</span>
              </p> */}
              <a href="/heart" className="span-wrapper-2" style={{ textDecoration: 'none' }}>
                  <span className="text-wrapper-6">Heart</span>
              </a>
            </div>
            <div className="legs-wrapper">
              {/* <p className="span-wrapper-2">
                <span className="text-wrapper-6">Legs</span>
              </p> */}
              <a href="/legs" className="span-wrapper-2" style={{ textDecoration: 'none' }}>
                  <span className="text-wrapper-6">Legs</span>
              </a>
            </div>
            <div className="summary-wrapper">
              {/* <p className="span-wrapper-2">
                <span className="text-wrapper-6">Summary</span>
              </p> */}
              <a href="/summary" className="span-wrapper-2" style={{ textDecoration: 'none' }}>
                  <span className="text-wrapper-6">Summary</span>
              </a>
            </div>
          </div>
          <div className="NAV">
            <div className="profile">
              <div className="profile-2">
                <div className="overlap-group-3">
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


