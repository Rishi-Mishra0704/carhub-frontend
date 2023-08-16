// store.js
import { configureStore } from '@reduxjs/toolkit';
import citiesReducer from './features/citiesSlice'; // Update the path

const store = configureStore({
  reducer: {
    cities: citiesReducer,
  },
});

export default store;
