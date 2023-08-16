// store.js
import { configureStore } from '@reduxjs/toolkit';
import citiesReducer from './features/citiesSlice';
import usersReducer from './features/usersSlice';
import carsReducer from './features/carsSlice';
import rentalsReducer from './features/rentalsSlice';

const store = configureStore({
  reducer: {
    cities: citiesReducer,
    users: usersReducer,
    cars: carsReducer,
    rentals: rentalsReducer,
  },
});

export default store;
