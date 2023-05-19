import React, { useState } from "react";

const Button = () => {
  const [count, setCount] = useState(0);
  return (
    <>
      <div>{count}</div>
      <button onClick={()=>{setCount(prev => prev+1)}}>Click</button>
    </>
  );
};

export default Button;
