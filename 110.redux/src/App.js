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
        const currentValue1 = getState().award.data1;
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