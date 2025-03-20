import { useState } from "react";
import MyComponent from "./MyComponent";

function Parent() {
  const [show, setShow] = useState(true);

  return (
    <div>
      {show && <MyComponent />}
      <button onClick={() => setShow(false)}>Unmount</button>
    </div>
  );
}

function MyComponent() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increase</button>
    </div>
  );
}

/*
Solution 1 - Reset State Using Parent Component :
-------------------------------------------------
Instead of trying to reset the state on unmount, you can control the state from the parent component.

👉 When show is set to false, the component unmounts, removing its state automatically.
*/