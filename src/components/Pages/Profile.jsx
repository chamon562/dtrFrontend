import React, { useEffect, useState } from "react";
import FaceIcon from "@mui/icons-material/Face";
import axios from "axios";
// TODO MAKE 2 SEPERATE API CALLS THE FIRST ONE TO GET THE ACCOUNT USER LOGGED IN friend.id
// TODO THEN PASS user Friendid inside the api call to get dota info back from the user.
const Profile = (props) => {
  console.log(props.user.id);
  const [userData, setUserData] = useState([]);
  const [dotaData, setDotaData] = useState();

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_SERVER_URL}/api/users/${props.user.id}`)
      .then((res) => {
        setUserData(res.data);
        return res.data;
      })
      .catch((error) => {
        console.log(error);
      });
    fetchData();
  }, []);
  console.log(userData.friendId);

  const fetchData = () => {
    fetch(`https://api.opendota.com/api/players/${userData.friendId}`)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setDotaData(data);
      });
  };
console.log(dotaData)
  return (
    <div style={{ minHeight: " 100vh" }}>
      <div>
        <h1>{dotaData.profile.personaname}</h1>
        <FaceIcon />
        <h1>Tubo Rank: {userData.turboRank}</h1>
      </div>
    </div>
  );
};

export default Profile;
