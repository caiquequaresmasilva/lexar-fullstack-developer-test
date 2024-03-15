import { PayloadAction, createSlice } from "@reduxjs/toolkit";
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
      localStorage.setItem("token", "");
    },
    setToken: (state, action: PayloadAction<string>) => {
      state.token = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addMatcher(
      userApiSlice.endpoints.login.matchFulfilled,
      (state, { payload: { token } }) => {
        state.token = token || "";
        localStorage.setItem("token", token || "");
      }
    );
    builder.addMatcher(
      userApiSlice.endpoints.createUser.matchFulfilled,
      (state, { payload: { token } }) => {
        state.token = token || "";
        localStorage.setItem("token", token || "");
      }
    );
  },
});

export const { logout, setToken } = authSlice.actions;
export const authReducer = authSlice.reducer;
export const selectToken = (state: RootState) => state.auth.token;
