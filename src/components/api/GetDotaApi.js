import axios from "axios";
import React, { useEffect, useState } from "react";

const GetDotaApi = (props) => {
  const[dotaData, setDotaData] = useState([])
  console.log(props);
  
    axios
      .get(`https://api.opendota.com/api/players/${props.userInfo.friendId}`)
      .then((res) => {
        setDotaData(res.data);
        return res.data
      })
      .catch((error) => {
        console.log(error);
      });
  
  console.log(dotaData)
  
  return <div></div>;
};

export default GetDotaApi;
