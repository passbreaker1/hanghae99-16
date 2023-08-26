import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);
  function plus() {
    setCount((counter) => ++counter);
  }
  function minus() {
    setCount((counter) => --counter);
  }
  return (
    <div>
      <div>{count}</div>
      <button onClick={plus}>+ 1</button>
      <button onClick={minus}>- 1</button>
    </div>
  );
}

export default Counter;
