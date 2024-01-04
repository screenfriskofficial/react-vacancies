import { createAsyncThunk } from "@reduxjs/toolkit";
import { $api } from "~shared/api/api.js";

export const fetchVacancies = createAsyncThunk(
  "vacancies/fetchAllVacancies",
  async (data, thunkAPI) => {
    try {
      const response = await $api.get(
        "https://opendata.trudvsem.ru/api/v1/vacancies/region/65",
        {
          params: {
            text: data,
          },
        },
      );
      return thunkAPI.fulfillWithValue(response.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);
