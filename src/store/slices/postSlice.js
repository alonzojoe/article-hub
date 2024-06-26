import { createSlice } from "@reduxjs/toolkit";
import { fetchPosts, getPost } from "../thunks/postsThunks";

const postsSlice = createSlice({
  name: "posts",
  initialState: {
    items: [],
    isLoading: false,
    error: null,
    post: {},
    postLoader: false,
    postError: null,
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
      })
      .addCase(getPost.pending, (state) => {
        state.postLoader = true;
      })
      .addCase(getPost.fulfilled, (state, actions) => {
        state.postLoader = false;
        state.post = actions.payload;
      })
      .addCase(getPost.rejected, (state, actions) => {
        state.postLoader = false;
        state.postError = state.error = actions?.error?.message || "error";
      });
  },
});

export default postsSlice;
