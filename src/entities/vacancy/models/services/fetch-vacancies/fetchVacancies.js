import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseUrl = import.meta.env.VITE_BASE_URL;
export const fetchVacancies = createApi({
  reducerPath: "fetchVacancies",
  baseQuery: fetchBaseQuery({
    baseUrl,
  }),
  endpoints: (builder) => ({
    getVacancies: builder.query({
      query: (text = "") => `?text=${text}`,
    }),
  }),
});

export const { useGetVacancies } = fetchVacancies;
