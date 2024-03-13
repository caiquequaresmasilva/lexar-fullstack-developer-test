import { configureStore } from "@reduxjs/toolkit";
import { filterReducer } from "./filterSlice";
import { modalReducer } from "./modalSlice";
import { productApiSlice } from "./api/productApiSlice";
import { userApiSlice } from "./api/userApiSlice";
import { authReducer } from "./authSlice";

export const store = configureStore({
  reducer: {
    filter: filterReducer,
    modal: modalReducer,
    auth: authReducer,
    [productApiSlice.reducerPath]: productApiSlice.reducer,
    [userApiSlice.reducerPath]: userApiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(productApiSlice.middleware)
      .concat(userApiSlice.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
