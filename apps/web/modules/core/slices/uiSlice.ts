import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface UIState {
  isBookingModalOpen: boolean;
  isTrackingModalOpen: boolean;
  isRestrictedItemsModalOpen: boolean;
  isAssistedShoppingModalOpen: boolean;
  activeNavTab: string;
}

const initialState: UIState = {
  isBookingModalOpen: false,
  isTrackingModalOpen: false,
  isRestrictedItemsModalOpen: false,
  isAssistedShoppingModalOpen: false,
  activeNavTab: "home",
};

export const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    setBookingModalOpen: (state, action: PayloadAction<boolean>) => {
      state.isBookingModalOpen = action.payload;
    },
    setTrackingModalOpen: (state, action: PayloadAction<boolean>) => {
      state.isTrackingModalOpen = action.payload;
    },
    setRestrictedItemsModalOpen: (state, action: PayloadAction<boolean>) => {
      state.isRestrictedItemsModalOpen = action.payload;
    },
    setAssistedShoppingModalOpen: (state, action: PayloadAction<boolean>) => {
      state.isAssistedShoppingModalOpen = action.payload;
    },
    setActiveNavTab: (state, action: PayloadAction<string>) => {
      state.activeNavTab = action.payload;
    },
  },
});

export const {
  setBookingModalOpen,
  setTrackingModalOpen,
  setRestrictedItemsModalOpen,
  setAssistedShoppingModalOpen,
  setActiveNavTab,
} = uiSlice.actions;
export default uiSlice.reducer;
