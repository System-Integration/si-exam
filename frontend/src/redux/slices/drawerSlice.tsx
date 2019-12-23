import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface Answers {
  [key: string]: number;
  answer1: number;
  answer2: number;
  answer3: number;
  answer4: number;
  answer5: number;
}

interface DrawerState {
  toggle: boolean;
  answers: Answers;
}

interface Payload {
  id: string;
  content: number;
}
const initialState: DrawerState = {
  toggle: false,
  answers: {
    answer1: 0,
    answer2: 0,
    answer3: 0,
    answer4: 0,
    answer5: 0
  }
};

const drawer = createSlice({
  name: "drawer",
  initialState,
  reducers: {
    toggleDrawerOn(state) {
      state.toggle = true;
    },
    toggleDrawerOff(state) {
      state.toggle = false;
    },
    changeAnswer(state, action: PayloadAction<Payload>) {
      state.answers[action.payload.id] = action.payload.content;
    }
  }
});

export const { toggleDrawerOn, toggleDrawerOff, changeAnswer } = drawer.actions;

export default drawer.reducer;
