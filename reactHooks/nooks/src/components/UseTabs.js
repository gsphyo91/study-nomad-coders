import React from "react";
import { useTabs } from "../customHooks";

const content = [
  {
    tab: "Section 1",
    content: "content of the section 1",
  },
  {
    tab: "Section 2",
    content: "content of the section 2",
  },
];

const UseTabs = () => {
  const { currentItem, changeItem } = useTabs(0, content);
  return (
    <div>
      <p>useTabs</p>
      {content.map((section, index) => (
        <button key={index} onClick={() => changeItem(index)}>{section.tab}</button>
      ))}
      <p>{currentItem.content}</p>
    </div>
  );
};

export default UseTabs;
