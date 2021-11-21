import React, { useState } from "react";
import "./App.css";
import Home from "./components/Pages/Home";
import axios from "axios";
import Form from "./components/Form/Form";

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

      {<h1>{searchData.name}</h1>}
      {searchData.turboRank ?<h1>Turbo Rating: {searchData.turboRank}</h1> :(!searchData) ? <h1>This Person does not have a Rank turbo account.</h1> : <div></div>}
      <Form />
    </div>
  );
}

export default App;
