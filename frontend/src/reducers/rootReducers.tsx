import { combineReducers } from "redux";
import counterSlice from "./slices/counterSlice";
import { configureStore } from "@reduxjs/toolkit";

export interface IGlobalState {
  counter: number;
}

const reducers = combineReducers({
  counter: counterSlice
});

export default configureStore({
  reducer: reducers
});
