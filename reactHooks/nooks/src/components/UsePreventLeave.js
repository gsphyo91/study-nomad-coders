import React from 'react';
import { usePreventLeave } from '../customHooks';

const UsePreventLeave = () => {
  const {enablePrevent, disablePrevent} = usePreventLeave();
  return (
    <div>
      <p>usePreventLeave</p>
      <p>protect 버튼을 누른 다음 창을 종료하면, 확인 창이 보임</p>
      <button onClick={enablePrevent}>Protect</button>
      <button onClick={disablePrevent}>Unprotect</button>
    </div>
  )
}

export default UsePreventLeave;