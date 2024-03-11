import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "./store";

interface FilterState {
  params: FilterParams;
}

const INITIAL_PARAMS: FilterParams = {
  name: "",
  brand: "",
  color: "",
  minPrice: 0,
  maxPrice: 0,
};

const initialState: FilterState = {
  params: INITIAL_PARAMS,
};

export const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setFilters: (state, action: PayloadAction<Partial<FilterParams>>) => {
      state.params = { ...state.params, ...action };
    },
    reset: (state) => {
      state.params = INITIAL_PARAMS;
    },
  },
});

export const { setFilters, reset } = filterSlice.actions;
export const selectFilters = (state: RootState) => state.filter.params;
export const filterReducer = filterSlice.reducer;
