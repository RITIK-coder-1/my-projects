import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "todos",
  initialState: {
    value: [],
  },
  reducers: {
    add: (state, action) => {
      if (action.payload.trim() !== "") {
        state.value.push({
          id: nanoid(),
          value: action.payload,
          toBeUpdated: false,
        });
      }
    },
    del: (state, action) => {
      state.value.map((ele) => {
        if (ele.id === action.payload) {
          let index = state.value.indexOf(ele);
          state.value.splice(index, 1);
        }
      });
    },
    update: (state, action) => {
      state.value.map((ele) => {
        if (ele.id === action.payload) {
          ele.toBeUpdated = !ele.toBeUpdated;
        }
      });
    },
  },
});

export const { add, del, update } = todoSlice.actions;

export default todoSlice.reducer;
