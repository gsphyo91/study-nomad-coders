import React from "react";
import { useNetwork } from "../customHooks";

const UseNetwork = () => {
  const handleNetworkChange = (online) => {
    console.log(online ? "online" : "offline");
  };
  const onLine = useNetwork(handleNetworkChange);
  return (
    <div>
      <p>useNetwork</p>
      <h1>{onLine ? "On Line" : "Off Line"}</h1>
    </div>
  );
};

export default UseNetwork;
