import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseUrl = import.meta.env.VITE_BASE_URL;
export const vacanciesAPI = createApi({
  reducerPath: "vacanciesAPI",
  baseQuery: fetchBaseQuery({
    baseUrl,
  }),
  endpoints: (builder) => ({
    getVacanciesByArgs: builder.query({
      query(arg) {
        const { searchQuery, currentPage, pageSize } = arg;
        return `/region/65?text=${searchQuery}&offset=${currentPage}&limit=${pageSize}`;
      },
    }),
    getAllVacancies: builder.query({
      query() {
        return `/region/65`;
      },
    }),
  }),
});

export const { useGetVacancies } = vacanciesAPI;
