function App() {
  // Event handler for parent div click (during capturing phase)
  const handleParentClick = () => {
      console.log("Parent clicked during capturing"); // Logs when the parent div captures the event
  };

  // Event handler for button click (during capturing phase)
  const handleClick = () => {
      console.log("Button clicked during capturing"); // Logs when the button captures the event
  };

  return (
      // Parent div with an onClickCapture event handler for capturing phase
      <div onClickCapture={handleParentClick}>
          {/* Button element with an onClickCapture event handler for capturing phase */}
          <button onClickCapture={handleClick}>Click me</button>
      </div>
  );
}

// Expected Behavior:

// 1. When clicking the button:
// --------------------------
// First, handleParentClick on the parent div is triggered in the capturing phase, logging "Parent clicked during capturing".
// Then, handleClick on the button is triggered in the capturing phase, logging "Button clicked during capturing".

// 2. When clicking outside the button but within the parent div:
// ---------------------------
// Only handleParentClick on the parent div is triggered in the capturing phase, logging "Parent clicked during capturing".




// Note : when you put onClickCapture on root than thing work as capturing