/* 
  🔹 Question 1: How Many Re-Renders?
  -----------------------------------
  import { useState } from "react";

  function App() {
    const [count, setCount] = useState(0);

    console.log("Component Rendered");

    const handleClick = () => {
      setCount(count + 1);
      setCount(count + 1);
      setCount(count + 1);
    };

    return (
      <div>
        <p>Count: {count}</p>
        <button onClick={handleClick}>Increment</button>
      </div>
    );
  }

  ❓ What is logged in the console when clicking the button once?
  A) "Component Rendered" once, count = 3  
  B) "Component Rendered" once, count = 1  
  C) "Component Rendered" three times, count = 3  
  D) "Component Rendered" three times, count = 1  

  ✅ Answer: B  
  - React batches state updates.
  - All `setCount(count + 1)` calls use the old `count` value.
  - Count updates **only once**.
  */

/* 
  🔹 Question 2: Functional Update in `useState`
  -----------------------------------
  import { useState } from "react";

  function App() {
    const [count, setCount] = useState(0);

    console.log("Component Rendered");

    const handleClick = () => {
      setCount(prev => prev + 1);
      setCount(prev => prev + 1);
      setCount(prev => prev + 1);
    };

    return (
      <div>
        <p>Count: {count}</p>
        <button onClick={handleClick}>Increment</button>
      </div>
    );
  }

  ❓ What is logged in the console when clicking the button once?
  A) "Component Rendered" once, count = 1  
  B) "Component Rendered" once, count = 3  
  C) "Component Rendered" three times, count = 3  
  D) "Component Rendered" three times, count = 1  

  ✅ Answer: B  
  - Here, `setCount(prev => prev + 1)` uses the latest state.
  - React batches updates, so it increments **3 times** in **one render**.
  */

/* 
  🔹 Question 3: State Not Updating?
  -----------------------------------
  import { useState } from "react";

  function App() {
    const [value, setValue] = useState(0);

    console.log("Component Rendered", value);

    return (
      <div>
        <button onClick={() => setValue(value)}>Click Me</button>
      </div>
    );
  }

  ❓ What happens when you click the button?
  A) The component re-renders.  
  B) The component does **not** re-render.  
  C) The value increases.  
  D) The app crashes.  

  ✅ Answer: B  
  - `setValue(value)` sets the same state (`0` → `0`).
  - React does **not** re-render if the state **doesn't change**.
  */

/* 
  🔹 Question 4: Delayed State Update in `setTimeout`
  -----------------------------------
  import { useState, useEffect } from "react";

  function App() {
    const [count, setCount] = useState(0);

    useEffect(() => {
      setTimeout(() => {
            setCount(count + 1);
            setCount(count + 1);
            setCount(count + 1);
            setCount(count + 1);
      }, 1000);
    }, []);

    return <p>Count: {count}</p>;
  }

  ❓ What will be displayed after 1 second?
  A) Count: 0  
  B) Count: 1  
  C) Count: 2  
  D) Infinite re-renders  

  ✅ Answer: B
    React 19 and State Batching in Async Functions 🚀
    In React 18, React batched state updates only inside event handlers, but not in async functions (setTimeout, fetch, Promise.then, etc.). 
    However, in React 19, React introduces automatic batching everywhere, including async functions!
  */

/* 
  🔹 Question 5: Updating Objects in `useState`
  -----------------------------------
  import { useState } from "react";

  function App() {
    const [state, setState] = useState({ count: 0 });

    const handleClick = () => {
      setState({ count: state.count + 1 });
      setState({}); // ❌ Overwrites the state
    };

    return (
      <div>
        <p>Count: {state.count}</p>
        <button onClick={handleClick}>Increment</button>
      </div>
    );
  }

  ❓ What happens when you click the button?
  A) Count increases normally.  
  B) The app crashes.  
  C) Count resets to `undefined`.  
  D) Nothing happens.  

  ✅ Answer: C  
  - `setState({ count: state.count + 1 })` updates correctly.
  - But `setState({})` **overwrites** the state, removing `count`.
  - So `state.count` becomes `undefined`.
  */
