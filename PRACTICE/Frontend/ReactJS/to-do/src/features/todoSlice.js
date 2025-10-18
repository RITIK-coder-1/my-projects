import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "@reduxjs/toolkit";

const savedTodos = JSON.parse(localStorage.getItem("todos")) || [];

const todoSlice = createSlice({
  name: "todos",
  initialState: {
    value: savedTodos,
  },
  reducers: {
    add: (state, action) => {
      let todoID = nanoid();
      state.value.push({
        id: todoID,
        value: action.payload,
        toBeUpdated: false,
      });
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
    saveUpdate: (state, action) => {
      state.value.map((ele) => {
        if (ele.id === action.payload.id) {
          ele.value = action.payload.newText;
        }
      });
    },
  },
});

export const { add, del, update, saveUpdate } = todoSlice.actions;

export default todoSlice.reducer;
