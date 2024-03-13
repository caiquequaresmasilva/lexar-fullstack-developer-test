import { createSlice } from "@reduxjs/toolkit";
import { userApiSlice } from "./api/userApiSlice";

type AuthState = {
  token: string;
};

const initialState: AuthState = {
  token: "",
};
export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addMatcher(
      userApiSlice.endpoints.login.matchFulfilled,
      (state, { payload }) => {
        state.token = payload.token || "";
      }
    );
  },
});

export const authReducer = authSlice.reducer;
