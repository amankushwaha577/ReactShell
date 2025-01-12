import React, { useState } from 'react';

function Example() {
  // Assigning the initial state
  const [count, setCount] = useState(0);

  // Accessing the state immediately after
  console.log(count); // Outputs: 0

  return (
    <div>
      <p>Count: {count}</p>
    </div>
  );
}

/*
✅ Key Differences constructor() vs useState():
     constructor:                                                                                 useState:
-----------------------------------------------------------------------------------------------------------------------------------
   1. Synchronous                                                                               Asynchronous 
   (this.state.count = 5; (happens immediately in constructor))                    (setCount(count + 1); doesn't reflect immediately.) || (state updates may batch together)   

   2. Not Pure (modifies this)                                                             Pure Function (returns new state)


🎯 What is setState Batching?
    Batching means React groups multiple state updates into a single re-render for performance optimization.
    It prevents unnecessary renders when multiple setState calls happen in a row. It happens in both class N functional components.

   Example 1:  constructor() {
                    super();
                    this.state = { count: 0 };
                  }
               increment = () => {
                    this.setState({ count: this.state.count + 1 });
                    this.setState({ count: this.state.count + 1 });
                    console.log("Count after:", this.state.count); // 0 Still shows old value!
               };
               OP: 0

               🧐 Why doesn't count increase by 2?
                The state update is batched, so both updates use the initial state (count = 0).
                setState is asynchronous here.

                ✅ How to Fix it? Using Functional Updates!
                increment = () => {
                    this.setState((prevState) => ({ count: prevState.count + 1 }));
                    this.setState((prevState) => ({ count: prevState.count + 1 }));
                };
                🎯 Explanation:
                Using a callback function inside setState ensures you're working with the latest state.
                Now the count will increase by 2! ✅


  Example 2: 🚀 React 18+ Automatic Batching (Even for Promises):
             React 18 improved batching even for asynchronous code like promises. 💥

             const [count, setCount] = useState(0);

            const handleClick = () => {
                  setCount((prev) => prev + 1);
                  setCount((prev) => prev + 1);
                  setTimeout(() => {
                    setCount((prev) => prev + 1);  // Batched in React 18 too!
                    setCount((prev) => prev + 1);
                  }, 1000);
            };

            Count will increase by 4 after the click and timeout combined. ✅

*/