function Parent() {
    // Event handler for the Parent component's click event during the capturing phase
    function handleParentClick() {
      console.log("Parent clicked during capturing");
    }
  
    // Event handler for the Child component's click event
    function handleChildClick(event) {
      event.stopPropagation();  // This will only stop bubbling, not capturing
      console.log("Child clicked");
    }
  
    return (
      <div onClickCapture={handleParentClick} >
        <div onClick={handleChildClick} >
          Click me!
        </div>
      </div>
    );
  }
  