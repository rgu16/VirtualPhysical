import React from "react";
import "./style.css";

export const Page = () => {
  return (
    <div className="page">
      <div className="overlap-wrapper">
        <div className="overlap">
          <div className="NAV">
            <div className="profile">
              <div className="div">
                <div className="overlap-group">
                  <p className="dr-david-ochoa">
                    <span className="text-wrapper">Dr. David Ochoa</span>
                  </p>
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
                {/* <span className="text-wrapper-2">Virtual Physical</span> */}
                <a href="/summary" style={{ textDecoration: 'none' }}>
                <span className="text-wrapper-2">Virtual Physical</span>
              </a>
              </p>
              <img
                className="img"
                alt="Vp logo"
                src="https://cdn.animaapp.com/projects/65a945881c395bf52b1e3e78/releases/65a9e82814bc0dc531a973f2/img/vp-logo-19@2x.png"
              />
            </div>
          </div>

          <div className="form">
            <div className="form-2">
              <div className="email-username-input">
                <div className="input">
                    <div className="input">
                    <input
                    type="text"
                    placeholder="" // You can set an initial value if needed
                    className="text-wrapper-3"
                    style={{ border: 'none' }}
                    />
                    </div>
                </div>
                <p className="p">
                  <span className="text-wrapper-4">First name</span>
                </p>
              </div>
            {/* </div> */}

            {/* <div className="form-3">
              <div className="email-username-input">
                <div className="input">
                    <div className="input">
                    <input
                    type="text"
                    placeholder="" // You can set an initial value if needed
                    className="text-wrapper-3"
                    style={{ border: 'none' }}
                    />
                    </div>
                </div>
                <p className="p">
                    <span className="text-wrapper-4">Last name</span>
                </p>
              </div>
            </div> */}

            <div className="form-3">
                <div className="email-username-input">
                  <div className="input">
                  <div className="input">
                    <input
                    type="text"
                    placeholder="" // You can set an initial value if needed
                    className="text-wrapper-3"
                    style={{ border: 'none' }}
                    />
                    </div>
                  </div>
                  <p className="p">
                    <span className="text-wrapper-4">Last name</span>
                  </p>
                </div>
                <p className="email">
                  <span className="text-wrapper-4">Email</span>
                </p>
            </div>
            </div>

            <p className="search-patient">
              <span className="text-wrapper-5">Search Patient</span>
            </p>

            <div className="untitled-design-wrapper">
              <img
                className="untitled-design"
                alt="Untitled design"
                src="https://cdn.animaapp.com/projects/65a945881c395bf52b1e3e78/releases/65a9e82814bc0dc531a973f2/img/untitled-design--13--1-1@2x.png"
              />
            </div>

            <div className="e-g-john-widgetco-wrapper">
                <div className="input">
                    <input
                    type="text"
                    placeholder="" // You can set an initial value if needed
                    className="text-wrapper-3"
                    style={{ border: 'none' }}
                    />
                </div>
                <p className="email">
                  <span className="text-wrapper-3">Email</span>
                </p>
            </div>


            {/* <div className="email"> */}
                {/* <div className="email-username-input">
                  <div className="input">
                    <div className="input">
                    <input
                    type="text"
                    placeholder="" // You can set an initial value if needed
                    className="text-wrapper-3"
                    style={{ border: 'none' }}
                    />
                    </div>
                  </div>
                  <p className="p">
                    <span className="text-wrapper-4">Email</span>
                  </p>
                </div> */}
                {/* <p className="email">
                  <span className="text-wrapper-4">Email</span>
                </p> */}
                {/* </div> */}

            {/* <div className="e-g-john-widgetco-wrapper">
                <div className="input">
                    <input
                    type="text"
                    placeholder="" // You can set an initial value if needed
                    className="text-wrapper-3"
                    style={{ border: 'none' }}
                    />
                </div>
                <p className="email">
                  <span className="text-wrapper-4">Email</span>
                </p>
            </div> */}
        {/* </div> */}

            {/* <p className="search-patient">
              <span className="text-wrapper-5">Search Patient</span>
            </p>
            <div className="untitled-design-wrapper">
              <img
                className="untitled-design"
                alt="Untitled design"
                src="https://cdn.animaapp.com/projects/65a945881c395bf52b1e3e78/releases/65a9e82814bc0dc531a973f2/img/untitled-design--13--1-1@2x.png"
              />
            </div> */}
            
            {/* <div className="e-g-john-widgetco-wrapper">
                <div className="input">
                    <input
                    type="text"
                    placeholder="" // You can set an initial value if needed
                    className="text-wrapper-3"
                    style={{ border: 'none' }}
                    />
                </div>
                <p className="e-g-john-widgetco-wrapper">
                  <span className="text-wrapper-4">Email</span>
                </p>
            </div> */}

            <div className="search-wrapper">
              <p className="search">
                <input className="span-2" placeholder="Search" type="text" />
              </p>
            </div>
          </div>
          
          <p className="good-morning-dr">
            <span className="text-wrapper-6">Good morning, Dr. Ochoa</span>
          </p>

        </div>
      </div>
    </div>
  );
};
