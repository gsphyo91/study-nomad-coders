import React from "react";
import { useFullScreen } from "../customHooks";

const UseFullScreen = () => {
  const onFullIs = (isFull) => {
    console.log(isFull ? "Full" : "Not full");
  };
  const { element, triggerFull, exitFull } = useFullScreen(onFullIs);
  return (
    <div>
      <p>useFullscreen</p>
      <div ref={element}>
        <img
          src="https://images.unsplash.com/photo-1571142191114-feec5c22f686?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80"
          alt="fullscreen"
          width="300"
          height="400"
        />
        <button onClick={exitFull}>Exit Full Screen</button>
      </div>
      <button onClick={triggerFull}>Full Screen</button>
    </div>
  );
};

export default UseFullScreen;
