export default function Bubbling() {
    // Event handler for parent div click (during bubbling phase)
    const handleParentClick = () => {
        console.log("Parent clicked"); // Logs when the parent div is clicked
    };

    // Event handler for button click (during bubbling phase)
    const handleClick = () => {
        console.log("Button clicked"); // Logs when the button is clicked
    };

    return (
        // Parent div with an onClick event handler for bubbling phase
        <div onClick={handleParentClick}>
            {/* Button element with an onClick event handler for bubbling phase */}
            <button onClick={handleClick}>Click me</button>
        </div>
    );
}

// Expected Behavior:
// 1. When clicking the button:
// -----------------------------------------
// The handleClick function logs "Button clicked".
// After the button’s event handler completes, the event bubbles up to the parent div, triggering handleParentClick and logging "Parent clicked".

// 2. When clicking outside the button but within the parent div:
// ------------------------------------------
// Only handleParentClick is triggered, logging "Parent clicked".




// Event propagation refers to the order in which events are handled in the DOM when an event is triggered on an element. 
// There are two main phases of event propagation: capturing and bubbling.


// ┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┳━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┳━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓
// ┃ Feature                       ┃ Bubbling                                                                 ┃ Trickling (Capturing)                                                      ┃
// ┡━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━╇━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━╇━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┩
// ┃ Phase                         ┃ Event propagates from the target element UP to the root                      ┃ Event propagates from the root element DOWN to the target                     ┃
// ┃ Order of Execution            ┃ Handlers executed from child to parent                                      ┃ Handlers executed from parent to child                                        ┃
// ┃ Default Behavior              ┃ This is the default phase in most browsers                                  ┃ Not the default in most browsers (requires `onClickCapture`)                   ┃
// ┃ React Implementation          ┃ Handlers attached with `onClick` (bubbling)                                ┃ Handlers attached with `onClickCapture` (capturing)                           ┃
// ┃ Common Use Cases              ┃ Detecting clicks on nested elements, event delegation                       ┃ Handling events before they reach a specific element (e.g., modal dismissals)  ┃
// ┃ Event Listener                ┃ `onClick`                                                                 ┃ `onClickCapture`                                                             ┃
// ┃ Stop Propagation Behavior     ┃ `event.stopPropagation()` stops the bubbling                                ┃ `event.stopPropagation()` stops the trickling                                ┃
// ┃ Example                       ┃ <div><button onClick={handleClick}>Click me</button></div>                   ┃ <div onClickCapture={handleCapture}><button>Click me</button></div>           ┃
// └━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┴━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┴━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┘

