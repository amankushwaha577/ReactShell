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
      {/* f). Always use the functional form of setState (prevState => newState) if you want changes based on previous state.*/}
    </>
  );
};

export default UseState;

/*
Definition : Hooks are functions that allows us to work with state and lifecycle methods.
----------------------------------------------------------------------------------------

UseState() : This Hook allows us to manage and Hold state.

Points To Remember :
--------------------
A. Takes an initial value as an argument and Returns array containing 2 values :
   i). State   ii). Function to change state

    const [x, setX]   =   useState("Aman");
           |   |                      |
           |    -----> Function        ------------> An Argument
           |         To Change State
           |-->State


B. State Setter Function is Used to update state.
   a). state can't be update directly. 
       Ex : If we do x ="Aman Kushwaha"  
            state will change but it will not trigger re-render. So UI will not update.

   b). Re-renders: Every state change triggers a re-render of the component.

   c). Updating state with the same value doesn’t trigger a re-render.

   d). React updates state asynchronously and does not update the state immediately.
       Updates can be catch through useEffect() | useLayoutEffect() Hook.

   e). React batches state updates.
       Batching means that multiple state updates inside the same event handler(function) are grouped together, 
       and React re-renders the component **only once** after all updates are applied.

   f). Always use the functional form of setState (prevState => newState) if you want changes based on previous state.
       setCount(prevCount => prevCount + 1);
*/
