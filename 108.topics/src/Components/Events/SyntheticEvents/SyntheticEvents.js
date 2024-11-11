import React from 'react';

function SyntheticEvents() {
  const handleClick = (event) => {
    console.log('Synthetic Event:', event); // This logs a Synthetic Event
    console.log('Event Type:', event.type); // "click"
  };

  return (
    <div>
      <h1>React Synthetic Event Example</h1>
      <button onClick={handleClick}>Click me</button>
    </div>
  );
}

export default SyntheticEvents;


// When to Use Which
// 1. Use Synthetic Events when you want consistency, efficiency, and ease of use within a React component.
// 2. Use DOM Events when you need direct access to the native event system, 
//    such as when working outside of React or integrating with third-party libraries that rely on DOM events.
