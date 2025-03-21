      function reducer(state, action) {
        if (action.type === "increment") {
          state.count += 1; // ❌ Directly modifying state
          return state;
        }
        return state;
      }
/*
Qu1. What happens if you don’t return a new object in the reducer?
Ans. ❌ React won’t detect changes → No re-render!

     ✅ Instead, return a new object:
         return { ...state, count: state.count + 1 };
*/

/*
Q2. case 'decrement':
    return { state.count = state.count - 1 }; 
    is it true ?
OP: False , reducer is Pure function -> Never modifies state + returns new state with modifications.
    case 'decrement':
    return { ...state, count: state.count - 1 };

*/