import React, { useState } from 'react';

function Example() {
  // Assigning the initial state
  const [count, setCount] = useState(0);

  // Accessing the state immediately after
  console.log(count); // Outputs: 0

  return (
    <div>
      <p>Count: {count}</p>
    </div>
  );
}


// Constructor is synchronous 
// usestate is asynchronous

// both are pure