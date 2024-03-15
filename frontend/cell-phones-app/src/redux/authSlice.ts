import { createSlice } from "@reduxjs/toolkit";
import { userApiSlice } from "./api/userApiSlice";
import { RootState } from "./store";

type AuthState = {
  token: string;
};

const initialState: AuthState = {
  token: "",
};
export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: (state) => {
      state.token = "";
    },
  },
  extraReducers: (builder) => {
    builder.addMatcher(
      userApiSlice.endpoints.login.matchFulfilled,
      (state, { payload }) => {
        state.token = payload.token || "";
      }
    );
    builder.addMatcher(
        userApiSlice.endpoints.createUser.matchFulfilled,
        (state, { payload }) => {
          state.token = payload.token || "";
        }
      );
  },
});

export const { logout } = authSlice.actions;
export const authReducer = authSlice.reducer;
export const selectToken = (state: RootState) => state.auth.token;
