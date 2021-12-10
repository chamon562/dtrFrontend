import axios from "axios";
import React,{useEffect} from "react";

const GetDotaApi = (props) => {
  console.log(props.userData.friendId);
  const dotaInfoAPiCall = () => {
    axios
      .get(`https://api.opendota.com/api/players/${props.userData.friendId}`)
      .then((res) => {
        console.log(res);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  useEffect(() => {
    dotaInfoAPiCall();
  }, []);
  return <div></div>;
};

export default GetDotaApi;
