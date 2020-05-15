import React from "react";
import UseInput from "./components/UseInput";
import UseTabs from "./components/UseTabs";
import UseTitle from "./components/UseTitle";
import UseClick from "./components/UseClick";
import UseComfirm from "./components/UseConfirm";
import UsePreventLeave from "./components/UsePreventLeave";
import UseBeforeLeave from "./components/UseBeforeLeave";
import UseFadeIn from "./components/UseFadeIn";
import UseNetwork from "./components/UseNetwork";

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
      <hr />
      <UseComfirm />
      <hr />
      <UsePreventLeave />
      <hr />
      <UseBeforeLeave />
      <hr />
      <UseFadeIn />
      <hr />
      <UseNetwork />
      <hr />
    </div>
  );
};

export default App;
