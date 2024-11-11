export default function Bubbling() {

    function handleParentClick() {
      console.log("Parent clicked");  // Logs only when the parent div is clicked not when child is clicked
    }
  
   
    function handleChildClick(event) {
      event.stopPropagation();  // Prevents the event from bubbling up to the Parent component
      console.log("Child clicked");  // Logs when the child div is clicked
    }
  
    return (
      <div onClick={handleParentClick}>
        {/* Inner div with a click event handler */}
        <div onClick={handleChildClick}>Click me!</div>
      </div>
    );
  }
  