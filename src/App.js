import React, { useState, useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
import Home from "./components/Pages/Home/Home";
import axios from "axios";
import jwt_decode from "jwt-decode";
import setAuthToken from "./utils/setAuthToken";
import ModalForm from "./components/Modal/ModalForm";
import Navbar from "./components/Navbar/Navbar";
import FormLogin from "./components/Form/FormLogin";
import FormRegister from "./components/Form/FormRegister";
import About from "./components/Pages/About";
import Form from "./components/Form/Form";
import Footer from "./components/Pages/Footer";
import SnackBar from "./components/SnackBar/SnackBar";
import Profile from "./components/Pages/profile/Profile";
import GetDotaApi from "./components/api/GetDotaApi";
import Main from "./components/Pages/Home/Main/Main";
import { Typography } from "@mui/material";
import SearchBar from "./components/SearchBar/SearchBar";
import SearchPage from "./components/Pages/SearchPage/SearchPage";

const PrivateRoute = ({ children }) => {
  console.log("😁", children);
  const user = localStorage.getItem("jwtToken");
  return user ? children : <Navigate to="/login" />;
};

function App() {
  const [searchData, setSearchData] = useState([]);
  const [isAuthenticated, setIsAuthenticated] = useState(true);
  const [currentUser, setCurrentUser] = useState("");
  const [error, setError] = useState("");
  const [userInfo, setUserInfo] = useState([]);
  const [dotaUser, setDotaUser] = useState("");
  const search = (searchValue) => {
    axios
      .get(`http://localhost:8000/api/users/path/${searchValue}`)
      .then((res) => {
        setSearchData(res.data);
      })
      .catch((error) => {
        setError(error);
      });
  };
console.log(searchData)
  // useEffect(()=>{

  //   axios
  //     .get(`/api/users/${currentUser.id}`)
  //     .then((res) => {
  //       setUserInfo(res.data);
  //       return res.data;
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });

  // },[setUserInfo])

  useEffect(() => {
    let token;
    if (!localStorage.getItem("jwtToken")) {
      setIsAuthenticated(false);
    } else {
      token = jwt_decode(localStorage.getItem("jwtToken"));
      setAuthToken(localStorage.jwtToken);
      setCurrentUser(token);
      setIsAuthenticated(true);
    }
  }, []);
  console.log(`Current User ${currentUser}`);
  console.log(`Authenticated ${isAuthenticated}`);

  const nowCurrentUser = (userData) => {
    console.log("nowCurrentUser is working...");
    setCurrentUser(userData);
    setIsAuthenticated(true);
  };
  // console.log(currentUser.id);

  console.log("user info: ", userInfo);
  // console.log("😐", userInfo);

  // useEffect(() => {
  //   axios.get(`/api/players/${userInfo.friendId}`)
  //   .then((res)=>{
  //     setDotaUser(res.data)
  //   })

  // }, [dotaUser]);

  // await axios
  //   .get(`https://api.opendota.com/api/players/${userInfo.friendId}`)
  //   .then((res) => {
  //     setDotaUser(res.data);
  //   })
  //   .catch((error) => console.log(error));

  console.log("😪", dotaUser);
  const handleLogout = () => {
    if (localStorage.getItem("jwtToken")) {
      localStorage.removeItem("jwtToken");
      setCurrentUser(null);
      setIsAuthenticated(false);
    }
  };
  return (
    <div className="main">
      <Navbar handleLogout={handleLogout} isAuth={isAuthenticated} search={search} searchData={searchData}/>

      <div>
        <Routes>
          <Route
            element={<Home search={search} searchData={searchData} />}
            path="/"
          />
          <Route element={<SearchPage />} path="/searchPage"/>
          <Route path="/about" element={<About />} />
          <Route path="/register" element={<Form />} />
          <Route
            path="/login"
            element={
              <FormLogin
                nowCurrentUser={nowCurrentUser}
                setIsAuthenticated={setIsAuthenticated}
                user={currentUser}
              />
            }
          />
          <Route
            path="/profile"
            element={
              <PrivateRoute>
                <Profile
                  userInfo={userInfo}
                  user={currentUser}
                  nowCurrentUser={nowCurrentUser}
                />
              </PrivateRoute>
            }
          />
        </Routes>
      </div>
      {/* <ModalForm /> */}
      {/* {<h1>{searchData.name}</h1>}
      {searchData.turboRank ?<h1>Turbo Rating: {searchData.turboRank}</h1> :(!searchData) ? <h1>This Person does not have a Rank turbo account.</h1> : <div></div>} */}
      {/* if the searchValue is blank send back friend id not found maybe else return the user info */}
      {/* <FormLogin/> */}
      {/* <Form /> */}
      <Footer />
    </div>
  );
}

export default App;
