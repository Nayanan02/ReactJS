import { useState } from "react";

const CounterFunction = () => {
  const [count, setCount] = useState(0);

  return (
    <>
      <h2>Functional Counter</h2>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
    </>
  );
};

export default CounterFunction;
