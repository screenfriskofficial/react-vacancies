import { createSlice } from "@reduxjs/toolkit";
import { fetchVacancies } from "~entities/vacancy/models/services/fetch-vacancies/fetchVacancies.js";

const initialState = {
  vacancies: undefined,
  isLoading: false,
  error: undefined,
};

export const vacancySlice = createSlice({
  name: "vacancies",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchVacancies.pending, (state) => {
      state.vacancies = undefined;
      state.isLoading = true;
    });
    builder.addCase(fetchVacancies.fulfilled, (state, actions) => {
      state.vacancies = actions.payload.results.vacancies;
      state.error = undefined;
      state.isLoading = false;
    });
    builder.addCase(fetchVacancies.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });
  },
});

export const { actions: vacancyActions } = vacancySlice;
export const { reducer: vacancyReducer } = vacancySlice;
