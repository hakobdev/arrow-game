import { configureStore } from "@reduxjs/toolkit";
import playgroundReducer from "./slices/playgroundSlice";

export const store = configureStore({
  reducer: { playgroundReducer },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
