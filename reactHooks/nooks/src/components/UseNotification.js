import React from "react";
import { useNotification } from "../customHooks";

const UseNotification = () => {
  const triggerNotif = useNotification("Title", { body: "options" });
  return (
    <div>
      <p>useNotification</p>
      <p>This feature is available only in secure contexts (HTTPS)</p>
      <button onClick={triggerNotif}>Hello</button>
    </div>
  );
};

export default UseNotification;
