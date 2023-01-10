import { Button, Typography, Box } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import "../App.css";

const Home = () => {
  return (
    <div className='superHome'>
      <Box display="flex" flexDirection="column" alignItems="center">
        <Button
          LinkComponent={Link}
          to="/books"
          sx={{ marginTop: 15, background: 'orangered' }}
          variant="contained"
        >
          <Typography variant="h3">See the list table</Typography>
        </Button>
      </Box>
    </div>
  );
};

export default Home;
