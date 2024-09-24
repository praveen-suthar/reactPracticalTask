import { configureStore } from '@reduxjs/toolkit';
import apiReducer from './apiSlice';

// Global store 
const store = configureStore({
  reducer: {
    api: apiReducer,
  },
});

export default store;
