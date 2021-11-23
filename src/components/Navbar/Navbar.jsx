import React from "react";
import ModalForm from "../Modal/ModalForm";
import Home from "../Pages/Home";
import { NavLink, Link } from "react-router-dom";
const Navbar = () => {
  return(
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <Link className="navbar-brand"> Home </Link>
      </div>
    </nav>
  ) 
};

export default Navbar;
