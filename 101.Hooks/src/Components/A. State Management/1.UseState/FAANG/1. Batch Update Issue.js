import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  function incrementMultipleTimes() {
    for (let i = 0; i < 5; i++) {
      setCount(count + 1); // ❌ Uses stale state value
    }
  }

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={incrementMultipleTimes}>Increment 5 Times</button>
    </div>
  );
}
/*
Que. Why does updating state inside a loop not work as expected?
Ans. When you update state inside a loop, each iteration uses the stale (old) state value instead of the latest updated state.

     for (let i = 0; i < 5; i++) {
         setCount(count + 1); // ❌ Uses stale state value
     }

    ❌ What's Wrong? :
    a. The loop runs five times, but each iteration still references the old count.
       setCount(0 + 1);
       setCount(0 + 1);
       setCount(0 + 1);
       setCount(0 + 1);
       setCount(0 + 1);

    b. Instead of increasing count by 5, it increases by 1 (because count remains the same in all iterations).
 */   


//  Outcomes Points :
//  -----------------
//  1. React updates state asynchronously and does not update the state immediately.
//  2. React batches state updates, causes unexpected behavior.
