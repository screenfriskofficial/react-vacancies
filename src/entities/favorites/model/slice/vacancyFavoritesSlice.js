import { createSlice } from "@reduxjs/toolkit";
import { fetchFavorites } from "~entities/favorites/model/services/fetchFavorites/fetchFavorites.js";

const initialState = {
  favoriteVacancies: [],
  isLoading: false,
  error: null,
};

export const vacancyFavoritesSlice = createSlice({
  name: "vacancy",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchFavorites.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchFavorites.fulfilled, (state, action) => {
      state.isLoading = false;
      state.favoriteVacancies = action.payload;
    });
    builder.addCase(fetchFavorites.rejected, (state, action) => {
      state.error = action.payload;
      state.isLoading = false;
    });
  },
});

export const { actions: vacancyActions } = vacancyFavoritesSlice;
export const { reducer: vacancyReducer } = vacancyFavoritesSlice;
