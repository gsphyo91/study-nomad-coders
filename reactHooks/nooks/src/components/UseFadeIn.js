import React from 'react';
import { useFadeIn } from '../customHooks';

const UseFadeIn = () => {
  const fadeInH1 = useFadeIn(1, 2);
  const fadeInP = useFadeIn(2, 4);
  return (
    <div>
      <p>useFadeIn</p>
      <h1 {...fadeInH1}>Hello</h1>
      <p {...fadeInP}>ppppppppppp</p>
    </div>
  )
}

export default UseFadeIn;