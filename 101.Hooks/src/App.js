import { useReducer } from "react";

const initialState = { count: 0 };

function reducer(state, action) {
  console.log("Reducer called with:", state.count);
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    default:
      return state;
  }
}

export default function Counter() {
  const [state, dispatch] = useReducer(reducer, initialState);

  console.log("Component render with:", state.count);

  return <button onClick={() => dispatch({ type: "increment" })}>+</button>;
}