import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const dogApi = createApi({
  reducerPath: "dogApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://dog.ceo/api/" }),
  endpoints: (builder) => ({
    getBreeds: builder.query<{ message: string[]; status: string }, void>({
      query: () => "breeds/list",
    }),
  }),
});

export const { useGetBreedsQuery } = dogApi;
