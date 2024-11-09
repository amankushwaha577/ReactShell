import React, { useState, useCallback } from 'react';

function UseCallback() {
    const [count, setCount] = useState(0);

    // Memoize the increment function to avoid re-creating it on each render
    const increment = useCallback(() => {
        setCount(prevCount => prevCount + 1);
    }, []);

    return (
        <div>
            UseCallback -
            <p>Count: {count}</p>
            <ChildComponent increment={increment} />
        </div>
    );
}

export default UseCallback;

function ChildComponent({ increment }) {
    console.log('Child component rendered');
    return <>
        <button onClick={increment}>Increment</button>
    </>;
}
