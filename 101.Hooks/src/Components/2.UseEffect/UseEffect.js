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

// SideEffects: Any operation happen after Rendering process is called SideEffect Operation.
// we need to Handle Sideeffects because sometimes we need to :
// (i).   Sometime we need to fetch data from external world through APIs.
// (ii).  Sometimes events/timers need to be clean after use (after render).
// (iii). sometimes we need to do Manual DOM manipulation using Vanilla JS.

// 1. The useEffect hook is used to perform side effects in functional components, such as 
//    (i).   data fetching from API, 
//    (ii).  Event subscriptions/ cleanup, 
//    (iii). Timer setup/ cleanup,
//    (iii). Manual DOM manipulation using Vanilla JS.

// 2. It combines the functionality of several lifecycle methods of class components
//    (i).   componentDidMount,
//    (ii).  componentDidUpdate, and
//    (iii). componentWillUnmount.

// 3. Dependency Array:
// ----------------------------------------------------------------
// Empty []: Runs only on mount (like componentDidMount).
// No array: Runs on every render (initial + updates).
// Specified dependencies: Runs initial + when dependencies change (e.g., [count]).


// Cleanup Function: 
// ------------------------------------------
// The function returned from useEffect runs on component unmount to clean up resources (e.g., clear timers, unsubscribe).
