import React, { useReducer } from 'react';

function UseReducer() {
  const initialState = { count: 0 };

  // Reducer function that updates the count
  function reducer(state, action) {
    switch (action.type) {
      case 'increment':
        return { count: state.count + 1 };
      case 'decrement':
        return { count: state.count - 1 };
      default:
        return state;
    }
  }

  // useReducer hook
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <p>Count: {state.count}</p>
      <button onClick={() => dispatch({ type: 'increment' })}>Increment</button>
      <button onClick={() => dispatch({ type: 'decrement' })}>Decrement</button>
    </div>
  );
}


export default UseReducer


// When -
// ----------------------------
// The useReducer hook in React is an alternative to useState for managing more complex state logic.
// It is typically used when the state depends on multiple values or actions, or when you need to perform more sophisticated state updates.


// Syntax -
// -------------------------------
// const [state, dispatch] = useReducer(reducer, initialState);
// 1. reducer: A function that takes the current state and an action, then returns a new state. It determines how the state should change based on the action type.
// 2. initialState: The initial state value for the reducer.
// 3. state: The current state value.
// 4. dispatch: A function used to send actions to the reducer.


// Reducer Function -
// -------------------------------------
// The reducer function is where you define how state should change in response to different actions. It takes two arguments:
// 1. state: The current state.
// 2. action: An object {type : xyz , payload : xyz } that typically contains a type field and other necessary data for the state update.

