import React, { useState, useCallback } from 'react';

function UseCallback() {
    const [count, setCount] = useState(0);

    // 1. Memoize the increment function to avoid re-creating it on each render.
    //    Since the dependency array is empty, the function is created only once (on mount).
    const increment = useCallback(() => {
        setCount(prevCount => prevCount + 1); // Using functional updates to avoid stale state issues.
    }, []); // No dependencies, so the function remains stable across renders.

    return (
        <div>
            <h2>UseCallback Example</h2>
            <p>Count: {count}</p>
            {/* Passing the memoized function as a prop to prevent unnecessary child re-rendering */}
            <ChildComponent increment={increment} />
        </div>
    );
}

export default UseCallback;

function ChildComponent({ increment }) {
    console.log('Child component rendered'); // Helpful for verifying re-render behavior.
    return (
        <>
            <button onClick={increment}>Increment</button>
        </>
    );
}

/*
Purpose of useCallback:
------------------------------------------------
1. `useCallback` is used to **cache the function reference** across renders.
2.  Prevents unnecessary re-creation of functions when passed as props to child components.

const memoizedFunction = useCallback(() => {
    // Do something
}, [dependency]);



1. About Function :
-----------------------
    A. ✅ The function must be **pure** and should avoid side effects.
    B. ✅ Avoid using arguments directly inside the function. 
        - ❌ Incorrect: `useCallback((a, b) => { return a + b }, [a, b]);`
        - ✅ Correct: `useCallback(() => calculateSum(a, b), [a, b]);`
    C. ✅ The function can return / not return.

2. About Dependency :
    A. No Array: Function recreated on **every render**.
    B. []: Function created **once** on component mount.
    C. [dep]`: Function created once on mount + Function recreated when **dependency changes**.



Prevention of Child Re-rendering :
-----------------------------------
1. If you pass a function as a prop **without memoization**, the child will re-render 
   because the function reference changes with every render.
2. **Solution:** `useCallback` **stabilizes** the function reference so the child doesn't re-render unnecessarily.
   useCallback(() => calculateSum(a, b), [a, b]);
   () => calculateSum(a, b) will be chached.


✅ **Best Practice (Using React.memo):**
```jsx
const ChildComponent = React.memo(({ increment }) => {
    console.log('Child rendered');
    return <button onClick={increment}>Increment</button>;
});


*/