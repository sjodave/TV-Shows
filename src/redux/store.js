import { configureStore } from "@reduxjs/toolkit";
import reducerReducer from "./reducer";
export const store = configureStore({
  reducer: {
    show: reducerReducer,
  },
});
