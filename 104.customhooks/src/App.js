import React from 'react';
import useCounter from './useCounter';

const Counter = () => {
  const { count, increment, decrement } = useCounter();

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={increment}>➕ Increment</button>
      <button onClick={decrement}>➖ Decrement</button>
    </div>
  );
};

export default Counter;
