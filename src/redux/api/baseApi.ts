import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://backend-for-sports-facility-booking-platform.vercel.app/api/",
  }),
  endpoints: () => ({}),
});