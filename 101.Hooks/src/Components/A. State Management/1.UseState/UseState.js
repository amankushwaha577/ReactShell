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
    </>
  );
};

export default UseState;

/*
Definition : Hooks are functions that allows us to work with state and lifecycle methods.
----------------------------------------------------------------------------------------

UseState() : This Hook allows us to manage and Hold state.
A. Takes an initial value as an argument and Returns array containing 2 values :
   [ state , function to change state ].

B. State Setter Function is Used to update state.
   a). state can't be update directly. 
       If we do x ="Aman Kushwaha"  state will change but it will not trigger re-render. So UI will not update.

   b). Re-renders: Every state change triggers a re-render of the component.

*/

/*
🔥 Bonus: Scenario-Based Questions
1. Why does updating state inside a loop not work as expected?
2. What is the difference between using useState in local storage vs. normal state?
3. Can we pass an asynchronous function to setState? Why or why not?
4. How do you reset state when a component unmounts?
5. How do you debug useState issues effectively?
*/
