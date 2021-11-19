import React, { useState } from "react";
import "./App.css";
import Home from "./components/Pages/Home";
import axios from "axios";

function App() {
  const [searchData, setSearchData] = useState([]);
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
  return (
    <div>
      <Home search={search} />
      {/* if the searchValue is blank send back friend id not found maybe else return the user info */}

      {<h1>{search.name}</h1>}
      {<h1>{search.turboRank}</h1>}
    </div>
  );
}

export default App;
