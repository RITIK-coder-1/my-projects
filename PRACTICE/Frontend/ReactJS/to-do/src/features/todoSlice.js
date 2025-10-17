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
    del: (state, action) => {
      state.value.splice(action.payload, 1);
    },
  },
});

export const { add, del } = todoSlice.actions;

export default todoSlice.reducer;
