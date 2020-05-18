import React from 'react';
import { useAxios } from '../customHooks';

const UseAxios = () => {
  const {loading, data, error, refetch} = useAxios({ url: "https://yts.mx/api/v2/list_movies.json" });
  console.log(loading);
  console.log(data);
  console.log(error);
  return (
    <div>
      <p>useAxios</p>
      <h1>{data && data.status}</h1>
      <h2>{loading && "Loading"}</h2>
      <button onClick={refetch}>Refetch</button>
    </div>
  )
}

export default UseAxios;