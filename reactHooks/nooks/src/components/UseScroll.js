import React from "react";
import { useScroll } from "../customHooks";

const UseScroll = () => {
  const { x, y } = useScroll();
  return (
    <div>
      <p>useScroll</p>
      {/* <h1 style={{ position: "fixed", color: y > 100 ? "red" : "blue" }}>Scroll</h1> */}
      <h1>
        {x} / {y}
      </h1>
    </div>
  );
};

export default UseScroll;
