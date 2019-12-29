import { Computer, Monitor } from "../../global-types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AppThunk } from "../store";
import FetchFacade from "../../rest/FetchFacade";

interface ItemsState {
  computers: Computer[];
  monitors: Monitor[];
}

const initialState: ItemsState = {
  computers: [],
  monitors: []
};

const items = createSlice({
  name: "items",
  initialState,
  reducers: {
    getItems(state, action: PayloadAction<ItemsState>) {
      state.computers = action.payload.computers;
      state.monitors = action.payload.monitors;
    }
  }
});

export const { getItems } = items.actions;

export const fetchItems = (): AppThunk => dispatch => {
  const computers = FetchFacade.getAllComputers();
  const monitors = FetchFacade.getAllMonitors();
  Promise.all([computers, monitors]).then(response =>
    dispatch(getItems({ computers: response[0], monitors: response[1] }))
  );
};

export default items.reducer;
