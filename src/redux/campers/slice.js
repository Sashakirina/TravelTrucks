import { createSlice } from '@reduxjs/toolkit';
import { fetchCampers } from './operations.js';

const campersSlice = createSlice({
  name: 'campers',
  initialState: {
    campers: [],
    currentPage: 1,
    isLoading: false,
    error: null,
    totalPages: 1,
    limit: 4,
  },
  reducers: {
    setPage(state, action) {
      state.currentPage = action.payload;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchCampers.pending, state => {
        state.isLoading = true;
      })
      .addCase(fetchCampers.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.campers = [...state.campers, ...action.payload.items];
        state.totalPages = Math.ceil(action.payload.total / state.limit);
      })
      .addCase(fetchCampers.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      });
  },
});

export const campersReducer = campersSlice.reducer;
export const { setPage } = campersSlice.actions;
