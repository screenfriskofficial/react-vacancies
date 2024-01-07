import { configureStore } from "@reduxjs/toolkit";
import { vacanciesAPI } from "~entities/vacancy/model/services/vacanciesAPI/vacanciesAPI.js";
import { setupListeners } from "@reduxjs/toolkit/query";

export const store = configureStore({
  reducer: {
    [vacanciesAPI.reducerPath]: vacanciesAPI.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(vacanciesAPI.middleware),
});

setupListeners(store.dispatch);
