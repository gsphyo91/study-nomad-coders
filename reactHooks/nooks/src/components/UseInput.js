import React from "react";
import { useInput } from "../customHooks";

const UseInput = () => {
  const name = useInput("Mr. ", 10);

  return (
    <div className="App">
      <p>useInput</p>
      <input placeholder="Name" {...name} />
    </div>
  );
};

export default UseInput;
