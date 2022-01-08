import React, { useState, useEffect } from "react";
import axios from "axios";
import { Container, Typography } from "@mui/material";
import { Box } from "@mui/system";

const ProfileDotaStateOne = (props) => {
  console.log(props);
  console.log(props.userData);
  console.log(props.userData.turboRank);
  const [dotaMatches, setDotaMatches] = useState([]);
  const [radiant, setRadiant] = useState(false);
  const [dire, setDire] = useState(false);
  const [turboRank, setTurboRank] = useState(props.userData.turboRank);
  console.log("🧠", turboRank);
  useEffect(() => {
    axios
      .get(`/api/players/${props.userData.friendId}/recentMatches`)
      .then((res) => {
        setDotaMatches(res.data[0]);

        if (res.data[0].player_slot <= 127) {
          setRadiant(true);
        } else {
          setDire(true);
        }
      })

      .catch((error) => {
        console.log(error);
      });
  }, [setDotaMatches]);
  console.log(dotaMatches);

  // its important to know what the game mode is and what player_slot they were on to give logic to add or lose points
  /*
things needed to determine your win
dotaMatches.profile.game_mode === 23
dotaMatches.profile.player_slot <=127 you are radient
and radiant_win: true then + 20
else 
dotaMatches.profile.game_mode === 23
dotaMatches.profile.player_slot <=127
radient_win: false then - 20

props.userData.turboRank += 20
*/

  const updateTurboRank = () => {
   
    if (
      dotaMatches.game_mode === 23 &&
      dotaMatches.player_slot <= 127 &&
      dotaMatches.radiant_win === true
    ) {
      axios
        .put(`api/users/${props.user.id}`, { turboRank: turboRank })
        .then((res) => {
          setTurboRank(res.data.turboRank + 20);
          console.log("👻", turboRank)
        })
        .catch((error) => console.log(error));
    }
    // if player is radiant side and loses -20 from turboRank
    else if (
      dotaMatches.game_mode === 23 &&
      dotaMatches.player_slot <= 127 &&
      dotaMatches.radiant_win === false
    ) {
      axios
        .put(`api/users/${props.user.id}`, { turboRank: turboRank })
        .then((res) => {
          setTurboRank(res.data.turboRank - 20);
          console.log("👻", turboRank)
        })
        .catch((error) => console.log(error));
    }else
    // if player is DIRE side win condition + 20
    // game_mode: 23 means its turbo
    // player_slot >= 128 making them dire that game
    // radiant_win: false means that dire won
    if (
      dotaMatches.game_mode === 23 &&
      dotaMatches.player_slot >= 128 &&
      dotaMatches.radiant_win === false
    ) {
      axios
        .put(`api/users/${props.user.id}`, { turboRank: turboRank })
        .then((res) => {
          setTurboRank(res.data.turboRank + 20);
          console.log("👻", turboRank)
        })
        .catch((error) => console.log(error));
    }else
    // if player is Dire lose condition -20
 if (
      dotaMatches.game_mode === 23 &&
      dotaMatches.player_slot >= 128 &&
      dotaMatches.radiant_win === true
    ) {
      axios
        .put(`api/users/${props.user.id}`, { turboRank: turboRank })
        .then((res) => {
          setTurboRank(res.data.turboRank - 20);
          console.log("👻", turboRank);
        })
        .catch((error) => console.log(error));
    }
  };
  useEffect(() => {
    updateTurboRank();
  }, [dotaMatches]);
  //   // radient win + 20 || radient loss - 20
  //   if (
  //     // game_mode: 23 means turbo
  //     dotaMatches.profile.game_mode === 23 &&
  //     // player_slot <= 127 says player was radient
  //     dotaMatches
  //     // if the radient_win is true give them +20 to props.userData.turboRank
  //     // dotaMatches.profile.radient_win === true
  //   ) {
  //     await axios
  //       .put(`/api/users/${props.user.id}`, { turboRank: turboRank })
  //       .then((res) => {
  //         // console.log("👻", res);
  //         setTurboRank(res.data.turboRank + 20);
  //       });
  //   }

  //   console.log(dotaMatches[0].player_slot);
  console.log("player_slot:", dotaMatches.player_slot);
  console.log("radiant: ", radiant);
  console.log("dire:", dire);
  console.log("radiant_win:", dotaMatches.radiant_win)
  console.log(turboRank);
  // https://api.steampowered.com/IDOTA2Match_570/GetMatchHistory/V001/?matches_requested=1&key=241B75138A75E57A9DE1DC6EDAF44BC3
  //   player_slot:  Which slot the player is in. 0-127 are Radiant, 128-255 are Dire
  // console.log("current Turbo rank after setTurboRank: ", turboRank);
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
