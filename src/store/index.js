import { configureStore } from "@reduxjs/toolkit";
import uiSlice from "./slices/uiSlice";
import authSlice from "./slices/authSlice";
const store = configureStore({
  reducer: {
    ui: uiSlice.reducer,
    auth: authSlice.reducer,
  },
});

export default store;
