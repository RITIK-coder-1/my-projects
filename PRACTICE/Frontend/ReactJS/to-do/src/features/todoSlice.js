import { createSlice } from "@reduxjs/toolkit";
const todoSlice = createSlice({
  name: "todos",
  initialState: {
    value: [],
  },
  reducers: {
    add: (state, action) => {
      if (action.payload !== "") {
        state.value.push({
          value: action.payload,
          toBeUpdated: false,
        });
      }
    },
    del: (state, action) => {
      state.value.splice(action.payload, 1);
    },
    update: (state, action) => {
      state.value[action.payload].toBeUpdated =
        !state.value[action.payload].toBeUpdated;
    },
  },
});

export const { add, del, update } = todoSlice.actions;

export default todoSlice.reducer;
