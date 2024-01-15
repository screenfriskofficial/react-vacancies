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
        const { searchQuery, currentPage, pageSize, region = "77" } = arg;

        return `/region/${region}?text=${searchQuery}&offset=${currentPage}&limit=${pageSize}`;
      },
    }),
    getAllVacancies: builder.query({
      query(arg) {
        const { region = "77" } = arg;
        return `/region/${region}`;
      },
    }),
  }),
});

export const { useGetVacancies } = vacanciesAPI;
