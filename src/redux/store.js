// src/redux/store.js
import { configureStore } from '@reduxjs/toolkit';
import basketSlice from './basketSlice';
const store = configureStore({
  reducer: {
    basket: basketSlice,
  },
});

export default store;
