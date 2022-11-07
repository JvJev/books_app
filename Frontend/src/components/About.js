import { Box, Typography } from "@mui/material";
import React from "react";

const About = () => {
  return (
    <div>
      <Box display="flex" flexDirection="column" alignItems="center">
        <Typography sx={{ fontFamily: "fantasy" }} variant="h2">
          J.V. Baigiamasis darbas Type11 grupe
        </Typography>
        <Typography sx={{ fontFamily: "fantasy" }} variant="h3">
          Paprastas projektukas sukurtas pagal savo įgudžius.
        </Typography>
      </Box>
    </div>
  );
};

export default About;