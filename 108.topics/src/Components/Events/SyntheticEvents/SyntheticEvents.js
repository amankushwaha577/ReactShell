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


// ═══════════════════════════════════════════════════════════════════════════════════════════════════════
//         Key Differences between Synthetic Events and DOM Events
// ═══════════════════════════════════════════════════════════════════════════════════════════════════════
// Feature               │ Synthetic Events                                      │ DOM Events
// ═══════════════════════════════════════════════════════════════════════════════════════════════════════
// Normalization         │ Provides cross-browser compatibility                  │ Depends on the browser’s event model
// ───────────────────────────────────────────────────────────────────────────────────────────────────────
// Delegation            │ Uses event delegation at the root DOM node            │ No event delegation by default
// ───────────────────────────────────────────────────────────────────────────────────────────────────────
// Memory Optimization   │ Uses event pooling (deprecated in React 17+)          │ No event pooling
// ───────────────────────────────────────────────────────────────────────────────────────────────────────
// Event Propagation     │ Follows React's event propagation logic               │ Follows the browser’s native propagation model
// ───────────────────────────────────────────────────────────────────────────────────────────────────────
// Usage                 │ Added via onClick, onChange, etc., in JSX             │ Added via addEventListener directly on elements
// ═══════════════════════════════════════════════════════════════════════════════════════════════════════

