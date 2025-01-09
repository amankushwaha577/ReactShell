import React, { useState } from "react";

const UseState = () => {
  const [x, setX] = useState("Aman");

  console.log(x); 
  // 1. state initialization in React with useState() is synchronous.
  // Immediate OP: ['Aman', ƒ]

  // 2. but state updates are asynchronous. it does't reflects immediately.
  //    It can only be catch by sideeffect hook useEffect() / useLayoutEffect().

  return (
    <>
      <div>{x}</div>
      <button onClick={() => setX((prev) => prev + " Kushwaha")}>Button</button>
      {/* 3. Functional Updates: Use functional updates (prevState => ...) for changes based on previous state. */}
      {/* 4. Re-renders: Every state change triggers a re-render of the component. */}
    </>
  );
};

export default UseState;

// Definition : Hooks are functions that allows us to work with state and lifecycle methods.
// ----------------------------------------------------------------------------------------

// UseState() : This Hook allows us to manage and Hold state.
// A. Takes an initial value as an argument and Returns array containing 2 values : state & function to change state.
// B. State Setter Function is Used to update state.
//    state can't be update directly. If we do x ="Aman Kushwaha"  state will change but it will not trigger re-render. So UI will not update.

