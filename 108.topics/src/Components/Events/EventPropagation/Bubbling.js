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

// In the above example, when you click the button, the "handleClick" for the button will execute first, 
// and then the handleParentClick for the div will execute due to event bubbling.