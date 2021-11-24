import React, { useState, useEffect } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import "./App.css";
import Home from "./components/Pages/Home";
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
const PrivateRoute = ({ component: Component, ...rest }) => {
  const user = localStorage.getItem("jwtToken");
  return (
    <Route
      {...rest}
      render={(props) => {
        return user ? (
          <Component {...rest} {...props} />
        ) : (
          <Redirect to="/login" />
        );
      }}
    />
  );
};

function App() {
  const [searchData, setSearchData] = useState([]);
  const [isAuthenticated, setIsAuthenticated] = useState(true);
  const [currentUser, setCurrentUser] = useState("");

  const search = (searchValue) => {
    axios
      .get(`http://localhost:8000/api/users/path/${searchValue}`)
      .then((res) => {
        setSearchData(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

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

  const handleLogout = () => {
    if (localStorage.getItem("jwtToken")) {
      localStorage.removeItem("jwtToken");
      setCurrentUser(null);
      setIsAuthenticated(false);
    }
  };

  return (
    <div className="main" >
      <Navbar handleLogout={handleLogout} isAuth={isAuthenticated} />
      <div >
        <Switch>
          <Home exact path="/" search={search} searchData={searchData} />
          <Route path="/about" component={About} />
          <Route path="/register" component={Form} />
          <Route path="/login" component={FormLogin} />
        </Switch>
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
