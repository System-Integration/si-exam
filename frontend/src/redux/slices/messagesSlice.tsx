import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: string[] = window.sessionStorage.getItem("history")
  ? JSON.parse(window.sessionStorage.getItem("history")!)
  : [];

const messages = createSlice({
  name: "messages",
  initialState,
  reducers: {
    addMessage(state, action: PayloadAction<string>) {
      const currentSessionState = [...state, action.payload];
      window.sessionStorage.setItem(
        "history",
        JSON.stringify(currentSessionState)
      );
      state.push(action.payload);
    }
  }
});

export const { addMessage } = messages.actions;

export default messages.reducer;
