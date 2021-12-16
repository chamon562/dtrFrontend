import React, { useState, useEffect } from "react";
import axios from "axios";
import { Container, Typography } from "@mui/material";
import { Box } from "@mui/system";
const ProfileDotaStateOne = (props) => {
  const [dotaMatches, setDotaMatches] = useState([]);
  const [radient, setRadient] = useState(false);
  const [dire, setDire] = useState(false);

  useEffect(() => {
    axios
      .get(`/api/players/${props.userData.friendId}/recentMatches`)
      .then((res) => {
        setDotaMatches(res.data);
        if (res.data[0].player_slot <= 127) {
          setRadient(true);
        } else {
          setDire(true);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }, [radient]);
  //   console.log(dotaMatches[0].player_slot);
  console.log(radient);
  console.log(dire);
  //   player_slot:  Which slot the player is in. 0-127 are Radiant, 128-255 are Dire

  return (
    <Container maxWidth="sm">
      <Box>
        <Typography>
          {!dire ? <div>you are radient</div> : <div>You are dire</div>}
        </Typography>
      </Box>
    </Container>
  );
};

export default ProfileDotaStateOne;
