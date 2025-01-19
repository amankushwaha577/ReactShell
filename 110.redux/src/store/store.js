// src/store/index.js
import { configureStore } from '@reduxjs/toolkit';
import awardReducer from './awards/awardReducer';
 
const store = configureStore({ 
  reducer: {
    award: awardReducer,
  },
});

export default store;

/*
1. configureStore of Redux 🏢
-----------------------------
A helper function from "Redux Toolkit" that simplifies the process of creating a store. 

  Creates the Store:
  ------------------
  1. configureStore takes an object. This object contains reducer key.
  2. This reducer object contains all reducers.
  3. "award: awardReducer" -> means the award slice of the state is managed by awardReducer.
*/

/*
2. Principles of Redux 📜
----------------------

| **Principle**                      | **Explanation**                                                                                   |
|------------------------------------|---------------------------------------------------------------------------------------------------|
| **Single Source of Truth**         | 📦 All application state is stored in a single object called the **store**.                      |
|                                    | 🔍 This ensures centralized state management, making debugging and tracking easier.              |
|                                    |                                                                                                  |
| **State is Read-Only**             | 🛡️ State can only be changed by **dispatching actions**.                                         |
|                                    | 📝 Actions are plain JavaScript objects describing "what happened" (e.g., `{ type: "ACTION" }`). |
|                                    | 🔄 This ensures predictability in the app's data flow and prevents accidental state mutations.   |
|                                    |                                                                                                  |
|Changes are Made with Pure Functions| ⚙️ State updates are handled by **reducers**, which are **pure functions**.                      |
|                                    | ✅ Reducers take the current state and an action as inputs, returning a new state.               |
|                                    | ❌ Reducers must not mutate the existing state or perform side effects like API calls.           |

*/


/*
Redux vs Flux Comparison Table 📊
------------------------------------

| **Aspect**             | **Flux**                                                                           | **Redux**                                                                         |
|------------------------|------------------------------------------------------------------------------------|----------------------------------------------------------------------------------|
| **Architecture**       | ⚙️ An architecture pattern for managing state in React.                            | 📚 A state management library specifically for React.                            |
| **Data Flow**          | ➡️ Implements unidirectional data flow with multiple Stores for managing state.    | ➡️ Implements unidirectional data flow with a single Store for centralized state.|
| **State Management**   | 🏢 State is divided among multiple Stores, each responsible for specific parts.     | 🏢 Centralized state in a single Store, simplifying debugging and management.    |
| **Logic Handling**     | 🧠 Stores handle both state and logic to update it based on actions.                | 🧠 Reducers (pure functions) take current state and actions to produce new state.|
| **Actions**            | 📩 Actions are dispatched to all Stores, and each decides whether to handle them.   | 📩 Actions are plain objects processed by Reducers in a centralized pipeline.    |
| **Dispatcher**         | 📦 Central Dispatcher to distribute actions to Stores.                             | ❌ No Dispatcher; actions flow directly through the Store using middleware.      |
| **Debugging**          | 🐛 Debugging is harder due to multiple Stores and complex flows.                    | 🐛 Easier debugging with tools like Redux DevTools and the single source of truth.|
| **Middleware Support** | 🧩 Middleware is less common and not standardized.                                  | 🧩 Strong middleware support (e.g., Redux Thunk, Redux Saga) for async logic.    |
| **Learning Curve**     | 🚀 Steeper learning curve due to concepts like Dispatcher and multiple Stores.      | 🚀 Easier to learn with single Store and Reducer-based architecture.             |
| **Community**          | 🌐 Designed by Facebook, but less popular compared to Redux.                        | 🌐 Larger ecosystem with extensive community support and third-party tools.      |

*/


/*
Simple Process To Setup Redux  :
---------------------------------
---------------------------------

1. Install Dependencies: npm install @reduxjs/toolkit react-redux
    @reduxjs/toolkit: Simplifies Redux setup and usage.
    react-redux: Provides bindings for integrating Redux with React.

2. Create a Redux Store
-------------------------
    Create a folder redux in your src directory (e.g., src/redux).
    Add this file, store.js:

    import { configureStore } from '@reduxjs/toolkit';

    const store = configureStore({
      reducer: {}, // Add reducers here later
    });

    export default store;

3. Create Reducers :
----------------------------
    Reducers define how the state changes in response to actions.
    Create a folder reducers inside redux.
    Create individual reducers, e.g., awardReducer.js:

4. Add Reducers to the Store:
------------------------------
    import awardReducer from './counter/awardReducer';

    const store = configureStore({
      reducer: {
        counter: awardReducer,
      },
    });

    export default store;

5. Define Actions:
--------------------------------
Actions are plain objects that describe what happened.

Create an actions folder in redux. Add a file, e.g., awardAction.js
export const increment = () => ({ type: 'INCREMENT' });
export const decrement = () => ({ type: 'DECREMENT' });
export const reset = () => ({ type: 'RESET' });


In our project :
 dispatch({  type: ACTION1,  payload: updatedValue  });
           |                                        |
           <---------------------------------------->
                    This is Action object

Not this : export const ACTION3 = "ACTION3";
Its just a simplicity,
whenever i need to disptach anywhere in project, may be i require payload dynamically so better to have separate type string.
than there will be easy to have type payload separate :{ type: ACTION1,  payload: updatedValue  }

*/