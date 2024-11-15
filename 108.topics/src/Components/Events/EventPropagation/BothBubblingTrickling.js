import React from "react";

function BothBubblingTrickling() {
  const handleParentCapture = () => {
    console.log("Parent: Capturing Phase");
  };

  const handleParentBubble = () => {
    console.log("Parent: Bubbling Phase");
  };

  const handleChildCapture = () => {
    console.log("Child: Capturing Phase");
  };

  const handleChildBubble = () => {
    console.log("Child: Bubbling Phase");
  };

  return (
    <div
      onClickCapture={handleParentCapture}
      onClick={handleParentBubble}
      style={{ padding: "20px", border: "2px solid blue" }}
    >
      Parent Div
      <div
        onClickCapture={handleChildCapture}
        onClick={handleChildBubble}
        style={{ padding: "20px", border: "2px solid red", marginTop: "10px" }}
      >
        Child Div
        <button style={{ marginTop: "10px" }}>Click Me</button>
      </div>
    </div>
  );
}

export default BothBubblingTrickling;


// OP:
// Parent: Capturing Phase
// Child: Capturing Phase
// Child: Bubbling Phase
// Parent: Bubbling Phase

// Key Points:
// Capturing happens first (parent to child).
// Bubbling happens afterward (child to parent).
// The button itself does not have any handlers, but the events propagate through its ancestors.


// How it works:
// 1. Parent Div and Child Div both have event handlers for the capturing and bubbling phases.
// 2. Clicking the button inside the Child Div triggers events in the following order:
//          A. Capturing Phase: From the root (Parent Div) down to the button:
//                    Parent: Capturing Phase
//                    Child: Capturing Phase
//          B. Bubbling Phase: From the button back up to the root:
//                    Child: Bubbling Phase
//                    Parent: Bubbling Phase

