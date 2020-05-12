import { useState } from "react";

export const useInput = (initialValue, max) => {
  const [value, setValue] = useState(initialValue);
  const onChange = (event) => {
    const {
      target: { value },
    } = event;
    let willUpdate = true;
    // if (typeof validator === "function") {
    //   willUpdate = validator(value);
    // }
    if (value.length > max) {
      willUpdate = false;
    }
    if (willUpdate) {
      setValue(value);
    } else {
      console.log("Max Length");
    }
  };

  return { value, onChange };
};

export const useTabs = (initialTab, allTabs) => {
  const [currentIndex, setCurrentIndex] = useState(initialTab);

  if(!allTabs || !Array.isArray(allTabs)){
    return ;
  } 

  return {
    currentItem: allTabs[currentIndex],
    changeItem: setCurrentIndex
  };
};
