import { configureStore } from "@reduxjs/toolkit";
import uiSlice from "./slices/uiSlice";
import authSlice from "./slices/authSlice";
import postsSlice from "./slices/postSlice";
const store = configureStore({
  reducer: {
    ui: uiSlice.reducer,
    auth: authSlice.reducer,
    posts: postsSlice.reducer,
  },
});

export default store;
