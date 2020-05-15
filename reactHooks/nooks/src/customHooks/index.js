import { useState, useEffect, useRef } from "react";

// useInput
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

// useTabs
export const useTabs = (initialTab, allTabs) => {
  const [currentIndex, setCurrentIndex] = useState(initialTab);

  if (!allTabs || !Array.isArray(allTabs)) {
    return;
  }

  return {
    currentItem: allTabs[currentIndex],
    changeItem: setCurrentIndex,
  };
};

export const useTitle = (initialTitle) => {
  const [title, setTitle] = useState(initialTitle);
  const updateTitle = () => {
    const htmlTitle = document.querySelector("title");
    htmlTitle.innerText = title;
  };
  useEffect(updateTitle, [title]);
  return setTitle;
};

export const useClick = (onClick) => {
  const element = useRef();
  useEffect(() => {
    if (element.current) {
      element.current.addEventListener("click", onClick);
    }
    // return () => {
    //   if (element.current) {
    //     element.current.removeEventListener("click", onClick);
    //   }
    // };
  });
  return element;
};

// useConfirm
export const useConfirm = (message = "", onConfirm, onCancel) => {
  if (onConfirm || typeof onConfirm !== "function") {
    return;
  }
  if (onCancel || typeof onCancel !== "function") {
    return;
  }
  const confirmAction = () => {
    if (window.confirm(message)) {
      onConfirm();
    } else {
      onCancel();
    }
  };
  return confirmAction;
};

// usePreventLeave
export const usePreventLeave = () => {
  const listener = (event) => {
    event.preventDefault();
    event.returnValue = "";
  };
  const enablePrevent = () => window.addEventListener("beforeunload", listener);
  const disablePrevent = () =>
    window.removeEventListener("beforeunload", listener);
  return { enablePrevent, disablePrevent };
};

// useBeforeLeave
export const useBeforeLeave = (onBefore) => {
  const handle = (event) => {
    if (typeof onBefore !== "function") {
      return;
    }
    // console.log("leaving");
    // console.log(event);
    const { clientY } = event;
    if (clientY <= 0) {
      // 창 위로 벗어났을 때만 이벤트 발생
      onBefore();
    }
    // onBefore();
  };
  useEffect(() => {
    document.addEventListener("mouseleave", handle);
    return () => document.removeEventListener("mouseleave", handle);
  });
};

// useFadeIn
export const useFadeIn = (duration = 1, delay = 1) => {
  const element = useRef();
  useEffect(() => {
    if (typeof duration !== "number" || typeof delay !== "number") {
      return;
    }
    if (element.current) {
      const { current } = element;
      current.style.transition = `opacity ${duration}s ease-in-out ${delay}s`;
      current.style.opacity = 1;
    }
  });
  return { ref: element, style: { opacity: 0 } };
};

// useNetwork
export const useNetwork = (onChange) => {
  const [status, setStatus] = useState(navigator.onLine);
  const handleChange = () => {
    if(typeof onChange !== "function"){
      onChange(navigator.onLine);
    }
    setStatus(navigator.onLine);
  };
  useEffect(() => {
    window.addEventListener("online", handleChange);
    window.addEventListener("offline", handleChange);
    return () => {
      window.removeEventListener("online", handleChange);
      window.removeEventListener("offline", handleChange);
    };
  });
  return status;
};


// useScroll
export const useScroll = () => {};