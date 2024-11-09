import React, { useRef, useState } from 'react';

function Counter() {
  const countRef = useRef(0); // Initial value is 0
  const [_, setRerender] = useState(false); // Just for triggering re-render to show updates

  function incrementCount() {
    countRef.current += 1; // Update ref value
    setRerender((prev) => !prev); // Re-render component to show the latest ref value
  }

  return (
    <div>
      <p>Button clicked {countRef.current} times</p>
      <button onClick={incrementCount}>Increment</button>
    </div>
  );
}

export default Counter;
