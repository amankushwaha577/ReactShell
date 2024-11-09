import React, { useRef } from 'react';

function DomAccess() {
  const inputRef = useRef(null);

  function handleClick() {
    inputRef.current.focus(); // Access the DOM node to focus it
  }

  return (
    <div> UseRef -<br/>
      <input ref={inputRef} type="text" placeholder="Type something..." />
      <button onClick={handleClick}>Focus Input</button>
    </div>
  );
}

export default DomAccess;

// 1. initialValue: The initial value assigned to the reference. For DOM elements, this is typically null.
// 2. useRef returns an object with a single property, .current, which holds the value. You can set or get ref.current directly.
//    Changes to .current don’t trigger a re-render, making it useful for cases where the value should persist but not affect the UI directly.

// Summary of useRef :
// 1. Accessing DOM: Can directly reference and manipulate DOM elements, e.g., for focusing, scrolling, or adding event listeners.
// 2. Storing Mutable Data: Holds values that change over time, without causing re-renders, useful for things like timers or counters.

// No Re-Render: Changes to ref.current don’t cause re-renders, unlike useState.