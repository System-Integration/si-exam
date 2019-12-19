import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: string[] = [];

const purchaseHistory = createSlice({
  name: "purchaseHistory",
  initialState,
  reducers: {
    addToPurchaseHistory(state, action: PayloadAction<string>) {
      state.push(action.payload);
    }
  }
});

export const { addToPurchaseHistory } = purchaseHistory.actions;

export default purchaseHistory.reducer;
