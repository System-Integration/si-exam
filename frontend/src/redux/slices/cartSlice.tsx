import { Computer, Monitor } from "../../interfaces/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CartState {
  [key: string]: Computer[] | Monitor[];
  computers: Computer[];
  monitors: Monitor[];
}

interface Payload {
  id: string;
  content: Computer | Monitor;
  index?: number;
}

const initialState: CartState = {
  computers: [],
  monitors: []
};

const cart = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItemToCart(state, action: PayloadAction<Payload>) {
      state[action.payload.id].push(action.payload.content as any);
    },
    deleteItemFromCart(state, action: PayloadAction<Payload>) {
      state[action.payload.id] = (state[action.payload.id] as any).filter(
        (item: Computer | Monitor, ix: number) => ix !== action.payload.index
      );
    },
    removeAllItems(state) {
      state.computers = [];
      state.monitors = [];
    }
  }
});

export const {
  addItemToCart,
  deleteItemFromCart,
  removeAllItems
} = cart.actions;

export default cart.reducer;
