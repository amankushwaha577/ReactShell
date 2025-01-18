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
    Create individual reducers, e.g., counterReducer.js:

4. Add Reducers to the Store:
------------------------------
    import awardReducer from './counter/awardReducer';

    const store = configureStore({
      reducer: {
        counter: awardReducer,
      },
    });

    export default store;



*/