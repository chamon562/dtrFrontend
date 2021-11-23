import { AppBar, Button, IconButton, Menu, MenuItem, Toolbar, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import PetsIcon from "@mui/icons-material/Pets";
import ModalForm from "../Modal/ModalForm";
const Navbar = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <PetsIcon />
          </IconButton>
          {/* <ModalForm /> */}
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            News
          </Typography>
          <MenuItem>About</MenuItem>
          <MenuItem>Leader Board</MenuItem>
          <ModalForm/>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;
