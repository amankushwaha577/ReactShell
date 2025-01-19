export const ACTION1 = "ACTION1";
export const ACTION2 = "ACTION2";
export const ACTION3 = "ACTION3";

export const function1 = (data) => {
    return async (dispatch, getState) => {
        // Access the current value of `value1` in the state
        const currentValue1 = getState().award.data1;

        console.log("Current value of value1:", currentValue1); // Optional: log the current value

        // Simulate an async operation, like fetching data or waiting for a delay
        const updatedValue = await new Promise((resolve) => {
            setTimeout(() => {
                resolve(data + " - updated asynchronously");
            }, 1000);
        });

        // Dispatch the action after the async operation
        dispatch({
            type: ACTION1,
            payload: updatedValue,
        });
    };
};


/*
What getState Does:
---------------------

1. getState provides access to the current state of the entire Redux store.
2. It allows you to retrieve and read the current state.

*/



/*
Action File Notes 🎬
---------------------

| **Aspect**                  | **Explanation**                                                                                     |
|-----------------------------|-----------------------------------------------------------------------------------------------------|
| **Definition**              | 🎯 An action is a plain JavaScript object that describes what event or change needs to happen in the state. |
| **Structure**               | 🗂️ Must have a `type` property that specifies the type of action being performed.                   |
|                             | Optionally, it may include additional data (`payload`) related to the action.                       |
| **Purpose**                 | 🛠️ Actions tell the reducer **what to do** but not **how to do it**.                                |
| **Synchronous Actions**     | 🕒 Regular actions dispatched immediately to update the state (e.g., increment, toggle).            |
| **Asynchronous Actions**    | 🔄 Often used with middleware like Redux Thunk or Redux Saga to handle async tasks (e.g., API calls). |
| **Action Creators**         | 📝 Functions that create and return action objects for easier reuse and consistency.                |
| **Reusability**             | 🧩 Centralizing actions in an action file promotes better organization and consistency.             |
| **Example of Basic Action** |                                                                                                     |
|                             | export const INCREMENT = "INCREMENT";                                                              |
|                             | export const incrementAction = () => ({ type: INCREMENT });                                        |
| **Example of Async Action** |                                                                                                     |
|                             | export const fetchData = () => {                                                                   |
|                             |     return async (dispatch) => {                                                                   |
|                             |         const response = await fetch("https://api.example.com");                                   |
|                             |         const data = await response.json();                                                       |
|                             |         dispatch({ type: "FETCH_SUCCESS", payload: data });                                       |
|                             |     };                                                                                            |
|                             | };                                                                                                |
*/
