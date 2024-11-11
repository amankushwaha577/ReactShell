function App() {
    // Event handler for parent div click
    const handleParentClick = () => {
        console.log("Parent clicked"); // Logs when the parent div is clicked
    };

    // Event handler for button click
    const handleClick = () => {
        console.log("Button clicked"); // Logs when the button is clicked
    };

    return (
        // Parent div with an onClickCapture event handler for capturing phase
        <div onClickCapture={handleParentClick}>
            {/* Button element with an onClick event handler for bubbling phase */}
            <button onClick={handleClick}>Click me</button>
        </div>
    );
}


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


// In the above example, when you click the button, the "handleClick" for the button will execute first, 
// and then the handleParentClick for the div will execute due to event bubbling.