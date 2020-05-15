import React from 'react';
import { useConfirm } from '../customHooks';

const UseComfirm = () => {
  const deleteWorld = () => console.log("Deleting the world...");
  const abort = () => console.log("Cancel");
  const confirmDelete = useConfirm("Are you sure?", deleteWorld, abort);
  return (
    <div>
      <p>useConfirm</p>
      <div>
        <button onClick={confirmDelete}>Delete the world</button>
      </div>
    </div>
  )
}

export default UseComfirm;