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

// const ref = useRef(initialValue)
// means : ref.current = initialValue;
// --------------------------------------

// 1. initialValue: The initial value assigned to the reference.
// 2. useRef returns an object with a single property => .current,
//    .current holds the value (initially = initialValue). You can set or get ref.current directly.
//    Changes to .current don’t trigger a re-render, making it useful for cases where the value should persist but not affect the UI directly.

// Uses of useRef() :
// -------------------------------
// 1. Accessing DOM Elements : when we passes ourRef to HTML element -> than ourRef.current is assigned with that HTML DOM Node.
//                             const inputRef = useRef(null);
//                             <input ref={inputRef} />
//    Now inputRef.current => DOM Node of <Input/>
//    Now we Can directly reference and manipulate DOM element <Input/> 
//    Ex : inputRef.current.focus(); 
// 
// 2. Manipulating DOM Elements : Here inputRef.current holding reference of <Input/> so we can set its value without re-rendering.
//                                ( By directly accessing Node we have bypassed react rules so react did't detect any change => No render)
//                                Note : useState() is asynchronous | useRef() is synchronous()
//    EX : inputRef.current.value = 10; 
// 
// 3. Storing Mutable Data: Holds values that change over time, without causing re-renders, useful for things like timers or counters.

// No Re-Render: Changes to ref.current don’t cause re-renders, unlike useState.