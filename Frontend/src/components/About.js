import { Box, Typography } from '@mui/material';
import React from 'react';
import '../App.css';

const About = () => {
  return (
    <div>
      <Box display="flex" flexDirection="column" alignItems="center">
        <br></br>
        <Typography sx={{ fontFamily: 'fantasy' }} variant="h3">
          Paprastas projektas sukurtas pagal savo įgudžius. Vietoje ASP .NET
          naudojau Node.js. Pradėjau mokytis .NET po naujųjų metų, tad reiktų
          dar bent mėnėsio, kad galėčiau rašyti backend su šia technologija (ar
          bent normaliai suprasti).
        </Typography>
      </Box>
    </div>
  );
};

export default About;
