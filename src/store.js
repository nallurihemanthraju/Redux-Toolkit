import { configureStore } from "@reduxjs/toolkit";
import postReducer from "./action";

export const store = configureStore({
  reducer: {
    posts: postReducer,
  },
});
