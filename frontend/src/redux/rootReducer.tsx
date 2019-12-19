import { combineReducers } from "redux";
import itemsSlice from "./slices/itemsSlice";
import cartSlice from "./slices/cartSlice";
import purchaseHistorySlice from "./slices/purchaseHistorySlice";

const rootReducer = combineReducers({
  items: itemsSlice,
  cart: cartSlice,
  purchaseHistory: purchaseHistorySlice
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
