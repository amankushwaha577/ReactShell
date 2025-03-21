/*
Qu1. When should you use useReducer instead of useState?
Ans. Use useReducer when:
     1. useReducer is better than useState when state transitions depend on previous state.
     2. It groups state updates logically, avoiding multiple useState calls.
     3. It’s more efficient for handling multiple related states.


Qu2. What is a reducer function?
Ans. A reducer function takes the current state and an action, then returns the new state.
     Its a pure function.

        function reducer(state, action) {
                switch (action.type) {
                    
                    return newState;
                }
        }


Qu3. What is an action in useReducer?
Ans. Action is an object that tells the reducer how to update the state.
        dispatch({ type: "increment", payload : 90 }); 

        i). type: A string identifier for the action.
        ii).payload: Optional data for updates.


Qu4. Can useReducer replace Redux?
Ans. ✅ For small to medium apps → Yes, It can be combined with useContext for global state.
                                         useReducer + useContext can replace Redux.
     ❌ For large-scale apps → Redux provides better debugging, middlewares, and dev tools.


Qu5. Does useReducer cause unnecessary re-renders?
Ans. Yes, if state updates frequently, re-renders may impact performance.
     Optimize using React.memo or context selectors.


Qu6. What happens if the reducer function is not pure?
Ans: A non-pure reducer (one that modifies external variables or makes API calls) can cause:
    ❌ Unpredictable behavior.
    ❌ Bugs due to side effects.
    ❌ Difficult debugging.

    ✅ The reducer should always return a new state without modifying the old state.


Qu7. What happens if you update state with the same value in useReducer?
Ans: a. React does not re-render if the new state equals the current state.
     b. But, If you passed a same object (even with the same data), React will force a re-render.


Qu8. What happens if you call dispatch inside the reducer function?
Ans: Infinite loop!
     Calling dispatch inside a reducer triggers another update, causing a loop.


Qu9. Can you use dispatch inside useEffect?
Ans. Yes, ✅ This is useful for async operations!
     but you cannot call dispatch inside the reducer.

        useEffect(() => {
               dispatch({ type: "fetchData", payload: data });
        }, [data]);



Qu10. How do you handle async operations in useReducer?
Ans:  Since reducers must be pure functions, async logic must be handled outside:

        useEffect(() => {
            async function fetchData() {
                const response = await fetch("https://api.example.com/data");
                const result = await response.json();
                dispatch({ type: "setData", payload: result }); --> ✅ Dispatch actions only after the API call completes!
            }
            fetchData();
        }, []);



Que11. What happens if you return "undefined" from the reducer?
Answ : ❌ React throws an error: Reducer must return a new state.
       ✅ Always return a valid state object.

*/