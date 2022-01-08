import React, { useState, useEffect } from "react";
import TextField from "@mui/material/TextField";
import axios from "axios";
import {
  Button,
  Container,
  CssBaseline,
  FormGroup,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import FormLogin from "../../Form/FormLogin";
import Main from "./Main/Main";
import HeroList from "./HeroList/HeroList";
import "./Home.css";
const Home = (props) => {
  console.log(props);
  // TODO do a state for friendId and setFriend id
  // when doing the handle submit the friendId by default would be an empty string
  // then target the string interpolation an axios.get(`http://localhost:8000/api/users/path/${setFriendId}`)
  // so that the user would be setFriendId to the user e.target.value
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const [heroListData, setHeroListData] = useState([]);
  const [selectedHero, setSelectedHero] = useState(0);

  useEffect(() => {
    const getAllUsers = async () => {
      const usersData = await axios.get(
        "http://localhost:8000/api/users/all-users"
      );
      setHeroListData(usersData.data);
    };
    return getAllUsers();
  }, []);

  console.log(heroListData);
  const handleSearchInput = (e) => {
    setSearchValue(e.target.value);
  };

  const callSearch = (e) => {
    e.preventDefault();
    props.search(searchValue);
  };
  return (
    <div className="home">
      <div className="mainTitle">
        <h1> Dota 2 Turbo Rank</h1>
      </div>
      {heroListData.length > 0 && (
        <>
          <Main selectedHero={selectedHero} heroListData={heroListData} />
          <HeroList
            setSelectedHero={setSelectedHero}
            heroListData={heroListData}
          />
        </>
      )}
    </div>
  );
};

export default Home;
