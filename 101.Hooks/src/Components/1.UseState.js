import React, { useState } from "react";

const UseState = () => {
  const [x, setX] = useState("UseState");

  let temp = useState("Printing Complete UseState");
  console.log(temp);
  // OP: ['Printing Complete UseState', ƒ]

  return <div>{x}</div>;
};

export default UseState;


// Here are some key points to remember about useState:

// UseState Returns array containing 2 values : state & function to change state.
// Initial Value: useState takes an initial value as an argument.
// State Setter Function: Use the provided setter function to update state, not directly.
// Asynchronous Updates: State updates are asynchronous; don't rely on immediate changes.
// Functional Updates: Use functional updates (prevState => ...) for changes based on previous state.
// Re-renders: Every state change triggers a re-render of the component.
// Only in Functional Components: useState is only usable within functional components.