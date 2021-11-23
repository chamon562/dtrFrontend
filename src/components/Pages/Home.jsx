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
import FormLogin from "../Form/FormLogin";

const Home = (props) => {
  console.log("props", props);
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

  const callSearch = (e) => {
    e.preventDefault();
    props.search(searchValue);
  };
  return (
    <div>
      <Box
        sx={{
          background:
            "linear-gradient(90deg,rgb(39, 176, 255) 0%,rgb(0, 232, 236) 100%)",
          height: "100vh",
          textAlign: "center",
        }}
      >
        <Typography sx={{ color: "#fff" }} mt="2" variant="h1">
          Dota 2 Ranked Turbo
        </Typography>
        <img
          style={{ height: "450px", borderRadius: "10px" }}
          src="images/turboLogo.gif"
          alt=""
        />
        <Typography sx={{ color: "#fff" }} variant="h3">
          Lets get these points
        </Typography>
        {/* if the searchValue is blank send back friend id not found maybe else return the user info */}
        {/* <CssBaseline /> */}
        <Container fixed maxWidth="sm">
          <FormGroup>
            <TextField
              id="standard-basic"
              label="Friend ID"
              variant="standard"
              value={searchValue}
              onChange={handleSearchInput}
              type="text"
            />
            <Button variant="outlined" onClick={callSearch} type="submit">
              Submit
            </Button>
            <p>Enter Friend Id to check rank</p>
            {
              <Typography
                variant="h2"
                sx={{
                  color: "#fff",
                  textShadow: "6px 6px 0px rgba(0,0,0,0.2)",
                }}
              >
                {props.searchData.name}
              </Typography>
            }
            {props.searchData.turboRank ? (
              <Typography
                variant="h2"
                sx={{ textShadow: "6px 6px 0px rgba(0,0,0,0.2)" }}
              >
                Turbo Rating
                <Typography variant="h1" sx={{ color: "#C0C0C0" }}>
                  {props.searchData.turboRank}
                </Typography>
              </Typography>
            ) : !props.searchData ? (
              <Typography variant="h3" sx={{ color: "red" }}>
                This Person does not have a Rank turbo account.
              </Typography>
            ) : (
              <div></div>
            )}
          </FormGroup>
        </Container>
      </Box>
    </div>
  );
};

export default Home;
