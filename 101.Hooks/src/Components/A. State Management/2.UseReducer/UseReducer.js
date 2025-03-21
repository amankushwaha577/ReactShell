import React, { useReducer } from 'react';

function UseReducer() {
  // Step 1 : 
  const initialState = { count: 0, name: 'Aman' };

  // Step 2 : Reducer function that updates the state
  function reducer(state, action) {
    switch (action.type) {
      case 'increment':
        return { ...state, count: state.count + action.payload }; // Spread added to preserve 'name'
      case 'decrement':
        return { ...state, count: state.count - 1 }; // Spread added to preserve 'name'
      default:
        return state;
    }
  }

  // Step 3 : Now use useReducer hook, pass "reducer" and "initialState"
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      UseReducer -
      <p>Count: {state.count}</p>
      <button onClick={() => dispatch({ type: 'increment', payload : 5 })}>Increment By 5</button>
      <button onClick={() => dispatch({ type: 'decrement' })}>Decrement By 1</button>
    </div>
  );
}


export default UseReducer

/*
Introduction -
----------------------------
A. The useReducer() hook is an alternative to useState. 
B. It's for managing more complex state logic using reducer function.
C. It follows the Redux-like pattern (state → action → newState).


Syntax -
-------------------------------
const [state, dispatch] = useReducer(reducer, initialArg, init(optional function));

Arguments :-
-----------
1. reducer(): reducer function defines how state will change.
              A. Always must take 2 arguments ( state, action ). || state & action can be of any type.
              B. Always must return next state.
              C. Always Must be pure function ( should not have any sideeffect like API call)
                 Ques. Why ? Reducer is pure function.
                 Ans.  i).  State Immutability : Never modifies state + returns new state with modifications.
                       ii). Always same output for same input.
                       iii).No side Effects.

   reducer(state, action) {  }
   i).  State : is current ongoing state
   ii). action: is Plain object generally contains type field with payload.
                like : {type :     , payload:    }

2. initialArg: It's is the initial value of state. But how initial state is calculated depends on init() function.
3. init:  It takes 'initialArg' as argument and returns new initial state after our calculations. 
   i). If init() function is  present  => than init(initialArg) { returned value will be initialState }
   ii).If init() function is't present => initialArg will be initialState.


Return Values : returns array of 2 values [state, dispatch].
---------------
1. state: The current state value.

2. dispatch(): dispatch is a function used to send action to the reducer() function + triggers re-render.
               dispatch(action) | dispatch({type : _______ , payload : _______ })

*/