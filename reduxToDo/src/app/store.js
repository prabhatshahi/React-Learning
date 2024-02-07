import { configureStore } from "@reduxjs/toolkit";
import totdoReducer from "../Features/todo/todoSlice";

export const store = configureStore({
  reducer: totdoReducer,
});
