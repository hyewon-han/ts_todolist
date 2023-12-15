import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { nanoid } from "nanoid";

type Todo = {
  id: string;
  title: string;
  content: string;
  isDone: boolean;
};

const initialState: Todo[] = [
  {
    id: nanoid(),
    title: "initTitle",
    content: "initContent",
    isDone: false,
  },
];

const todos = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<Todo>) => {
      state.push(action.payload);
    },
    deleteTodo: (state, action: PayloadAction<string>) => {
      return state.filter((todo) => todo.id !== action.payload);
    },
    switchTodo: (state, action: PayloadAction<string>) => {
      return state.map((todo) => {
        if (todo.id === action.payload)
          return { ...todo, isDone: !todo.isDone };
        else return todo;
      });
    },
  },
});

export const { addTodo, deleteTodo, switchTodo } = todos.actions;
export default todos.reducer;
