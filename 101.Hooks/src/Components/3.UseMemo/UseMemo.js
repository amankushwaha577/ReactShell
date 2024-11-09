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
            <hr/> UseMemo -
            <p>Number: {number}</p>
            <p>Squared: {squaredNumber}</p>
        </div>
    );
}

export default UseMemo
