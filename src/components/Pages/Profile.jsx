import React, { useState } from "react";
import FaceIcon from "@mui/icons-material/Face";
import axios from "axios";

const Profile = (props) => {
  const [userData, setUserData] = useState([]);
  console.log(props);
  axios
    .get(`${process.env.REACT_APP_SERVER_URL}/api/users/${props.user.id}`)
    .then((res) => {
      setUserData(res.data);
    })
    .catch((error) => {
      console.log(error);
    });
  console.log(userData);
  return (
    <div style={{ minHeight: " 100vh" }}>
      <div>
        <h1>{props.user.name}</h1>
        <FaceIcon />
        <h1>Tubo Rank: {userData.turboRank}</h1>
      </div>
    </div>
  );
};

export default Profile;
