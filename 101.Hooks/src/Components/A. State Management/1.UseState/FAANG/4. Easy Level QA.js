/*
State Initialization & Updates :
-------------------------------
Q1. What happens if we don’t provide an initial state to useState?
An. If you don’t provide an initial state, it will be "undefined".

Q2. Can we set an object or array as the initial state in useState?
An. Yes, useState can hold any data type (string, number, object, array, etc.).

Q3. How do you update state based on the previous state in useState?
An. Use a callback function inside setState to ensure the latest state.
    ✅ Correct Way
        setCount(prevCount => prevCount + 1);

    🚫 Wrong Way
        setCount(count + 1); // May cause stale state issues

    Why?
    React batches updates, and using the old state directly can lead to incorrect results.


Q4. What happens if we update state with the same value in useState?
An. React will not re-render the component because it compares the new and old state and skips unnecessary re-renders.

Q5. Does useState preserve state between re-renders?
An. Yes, useState maintains state between renders, but it resets when the component unmounts.
*/

/*
Handling Objects and Arrays in useState :
-----------------------------------------
Q6. How do we correctly update an object in useState?
An. React does not merge state automatically. Use the spread operator (...).

    ✅ Correct way:
    setUser(prevUser => ({ ...prevUser, age: 26 }));

    🚫 Wrong way (overwrites the object):
    setUser({ age: 26 }); // This removes other properties


Q7. How do we add an item to an array in useState?
Ans. ✅ Correct way: 
     setItems(prevItems => [...prevItems, newItem]);

     🚫 Wrong way (mutating the array):
     items.push(newItem); // ❌ React won't detect this change
     setItems(items);
*/

/*
Q8. Why is useState asynchronous?
An. React batches updates to improve performance, so state updates do not happen immediately.
    If we loop state Update 100 time than 100 re-render is estimated but this is resolved through batching.

Q9. Can we use useState inside loops, conditions, or functions?
Ans. 🚫 No, it must be at the top level of the component.
     Ex : 
        if (someCondition) {
        const [count, setCount] = useState(0); // ❌ Incorrect
        }

    ✅ Correct way:
     const [count, setCount] = useState(0);
        if (someCondition) {
        console.log(count);
        }

Q10. Can we pass an asynchronous function to setState?
Ans. 🚫 No, setState does not accept async functions.
*/

