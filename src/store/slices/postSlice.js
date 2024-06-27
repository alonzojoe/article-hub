import { createSlice } from "@reduxjs/toolkit";
import { fetchPosts } from "../thunks/postsThunks";

const postsSlice = createSlice({
  name: "posts",
  initialState: {
    items: [],
    isLoading: false,
    error: null,
    comments: [],
    isLoadingComments: false,
  },
  extraReducers(builder) {
    builder
      .addCase(fetchPosts.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchPosts.fulfilled, (state, actions) => {
        console.log("actions", actions.payload);
        state.isLoading = false;
        state.items = actions.payload;
      })
      .addCase(fetchPosts.rejected, (state, actions) => {
        state.isLoading = false;
        state.error = actions?.error?.message || "error";
      });
  },
});

export default postsSlice;
