import { ACTION1 } from "./awardAction";

const initialState = {
  data1: "data 1",
  data2: "data 2",
  data3: "data 3",
};
const awardReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTION1:
      return {
        ...state,
        data1: action.payload,
      };
    case ACTION1:
      return {
        ...state,
        data1: "Data 2 Changed",
      };
    default:
      return state;
  }
};
export default awardReducer;


/*
Reducer Function Notes 🛠️
-------------------------

| **Aspect**                  | **Explanation**                                                                                           |
|-----------------------------|-----------------------------------------------------------------------------------------------------------|
| **Definition**              | 📝 A reducer is a **pure function** in Redux that specifies how the state should change in response to an action. |
| **Parameters**              | 🗂️ It takes two arguments:                                                                               |
|                             | 1️⃣ `state`: The current state of the application.                                                       |
|                             | 2️⃣ `action`: An object that describes what happened (must have a `type` property).                      |
| **Pure Function**           | 🔄 Reducers must not mutate the state. Instead, they return a new state object.                          |
|                             | ❌ No API calls, random values, or direct DOM manipulations inside reducers.                             |
| **Return Value**            | ✅ Always return the updated state.                                                                      |
|                             | If no changes are needed, return the original state to avoid unnecessary re-renders.                    |
| **Combining Reducers**      | 🧩 For large apps, you can split reducers by feature or functionality and combine them using `combineReducers`. |
| **Example**                 |                                                                                                           |
|                             | const initialState = { counter: 0 };                                                                     |
|                             | const counterReducer = (state = initialState, action) => {                                               |
|                             |     switch (action.type) {                                                                               |
|                             |         case "INCREMENT":                                                                                |
|                             |             return { ...state, counter: state.counter + 1 };                                             |
|                             |         case "DECREMENT":                                                                                |
|                             |             return { ...state, counter: state.counter - 1 };                                             |
|                             |         default:                                                                                        |
|                             |             return state;                                                                               |
|                             |     }                                                                                                   |
|                             | };                                                                                                      |
*/
