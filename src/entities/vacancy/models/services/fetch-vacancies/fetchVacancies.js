import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseUrl = import.meta.env.VITE_BASE_URL;
export const fetchVacancies = createApi({
  reducerPath: "fetchVacancies",
  baseQuery: fetchBaseQuery({
    baseUrl,
  }),
  endpoints: (builder) => ({
    getVacancies: builder.query({
      query: (arg) => {
        const { searchQuery, currentPage, pageSize } = arg;
        return `/region/65?text=${searchQuery}&offset=${currentPage}&limit=${pageSize}`;
      },
    }),
  }),
});

export const { useGetVacancies } = fetchVacancies;
