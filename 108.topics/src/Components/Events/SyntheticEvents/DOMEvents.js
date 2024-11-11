import React, { useEffect, useRef } from 'react';

function App() {
  const buttonRef = useRef(null);

  useEffect(() => {
    const handleDOMClick = (event) => {
      console.log('Native DOM Event:', event); // This logs a native DOM event
      console.log('Event Type:', event.type); // "click"
    };

    // Adding native DOM event listener
    buttonRef.current.addEventListener('click', handleDOMClick);

    // Cleanup function to remove the event listener
    return () => {
        buttonRef.current.removeEventListener('click', handleDOMClick);
    };
  }, []);

  return (
    <div>
      <h1>Native DOM Event Example</h1>
      <button ref={buttonRef}>Click me</button>
    </div>
  );
}

export default App;
