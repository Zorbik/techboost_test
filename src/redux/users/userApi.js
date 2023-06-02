import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
const API_URL = "https://6390aea30bf398c73a8f8a75.mockapi.io/api";

export const userApi = createApi({
  reducerPath: "userApi",
  tagTypes: ["Users"],

  baseQuery: fetchBaseQuery({
    baseUrl: `${API_URL}/tweets/`,
  }),

  endpoints: (build) => ({
    getUsers: build.query({
      query: (query) => ({
        url: query ? `?p=${query.p}&l=${query.l}` : "",
        method: "GET",
      }),

      providesTags: ["Users"],
    }),

    getUserById: build.query({
      query: (id) => `${id}`,

      providesTags: ["Users"],
    }),

    addUser: build.mutation({
      query: (body) => ({
        url: "",
        method: "POST",
        body,
      }),

      providesTags: ["Users"],
    }),

    updateUser: build.mutation({
      query: ({ body, id }) => ({
        url: `${id}`,
        method: "PATCH",
        body,
      }),

      providesTags: ["Users"],
    }),

    deleteUser: build.mutation({
      query: (id) => ({
        url: `${id}`,
        method: "DELETE",
      }),

      providesTags: ["Users"],
    }),
  }),
});

export const {
  useAddUserMutation,
  useDeleteUserMutation,
  useGetUsersQuery,
  useUpdateUserMutation,
  useGetUserByIdQuery,
} = userApi;
