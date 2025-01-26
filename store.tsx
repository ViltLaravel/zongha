import { configureStore } from "@reduxjs/toolkit";
import signInSlice from "./app/screens/auth/_redux/sign-in-slice";

export const store = configureStore({
  reducer: {
    signInState: signInSlice,
  },
});

export type AppDispatch = typeof store.dispatch;
export type GetState = typeof store.getState;
export type RootState = ReturnType<typeof store.getState>;
