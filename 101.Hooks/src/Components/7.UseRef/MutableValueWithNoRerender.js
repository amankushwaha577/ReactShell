 import React, { useState, useEffect, useRef } from 'react';

function MutableValueWithNoRerender() {
    const [count, setCount] = useState(0);
    const prevCountRef = useRef(); // Creating a ref to store the previous value

    useEffect(() => {
        prevCountRef.current = count; // Updating ref after each render
    });

    return (
        <div>
            <p>Current Count: {count}</p>
            <p>Previous Count: {prevCountRef.current}</p>
            <button onClick={() => setCount(count + 1)}>Increment</button>
        </div>
    );
}

export default MutableValueWithNoRerender;

// 1st Render : 
// -------------
//               count  = 0
//               prev   = - (Currentl Nothing) 
// Rendering Completed Now sideffect useEffect runs :  prevCountRef.current = 0 <---------------------- |
// But it will not trigger re-render so it will not print on UI.                                        |
//                                                                                                      |
//                                                                                                      |
// 2nd Render (button Click):                                                                           |
// -------------                                                                                        |
//               count  = 1                                                                             |
//               prev   = 0   <--------------------------------------------------------------------------
// Rendering Completed Now sideffect useEffect runs :  prevCountRef.current = 1
// But it will not trigger re-render so it will not print on UI.   
