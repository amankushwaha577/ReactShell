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
// useMemo() hook is used cache returned value from function.


// const memoizedValue = useMemo(() => calculateFunction(a,b) { return xxx }, [a, b]);

// 1. About Function :
//    A). calculateFunction function must be pure Must not have any sideeffects.
//    B). useMemo doesn't support arguments directly inside the function.
//        like : const memoizedValue = useMemo((a,b) => { return xxx }, [a, b]);
//        XXX Its incorrect.
//        For arguments, use wrapped helper functions or closures.
//        like : const memoizedValue = useMemo(() => calculateFunction(a,b) { return xxx }, [a, b]);
//    C). calculateFunction function must have to return.


// 2. About Dependency :
//    A). Empty Array : It runs on every render. It makes useMemo() & useCallback() pointless.
//    B). [] : Runs on only on mount phase.
//    C). [dep] : Runs on mount phase + every time when dependency changes.
// Note: In strict mode React call calculateFunction() function 2X just to report accidental impurities.
//       This is development behaviour only.



// Prevention of Child Re-rendering :
// 1. useMemo() only caches returned value of function not function reference + It always recreates function in each re-render.
//         calculateFunction(a,b) { return xxx } will be recreated in each re-render.
//    useCallback()  caches whole function definition (reference) + It will not recreates function in each re-render.
//         calculateFunction(a,b) { return xxx } will not be recreated in each re-render.
//    
// 2. if we pass 'memoizedValue' as a prop in child it will cause re-render in child 
//    because In each re-render in Parent Function will be recreated. 
//    So reference of calculateFunction(a,b) { return xxx } will change in each re-render in parent. 
//    So Child will think its prop is changed And it will re render itself.



// Different BW useEffect() vs useMemo():
//                useEffect                              |                     useMemo
// 1. handles side effects                               |    1. Memoizes expensive calculations.
// 2. supports cleanup function

