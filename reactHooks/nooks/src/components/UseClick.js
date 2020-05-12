import React from "react";
import { useClick } from "../customHooks";

const UseClick = () => {
  const sayHello = () => console.log("say hello");
  const title = useClick(sayHello);
  return (
    <div>
      <p>useClick</p>
      <div>
        <h1 ref={title}>Hi</h1>
      </div>
    </div>
  );
};

export default UseClick;
