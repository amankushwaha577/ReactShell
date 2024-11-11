function App() {
    // Event handler for button click
    const handleClick = () => {
      console.log('Button clicked'); // Logs when the button is clicked
    };
  
    // Event handler for parent div click
    const handleParentClick = () => {
      console.log('Parent clicked'); // Logs when the parent div is clicked
    };
  
    return (
      // Parent div with an onClickCapture event handler for capturing phase
      <div onClickCapture={handleParentClick}>
        {/* Button element with an onClick event handler for bubbling phase */}
        <button onClick={handleClick}>
          Click me
        </button>
      </div>
    );
  }


// So, when you click the button:

// The event is first captured by the div because of the onClickCapture handler, and handleParentClick is executed.
// Then, after the event is passed through the capturing phase, the event reaches the button, and the handleClick is executed due to event bubbling.