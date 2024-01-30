import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  favoriteVacancies: [],
  isLoading: true,
};

export const vacancyFavoritesSlice = createSlice({
  name: "vacancy",
  initialState,
  reducers: {
    getVacancies: (state, action) => {
      state.favoriteVacancies = action.payload;
    },
    setIsLoading: (state, action) => {
      state.isLoading = action.payload;
    },
  },
});

export const { actions: vacancyActions } = vacancyFavoritesSlice;
export const { reducer: vacancyReducer } = vacancyFavoritesSlice;
