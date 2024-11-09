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


// 1. The useEffect hook in React allows you to perform side effects in functional components, 
// such as data fetching, subscriptions, DOM manipulation, and updating the document title. 
// It combines the functionality of several lifecycle methods (componentDidMount, componentDidUpdate, and componentWillUnmount) in class components.



// Dependency Array:
// ----------------------------------------------------------------
// Empty []: Runs only on mount (like componentDidMount).
// No array: Runs on every render (initial + updates).
// Specified dependencies: Runs initial + when dependencies change (e.g., [count]).


// Cleanup Function: 
// ------------------------------------------
// The function returned from useEffect runs on component unmount to clean up resources (e.g., clear timers, unsubscribe).
