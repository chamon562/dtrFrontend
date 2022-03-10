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
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import { fontSize } from "@mui/system";
import SearchPage from "../Pages/SearchPage/SearchPage";
const Navbar = (props) => {
  // if scrollY setActive to true
  console.log(props);
  const [navActive, setNavActive] = useState(false);
  const [searchValue, setSearchValue] = useState("");

  // the search is working and is logging data when clicking the search icon. but pauses in debugger
  const handleSearchInput = (e) => {
    setSearchValue(e.target.value);
  };

  const callSearch = (e) => {
    e.preventDefault();
    props.search(searchValue);
  };

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
          onChange={handleSearchInput}
        />
        <div className="searchIconContainer">
          {/* TODO onClick is making it not redirect to searchPage 
            this page idea would be to redirect the user to another page 
            displaying the searched user data name and rank only
            create a benifit for unsigned users to sign up so they gain more info
          */}
          {/* 
            code example saying if the the state is greater than 0 then and only then <Redirect to={{pathname: "/searchpage"}} />
          {this.state.results.length > 0 &&
          <Redirect to={{
            pathname: '/results',
            state: { results: this.state.results }
          }}/> */}

          <Link  to="/searchPage">
            <img  src={searchIcon} alt="" />
          </Link>
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
            <li onClick={props.handleLogout}>Logout</li>
            <li>
              <NavLink to="/profile">
                <AccountBoxIcon sx={{ fontSize: 40 }} />
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
