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
configureStore : A helper function from "Redux Toolkit" that simplifies the process of creating a store. 

Creates the Store:
--------------------------
1. configureStore takes an object. This object contains reducer key.
2. This reducer object contains all reducers.
3. "award: awardReducer" -> means the award slice of the state is managed by awardReducer.

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