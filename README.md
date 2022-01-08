# Backend issue

1. // TODO FIX USER BEING ABLE TO REGISTER SAME FRIEND ID AND EMAIL
   // THE ERROR IS NOT GOING OFF WHEN DB IS FINDONE BY EMAIL OR FRIEND ID
   // Should be if the user exist they cannot create a new user

- fixed to where the user can search by friendId

```js
router.get("/path/:friendId", (req, res) => {
  // figured out how to have the user be able to place a friendId to locatea player
  // before i was doing {friendId}
  // and trying parseInt because the error kept saying value is a string
  // then i realized by going here that app.get('/path/:friendId', function(req, res) {
  //   res.send("tagId is set to " + req.params.friendId);
  // }); sent back the response of the friendId i put in the url
  // it made me understand that the {friendId} i was using before in db.User.findOne
  // may have not been getting a value to pass in it so it didnt know?
  // router.get() has to have /path/:friendId and db.User.findOne(friendId: req.params.friendId)
  // friendId had to be defined so that was defined with req.params.friendId
  //Postman http://localhost:8000/api/users/path/179940588
  db.User.findOne({ friendId: req.params.friendId })
    .then((user) => {
      res.send(user);
    })
    .catch((error) => {
      console.log("Error: ", error);
    });
});
```

# code save

- backend/routes/users.js
  - register route save later
  ```js
  const friendIdExist = db.User.findOne({ friendId: req.body.friendId });
  if (friendIdExist) {
    return res
      .status(400)
      .json(
        "Someone has already registered this Friend ID, are you sure this ID belongs"
      );
  }
  ```

## form idea

1. https://www.youtube.com/watch?v=

# Road Bloccs

## CORS ERROR preflight stuck on three days FIXED

1. I was constantly getting a cors error. I was trying to use my api that I made with mongodb. Get the friendId from there and place that in the public api to get the users dota data. Heres what I went through those 3 days of trying to figure this out.

- I tried using PROMISE.all to call 2 apis in an array and use .then() to send back a response to get data from both my api from mongodb which is my created user and use my users friend id to be placed in the public dota api through string interpolation.
- through different research i thought it was based on how i was getting info form the api. when it was about going from http request to https which was a browser issue.
- when I found out the 2nd day its mainly because of a cors. I had still went back and double checked if I was properlly doing the axios calls.
- The research lead me to looking at others to see if they are doing api calls from their custom database to get their user id to be used in another public api, but could find very little info.
- I stumbled upon a video by Channel about how to properlly set up a proxy with my home page and all, because prior I ran into seeing this kind of solution, but was still confused as to how to use it. The video showed me at a steady pace on where to place urls and to download a package called "http-proxy-middleware"

- Solution that helped me came from this video: (https://www.youtube.com/watch?v=4B5WgTiKIOY&t=236s)

```json
<!-- my package.json I added the proxy and the url being the public api and the home page is my react app localhost -->
"name": "frontend",
"version": "0.1.0",
"private": true,
"proxy": "https://api.opendota.com",
"homepage": "http://localhost:3000",
```

```js
// inside src folder Added a file called setupProxy.js and this was inside.
const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = (app) => {
  app.use(
    // my end point for my url which was https://api.opendota.com/api/players/${user.friendId} this would be what I was using before and getting cors error.
    createProxyMiddleware("/api/players", {
      // the base url
      target: "https://api.opendota.com",
      changeOrigin: true,
    })
  );
};
```

```js
// my axios call in Profile.js
const myDotaUser = async () => {
  axios
    .get(`/api/players/${props.user.friendId}`, {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    })
    .then((res) => {
      setDotaData(res.data);
    })
    .catch((error) => {
      console.log(error);
    });
};
```

2. next issue was, that I was thinking over night that why was my dota data not showing after the user logged in. I check the axios call and it was correct and The data was logged showing in the console. But it would error when trying to render the data.So I figured it is not rendering that means maybe I could use a loading state to give it a second to refresh and show up and it worked. 
```js
// Added to Profile.jsx 
import React, { useEffect, useState } from "react";
import FaceIcon from "@mui/icons-material/Face";
import axios from "axios";
import { Container, Typography } from "@mui/material";

const Profile = (props) => {

  const [userData, setUserData] = useState([]);
  const [dotaData, setDotaData] = useState([]);
  // created state for isLoading and set it to true so when the browser first starts it will show loading intill the data is done being fetched to be rendered. 
  const [isLoading, setIsLoading] = useState(true);
  const myDotaUser = async () => {
    axios
      .get(`/api/players/${props.user.friendId}`, {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      })
      .then((res) => {
        setDotaData(res.data);
        // added the setIsLoading in the .then() promise
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const fetchData = async () => {
    try {
      const res = await axios.get(
        `http://localhost:8000/api/users/${props.user.id}`
      );
      setUserData(res.data);
      return res.data;
    } catch (error) {
      console.log(error);
    }
    return;
  };
  useEffect(() => {
    myDotaUser();
    fetchData();
  }, [setDotaData]);
// if logic to show isLoading is true then return a basic div to show a loading. later to be styled.
  if (isLoading) {
    return <div>Loading...</div>;
  }
  console.log(dotaData);

  return (
    <div style={{ minHeight: " 100vh" }}>
      <Container>
      {/*the Data that was error and undefined intill giving it a loading time for it to show.  */}
        <h1>{dotaData.profile.personaname}</h1>
        <img src={dotaData.profile.avatarfull} alt="" />
        <h1>Tubo Rank: {userData.turboRank}</h1>
      </Container>
    </div>
  );
};

export default Profile;


// home search
<div
      style={{
        background:
          "linear-gradient(90deg,rgb(39, 176, 255) 0%,rgb(0, 232, 236) 100%)",
        height: "100vh",
      }}
    >
      <Box
        sx={{
          textAlign: "center",
        }}
      >
        <Typography sx={{ color: "#fff" }} mt="2" variant="h1">
          Dota 2 Ranked Turbo
        </Typography>
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
                variant="h4"
                sx={{ textShadow: "6px 6px 0px rgba(0,0,0,0.2)" }}
              >
                Turbo Rating
                <Typography variant="h3" sx={{ color: "#C0C0C0" }}>
                  {props.searchData.turboRank}
                </Typography>
              </Typography>
            ) : props.searchData === "" ? (
              <Typography variant="h4" sx={{ color: "red" }}>
                This Person does not have a Rank turbo account.
              </Typography>
            ) : (
              <div></div>
            )}
          </FormGroup>
        </Container>
        <img
          style={{ height: "450px", borderRadius: "10px" }}
          src="images/turboLogo.gif"
          alt=""
        />

        {/* if the searchValue is blank send back friend id not found maybe else return the user info */}
        {/* <CssBaseline /> */}
      </Box>
    </div>
```
