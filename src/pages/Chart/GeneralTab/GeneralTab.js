import React from "react";
import "./style.css";

export const GeneralTab = () => {
  return (
    <div className="general-tab">
      <div className="overlap-wrapper">
        <div className="overlap">
          <div className="overlap-group">
            <div className="notes">
              <div className="specialty-physician-wrapper">
                <p className="specialty-physician">
                  <span className="text-wrapper">
                    [specialty physician notes on general inspection measurements go here]
                  </span>
                </p>
              </div>
              <p className="span-wrapper">
                <span className="span">Notes:</span>
              </p>
              <button className="save-button">
                <div className="div">
                  <div className="background" />
                  <p className="save">
                    <span className="text-wrapper-2">Save</span>
                  </p>
                </div>
              </button>
            </div>
            <div className="capillary-refill">
              <div className="overlap-2">
                <img
                  className="rectangle"
                  alt="Rectangle"
                  src="https://cdn.animaapp.com/projects/65a945881c395bf52b1e3e78/releases/65a9e82814bc0dc531a973f2/img/rectangle-8-13@2x.png"
                />
                <p className="element">
                  <span className="text-wrapper-3">3</span>
                </p>
              </div>
              <p className="sec">
                <span className="span">sec</span>
              </p>
              <p className="p">
                <span className="span">Capillary Refill Time:</span>
              </p>
            </div>
            <div className="yellowing">
              <div className="overlap-3">
                <div className="gradient-line">
                  <div className="rectangle-2" />
                  <img
                    className="union"
                    alt="Union"
                    src="https://cdn.animaapp.com/projects/65a945881c395bf52b1e3e78/releases/65a9e82814bc0dc531a973f2/img/union-1@2x.png"
                  />
                </div>
                <div className="text-scale">
                  <p className="bad">
                    <span className="text-wrapper-4">Bad</span>
                  </p>
                  <p className="good">
                    <span className="text-wrapper-4">Good</span>
                  </p>
                </div>
              </div>
              <p className="pallor-severity">
                <span className="span">Pallor severity:</span>
              </p>
              <div className="group">
                <img
                  className="tick-circle"
                  alt="Tick circle"
                  src="https://cdn.animaapp.com/projects/65a945881c395bf52b1e3e78/releases/65a9e82814bc0dc531a973f2/img/tick-circle-5@2x.png"
                />
                <img
                  className="close-circle"
                  alt="Close circle"
                  src="https://cdn.animaapp.com/projects/65a945881c395bf52b1e3e78/releases/65a9e82814bc0dc531a973f2/img/close-circle-5@2x.png"
                />
                <p className="span-wrapper-2">
                  <span className="span">Yellowing in eyes:</span>
                </p>
              </div>
            </div>
            <div className="pallor">
              <div className="overlap-4">
                <div className="gradient-line">
                  <div className="rectangle-2" />
                  <img
                    className="img"
                    alt="Union"
                    src="https://cdn.animaapp.com/projects/65a945881c395bf52b1e3e78/releases/65a9e82814bc0dc531a973f2/img/union-2@2x.png"
                  />
                </div>
                <div className="text-scale">
                  <p className="bad">
                    <span className="text-wrapper-4">Bad</span>
                  </p>
                  <p className="good">
                    <span className="text-wrapper-4">Good</span>
                  </p>
                </div>
              </div>
              <p className="pallor-severity-2">
                <span className="span">Pallor severity:</span>
              </p>
              <div className="group-2">
                <img
                  className="tick-circle-2"
                  alt="Tick circle"
                  src="https://cdn.animaapp.com/projects/65a945881c395bf52b1e3e78/releases/65a9e82814bc0dc531a973f2/img/tick-circle-9@2x.png"
                />
                <img
                  className="close-circle-2"
                  alt="Close circle"
                  src="https://cdn.animaapp.com/projects/65a945881c395bf52b1e3e78/releases/65a9e82814bc0dc531a973f2/img/close-circle-8@2x.png"
                />
                <p className="span-wrapper-2">
                  <span className="span">Pallor:</span>
                </p>
              </div>
            </div>
            <div className="cyanosis">
              <div className="overlap-5">
                <div className="gradient-line">
                  <div className="rectangle-2" />
                  <img
                    className="union-2"
                    alt="Union"
                    src="https://cdn.animaapp.com/projects/65a945881c395bf52b1e3e78/releases/65a9e82814bc0dc531a973f2/img/union-3@2x.png"
                  />
                </div>
                <div className="text-scale">
                  <p className="bad">
                    <span className="text-wrapper-4">Bad</span>
                  </p>
                  <p className="good">
                    <span className="text-wrapper-4">Good</span>
                  </p>
                </div>
              </div>
              <p className="pallor-severity-3">
                <span className="span">Pallor severity:</span>
              </p>
              <div className="group-3">
                <img
                  className="tick-circle-3"
                  alt="Tick circle"
                  src="https://cdn.animaapp.com/projects/65a945881c395bf52b1e3e78/releases/65a9e82814bc0dc531a973f2/img/tick-circle-5@2x.png"
                />
                <img
                  className="close-circle-3"
                  alt="Close circle"
                  src="https://cdn.animaapp.com/projects/65a945881c395bf52b1e3e78/releases/65a9e82814bc0dc531a973f2/img/close-circle-9@2x.png"
                />
                <p className="span-wrapper-2">
                  <span className="span">Cyanosis:</span>
                </p>
              </div>
            </div>
          </div>
          <div className="tabs">
            <div className="frame">
              {/* <p className="span-wrapper-3">
                <span className="text-wrapper-5">Demographics</span>
              </p> */}
              <a href="/demographics" className="span-wrapper-3" style={{ textDecoration: 'none' }}>
                  <span className="text-wrapper-5">Demographics</span>
              </a>
            </div>
            <div className="general-wrapper">
              {/* <p className="span-wrapper-3">
                <span className="text-wrapper-5">General</span>
              </p> */}
              <a href="/general" className="span-wrapper-3" style={{ textDecoration: 'none' }}>
                  <span className="text-wrapper-5">General</span>
              </a>
            </div>
            <div className="lungs-wrapper">
              {/* <p className="span-wrapper-3">
                <span className="text-wrapper-5">Lungs</span>
              </p> */}
              <a href="/lungs" className="span-wrapper-3" style={{ textDecoration: 'none' }}>
                  <span className="text-wrapper-5">Lungs</span>
              </a>
            </div>
            <div className="pulses-wrapper">
              {/* <p className="span-wrapper-3">
                <span className="text-wrapper-5">Pulses</span>
              </p> */}
              <a href="/pulses" className="span-wrapper-3" style={{ textDecoration: 'none' }}>
                  <span className="text-wrapper-5">Pulses</span>
              </a>
            </div>
            <div className="abdomen-wrapper">
              {/* <p className="span-wrapper-3">
                <span className="text-wrapper-5">Abdomen</span>
              </p> */}
              <a href="/abdomen" className="span-wrapper-3" style={{ textDecoration: 'none' }}>
                  <span className="text-wrapper-5">Abdomen</span>
              </a>
            </div>
            <div className="heart-wrapper">
              {/* <p className="span-wrapper-3">
                <span className="text-wrapper-5">Heart</span>
              </p> */}
              <a href="/heart" className="span-wrapper-3" style={{ textDecoration: 'none' }}>
                  <span className="text-wrapper-5">Heart</span>
              </a>
            </div>
            <div className="legs-wrapper">
              {/* <p className="span-wrapper-3">
                <span className="text-wrapper-5">Legs</span>
              </p> */}
              <a href="/legs" className="span-wrapper-3" style={{ textDecoration: 'none' }}>
                  <span className="text-wrapper-5">Legs</span>
              </a>
            </div>
            <div className="summary-wrapper">
              {/* <p className="span-wrapper-3">
                <span className="text-wrapper-5">Summary</span>
              </p> */}
              <a href="/summary" className="span-wrapper-3" style={{ textDecoration: 'none' }}>
                  <span className="text-wrapper-5">Summary</span>
              </a>
            </div>
          </div>
          <div className="NAV">
            <div className="profile">
              <div className="profile-2">
                <div className="overlap-group-2">
                  <p className="dr-david-ochoa">
                    <span className="text-wrapper-6">Dr. David Ochoa</span>
                  </p>
                  <p className="cardiologist">
                    <span className="text-wrapper-7">Cardiologist</span>
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
                <span className="text-wrapper-8">Virtual Physical</span>
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



