import { combineReducers } from "redux";
import itemsSlice from "./slices/itemsSlice";
import cartSlice from "./slices/cartSlice";

const rootReducer = combineReducers({
  items: itemsSlice,
  cart: cartSlice
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
