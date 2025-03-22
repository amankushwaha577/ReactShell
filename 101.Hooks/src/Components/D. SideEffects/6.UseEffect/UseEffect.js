import React, { useEffect, useState } from "react";

const UseEffect = () => {
    const [count, setCount] = useState(0);
    useEffect(() => {
        console.log("1. Without a dependency array, useEffect runs on every render (initial + subsequent re-renders).");
    });

    useEffect(() => {
        console.log('2. With a empty array [], useEffect runs on first only render (initial).');
    }, []);

    useEffect(() => {
        console.log('3. initial (Run when the component mounts) + When dependencies changes.');
    }, [count]);

    useEffect(() => {
        const timer = setInterval(() => {
            console.log('4. If the effect creates something that needs cleanup (like a timer or subscription), return a cleanup function.');
        }, 1000);

        return () => {
            clearInterval(timer); // It will Cleanup when component unmounts
        };
    }, []);

    return <>
        <div>UseEffect</div></>;
};

export default UseEffect;

/*
SideEffects: Any operation happen after Rendering process is called SideEffect Operation.

The useEffect/ useLayoutEfect hook is used to perform side effects in functional components, such as 
   (i).   data fetching from API, 
   (ii).  Event/subscriptions/Timer cleanup, 
   (iii). Manual DOM manipulation using Vanilla JS.

   because these operations happens after rendering process.
*/

/*
useEffect() => The useEffect hook in React is used for handling side effects in functional components. 
               It replaces lifecycle methods like componentDidMount, 
                                                  componentDidUpdate, and 
                                                  componentWillUnmount in class components.

                useEffect(() => {
                                  // Side effect logic
                                         return () => {
                                            // Cleanup function (optional)
                                        };
                }, [dependencies]);

A. Dependency Array:
----------------------------------------------------------------
    (i).  Empty []: Runs only on mount (like componentDidMount).
    (ii). No array: Runs on every render (initial + Every time in any state update).
    (iii).Specified dependencies: Runs initial + when dependencies change (e.g., [count]) (like componentDidUpdate).

    Note: In React 18+ Strict Mode, rendering happens twice in development mode but only once in production. 
    This behavior is intentional and only affects development mode to help you identify side effects and bugs early.


B. Cleanup Function: 
------------------------------------------
    (i). The function returned from useEffect runs on component unmount to clean up resources (e.g., clear timers, unsubscribe).
         (like componentWillUnmount)

*/