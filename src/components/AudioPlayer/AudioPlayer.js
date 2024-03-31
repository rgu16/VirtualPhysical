import React from 'react';
import CheckandXButtons from 'components/CheckandXButtons';
import Eko from './Eko.wav';

function AudioPlayer({diaphragm, bell}) {
  return (
    <div>
      <h2>(Headphones recommended)</h2>

      <br></br>

      <h2>Stethoscope Recording - Diaphragm</h2>
      <audio controls>
        <source src={diaphragm} type="audio/wav" />
      </audio>
      
      <br></br>

      <h2>Stethoscope Recording - Bell</h2>
      <audio controls>
        <source src={bell} type="audio/wav" />
      </audio>

      <br></br>

      <p className="normal-2">
              <span className="text-wrapper-7">Normal?   </span>
      </p>
      <div>
        <CheckandXButtons />
      </div>
    </div>
  );
}

export default AudioPlayer;
