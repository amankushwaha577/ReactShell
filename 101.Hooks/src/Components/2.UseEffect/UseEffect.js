import React, { useEffect, useState } from "react";

const UseEffect = () => {
    const [count, setCount] = useState(0);
    useEffect(() => {
        console.log("1. Without a dependency array, useEffect runs on every render (initial and subsequent re-renders).");
    });

    useEffect(() => {
        console.log('2. To run an effect only once (when the component mounts), pass an empty dependency array [].');
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

// 1. SideEffects: Any operation happen after Rendering process is called SideEffect Operation.
//    we need to Handle Sideeffects because sometimes we need to :
// (i).   Sometimes we need to fetch data from external world through APIs.
// (ii).  Sometimes we need to clean events/timers after use (after render).
// (iii). sometimes we need to do Manual DOM manipulation using Vanilla JS.


// 2. The useEffect hook is used to perform side effects in functional components, such as 
//    (i).   data fetching from API, 
//    (ii).  Event subscriptions/ cleanup, 
//    (iii). Timer setup/ cleanup,
//    (iii). Manual DOM manipulation using Vanilla JS.


// 3. It combines the functionality of several lifecycle methods of class components
//    (i).   componentDidMount,
//    (ii).  componentDidUpdate, and
//    (iii). componentWillUnmount.



// A. Dependency Array:
// ----------------------------------------------------------------
// (i).  Empty []: Runs only on mount (like componentDidMount).
// (ii). No array: Runs on every render (initial + Every time in any state update).
// (iii).Specified dependencies: Runs initial + when dependencies change (e.g., [count]).

// Note: In React 18+ Strict Mode, rendering happens twice in development mode but only once in production. 
// This behavior is intentional and only affects development mode to help you identify side effects and bugs early.


// B. Cleanup Function: 
// ------------------------------------------
// (i). The function returned from useEffect runs on component unmount to clean up resources (e.g., clear timers, unsubscribe).
