import { createSlice } from "@reduxjs/toolkit";
const todoSlice = createSlice({
  name: "todos",
  initialState: {
    value: [],
  },
  reducers: {
    add: (state, action) => {
      if (action.payload !== "") {
        state.value.push(action.payload);
      }
    },
  },
});

export const { add } = todoSlice.actions;

export default todoSlice.reducer;
