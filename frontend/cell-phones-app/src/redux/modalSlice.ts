import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RootState } from "./store";

interface ModalState {
  openSearchModal: boolean;
  openFilterModal: boolean;
  openVariantModal: boolean;
  openDeleteModal: boolean;
  variantData: Omit<Product, "id">;
  deleteId: string;
}

const INITIAL_VARIANT: Omit<Product, "id"> = {
  name: "",
  brand: "",
  model: "",
  color: "",
  price: 100,
};

const initialState: ModalState = {
  openSearchModal: false,
  openDeleteModal: false,
  openFilterModal: false,
  openVariantModal: false,
  variantData: INITIAL_VARIANT,
  deleteId: "",
};
export const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    toggleSearchModal: (state) => {
      state.openSearchModal = !state.openSearchModal;
    },
    toggleFilterModal: (state) => {
      state.openFilterModal = !state.openFilterModal;
    },
    toggleDeleteModal: (state, action: PayloadAction<string | undefined>) => {
      state.openDeleteModal = !state.openDeleteModal;
      state.deleteId = action.payload || "";
    },
    toggleVariantModal: (
      state,
      action: PayloadAction<Omit<Product, "id"> | undefined>
    ) => {
      state.openVariantModal = !state.openVariantModal;
      state.variantData = action?.payload || INITIAL_VARIANT;
    },
  },
});

export const {
  toggleDeleteModal,
  toggleFilterModal,
  toggleSearchModal,
  toggleVariantModal,
} = modalSlice.actions;
export const selectOpenSearch = (state: RootState) =>
  state.modal.openSearchModal;

export const selectOpenFilter = (state: RootState) =>
  state.modal.openFilterModal;

export const selectOpenVariant = (state: RootState) => ({
  openVariant: state.modal.openVariantModal,
  variantData: state.modal.variantData,
});

export const selectOpenDelete = (state: RootState) => ({
  openDelete: state.modal.openDeleteModal,
  deleteId: state.modal.deleteId,
});

export const modalReducer = modalSlice.reducer;
