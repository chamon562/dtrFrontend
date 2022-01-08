import React, { useState } from "react";
import ModalForm from "../Modal/ModalForm";
import PetsIcon from "@mui/icons-material/Pets";
// import Home from "../Pages/Home";
import About from "../Pages/About";
import { NavLink, Link } from "react-router-dom";
import Form from "../Form/Form";
import FormRegister from "../Form/FormRegister";
import Profile from "../Pages/profile/Profile";
import FaceIcon from "@mui/icons-material/Face";
import { TextField } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import rankTurboLogo from "../../assets/images/turboLogo.gif";
import "./Navbar.css";
import searchIcon from "../../assets/images/search.png";
const Navbar = (props) => {
  // if scrollY setActive to true
  const [navActive, setNavActive] = useState(false);
  return (
    <nav className="navbar active">
      {/* logo */}
      <div className="navLogoContainer">
        <Link to="/">
          <img src={rankTurboLogo} alt="" className="navLogo" />
        </Link>
      </div>

      <div className="searchBar">
        <input
          className="searchInput"
          type="text"
          placeholder="Search Friend ID..."
        />
        <div className="searchIconContainer">
          <img src={searchIcon} alt="" />
        </div>
      </div>
      <div className="navMenu">
        <ul className="navMenuItems">
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
        </ul>
        {props.isAuth ? (
          <ul className="navMenuItems">
            <li>
              <span
                
                onClick={props.handleLogout}
                
              >
                Logout
              </span>
            </li>
            <li>
              <NavLink to="/profile">
                <FaceIcon />
              </NavLink>
            </li>
          </ul>
        ) : (
          <ul className="navMenuItems">
            <li>
              <NavLink to="/register">Create Account</NavLink>
            </li>
            <li className="loginBtn">
              <NavLink to="/login">Login</NavLink>
            </li>
          </ul>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
