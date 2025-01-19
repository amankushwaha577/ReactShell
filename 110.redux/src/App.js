import logo from "./logo.svg";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { function1, ACTION1 } from "./store/awards/awardAction";

function App() {
  const { data1 } = useSelector((state) => state.award);
  const dispatch = useDispatch();
  const data = 9999999999;
  return (
    <div className="App">
      <h1>Hello</h1>
      <button onClick={() => dispatch(function1(data))}>Button</button>
      {data1}

      <br/>
      <button onClick={() => dispatch({type: ACTION1, payload: "aman"})}>Button</button>
    </div>
  );
}

export default App;

/*
const currentValue1 = getState().award.data1;  => cannot be used anywhere in the project directly.
------------------------------------------- 

1. getState function is primarily used within action creators, 
2. especially when handling asynchronous operations with middleware like Redux Thunk. 
3. It allows you to access the current state of the Redux store at the moment the action is dispatched. 
4. This is particularly useful for making decisions based on the current state or for retrieving data needed for the action's logic.


A. Context Where getState Is Available :
--------------------------------------------
Inside Thunk Actions: getState is injected by the Redux Thunk middleware into actions you define like this:

Thunk -
export const someAsyncAction = () => {
    return (dispatch, getState) => {
        const currentValue1 = getState().award.data1;     || award is slice we define in configStore()
        console.log(currentValue1);
    };
};


B. Why It Cannot Be Used Globally :
-----------------------------------
getState is a function provided by the Redux store instance. It cannot be called globally unless:
You import the store directly (not recommended as it breaks modularity).

import store from './redux/store';
const currentValue1 = store.getState().award.data1;

directly importing the store is considered anti-pattern because it couples components or modules tightly to the store.


C. Best Practices for Accessing State:
---------------------------------------
Use getState inside Redux Thunk or middleware for state-dependent asynchronous actions.
Use useSelector in React components to access the Redux state

import { useSelector } from 'react-redux';

const currentValue1 = useSelector((state) => state.award.data1);
console.log(currentValue1);


*/



/*
useSelector:
--------------
1. Purpose: Access the Redux store's state.
2. Usage: It allows components to read data from the Redux store.

const value = useSelector((state) => state.someSlice.someValue);

Explanation:
------------
1. useSelector takes a function as argument. This function gets the entire Redux state as its argument, 
   and selects a part of the state from the store.  and you return the slice you need.
2. It subscribes the component to the Redux store, so the component will re-render whenever the selected state changes.



useDispatch:
----------------
1. Purpose: Dispatch actions to update the Redux store.
2. Usage: It is used to send actions to the Redux store.

const dispatch = useDispatch();
dispatch(someAction());

Explanation:
--------------
1. useDispatch returns the dispatch function from the Redux store.
2. You can then call dispatch() to send an action (either a plain object or a thunk) that will update the Redux state.
*/



/*
dispatch(function1(data))}  vs dispatch({type: ACTION1, payload: "aman"})}> 
how function can  be dispatch but you said we dispatch action object ? 
---------------------------------------------------------------------------------

1. Dispatching an Action Object :
  a. In Redux, typically, we dispatch action objects like this:
        dispatch({ type: ACTION1, payload: "aman" });
  b. Action Object: It's a plain JavaScript object with at least a type property, and optionally other properties like payload.
  c. Direct Dispatch: This action will be sent to the reducer, where it can update the state based on the type.

2. Dispatching a Thunk (Async Function) :
  a. Im dispatching a function (function1), which is an async thunk. Here's the breakdown:
     Thunk: thunk is a function  that returns a function + returning function takes dispatch and getState as arguments. 
     ------ This allows you to perform asynchronous logic or access the current state before dispatching an action.
            export const function1 = (data) => {
                          return async (dispatch, getState) => { 
                                                                .... 
                                                                }
                                               }
  b. Dispatching in the Thunk: After the async operation completes, 
     the function dispatches a normal action object (like { type: ACTION1, payload: updatedValue }).


*/