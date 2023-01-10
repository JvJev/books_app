import React, { useState } from 'react';
import { AppBar, Tab, Tabs, Toolbar, Typography } from '@mui/material';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import { NavLink } from 'react-router-dom';
const Header = () => {
  const [value, setValue] = useState();
  return (
    <div>
      <AppBar sx={{ backgroundColor: '#425e45' }} position="fixed">
        <Toolbar>
          <NavLink to="/" style={{ color: 'white' }}>
            <Typography>
              <MenuBookIcon style={{ color: 'white' }} />
            </Typography>
          </NavLink>
          <Tabs
            sx={{ ml: 'auto' }}
            textColor="inherit"
            indicatorColor="primary"
            value={value}
            onChange={(e, val) => setValue(val)}
          >
            <Tab LinkComponent={NavLink} to="/add" label="Add book" />
            <Tab LinkComponent={NavLink} to="/books" label="Books" />
            <Tab LinkComponent={NavLink} to="/about" label="This project" />
          </Tabs>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;
