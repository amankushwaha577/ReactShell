export default function Capturing() {
    // Event handler for the Parent component's click event during the capturing phase
    function handleParentClick(event) {
      event.stopPropagation();
      console.log("Parent clicked during capturing");
    }
  
    // Event handler for the Child component's click event
    function handleChildClick(event) {
      console.log("Child clicked");
    }
  
    return (
      <div onClickCapture={handleParentClick} >
        <div onClickCapture={handleChildClick} >
          Click me!
        </div>
      </div>
    );
  }
  