// src/store/index.js
import { configureStore } from '@reduxjs/toolkit';
import awardReducer from './awards/awardReducer';

const store = configureStore({
  reducer: {
    award: awardReducer,
  },
});

export default store;
