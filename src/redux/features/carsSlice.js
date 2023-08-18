// carsSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Define the initial state
const initialState = {
  cars: [],
  car: null,
  status: 'idle',
  error: null,
};

// Define async thunks
export const fetchCars = createAsyncThunk('cars/fetchCars', async () => {
  const response = await axios.get('/api/v1/cars'); // Adjust the endpoint if needed
  return response.data;
});

export const fetchCarById = createAsyncThunk('cars/fetchCarById', async (carId) => {
  const response = await axios.get(`/api/v1/cars/${carId}`);
  return response.data;
});

export const createCar = createAsyncThunk('cars/createCar', async (carData) => {
  const response = await axios.post('/api/v1/cars', { car: carData });
  return response.data;
});

export const deleteCar = createAsyncThunk('cars/deleteCar', async (carId) => {
  await axios.delete(`/api/v1/cars/${carId}`);
  return carId;
});

// Create the slice
const carsSlice = createSlice({
  name: 'cars',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCars.fulfilled, (state, action) => {
        state.cars = action.payload;
        state.status = 'succeeded';
      })
      .addCase(fetchCarById.fulfilled, (state, action) => {
        state.car = action.payload;
        state.status = 'succeeded';
      })
      .addCase(createCar.fulfilled, (state, action) => {
        state.cars.push(action.payload);
        state.status = 'succeeded';
      })
      .addCase(deleteCar.fulfilled, (state, action) => {
        state.cars = state.cars.filter(car => car.id !== action.payload);
        state.status = 'succeeded';
      })
      .addMatcher(
        (action) => action.type.endsWith('/pending'),
        (state) => {
          state.status = 'loading';
        }
      )
      .addMatcher(
        (action) => action.type.endsWith('/rejected'),
        (state, action) => {
          state.status = 'failed';
          state.error = action.error.message;
        }
      );
  },
});

export default carsSlice.reducer;
