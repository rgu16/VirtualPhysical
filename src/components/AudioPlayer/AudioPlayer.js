import React from 'react';
import CheckandXButtons from 'components/CheckandXButtons';

function AudioPlayer(props) {
  return (
    <div>
      <h2>(Headphones recommended)</h2>

      <br></br>

      <h2>Stethoscope Recording - Diaphragm</h2>
      <audio controls>
        <source src={props.diaphragm} type="audio/wav" />
      </audio>
      
      <br></br>

      <h2>Stethoscope Recording - Bell</h2>
      <audio controls>
        <source src={props.bell} type="audio/wav" />
      </audio>

      <br></br>

      <p className="normal-2">
              <span className="text-wrapper-7">Normal?   </span>
      </p>
      <div>
        <CheckandXButtons setStatus={props.setStatus} status={props.status}
                          tab={props.tab} name={props.name}
                          proxy={props.proxy} token={props.token}/>
      </div>
    </div>
  );
}

export default AudioPlayer;
