import { createSlice, current } from "@reduxjs/toolkit";
import { fetchPosts, getPost, fetchUserPosts } from "../thunks/postsThunks";

const postsSlice = createSlice({
  name: "posts",
  initialState: {
    currentPage: 1,
    items: [],
    isLoading: false,
    error: null,
    post: {},
    lastPage: 0,
    postLoader: false,
    postError: null,
  },
  reducers: {
    setPost(state) {
      state.items = [];
    },
    resetCurrentPage(state) {
      state.currentPage = 1;
    },
    incrementCurrentPage(state) {
      state.currentPage += 1;
    },
    upVote(state, actions) {
      const selectedItem = actions.payload.voteDetails;
      const postIndex = state.items.findIndex(
        (item) => item.id === selectedItem.postId
      );

      if (postIndex !== -1) state.items[postIndex].votes.push(selectedItem);
    },
    downVote(state, actions) {
      const selectedItem = actions.payload.voteDetails;
      const postIndex = state.items.findIndex(
        (item) => item.id === selectedItem.postId
      );

      if (postIndex !== -1)
        state.items[postIndex].votes.filter(
          (vote) => vote.user_id !== selectedItem.user_id
        );
    },
    addComments(state, actions) {
      state.post.comments.unshift(actions.payload.comment);
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchPosts.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchPosts.fulfilled, (state, actions) => {
        console.log("actions", actions.payload);
        state.isLoading = false;
        state.items = [...state.items, ...actions.payload.data];
        state.lastPage = actions.payload.lastPage;
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
      })
      .addCase(fetchUserPosts.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchUserPosts.fulfilled, (state, actions) => {
        state.isLoading = false;
        state.items = actions.payload;
      })
      .addCase(fetchUserPosts.rejected, (state, actions) => {
        state.isLoading = false;
        state.error = actions?.error?.message || "error";
      });
  },
});

export const postActions = postsSlice.actions;
export default postsSlice;
