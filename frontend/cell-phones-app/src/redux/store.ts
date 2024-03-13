import { configureStore } from "@reduxjs/toolkit";
import { filterReducer } from "./filterSlice";
import { modalReducer } from "./modalSlice";
import { productApiSlice } from "./api/productApiSlice";

export const store = configureStore({
  reducer: {
    filter: filterReducer,
    modal: modalReducer,
    [productApiSlice.reducerPath]: productApiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productApiSlice.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
