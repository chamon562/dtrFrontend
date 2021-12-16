import React, { useEffect, useState } from "react";
import FaceIcon from "@mui/icons-material/Face";
import axios from "axios";
import { Container, Typography } from "@mui/material";
// TODO MAKE 2 SEPERATE API CALLS THE FIRST ONE TO GET THE ACCOUNT USER LOGGED IN friend.id
// TODO THEN PASS user Friendid inside the api call to get dota info back from the user.
const Profile = (props) => {
  console.log(props.user.id);
  console.log(props);
  const [userData, setUserData] = useState([]);
  const [dotaData, setDotaData] = useState([]);
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

  if (isLoading) {
    return <div>Loading...</div>;
  }
  console.log(dotaData);

  return (
    <div style={{ minHeight: " 100vh" }}>
      <Container>
        <h1>{dotaData.profile.personaname}</h1>
        <img src={dotaData.profile.avatarfull} alt="" />
        <h1>Tubo Rank: {userData.turboRank}</h1>
      </Container>
    </div>
  );
};

export default Profile;
