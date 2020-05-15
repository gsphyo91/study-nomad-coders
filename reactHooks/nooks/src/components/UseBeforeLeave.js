import React from 'react';
import { useBeforeLeave } from '../customHooks';

const UseBeforeLeave = () => {
  const begForLife = () => console.log("Plz don't leave");
  useBeforeLeave(begForLife);
  return (
    <div>
      <p>useBeforeLeave</p>
      <p>마우스가 창을 벗어났을 때, 이벤트 발생</p>
    </div>
  )
}

export default UseBeforeLeave;