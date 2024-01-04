import { configureStore } from "@reduxjs/toolkit";
import { fetchVacancies } from "~entities/vacancy/models/services/fetch-vacancies/fetchVacancies.js";
import { setupListeners } from "@reduxjs/toolkit/query";

export const store = configureStore({
  reducer: {
    [fetchVacancies.reducerPath]: fetchVacancies.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(fetchVacancies.middleware),
});

setupListeners(store.dispatch);
