import React, { useState, useMemo } from 'react';

const UseMemo = () => {
    const [number, setNumber] = useState(0);

    // Memoize the result of the heavy computation
    const squaredNumber = useMemo(() => {
        for(let i =0; i < 99999 ;i++){
        }
        console.log('Calculating square...');
        return number * number;
    }, [number]); // Recalculate only if 'number' changes

    return (
        <div>
             UseMemo -
            <p>Number: {number}</p>
            <p>Squared: {squaredNumber}</p>
        </div>
    );
}

export default UseMemo

// Purpose: 
// ---------------
// Optimizes performance by memoizing values, recalculates only when dependencies change.


// Syntax: 
// ---------------
// const memoizedValue = useMemo(() => computeExpensiveValue(a, b), [a, b]);


// When to Use:
// 1. Expensive calculations that don’t need to run on every render.
// 2. Preventing re-renders in child components by avoiding re-creation of functions or objects passed as props.
    // Suppose we are passing functions as a prop in Child Component and supppose a render happened in parent in this time 
    // Parent will again recreate the same function and this time its reference will be changed. So Child will think its prop is changed
    // And it will re render itself. It caused unnnecessary re-render in Child To avoid this swrap useMemo to function with dependecies.

