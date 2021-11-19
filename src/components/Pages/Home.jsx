import React, { useState, useEffect } from "react";
import TextField from "@mui/material/TextField";
import axios from "axios";

const Home = (props) => {
  console.log("props", props)
  // TODO do a state for friendId and setFriend id
  // when doing the handle submit the friendId by default would be an empty string
  // then target the string interpolation an axios.get(`http://localhost:8000/api/users/path/${setFriendId}`)
  // so that the user would be setFriendId to the user e.target.value
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [searchValue, setSearchValue] = useState("");

  // useEffect(() => {
  //   axios
  //     .get("http://localhost:8000/api/users/path/179940588")
  //     .then((res) => setItems(res.data))
  //     .catch((error) => {
  //       setIsLoaded(true);
  //       setError(error);
  //       console.log(error, "Please make sure you put in the correct friend id");
  //     });
  // }, []);
  const handleSearchInput = (e) => {
    setSearchValue(e.target.value);
  };
  
  const callSearch =(e) =>{
    e.preventDefault();
    props.search(searchValue)
    
  }
  return (
    <div>
      <h1>Dota 2 Ranked Turbo</h1>
      <h1>Lets get these points</h1>
      <p>Enter Friend Id to check your rank</p>
      {/* if the searchValue is blank send back friend id not found maybe else return the user info */}
      <form>
        <TextField
          id="standard-basic"
          label="Friend ID"
          variant="standard"
          value={searchValue}
          onChange={handleSearchInput}
          type="text"
        />
        <TextField onClick={callSearch} value="SEARCH"  type="submit" />
      </form>
      {searchValue === false ? <div> 
        <h1>Player name: {}</h1>
        <h1>Player Rank: ....</h1>
          </div> : <h1></h1>} 
          
    
    </div>
  );

  //   return (
  //
  //   );
};

export default Home;
