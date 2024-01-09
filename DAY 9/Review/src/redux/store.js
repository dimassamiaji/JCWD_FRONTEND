import { combineReducers, configureStore } from "@reduxjs/toolkit";
import userSlice from "./slice/userSlice";

const rootReducers = combineReducers({
  auth: userSlice,
});

export const store = configureStore({
  reducer: rootReducers,
});
