import React, { useState, useEffect } from 'react';

function DerivedStateFunctional({ value }) {
    const [stateValue, setStateValue] = useState(value);

    useEffect(() => {
        // 🎯 Sync state only when props change
        setStateValue(value);
    }, [value]);  // ✅ Runs only when 'value' prop changes

    return <div>{stateValue}</div>;
}

export default DerivedStateFunctional;


