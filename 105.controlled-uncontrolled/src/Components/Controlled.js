import { useState } from 'react';

function ControlledComponent() {
  const [inputValue, setInputValue] = useState("");

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <input type="text" value={inputValue} onChange={handleChange} />
  );
}


// Controlled Components: React manages the input value via state. 
// Uncontrolled Components: The DOM manages the input value. 


// ┌───────────────────────────────┬──────────────────────────────────────────────────────────────────────────────┬─────────────────────────────────────────────────────────────────────────────┐
// │ Feature                       │ Controlled Components                                                        │ Uncontrolled Components                                                     │
// ├───────────────────────────────┼──────────────────────────────────────────────────────────────────────────────┼─────────────────────────────────────────────────────────────────────────────┤
// │ 🌐 Definition                 │ Components where React controls the form data.                               │ Components where the DOM directly manages form data.                       │
// ├───────────────────────────────┼──────────────────────────────────────────────────────────────────────────────┼─────────────────────────────────────────────────────────────────────────────┤
// │ 💻 Data Handling              │ State is managed by React and updated through `setState`.                    │ State is managed by the DOM using refs to access current values.           │
// ├───────────────────────────────┼──────────────────────────────────────────────────────────────────────────────┼─────────────────────────────────────────────────────────────────────────────┤
// │ 📥 Input Value                │ Value is set by React (`value` prop).                                        │ Value is set by the DOM, accessed with `ref`.                              │
// ├───────────────────────────────┼──────────────────────────────────────────────────────────────────────────────┼─────────────────────────────────────────────────────────────────────────────┤
// │ 🔄 Update Mechanism***        │ Changes trigger state updates and re-rendering of the component.             │ Changes update the DOM without triggering React re-renders.                │
// ├───────────────────────────────┼──────────────────────────────────────────────────────────────────────────────┼─────────────────────────────────────────────────────────────────────────────┤
// │ 🔍 Best For                   │ When you need form data to be fully managed by React, such as for validation | When simple access to input values is sufficient, like initial form values │
// │                               │ and dynamic forms.                                                           │ or handling legacy code.                                                   │
// ├───────────────────────────────┼──────────────────────────────────────────────────────────────────────────────┼─────────────────────────────────────────────────────────────────────────────┤
// │ 🛠️ Example                     │ `<input value={inputValue} onChange={(e) => setInputValue(e.target.value)} />`│ `<input ref={inputRef} />`                                                 │
// ├───────────────────────────────┼──────────────────────────────────────────────────────────────────────────────┼─────────────────────────────────────────────────────────────────────────────┤
// │ 🔍 Pros                       │ Easier for tracking, validation, and debugging; keeps state in sync with UI. │ Simple and minimal code; can be faster for infrequent state changes.       │
// ├───────────────────────────────┼──────────────────────────────────────────────────────────────────────────────┼─────────────────────────────────────────────────────────────────────────────┤
// │ 🚫 Cons                       │ Requires more boilerplate, potentially more re-renders due to state updates. │ Harder to debug; lacks control over updates; state not directly in React.  │
// └───────────────────────────────┴──────────────────────────────────────────────────────────────────────────────┴─────────────────────────────────────────────────────────────────────────────┘
