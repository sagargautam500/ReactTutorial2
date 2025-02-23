import { createSlice } from "@reduxjs/toolkit";

//create slice::for counter
const counterSlice = createSlice({
  name: 'counter',
  initialState: { counterVal: 0 },
  reducers: {
    increment: (state) => {
      state.counterVal++;
    },
    decrement: (state) => {
      state.counterVal--;
    },
    add: (state, action) => {
      state.counterVal += Number(action.payload.num)
    },
    subtract: (state, action) => {
      state.counterVal -= Number(action.payload)
    },
    reset: (state) => {
      state.counterVal = 0;
    },
  }
})
// Extract actions and reducer:
// export const { increment, decrement,add,subtrect,reset } = counterSlice.actions;
export const counterAction = counterSlice.actions;

export default counterSlice;