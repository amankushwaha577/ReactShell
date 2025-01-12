import React, { useState } from 'react';

const _2_UseState = ({ value }) => {
  const [stateValue,setState] = useState(() => {
    // Imagine this is an expensive calculation
    console.log("Calculating initial state...");
    return value; // Only runs on the first render
  });

  return <div>{stateValue}</div>;
};

export default _2_UseState

// ✅ lazy initializer in functional component's useState to update state before rendering
