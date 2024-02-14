import React from "react";
import "./style.css";

export const SummaryFlagged = () => {
  return (
    <div className="summary-flagged">
      <div className="overlap-wrapper">
        <div className="overlap">
          <div className="overlap-group">
            <div className="buttons">
              <div className="flag-button">
                <div className="text">
                  <p className="flag-patient-as-high">
                    <span className="text-wrapper">Flag patient as high-risk</span>
                  </p>
                  <div className="danger-sign" />
                </div>
              </div>
              <div className="message-patient">
                <div className="div">
                  <img className="img" alt="Sms tracking" src="/img/sms-tracking-2.png" />
                  <p className="span-wrapper">
                    <span className="text-wrapper">Message patient</span>
                  </p>
                </div>
              </div>
              <div className="schedule-call-button">
                <div className="text-2">
                  <img className="img" alt="Calendar icon" src="/img/calendar-icon-8.png" />
                  <p className="p">
                    <span className="text-wrapper">Schedule virtual call with patient</span>
                  </p>
                </div>
              </div>
              <div className="PDF-button">
                <div className="group">
                  <p className="p">
                    <span className="text-wrapper">Print PDF</span>
                  </p>
                  <img className="folder-add" alt="Folder add" src="/img/folder-add-2.png" />
                </div>
              </div>
            </div>
            <div className="summary-text">
              <div className="frame">
                <p className="span-wrapper-2">
                  <span className="span">Demographics</span>
                </p>
                <img className="line" alt="Line" src="/img/line-4-14.png" />
                <p className="div-2">
                  <span className="text-wrapper-2">
                    Taylor Swift, female, 5’11’’, 130 lbs, 12/13/1989, 33 yo, patient has history of high blood pressure
                    and abnormal heart rhythms
                    <br />
                  </span>
                  <span className="text-wrapper-3">Notes:</span>
                </p>
              </div>
              <div className="frame-2">
                <p className="span-wrapper-2">
                  <span className="span">General</span>
                </p>
                <img className="line" alt="Line" src="/img/line-4-14.png" />
                <p className="div-2">
                  <span className="text-wrapper-2">
                    Cyanosis: 0, Pallor: +1, Yellowing in eyes: 0, CRT: 3sec
                    <br />
                  </span>
                  <span className="text-wrapper-3">Notes:</span>
                </p>
              </div>
              <div className="frame-3">
                <p className="span-wrapper-2">
                  <span className="span">Lungs</span>
                </p>
                <img className="line" alt="Line" src="/img/line-4-14.png" />
                <p className="div-2">
                  <span className="text-wrapper-2">
                    Breathing rate: 30 breaths/min, Labored breathing? moderate, Posterior POV: left lower lobe abnormal
                    <br />
                  </span>
                  <span className="text-wrapper-3">
                    Notes: Based on the phonocardiogram graph and the lung sounds, the patient seems to have pneumonia.
                  </span>
                </p>
              </div>
              <div className="frame-4">
                <p className="span-wrapper-2">
                  <span className="span">Pulses</span>
                </p>
                <img className="line" alt="Line" src="/img/line-4-14.png" />
                <p className="div-2">
                  <span className="text-wrapper-2">
                    Radial: +2, Brachial: +1, Carotid: +2, Dorsalis pedis: 0, BP: 120/80, Heart rate: 88bpm, JVP:
                    normal, Carotid auscultation: abnormal
                    <br />
                  </span>
                  <span className="text-wrapper-3">
                    Notes: Blood pressure normal. Carotid artery auscultation might indicate carotid stenosis. Patient
                    needs to obtain a carotid ultrasound asap.
                  </span>
                </p>
              </div>
              <div className="frame-5">
                <p className="span-wrapper-2">
                  <span className="span">Abdomen</span>
                </p>
                <img className="line" alt="Line" src="/img/line-4-14.png" />
                <p className="div-2">
                  <span className="text-wrapper-2">
                    Top row, left to right: 3, 2, 1; Middle row, left to right: 2, 0, 0; Bottom row, left to right: 0,
                    0, 0<br />
                  </span>
                  <span className="text-wrapper-3">
                    Notes: Due to high tenderness in liver region, liver is likely enlarged and could indicate
                    congestive heart failure. Patient must undergo __ dietary changes and begin taking&nbsp;&nbsp;__
                    medications.
                  </span>
                </p>
              </div>
              <div className="frame-wrapper">
                <div className="frame-6">
                  <p className="span-wrapper-2">
                    <span className="span">Heart</span>
                  </p>
                  <img className="line" alt="Line" src="/img/line-4-14.png" />
                  <p className="div-2">
                    <span className="text-wrapper-2">
                      Parasternal heave: yes, Tricuspid/mitral thrill: no, Pulmonary/tricuspid thrill: yes,
                      Aortic/pulmonary thrill: no
                      <br />
                      HEART AUSCULTATION -- DIAPHRAGM - A: abnormal, P: normal, T: normal, M: normal -- BELL - A:
                      normal, P: anormal, T: normal, M: normal
                      <br />
                      ECG: abnormal
                      <br />
                    </span>
                    <span className="text-wrapper-3">
                      Notes: Patient having atrial fibrillation, needs to go to ER asap.
                    </span>
                  </p>
                </div>
              </div>
              <div className="frame-7">
                <p className="span-wrapper-2">
                  <span className="span">Legs</span>
                </p>
                <img className="line" alt="Line" src="/img/line-4-14.png" />
                <p className="div-2">
                  <span className="text-wrapper-2">
                    Pitting edema - Right calve: +3, Left calve: 0<br />
                  </span>
                  <span className="text-wrapper-3">Notes:</span>
                </p>
              </div>
            </div>
          </div>
          <div className="tabs">
            <div className="demographics-wrapper">
              <p className="span-wrapper-3">
                <span className="text-wrapper-4">Demographics</span>
              </p>
            </div>
            <div className="general-wrapper">
              <p className="span-wrapper-3">
                <span className="text-wrapper-4">General</span>
              </p>
            </div>
            <div className="lungs-wrapper">
              <p className="span-wrapper-3">
                <span className="text-wrapper-4">Lungs</span>
              </p>
            </div>
            <div className="pulses-wrapper">
              <p className="span-wrapper-3">
                <span className="text-wrapper-4">Pulses</span>
              </p>
            </div>
            <div className="abdomen-wrapper">
              <p className="span-wrapper-3">
                <span className="text-wrapper-4">Abdomen</span>
              </p>
            </div>
            <div className="heart-wrapper">
              <p className="span-wrapper-3">
                <span className="text-wrapper-4">Heart</span>
              </p>
            </div>
            <div className="legs-wrapper">
              <p className="span-wrapper-3">
                <span className="text-wrapper-4">Legs</span>
              </p>
            </div>
            <div className="summary-wrapper">
              <p className="span-wrapper-3">
                <span className="text-wrapper-4">Summary</span>
              </p>
            </div>
          </div>
          <div className="NAV">
            <div className="profile">
              <div className="profile-2">
                <div className="overlap-group-2">
                  <p className="dr-david-ochoa">
                    <span className="text-wrapper-5">Dr. David Ochoa</span>
                  </p>
                  <p className="cardiologist">
                    <span className="text-wrapper-6">Cardiologist</span>
                  </p>
                </div>
                <img className="arrow" alt="Arrow" src="/img/arrow-6.png" />
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
                <span className="text-wrapper-7">Virtual Physical</span>
              </p>
              <img className="VP-logo-2" alt="Vp logo" src="/img/vp-logo-6.png" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
