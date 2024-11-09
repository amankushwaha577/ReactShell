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
        <hr /><div>UseEffect</div></>;
};

export default UseEffect;
