import { Box, Typography } from '@mui/material';
import React from 'react';
import "../App.css";


const About = () => {
  return (
    <div>
      <Box display="flex" flexDirection="column" alignItems="center">
        <br></br>
        <Typography sx={{ fontFamily: 'fantasy' }} variant="h3">
          Paprastas projektukas sukurtas pagal savo įgudžius. Panaudota:
          <div ></div>
          <ul className='flex right'>
            <li>Controllers</li>
            <li>Midleware</li>
            <li>Routing</li>
            <li>Mongo DB</li>
            <li> CRUD</li>
            <li>MUI</li>
          </ul>
        </Typography>
      </Box>
    </div>
  );
};

export default About;
