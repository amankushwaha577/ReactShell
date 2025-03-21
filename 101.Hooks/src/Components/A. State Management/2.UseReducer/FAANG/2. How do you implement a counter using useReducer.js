import { useReducer } from "react";

const initialState = { count: 0 };

function reducer(state, action) {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    case "reset":
      return initialState;
    default:
      return state;
  }
}

function Counter() {
  const [state, dispatch] = useReducer(reducer, initialState);

  ///// --
  console.log("Render:", state.count);
  ///// --

  return (
    <div>
      <p>Count: {state.count}</p>
      <button onClick={() => dispatch({ type: "increment" })}>+</button>
      <button onClick={() => dispatch({ type: "decrement" })}>-</button>
      <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
    </div>
  );
}

/*
Que. 👉 What happens if you click reset after multiple increments?
Ans. ✅ Output:

        a. Click + three times
           op : "Render: 3"

        b. Click Reset 
           Op : "Render: 0" 
        
        📌 Each dispatch causes a re-render!
*/