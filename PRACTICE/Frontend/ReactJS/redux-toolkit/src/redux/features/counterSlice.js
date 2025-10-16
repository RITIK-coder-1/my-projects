import { createSlice } from "@reduxjs/toolkit";

let countState = Number(localStorage.getItem("count")) || 0;

const counterSlice = createSlice({
  name: "counter",
  initialState: {
    value: countState,
  },
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
    decrementByAmount: (state, action) => {
      state.value -= action.payload;
    },
    reset: (state) => {
      state.value = 0;
    },
  },
});

// export actions (auto generated)
export const {
  increment,
  decrement,
  incrementByAmount,
  decrementByAmount,
  reset,
} = counterSlice.actions;

// expore the reducer to configure store
export default counterSlice.reducer;
