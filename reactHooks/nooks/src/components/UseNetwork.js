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
      <p>네트워크가 끊어졌는지 확인할 수 있음</p>
      <p>테스트방법: F12 - Network 탭 - online을 offline으로 변경</p>
      <h1>{onLine ? "On Line" : "Off Line"}</h1>
    </div>
  );
};

export default UseNetwork;
