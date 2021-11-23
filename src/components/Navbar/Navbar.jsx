import { AppBar, IconButton, Menu, MenuItem, Toolbar } from "@mui/material";
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
          <ModalForm />
          
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;
