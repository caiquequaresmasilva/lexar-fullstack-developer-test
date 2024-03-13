import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { ENVS } from "../../envs";

export const userApiSlice = createApi({
  reducerPath: "userApi",
  baseQuery: fetchBaseQuery({
    baseUrl: ENVS["USER_API"],
  }),
  endpoints: (builder) => ({
    login: builder.mutation<TokenResponse, LoginRequest>({
      query: (login) => ({
        url: "/user/login",
        method: "POST",
        body: login,
      }),
    }),
    createUser: builder.mutation<TokenResponse, CreateUserRequest>({
      query: (user) => ({
        url: "/user",
        method: "POST",
        body: user,
      }),
    }),
  }),
});

export const { useCreateUserMutation, useLoginMutation } = userApiSlice;
