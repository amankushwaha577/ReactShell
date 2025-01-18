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
  

/*
event.stopPropagation() is a method in JavaScript that stops the propagation of an event in the DOM.

How It Works:
------------
In an event-driven system like React or regular JavaScript, events can bubble up or capture down the DOM tree. When an event is triggered on an element, it can affect both the element that triggered it (the target) and other elements in the hierarchy (parents and ancestors).

a. Bubbling: An event triggered on an element can "bubble" up to its ancestors, causing event listeners on those ancestors to be triggered as well.
b. Capturing: An event can also be captured before it reaches the target element by its ancestors.


event.stopPropagation():
----------------------
When you call event.stopPropagation() on an event, it prevents the event from bubbling up or capturing down the DOM. 
This means that the event will not trigger any other listeners on ancestor elements.
*/