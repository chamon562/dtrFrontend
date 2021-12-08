import React from "react";
import ModalForm from "../Modal/ModalForm";
import PetsIcon from "@mui/icons-material/Pets";
// import Home from "../Pages/Home";
import About from "../Pages/About";
import { NavLink, Link } from "react-router-dom";
import Form from "../Form/Form";
import FormRegister from "../Form/FormRegister";
import Profile from "../Pages/Profile";
import FaceIcon from "@mui/icons-material/Face";
const Navbar = (props) => {
  console.log(props);
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <Link className="navbar-brand" to="/">
          <PetsIcon />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarsExample07"
          aria-controls="#navbarsExample07"
          adia-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarsExample07">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <NavLink className="nav-link" exact to="/">
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/about">
                About
              </NavLink>
            </li>
            {/* <li>
              <NavLink className="nav-link" to="/register">
                Create Account
              </NavLink>
            </li> */}
          </ul>
          {props.isAuth ? (
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <span
                  style={{ cursor: "pointer" }}
                  onClick={props.handleLogout}
                  className="nav-link logout-link"
                >
                  Logout
                </span>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/profile">
                  <FaceIcon />
                </NavLink>
              </li>
            </ul>
          ) : (
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <NavLink className="nav-link" to="/register">
                  Create Account
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/login">
                  Login
                </NavLink>
              </li>
            </ul>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
