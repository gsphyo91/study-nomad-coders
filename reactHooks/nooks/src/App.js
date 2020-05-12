import React from "react";
import UseInput from "./components/UseInput";
import UseTabs from "./components/UseTabs";
import UseTitle from "./components/UseTitle";
import UseClick from "./components/UseClick";

const App = () => {
  return (
    <div>
      <UseInput />
      <hr />
      <UseTabs />
      <hr />
      <UseTitle />
      <hr />
      <UseClick />
      <hr/>
    </div>
  );
};

export default App;
