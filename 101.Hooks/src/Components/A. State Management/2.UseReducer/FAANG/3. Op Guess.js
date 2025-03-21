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

function Counter() {
  const [state, dispatch] = useReducer(reducer, initialState);

  console.log("Component render with:", state.count);

  return <button onClick={() => dispatch({ type: "increment" })}>+</button>;
}

/*
Que. 👉 What happens if the button is clicked twice?
Ans. Component render with: 0
     Reducer called with: 0
     Component render with: 1
     Reducer called with: 1
     Component render with: 2

*/