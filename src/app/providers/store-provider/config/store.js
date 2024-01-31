import { configureStore } from "@reduxjs/toolkit";
import { vacanciesAPI } from "~entities/vacancy/model/services/vacanciesAPI/vacanciesAPI.js";
import { setupListeners } from "@reduxjs/toolkit/query";
import { vacancyReducer } from "~entities/favorites/model/slice/vacancyFavoritesSlice.js";

export const store = configureStore({
  reducer: {
    [vacanciesAPI.reducerPath]: vacanciesAPI.reducer,
    favorites: vacancyReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(vacanciesAPI.middleware),
});

setupListeners(store.dispatch);
