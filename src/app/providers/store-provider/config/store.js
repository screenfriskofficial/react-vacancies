import { configureStore } from "@reduxjs/toolkit";
import { vacancyReducer } from "~entities/vacancy/models/slice/vacancySlice.js";

export const store = configureStore({
  reducer: {
    vacancies: vacancyReducer,
  },
});
