import { combineReducers } from "redux";
import itemsSlice from "./slices/itemsSlice";
import cartSlice from "./slices/cartSlice";
import drawerSlice from "./slices/drawerSlice";

const rootReducer = combineReducers({
  items: itemsSlice,
  cart: cartSlice,
  drawer: drawerSlice
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
