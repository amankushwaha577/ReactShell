import React, { useState } from 'react';

function ChildToParent() {
  // Parent component state to store the message from the child
  const [message, setMessage] = useState("");

  // Function to handle the data received from the child
  const handleMessageFromChild = (childMessage) => {
    setMessage(childMessage); // Update the parent state with the child's message
  };

  return (
    <div>
      <h1>Parent Component</h1>
      <p>Message from Child: {message}</p>
      
      {/* Pass the function to the child component */}
      <Child sendMessageToParent={handleMessageFromChild} />
    </div>
  );
}

function Child({ sendMessageToParent }) {
  const [childMessage, setChildMessage] = useState("");

  const handleClick = () => {
    sendMessageToParent(childMessage); // Send the message to the parent
  };

  return (
    <div>
      <h2>Child Component</h2>
      <input
        type="text"
        value={childMessage}
        onChange={(e) => { setChildMessage(e.target.value);}} // Update the child message state
        placeholder="Type a message"
      />
      <button onClick={handleClick}>Send Message to Parent</button>
    </div>
  );
}

export default ChildToParent;



/*
 child-to-parent communication using a callback function:
 ---------------------------------------------------------
 
1. Parent passes a function as a prop to the child.
2. Child invokes the function and sends data back to the parent
*/