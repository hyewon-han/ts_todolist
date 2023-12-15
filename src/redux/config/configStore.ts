import { combineReducers, configureStore } from "@reduxjs/toolkit";
import todosSlice from "../modules/todosSlice";

const rootReducer = combineReducers({
  todosSlice,
});

const store = configureStore({
  reducer: {
    todosSlice,
  },
});

export type RootState = ReturnType<typeof rootReducer>;
export default store;
