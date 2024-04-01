import * as React from 'react';
import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { orange } from '@mui/material/colors';
import AudioPlayer from "components/AudioPlayer/AudioPlayer.js"

export default function MitralPopover(props) {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;


  
  return (
    <div>
      <Button 
        aria-describedby={id} 
        variant="contained" 
        color="error"
        onClick={handleClick} 
        style={{ padding: 1, minWidth: 25 }}> 
      M
      </Button>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
            vertical: 'top',
            horizontal: 'left',
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'left',
          }}
      >
            <Typography sx={{ p: 2 }}>
                <div>
                    <h1>APEX</h1>
                    <br></br>
                    <AudioPlayer diaphragm={props.diaphragm} bell={props.bell}
                                 setStatus={props.setStatus} status={props.status}
                                 tab={props.tab} name={props.name}
                                 proxy={props.proxy} token={props.token}
                                 ></AudioPlayer>
                </div>
            </Typography>
      </Popover>
    </div>
  );
}