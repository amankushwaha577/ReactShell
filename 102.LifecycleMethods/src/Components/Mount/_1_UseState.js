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

/*
✅ Key Differences constructor() vs useState():
     constructor:                                                                                 useState:
-----------------------------------------------------------------------------------------------------------------------------------
   1. Synchronous                                                                               Asynchronous 
   (this.state.count = 5; (happens immediately in constructor))                    (setCount(count + 1); doesn't reflect immediately.) || (state updates may batch together)   

   2. Not Pure (modifies this)                                                             Pure Function (returns new state)

*/