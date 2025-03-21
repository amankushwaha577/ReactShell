// Que. What happens if you don’t return a new object in the reducer?
      function reducer(state, action) {
        if (action.type === "increment") {
          state.count += 1; // ❌ Directly modifying state
          return state;
        }
        return state;
      }
/*
Ans. ❌ React won’t detect changes → No re-render!

     ✅ Instead, return a new object:
         return { ...state, count: state.count + 1 };

*/
