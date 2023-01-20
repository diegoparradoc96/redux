import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    id: "1",
    title: "Task 1",
    descripcion: "Task 1 descripcion",
    completed: false,
  },
  {
    id: "2",
    title: "Task 2",
    descripcion: "Task 2 descripcion",
    completed: false,
  },
];

const taskSlice = createSlice({
  name: "task",
  initialState: initialState,
  reducers: {
    addTask: (state, action) => {
      state.push(action.payload);
    },
  },
});

export const { addTask } = taskSlice.actions;
export default taskSlice.reducer;
