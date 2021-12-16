import React, { useState, useEffect } from "react";
import axios from "axios";
const ProfileDotaStateOne = (props) => {
  const [dotaMatches, setDotaMatches] = useState([]);

  useEffect(() => {
    axios
      .get(`/api/players/${props.userData.friendId}/recentMatches`)
      .then((res) => setDotaMatches(res.data))
      .catch((error) => {
        console.log(error);
      });
  }, []);
  const playSlot = dotaMatches[0].player_slot
  console.log(props.userData.friendId);
  console.log(playSlot);
  if(playSlot <= 127){
      console.log("you are radient")
  } else {
      console.log(" you are dire homie")
  }
  //   player_slot:  Which slot the player is in. 0-127 are Radiant, 128-255 are Dire
//   if(dotaMatches[0].player_slot <= 127){
//       console.log(`you are radient`)
//   }
  return <div>profile dota stats</div>;
};

export default ProfileDotaStateOne;
