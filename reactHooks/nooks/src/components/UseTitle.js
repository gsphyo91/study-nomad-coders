import React from 'react';
import { useTitle } from "../customHooks";

const UseTitle = () => {
  const titleUpdater = useTitle("Loading...");
  setTimeout(() => titleUpdater("Home"), 3000);
  return (
    <div>
      <p>useTitle</p>
    </div>
  )
}

export default UseTitle;